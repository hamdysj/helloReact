import React, { Component } from 'react'

class Greet extends Component {

    constructor(){
        super()
        this.state = {
            msg: "Welcome Here"
        }
    }

    changeMsg(){
        this.setState({
            msg: "Hi, Visitor!"
        })
    }

    render() {
        return (
            <div>
                 <h1>Greeting to you {this.state.msg}!</h1>
                 <button onClick={() => this.changeMsg()}>Click Me</button>
            </div>
        );      
    }
}

export default Greet;
