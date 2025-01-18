import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 3,
            text: "",
            message: ""
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyboard);
    }
    handleKeyboard = (event) => {
        if (event.key === "Enter") {
            this.sendMessage();
        }
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    multiply = () => {
        const { count } = this.state;
        const multiplier = prompt("write a number please");

        if (multiplier && !isNaN(multiplier)) { 
            this.setState({ count: count * multiplier })
        } else {
            alert(" write a correct number!");
        }
    };

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    };

    sendMessage = () => {
        this.setState({ message: this.state.text, text: "" });
    };



    render() {
        return (
            <div>
                <h1>My Component</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Decrement</button>
                <div>
                    <button onClick={this.multiply}>Multiply</button>
                </div>
                <input
                    value={this.state.text}
                    type="text"
                    onChange={this.handleChange}
                />
                <button onClick={this.sendMessage}>Send</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

export default MyComponent;
