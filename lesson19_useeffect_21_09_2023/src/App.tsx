import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ClassComponent from './components/ClassComponent';
import Users from './homework/Users';

function App() {
  return (
    <>
      {/* <Counter initialValue={0}/>
      <Counter initialValue={10}/>
      <Counter initialValue={100}/>
      <ClassComponent/> */}
      <Users/>
    </>
  );
}

export default App;
