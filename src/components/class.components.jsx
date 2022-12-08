import React from "react";

/**
 * Class Component
 */
export default class ClassComponent extends React.Component {
    //The construtor() is used to get props like in Function Component.
    constructor(props){
        super();
        //This is where our state goes.
        this.state = {
            arr: ['apple', 'banana', 'cat']
        }
    }
    render(){
        return(
            <div>
                Class components are more complex than functional components. 
                It requires to extend from React.Component and create a render function which returns a React element. 
                We can pass data from one class to other class components.
                <br/>
                The class component is also known as a stateful component because they can hold or manage local state.
                <br/>
                Here's the list that is printed out with the data stored on our component's state.
                <ul>
                { this.state.arr.map(item => <li>{item}</li>) }
                </ul>
                <br/>
                Here's the argument that is passed to this component =&gt; {this.props.attribute}.
            </div>
        )
    }
}