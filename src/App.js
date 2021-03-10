import React, {Component} from 'react';
import styles from './App.module.css';
import TodoListTemplate from './components/TodoList/TodoListTemplate';
import Form from './components/TodoList/components/Form';

class App extends Component {
  render() {
      return (
        <TodoListTemplate form={<Form/>}>
            템플릿 완성
        </TodoListTemplate>
      );
  }
}

export default App;
