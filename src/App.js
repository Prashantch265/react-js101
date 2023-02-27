import ComponentApi from './component-api/class.component-api';
import ComponentLifeCycle from './component-lifecycle/component-lifecycle';
import ClassComponent from './components/class.components';
import FunctionalComponent from './components/function.components';
import ClassComponentProps from './props/class-component.props';
import PropsValidation from './props/validation.props';
import { ExampleUseState } from './react-hooks/react-hooks';
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
      <h1>Props Validation</h1>
      <PropsValidation name={'Prashant'} age={21} />
      <h1>React Component API</h1>
      <ComponentApi />
      <h1>Component Lifecycle</h1>
      <ComponentLifeCycle/>
      <h1>React Hooks</h1>
      <ExampleUseState/>
    </div>
  );
}

export default App;
