import React, { Component } from "react";

export default class CounterClassBased extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <h1>Counter Class Based</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}