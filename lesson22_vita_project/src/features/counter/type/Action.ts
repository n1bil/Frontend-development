type Action = 
| {type: 'payload/plus', payload: number}
| {type: 'payload/minus', payload: number}
| {type: 'deleteText'}
| {type: 'changeText', payload: string}

export default Action;