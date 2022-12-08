import React from "react";

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
    }

    render(){
        return(
            <div>
                <h3>Default Props</h3>
                My name is {this.props.name}.
                <h3>Passed Props</h3>
                My favorite color is {this.props.color}.
            </div>
        );
    }
}

//we can also set default props directly on the component constructor for that we dont need to pass props into constructor
ClassComponentProps.defaultProps = {
    name: 'Prashant'
}