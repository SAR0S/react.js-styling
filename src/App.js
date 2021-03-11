import React, {Component} from 'react';
import styles from './App.module.css';
import TodoListTemplate from './components/TodoList/TodoListTemplate';
import Form from './components/TodoList/components/Form/Form';
import TodoItemList from './components/TodoList/components/TodoItemList/TodoItemList';

class App extends Component {
  render() {
      return (
        <TodoListTemplate form={<Form/>}>
            <TodoItemList />
        </TodoListTemplate>
      );
  }
}

export default App;
