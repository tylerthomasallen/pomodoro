import React, { Component } from 'react';
import './button.css';

class Button extends Component {

    render() {
        const { name, changeTime } = this.props;
        return (
            <div className="button" onClick={() => changeTime(name)}>
            {name}
            </div>
        )
    }
}

export default Button;