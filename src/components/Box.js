import React,{Component} from 'react';

import Cell from './Cell';

const cellBox = [];

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: cellBox
    }

    if(this.props.container) {
      for (let i = 1; i <= this.props.container; i++) {
        cellBox.push(
          <Cell key={i} id={i} cells={cellBox}/>
        )
        this.props.items.push(i)
      }
    }

  }
  
    render() {
      return (
              <div>Very nice </div>,
            <div> { this.state.cells } </div>
          ) 
    }
  }

  export default Box;