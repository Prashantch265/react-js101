import React from "react";

/**
 * Controlled form example using class component
 */
export class ControlledFromClassExample extends React.Component {
    constructor(){
        super();
        this.state = {
           userName: "",
           password: "" 
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        console.log(this.state);
    }

    handleChange(event){
        this.setState({userName: event.target.value});
        this.setState({password: event.target.value});
        console.log(this.state.userName);
    }

    render(){
        return(
            <>
            <form>
                <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}></input>
                <br/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <br/>
                <button onClick={this.handleClick}>Submit</button>
            </form>
            </>
        );
    }
}