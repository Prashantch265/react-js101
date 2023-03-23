# React Ref

Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

## When to use Refs

Refs can be used in the following cases:

When we need DOM measurements such as managing focus, text selection, or media playback.
- It is used in triggering imperative animations.
- When integrating with third-party DOM libraries.
- It can also use as in callbacks.

## When to not use Refs

- Its use should be avoided for anything that can be done declaratively. For example, instead of using open() and close() methods on a Dialog component, you need to pass an isOpen prop to it.

- avoid overuse of the Refs.

## How to create Refs

`const referenceObj = React.createRef();`

## How to access Refs

`const node = this.referenceObj.current`

## Callback refs

It gives more control when the refs are set and unset. Instead of creating refs by createRef() method, React allows a way to create refs by passing a callback function to the ref attribute of a component.

`<input type="text" ref={element => this.callRefInput = element} />`

It can be accessed as below:

`this.callRefInput.value`


## Forwarding Ref from one component to another

Ref forwarding is a technique that is used for passing a ref through a component to one of its child components. It can be performed by making use of the `React.forwardRef()` method. This technique is particularly useful with higher-order components and specially used in reusable component libraries.


## useRef()

Same as `createRef()`.


`function useRefExample() {`  
  `const inputRef= useRef(null);`  
  `const onButtonClick = () => {`  
    `inputRef.current.focus();`  
  `};`  
  `return (`  
    `<>`  
      `<input ref={inputRef} type="text" />`  
      `<button onClick={onButtonClick}>Submit</button>`  
    `</>`  
  `);`  
`}`
