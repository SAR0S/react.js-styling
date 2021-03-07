import React from 'react';
import styles from './App.module.css';

console.log(styles);

function App() {
  return (
    <div className={[styles.box, styles.blue].join(' ')}>
      
    </div>
  );
}

export default App;
