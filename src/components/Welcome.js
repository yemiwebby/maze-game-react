import React, { Component } from 'react'

class WelcomeComponent extends Component {
  render() {
    return (
        <div>
        <h2>Mario Maze Game</h2>
        <p>You need to eat all the mashrooms in 64 steps. By Default maze size is 10 x 10, you can change it by reloading or entering the height and width in prompt.</p>
    </div>
    )
  }
}

export default WelcomeComponent;