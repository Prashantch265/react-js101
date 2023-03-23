import React from 'react';


/**
 * Add Ref to Class components
 */

function CustomInput(props) {  
    let callRefInput = React.createRef();  
     
    function handleClick() {  
      callRefInput.current.focus();  
    }  
     
    return (  
      <div>  
        <h2>Adding Ref to Class Component</h2>  
        <input  
          type="text"  
          ref={callRefInput} />  
        <input  
          type="button"  
          value="Focus input"  
          onClick={handleClick}  
        />  
      </div>  
    );  
  }  
  
export class RefExample1 extends React.Component {  
    constructor(props) {  
      super(props);  
      this.callRefInput = React.createRef();  
    }  
     
    focusRefInput() {  
      this.callRefInput.current.focus();  
    }  
     
    render() {  
      return (  
        <CustomInput ref={this.callRefInput} />  
      );  
    }  
  }



/**
 * Callback refs
 */

export class CallbackRefExample extends React.Component{
    constructor(props) {  
        super(props);  
      
        this.callRefInput = null;  
      
        this.setInputRef = element => {  
          this.callRefInput = element;  
        };  
      
        this.focusRefInput = () => {  
          //Focus the input using the raw DOM API  
          if (this.callRefInput) this.callRefInput.focus();  
        };  
      }  
      
      componentDidMount() {  
        //autofocus of the input on mount  
        this.focusRefInput();  
      }  
      
      render() {  
        return (  
          <div>  
        <h2>Callback Refs Example</h2>  
            <input  
              type="text"  
              ref={this.setInputRef}  
            />  
            <input  
              type="button"  
              value="Focus input text"  
              onClick={this.focusRefInput}  
            />  
          </div>  
        );  
      }  
}


/**
 * Forwarding Ref from one component to another component
 */

const TextInput = React.forwardRef((props, ref) => (  
    <input type="text" placeholder="Hello World" ref={ref} />  
  ));  
    
  const inputRef = React.createRef();  
    
export class CustomTextInput extends React.Component {  
    handleSubmit = e => {  
      e.preventDefault();  
      console.log(inputRef.current.value);  
    };  
    render() {  
      return (  
        <div>  
          <form onSubmit={e => this.handleSubmit(e)}>  
            <TextInput ref={inputRef} />  
            <button>Submit</button>  
          </form>  
        </div>  
      );  
    }  
  }  