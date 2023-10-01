import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Product from "./components/Sandwich";
import Books from "./components/Books";

function App() {
    return (
        <>
            <Counter />
            <Product />
            <Books/>
        </>
    );
}

export default App;
