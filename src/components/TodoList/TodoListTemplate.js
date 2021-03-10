import React from 'react';
import styles from './TodoListTemplate.module.css';

const TodoListTemplate = ({form, children}) => {
    return (
    <main className={styles.todoListTemplate}>
        <div className={styles.title}>
            오늘 할 일
        </div>
        <section className={styles.formWrapper}>
            {form}
        </section>
        <section className={styles.todosWrapper}>
            { children }
        </section>
        </main>
    );
};

export default TodoListTemplate;