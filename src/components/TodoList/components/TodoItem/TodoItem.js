import React, { Component } from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className={styles.todoItem} onClick={()=> onToggle(id)}>
                <div className={styles.remove} onClick={(e) => {
                    e.stopProppagation();
                    onRemove(id)}
                }> $items;</div>
                <div className={`styles.todoText ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className={styles.checkMark}>✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;