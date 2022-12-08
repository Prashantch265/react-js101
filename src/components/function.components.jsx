/**
 * Function Component
 * @param {*} props 
 * @returns 
 */
export default function FunctionalComponent(props){
    return(
        <div>
            Function components are a way to write components that only contain a render method and don't have their own state. 
            They are simply JavaScript functions that may or may not receive data as parameters. 
            We can create a function that takes props(properties) as input and returns what should be rendered.
            <br/>
            Here's the argument that is passed to this component =&gt; {props.argument}.

            <p>But with latest version of React.js we can have state in function component using <b>the State Hook.</b> </p>
        </div>
    );
}