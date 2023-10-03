import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/storeRTK';
import { addIngredient, clear } from '../redux/slices/sandwichSlice';

const AdvancedSandwich: React.FC = (): JSX.Element => {

    const sandwich = useSelector((state: RootState) => state.sandwich.value)
    const dispatch = useDispatch();

    const addIngredientHandler = (ingredient: string) => {
        dispatch(addIngredient(ingredient))
    }

    const clearHandler = () => {
        dispatch(clear())
    }

  return (
    <div>
        <h1>Choose some ingredients: </h1>
        <p>Sandwich: {sandwich}</p>
        <button onClick={() => addIngredientHandler('bread ')}>addBread</button>
        <button onClick={() => addIngredientHandler('cheese ')}>addCheese</button>
        <button onClick={() => addIngredientHandler('ham ')}>addHam</button>
        <button onClick={clearHandler}>Clear all</button>
    </div>
  )
}

export default AdvancedSandwich