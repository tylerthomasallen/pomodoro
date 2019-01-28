import React, { Component } from 'react';
import Timer from './timer';
import Button from './button';
import { SHORT_BREAK, POM_TIMER, POM_TIME, SHORT_BREAK_TIME  } from '../constants';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }

        this.changeTime = this.changeTime.bind(this);
        this.tickingClock = this.tickingClock.bind(this);
        this.tick = this.tick.bind(this);
    }

    changeTime(name) {
        const time = name === POM_TIMER ? POM_TIME : SHORT_BREAK_TIME;
        this.setState({time});
    }

    tickingClock() {
        setInterval(this.tick, 1000);
    }

    tick() {


    }

    render() {
        return(
            <div class="container">
                <Button name={POM_TIMER} changeTime={this.changeTime} />
                <Button name={SHORT_BREAK} changeTime={this.changeTime} />
                <Timer time={this.state.time} changeTime/>
            </div>
        )
    }
}

export default Container;