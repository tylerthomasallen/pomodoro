import React, { Component } from 'react';
import Timer from './timer';
import Button from './button';
import { SHORT_BREAK, POM_TIMER, POM_TIME, SHORT_BREAK_TIME  } from '../constants';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            displayedTime: '00:00'
        }
        // this.tickingClock = this.tickingClock.bind(this);
        // this.tick = this.tick.bind(this);
        this.convertSecondsToTime = this.convertSecondsToTime.bind(this);
    }

    changeTime = async (name) => {
        const seconds = name === POM_TIMER ? POM_TIME : SHORT_BREAK_TIME;
        if (this.state.seconds !== seconds) {
            await this.setState({seconds});
        }
        
        const displayedTime = this.convertSecondsToTime();
        if (this.state.displayedTime !== displayedTime) {
            await this.setState({displayedTime});
        }
    }

    tickingClock() {
        if (this.state.seconds >= 1) {
            setInterval(this.tick, 1000);
        }
    }

    tick() {
        this.setState({seconds: this.state.seconds - 1});
        const displayedTime = this.convertSecondsToTime();
        this.setState({displayedTime})
    }

    convertSecondsToTime() {
        let minutes = this.state.seconds % 60;
        let seconds = Math.floor(this.state.seconds / 60);

        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        
        return `${minutes}:${seconds}`;
    }

    render() {
        return(
            <div class="container">
                <Button name={POM_TIMER} changeTime={this.changeTime} />
                <Button name={SHORT_BREAK} changeTime={this.changeTime} />
                <Timer time={this.state.displayedTime} />
            </div>
        )
    }
}

export default Container;