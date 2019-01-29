import React, { Component } from 'react';
import './timer.css';

class Clock extends Component {
    render() {
        const { time, startTimer, stopTimer } = this.props;
        return (
            <div className="timer-container">
                <div className="timer">{time}</div>
                <div className="timer-button" onClick={startTimer}>Play</div>
                <div className="timer-button" onClick={stopTimer}>Pause</div>
            </div>
        )
    }
}

export default Clock;