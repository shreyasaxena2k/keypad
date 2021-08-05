import React, { Component } from 'react'

export default class Keypad extends Component {
    constructor() {
        super();
        this.state = {
            expression: "",
        }
    }
    keyPressed = (el) => {
        let inputString = this.state.expression + el.currentTarget.value;
        this.setState({
            expression: inputString
        })
    }
    OpkeyPressed = (el) => {
        let inputString = this.state.expression
        if (inputString !== "" && inputString.length > 0) {
            let lastIndexChar = inputString.charAt(inputString.length - 1)
            if (lastIndexChar !== el.currentTarget.value && lastIndexChar.match(/^([0-9])$/)) {

                inputString = this.state.expression + el.currentTarget.value;
                this.setState({
                    expression: inputString
                })
            }
        }
    }
    resetPressed = () => {
        this.setState({
            expression: ""
        })
    }
    finalAns = () => {
        let inpExp = this.state.expression;
        if (inpExp !== "" && inpExp.length > 0) {
            let lastIndexChar = inpExp.charAt(inpExp.length - 1)
            if (!lastIndexChar.match(/^([0-9])$/)) {
                inpExp = inpExp.substring(0, inpExp.length - 1)
            }
            let finalOutput = eval(inpExp);
            this.setState({ expression: finalOutput.toString() })
        }
    }
    render() {
        return (
            <div className='container'>
                <div>
                    <input  className="inputbox" value={this.state.expression}></input>
                </div>
                <div className='operator'>

                    <button onClick={this.resetPressed} >AC</button>
                    <button onClick={this.OpkeyPressed} value='+'>+</button>
                    <button onClick={this.OpkeyPressed} value='-'>-</button>
                    <button onClick={this.OpkeyPressed} value='*'>*</button>
                    <button onClick={this.OpkeyPressed} value='/'>/</button>
                </div>

                <div className='grid'>
                    <button onClick={this.keyPressed} value='0'>0</button>
                    <button onClick={this.keyPressed} value='1'>1</button>
                    <button onClick={this.keyPressed} value='2'>2</button>
                    <button onClick={this.keyPressed} value='3'>3</button>
                    <button onClick={this.keyPressed} value='4'>4</button>
                    <button onClick={this.keyPressed} value='5'>5</button>
                    <button onClick={this.keyPressed} value='6'>6</button>
                    <button onClick={this.keyPressed} value='7'>7</button>
                    <button onClick={this.keyPressed} value='8'>8</button>
                    <button onClick={this.keyPressed} value='9'>9</button>
                    <button onClick={this.finalAns} >=</button>

                </div>
            </div>

        )
    }
}





