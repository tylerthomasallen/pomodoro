import React, { Component } from 'react';
import Clock from './clock';
import Button from '../button';
import { SHORT_BREAK, POM_TIMER, POM_TIME, SHORT_BREAK_TIME, LONG_BREAK, LONG_BREAK_TIME } from '../../constants';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            displayedTime: '00:00',
            ticking: false
        }

        this.convertSecondsToTime = this.convertSecondsToTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    changeTime = async (name) => {
        await this.stopTimer();
        let seconds;

        if (name === POM_TIMER) {
            seconds = POM_TIME;
        } else if (name === SHORT_BREAK) {
            seconds = SHORT_BREAK_TIME
        } else if (name === LONG_BREAK) {
            seconds = LONG_BREAK_TIME
        }

        if (this.state.seconds !== seconds) {
            await this.setState({ seconds });
        }

        const displayedTime = this.convertSecondsToTime();
        if (this.state.displayedTime !== displayedTime) {
            await this.setState({ displayedTime });
        }
    }

    async startTimer() {
        await this.setState({ ticking: true });
        const myTimer = setInterval(async () => {
            if (this.state.ticking && this.state.seconds >= 1) {
                await this.setState({ seconds: this.state.seconds - 1 });
                const displayedTime = this.convertSecondsToTime();
                await this.setState({ displayedTime })
            } else {
                clearInterval(myTimer);
            }
        }, 1000);


    }

    async stopTimer() {
        await this.setState({ ticking: false })
    }

    convertSecondsToTime() {
        let minutes = Math.floor(this.state.seconds / 60);
        let seconds = this.state.seconds % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        return `${minutes}:${seconds}`;
    }

    render() {
        return (
            <div className="timer">
                <Button name={POM_TIMER} changeTime={this.changeTime} />
                <Button name={SHORT_BREAK} changeTime={this.changeTime} />
                <Button name={LONG_BREAK} changeTime={this.changeTime} />
                <Clock time={this.state.displayedTime} startTimer={this.startTimer} stopTimer={this.stopTimer} />
            </div>
        )
    }
}

export default Timer;