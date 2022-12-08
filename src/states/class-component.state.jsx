import React from "react";

export default class ClassComponentState extends React.Component {
    constructor(){
        super();
        //To define a state, we have to first declare a default set of values for defining the component's initial state.
        this.state = {
            initialState: "this is initial state of this component."
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        this.setState({initialState: "now the initial state is updated."});
    }

    render(){
        return(
            <div>
                {this.state.initialState}
                <br/>
                <button onClick={this.changeState} >Invoke setState</button>
            </div>
        );
    }
}