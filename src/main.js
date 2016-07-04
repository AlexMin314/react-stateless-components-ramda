import R from 'ramda';
import App from './components/app';

const render = App.render(document.getElementById('app'));

let appState = {
  secondsElapsed: 0,
  todos: [
    {id: 1, text: 'Buy milk'},
    {id: 2, text: 'Go running'},
    {id: 3, text: 'Rest'}
  ]
};

const secondsElapsedLens = R.lensProp('secondsElapsed');
const incSecondsElapsed = R.over(secondsElapsedLens, R.inc);

//first render
render(appState);

setInterval(() => {
  appState = incSecondsElapsed(appState);
  render(appState);
}, 1000);
