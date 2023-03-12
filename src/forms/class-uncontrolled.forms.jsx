import React from "react";

/**
 * Uncontrolled form example using class component
 */
export class UncontrolledFromClassExaple extends React.Component {
    constructor(){
        super();

        // createRef is a method that initializes an empty object. 
        // It is used to store a reference to a DOM element
        // We can use the creteRef() multiple times to store references to multiple DOM elements. Same as useState()
        this.name = React.createRef();
        this.email = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.name.current.value);
        console.log(this.email.current.value);
    }
    
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" ref={this.name} />
                <br/>
                <input type="email" ref={this.email} />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            </>
        );
    }
    
}