import { useState } from "react";

export default function FunctionComponentState(){
    /**
     * Using the State Hook 
     * To declare our initial state we need to pass the initial state into useState() as an argument 
     * useState() returns [S | undefined, Dispatch<SetStateAction<S | undefined>>];
     */
    const [state, setState] = useState("this is initial state of this component.");


    return(
        <div>
            {state}
            <br/>
            <button onClick={() => setState("now the initial state is updated.")}> Invoke setState </button>
        </div>
    );
}