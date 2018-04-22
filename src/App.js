import React, { Component } from 'react';
import './App.css';

import Box from '../src/components/Box';
import Helper from './service/util';

let moves;
const maxMoves = 64;
let jump;

function movement(e) {
  // if left arrow was clicked 
  if (e.keyCode === 37){
    let mario = document.getElementsByClassName('mario')
    let marioid = mario[0].id
    let move = document.getElementById(marioid-1)
    if(move != null){
      if(move.classList.contains('active')){
        move.classList.toggle('active')
      }
      move.innerHTML = document.getElementById(marioid).innerHTML
      document.getElementById(marioid).innerHTML = ""
      document.getElementById(marioid).classList.toggle('mario')
      move.classList.toggle('mario')
      marioid = marioid - 1
    }
    else{
        moves =  moves - 1
    }
    
  }

  // if up arrow was clicked 
  if (e.keyCode === 38){
    let mario = document.getElementsByClassName('mario')
    let marioid = mario[0].id
    let move_up = parseInt(marioid,10) - parseInt(jump,10);
    let move = document.getElementById(move_up)
    if(move != null){
      if(move.classList.contains('active')){
        move.classList.toggle('active')
      }
      move.innerHTML = document.getElementById(marioid).innerHTML
      document.getElementById(marioid).innerHTML = ""
      document.getElementById(marioid).classList.toggle('mario')
      move.classList.toggle('mario')
      marioid = marioid - jump
    }
    else{
        moves = moves - 1
    }
  }
  
  // if the right arrow was used 
  if (e.keyCode ===39){
    let mario = document.getElementsByClassName('mario')
    let marioid = mario[0].id
    let move_right = parseInt(marioid,10) + 1
    let move = document.getElementById(move_right)
    if(move != null){
      if(move.classList.contains('active')){
        move.classList.toggle('active')
      }
      move.innerHTML = document.getElementById(marioid).innerHTML

      document.getElementById(marioid).innerHTML = ""
      document.getElementById(marioid).classList.toggle('mario')
      move.classList.toggle('mario')
      marioid = marioid+1
    }
    else{
        moves = moves - 1
    }
  }
  
  // Handles the down arrow key
  if (e.keyCode === 40){
    let mario = document.getElementsByClassName('mario')
    let marioid = mario[0].id
    let move_up = parseInt(marioid,10) + parseInt(jump,10)
    let move = document.getElementById(move_up)
    if(move != null){
      if(move.classList.contains('active')){
        move.classList.toggle('active')
      }
      move.innerHTML = document.getElementById(marioid).innerHTML
      document.getElementById(marioid).innerHTML = ""
      document.getElementById(marioid).classList.toggle('mario')
      move.classList.toggle('mario')
      marioid = marioid + jump
    }
    else{
        moves = moves - 1
    }
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    let width = prompt("Please enter the board width");
    let height = prompt("Please enter the board height");

    if(height == null || width == null || isNaN(width) === true || isNaN(height) === true){
			height = 10
			width = 10
    }
    
    jump = width;

    this.state = {
      moves: '',
      items: [],
      containerSize: Helper.containerSize(height, width),
      width: width,
      height: height,
    }
  }

  initializePage(width, height) {
    let container = document.getElementById('root')
		container.style.height = 40 * height + "px"
		container.style.width = 40 * width + "px"
		let shuffledArray = Helper.shuffle(this.state.items)
		let truncatedArray = shuffledArray.slice(0,parseInt(this.state.containerSize/3,10))

		// loop through the truncated array and use it to position the mushrooms
		for (let i = 0; i < truncatedArray.length; i++) {
			let mushRoomPosition = document.getElementById(truncatedArray[i])
			mushRoomPosition.innerHTML="<img src='mushroom.png' alt='mario' class='maze-image'/>";
			mushRoomPosition.classList.toggle('active')
		}

		let uniqueData = shuffledArray.filter( (obj) => { 
      return truncatedArray.indexOf(obj) === -1; 
    });


		let item = uniqueData[Math.floor(Math.random() * uniqueData.length)];
		let marioPosition = document.getElementById(item)
		marioPosition.classList.toggle('mario')
		marioPosition.innerHTML="<img src='super-mario.png' alt='mario' class='maze-image'/>";
  }

  onKeyPress(e) {
    if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40){
			if (moves === undefined){
        moves = 0
      }
      
      moves = moves + 1
		}
		movement(e) 
		Helper.confirmComplete(moves, maxMoves)
  }

  componentDidMount() {
    window.addEventListener('load', this.initializePage(this.state.width, this.state.height))
  }
  

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPress);
  }

  render() {
    return (
      <div className="App">
        <Box container={this.state.containerSize} items={this.state.items}/>
      </div>
    )
  }
}

export default App;
