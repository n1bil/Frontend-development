import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Product from "./components/Sandwich";
import Books from "./components/Books";
import CreateBook from "./components/CreateBook";
import AdvancedSandwich from "./components/AdvancedSandwich";
import AdvancedBooks from "./components/AdvancedBooks";

function App() {
    return (
        <>
            <Counter />
            <AdvancedSandwich/>
            <AdvancedBooks/>
            {/* <Product />
            <CreateBook/>
            <Books/> */}
        </>
    );
}

export default App;
