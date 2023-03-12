import { useEffect } from 'react';
import { useState } from 'react';

export function ExampleUseState() {
  // we can use the state hook multiple times in a single component
  const [name, setName] = useState();

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Your Name"
        />
        {/* <p>{name}</p> */}
      </form>
      <ExampleUseEffect name={name} />
    </div>
  );
}

function ExampleUseEffect(props) {
  // useEffect runs on inital load too.
  // It's like a dowhile loop where do statement executes first and then loop is executed after condition is checked
  // can be used multiple times same as useState
  const name = props.name;
  let myName = `Hello my name is`;

  /**
   * Accepts call back where we can write side effects of update in dependency
   * Dependency is just a variable whose value or state can get changed and when the change happens the content might need a rerender
   * When we pass a dependency we tell useEffect to observe that variable
   * useEffect can only access state variable inside of it and it's best used for background process
   */
  useEffect(() => {
    myName = `Hello again, my name is ${name}`;
    console.log(myName);
  }, [name]);

  console.log(myName);
  return <p>{myName}</p>;
}