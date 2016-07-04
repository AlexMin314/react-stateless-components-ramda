import React from 'React';
import R from 'ramda';

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
    {children}
  </div>
</div>);

const List = children => (<ul>
  {children}
</ul>);

const ListItem = ({ id, text }) => (<li key={id}>
  <span>{text}</span>
</li>);

const TodoList = R.compose(Container, List, R.map(ListItem), R.prop('todos'));

export default TodoList;
