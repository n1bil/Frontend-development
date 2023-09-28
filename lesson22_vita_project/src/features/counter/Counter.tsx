import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Counter = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const text = useSelector((state: RootState) => state.counter.text);
    const [message, setMessage] = useState<string>('cat');
    const dispatch = useDispatch();
    const handleMinus = ():void => {
        dispatch({type: 'payload/minus', payload: 1});
    }
    const handlePlus = ():void => {
        dispatch({type: 'payload/plus', payload: 1});
    }

    const handleClearText = ():void => {
        dispatch({type: 'deleteText'});
    }

    const handleTextChange = (newText: string) => {
        dispatch({type: 'changeText', payload: newText});
    }

  return (
    <div>Counter
        text: {text}
        <button type='button' onClick={handleClearText}>clear</button>
        <p>{message}</p>
        <input type="text" onChange={(e) => setMessage(e.target.value)} value={message}/>
        <button type="button" onClick={() => handleTextChange(message)}>Change text</button>
        <br />
        value: {counter}
        <button type='button' onClick={handleMinus}>-1</button>
        <button type='button' onClick={handlePlus}>+1</button>
    </div>
  )
}
