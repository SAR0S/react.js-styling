import React, { Component } from 'react';
import styles from './Form.module.css';

const Form = ({value, onChange, onCreate, onKeyPress}) =>  {
    return (
        <div className={styles.form}>
            <input className={styles.form} value={value} onchange={onChange} onKeyPress={onKeyPress}/>
            <div className={styles.createButton} onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;