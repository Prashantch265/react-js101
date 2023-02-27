import React from "react";
import FunctionComponentProps from "./function-component.props";

export default class ClassComponentProps extends React.Component{
    /**
     * If you want to use **this.props** inside constructor, you need to pass it in super, 
     * otherwise it’s okay to not pass props to super as we see that irrespective of passing it to super, 
     * this.props is available inside render function.
     * @param {*} props 
     */
    constructor(props){
        super();
        console.log(this.props); // undefined
        console.log(props); // defined

        this.state = {
            count: 0
        };

        //we need to register our onClickHandlder as our function component is child of class component and takes method and state from class component
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        //setState takes an object as an argument
        this.setState({count: this.state.count + 1});
    }

    render(){
        return(
            <div>
                <h3>Default Props</h3>
                My name is {this.props.name}.
                <h3>Passed Props</h3>
                My favorite color is {this.props.color}.
                <h3>This is a Function Component that takes method and state from this component as a Props</h3>
                <FunctionComponentProps method={this.onClickHandler} count={this.state.count}/>
            </div>
        );
    }
}

//we can also set default props directly on the component constructor for that we dont need to pass props into constructor
ClassComponentProps.defaultProps = {
    name: 'Prashant'
}