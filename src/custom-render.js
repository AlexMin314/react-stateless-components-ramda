var ReactDOM = require('react-dom');
var R = require('ramda');

module.exports = R.curry((element, component, props) => {
  return ReactDOM.render(component(props), element);
});
