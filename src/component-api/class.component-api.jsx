import React from "react";
import ReactDOM from 'react-dom';

export default class ComponentApi extends React.Component{
    constructor(){
        super();
        this.state = {
            color: "ghostwhite"
        }

        this.updateState = this.updateState.bind(this);
        this.updateStateManually = this.updateStateManually.bind(this);
        this.findNode = this.findNode.bind(this);
    }

    /**
     * 1. setState()
     * This method is used to update the state of the component. This method does not always replace the state immediately. Instead, it only adds changes to the original state.
     */
    updateState(){
       this.setState({color: "royalblue"}); 
    }
    
    /**
     * 2. forceUpdate()
     * This method allows us to update the component manually.
     */
    updateStateManually(){
        this.forceUpdate();
    }

    /**
     * 3. ReactDOM.findDOMNode()
     * This method allows us to find or access the underlying DOM node.
     */
    findNode(){
        const element = document.getElementById("btn1");
        ReactDOM.findDOMNode(element).style.color = "red";
    }

    render(){
        return(
            <div style={{backgroundColor: this.state.color}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, provident. Optio repellendus tempore culpa architecto, ullam eveniet alias assumenda omnis commodi quidem cupiditate quas fuga provident quos suscipit, ea nesciunt.
                <br/>
                <button onClick={this.updateState}>Set State</button>
                <br/>
                <p>{Math.random()}</p>
                <button onClick={this.updateStateManually}>Force Update</button>
                <br/>
                <button onClick={this.findNode} id="btn1">Change Color</button>
            </div>
        );
    }
}