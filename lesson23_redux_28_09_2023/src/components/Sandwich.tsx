import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Product: React.FC = (): JSX.Element => {

    const product = useSelector((state: RootState) => state.product.value);
    const dispatch = useDispatch();

    const addBread = (): void => {
        dispatch({ type: 'addBread', payload: 'bread ' })
    };

    const addCheese = (): void => {
        dispatch({ type: 'addCheese', payload: 'cheese '})
    };

    const addHam = (): void => {
        dispatch({ type: 'addHam', payload: 'ham ' })
    };

    return (
        <div>
            <button onClick={addBread}>addBread</button>
            <button onClick={addCheese}>addCheese</button>
            <button onClick={addHam}>addHam</button>
            <div>Sandwich: {product}</div>
        </div>
    );
};

export default Product;
