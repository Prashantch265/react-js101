import React from "react";

export default class ComponentLifeCycle extends React.Component {
  constructor(props) {
    super();
    this.state = {name: '', hello: "World"};  
    this.changeState = this.changeState.bind(this)  
  }

  /**
     * mounting phase
     * instance of a component is created and inserted into the DOM.
    * /
    
    /** 
     * @deprecated — componentWillMount()
     */
  componentWillMount() {
    debugger;
    console.log(
      "component is mounting but not rendered. \n updating stat here will not re-render component"
    );
  }

  componentDidMount() {
    debugger;
    console.log(
      "component is mounted successfully and has rendered. \n updating state here will re-render component."
    );
    this.setState({ name: "prashant" });
  }

  render() {
    return (
      <div>
        <h1>ReactJS component's Lifecycle</h1>
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here!</button>
      </div>
    );
  }

  changeState(){
    this.setState({hello:"All!!- Its a great reactjs tutorial."});  
  }

  /**
   * updating phase
   * Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy.
   * The main aim of this phase is to ensure that the component is displaying the latest version of itself.
   */

  /**
   * @deprecated
   * It is invoked when a component receives new props.
   * If we want to update the state in response to prop changes, we should compare this.props and nextProps to perform state transition by using this.setState() method.
   */
  componentWillReceiveProps() {
    debugger;
    console.log("component will receive props");
  }

  /**
   * @deprecated
   * It is invoked just before the component updating occurs.
   * Here, we can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.
   */
  componentWillUpdate() {
    debugger;
    console.log("component will update");
  }

  /**
   * It is invoked immediately after the component updating occurs.
   * In this method, we can put any code inside this which we want to execute once the updating occurs.
   * This method is not invoked for the initial render.
   */
  componentDidUpdate() {
    debugger;
    console.log("component is updated");
  }

  /**
   * unmounting phase
   * It is called when a component instance is destroyed and unmounted from the DOM.
   */

  //invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task
  componentWillUnmount() {
    debugger;
    console.log("component is unmounted");
  }
}
