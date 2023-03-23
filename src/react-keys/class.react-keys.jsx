import React from "react";
import NameList from "./function.react-keys";

export default class ReactKeysClassExample extends React.Component{
    constructor(){
        super();
        this.state ={
            names: ['Prashant', 'Ashim', 'Ujjwol']
        }
    }

    render(){
        return(<NameList names={this.state.names}/>);
    }
}