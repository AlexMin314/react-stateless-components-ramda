import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import Timer from './timer';
import TodoList from './todo-list';

const App = appState => (<div className="container">
  <h1>App name</h1>
  <Timer secondsElapsed={appState.secondsElapsed} />
  <TodoList todos={appState.todos} />
</div>);

App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node));

export default App;
