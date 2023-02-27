import React from "react";
import PropTypes from "prop-types";

/**
 * React Props Validation
 * Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components.
 * React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes.
 */
export default class PropsValidation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            age: this.props.age
        }
    }

    render(){
        return(
            <FunctionComponent user={this.state} />
        );
    }
}

//Works like an interface in TypeScript
PropsValidation.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

function FunctionComponent(props){
    return(
        <div>
            My name is {props.user.name}. I am {props.user.age} years old.
        </div>
    );
}

FunctionComponent.propTypes = {
    user: PropTypes.any,
}