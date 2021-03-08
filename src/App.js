import React from 'react';
import styles from './App.module.css';
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering'

console.log(styles);

function App() {
  return (
    // <div className={[styles.box, styles.blue].join(' ')}>
    <div>
      <ConditionalRendering/>
    </div>
  );
}

export default App;
