import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Product: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = (): void => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'bread' });
    };

    const handleAddCheese = (): void => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'cheese' });
    };

    const handleAddHam = (): void => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'ham' });
    };

    const handleClear = (): void => {
        dispatch({ type: 'sandwich/clear' })
    };

    return (
        <div>
            <h1>Choose some ingredients: </h1>
            <p>Sandwich: {ingredients}</p>
            <button onClick={handleAddBread}>addBread</button>
            <button onClick={handleAddCheese}>addCheese</button>
            <button onClick={handleAddHam}>addHam</button>
            <button onClick={handleClear}>Clear all</button>
        </div>
    );
};

export default Product;
