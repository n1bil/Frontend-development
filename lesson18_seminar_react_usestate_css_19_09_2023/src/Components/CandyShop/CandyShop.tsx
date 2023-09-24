import React from 'react';
import Candy from './Candy';

export default function CandyShop():JSX.Element {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>CandyShop</h1>
      <Candy title='m&ms' price={2.5}/>
      <Candy title='mars' price={1.5}/>
      <Candy title='snickers' price={1.7}/>
    </div>
  );
}