import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            input: ''
        }

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(e) {
        this.setState({input: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const { list, input } = this.state; 
        list.push(input);
        this.setState({list});
        this.setState({input: ''});
        debugger;
    }

    render() {
        debugger;
        return(
            <div className="todo-list">
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.updateInput}></input>
                    <input type="submit" value="Add Task" />
                </form>
                <div className="todo-items">
                    {this.state.list.map((todo, i) => {
                        return <h2 key={i}>{todo}</h2>
                    })}
                </div>
            </div>
        )
    }
}

export default ToDo;