##[WIP] Compose React stateless functions using Ramda
###Warning! This just an experiment.

###The goal: functionally compose React stateless functions to build new components, like you would do composing functions.

What you need to know before continuing:

- Function Composition
- Currying (or Partial Function Application)

###What is a React stateless function?
Usually you may define a React component as follows:

```javascript
var List = React.createClass({
	render: function() {
		return (<ul>{this.props.children}</ul>);
	}
});
```

Or using the ES6 class syntax:

```javascript
class List extends React.Component {
  render() {
    return (<ul>{this.props.children}</ul>);
  }
}
```

Or __using plain JavaScript functions!__ __Did you know?__

```javascript
var List = function(children) {
  return (<ul>{children}</ul>);
};
```

A quote from the documentation:

> This simplified component API is intended for components that are pure functions of their props. These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods. They are pure functional transforms of their input, with zero boilerplate. However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.
> 
> -- <cite>[https://facebook.github.io/react/docs/reusable-components.html](https://facebook.github.io/react/docs/reusable-components.html)</cite>

__Pretty interesting right?__

A lot of developers seems to be more excited about the Class approach, even if the React documentation recommend (when possible) the pure function pattern:

> In an ideal world, most of your components would be stateless functions because these stateless components can follow a faster code path within the React core. This is the recommended pattern, when possible.
> 
> -- <cite>[https://facebook.github.io/react/docs/reusable-components.html](https://facebook.github.io/react/docs/reusable-components.html)</cite>

I personally prefer the pure function pattern too and experimented with _composing_ stateless components as I would do with _normal functions_. 

Let's start from a very basic example, let's say I want a component to print a list of items, like this:

###Ingredients:

- Garlic
- Chilli
- Olive oil
- Spaghetti

The code:

```javascript
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
```

###To be continued...
