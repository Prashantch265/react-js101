import { createRef } from "react";

/**
 * Uncontrolled form example using function component
 * @returns 
 */
export default function UncontrolledFromFunctionExample(){
    const password = createRef();

    function handleChange(){
        console.log(password.current.value);
    }

    return(
    <>
        <form>
            <input type="password" onChange={handleChange} ref={password}></input>
        </form>
    </>
    );
}