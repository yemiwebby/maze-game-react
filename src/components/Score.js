import React,{Component} from 'react';

class Score extends Component{
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }
  
    render() {
          return (
          <div id="score">
              <div>
                  <p>Score Achived</p>
                  <p id="score_achived">0</p>
              </div>
              <div>
                  <p>Steps Used</p>
                  <p id="no_of_moves">0</p>
              </div>
              <div >
                  <p>Steps Remaining</p>
                  <p id="steps_remaining">0</p>
              </div>
              <div >
                  <p>Mashroom Remaining</p>
                  <p id="mashrooms_remaining">0</p>
              </div>
          </div>
          )
      }
  }

  export default Score;