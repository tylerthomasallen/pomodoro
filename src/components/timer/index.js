import React, { Component } from 'react';

class Timer extends Component {
    render() {
        const { time } = this.props;
        return(
            <div className="timer">{time}</div>
        )
    }
}

export default Timer;