import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 3,
            message: ""
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyboard);
    }

    handleKeyboard = (event) => {
        if (event.key === "Enter") {
            this.handleOperation();
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

    handleOperation = () => {
        const { count } = this.state;

        const input = prompt("write a problem");

        const operator = input?.match(/[\+\-\*\/]/);
        const number = parseFloat(input?.split(operator)[0].trim()); 

        if (operator && !isNaN(number)) {
            let result;

            switch (operator[0]) {
                case "*":
                    result = count * number;
                    break;
                case "/":
                    if (number !== 0) {
                        result = count / number;
                    } else {
                        alert("Нельзя делить на ноль!");
                        return;
                    }
                    break;
                case "+":
                    result = count + number;
                    break;
                case "-":
                    result = count - number;
                    break;
                default:
                    return;
            }

            this.setState({ count: result });
        } else {
            alert("incorrect problem, write like for examplae 5*, 5\, 5+, 5-");
        }
    };

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <div>
                    <button onClick={this.handleOperation}> multiply</button>
                </div>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

export default MyComponent;
