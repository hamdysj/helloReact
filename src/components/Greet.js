import React, { Component } from 'react'

class Greet extends Component {

    constructor(){
        super()
        this.state = {
            msg: "Welcome Here"
        }

        //this.changeMsg = this.changeMsg.bind(this) --- Eventhandling type
    }

    changeMsg = () => {
        this.setState({
            msg: "You are welcome once again"
        })
    }

    render() {
        const {name} = this.props //Destructuring props and state
        const {msg} = this.state
        return (
            <div>
                 <h1>Greetings to you {name}! {msg} </h1>
                <button onClick={this.changeMsg}>Click Me</button>
            </div>
        );      
    }
}

export default Greet;
