import React, { FC, useState, useEffect } from "react";

interface ICounterProps {
    initialValue: number;
}

interface IJson {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Counter: FC<ICounterProps> = ({ initialValue }): JSX.Element => {   // const Counter: FC<{initialValue: number}> = ({initialValue}): JSX.Element => {
    const [count, setCount] = useState<number>(initialValue);
    const [json, setJson] = useState<IJson | null>(null);

    useEffect(() => {
        console.log("Component is mounted");
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => setJson(data));
        return () => {
            console.log("Component is unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Component is updated");
    }, [count]);

    const increment = (): void => {
        setCount(count + 1);
    };

    return (
        <>
            {json && 
                <>
                    {json.id} {json.completed} {json.title} {json.userId}
                </>
            }
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={(): void => setCount(count - 1)}>Decrement</button>
        </>
    );
};

export default Counter;
