import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
      super()
    
      this.state = {
         count: 0
      }
    }

    increment(){
        this.setState(currentState => ({
            count: currentState.count + 1
        }))
    }

    incrementTwo(){
        this.increment()
        this.increment()
    }


  render() {
    return (
        <div>
             <div>Count: {this.state.count}</div>
             <button onClick={() => this.incrementTwo()}>Counter</button>
        </div>
    )
  }
}

export default Counter