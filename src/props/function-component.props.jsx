/**
 * In this component we will be accepting methods and state from our class component
 * @param {*} props 
 * @returns 
 */
export default function FunctionComponentProps(props){
    const showAlert = () => {
        alert("This alert is added to props from inside a component");
    }

    console.log(props);

    return(
        <div>
            <h1>Props in Function Component</h1>
            <button onClick={props.method}>Click Me</button>
            {props.count}

            {/* <button onClick={this.props.showAlert}>Show Alert</button> */}
        </div>
    );
}