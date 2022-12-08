import ClassComponent from './components/class.components';
import FunctionalComponent from './components/function.components';
import ClassComponentProps from './props/class-component.props';
import ClassComponentState from './states/class-component.state';
import FunctionComponentState from './states/function-component.state';

/**
 * Same as app.js in express.
 * We register router and other things like we register middlewares and routes in express.
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <h1>Function Component</h1>
      <FunctionalComponent argument="a" />
      <h1>Class Component</h1>
      <ClassComponent attribute="bold"/>
      <h1>States in Class Component</h1>
      <ClassComponentState />
      <h1>States in Function Component</h1>
      <FunctionComponentState />
      <h1>Props in Class Component</h1>
      <ClassComponentProps color="black" />
      <h1>Props in Function Component</h1>
    </div>
  );
}

export default App;
