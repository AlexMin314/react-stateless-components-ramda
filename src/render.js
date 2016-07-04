const ReactDOM = require('react-dom');
const R = require('ramda');

module.exports = R.curry((element, component, props) => {
  return ReactDOM.render(component(props), element);
});
