import React from 'react';
import { connect } from 'react-redux';
import { sum, sub, mul, div } from '../Actions'
import { compose } from 'redux';

class Addition extends React.Component {
    state = {
        no1: 0,
        no2: 0
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleClick = (e) => {
        const { no1, no2 } = this.state
        let { value } = e.target;
        switch (value) {
            case '+':
                this.props.dispatch(sum(Number(no1), Number(no2)))
                break;
            case '-':
                this.props.dispatch(sub(Number(no1), Number(no2)))
                break;
            case '*':
                this.props.dispatch(mul(Number(no1), Number(no2)))
                break;
            case '/':
                this.props.dispatch(div(Number(no1), Number(no2)))
                break;
            default: console.log("no match")
        }
    }

    render() {
        return (<>
            <input type="text" name="no1" onChange={this.handleChange} />
            <input type="text" name="no2" onChange={this.handleChange} />
            <button onClick={this.handleClick} value="+">+</button>
            <button onClick={this.handleClick} value="-">-</button>
            <button onClick={this.handleClick} value="/">/</button>
            <button onClick={this.handleClick} value="*">*</button>
            <h5>{this.props.addition.ans}</h5>
        </>)
    }
}

const select = store => store;

export default connect(select)(Addition);