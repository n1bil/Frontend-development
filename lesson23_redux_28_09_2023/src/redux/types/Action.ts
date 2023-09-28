type Action = 
| {type: 'counter/minus', payload: number}
| {type: 'counter/plus', payload: number}
| {type: 'addBread', payload: string}
| {type: 'addCheese', payload: string}
| {type: 'addHam', payload: string};

export default Action;
