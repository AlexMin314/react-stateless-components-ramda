var React = require('react');
var ReactDOM = require('react-dom');
var R = require('ramda');

// Fake some data
var ingredients = [
  { id: 1, name: 'Garlic' },
  { id: 2, name: 'Chilli' },
  { id: 3, name: 'Olive oil' },
  { id: 4, name: 'Spaghetti' }
];

// Stateless components
var RecipeContainer = function(children) {
  return (<div>
    <h3>Ingredients:</h3>
    {children}
  </div>);
};

var List = function(items) {
  return (<ul>{items}</ul>);
};

var ListItem = function(children) {
  return (<li>{children}</li>);
};

// Composing stateless components
var IngredientsList = R.compose(RecipeContainer, List, R.map(ListItem), R.map(R.prop('name')));

// Rendering
ReactDOM.render(IngredientsList(ingredients), document.getElementById('app'));
