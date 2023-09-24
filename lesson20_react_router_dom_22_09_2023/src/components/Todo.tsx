import React, { FC, useState, useEffect } from "react";
import './Style.css';

interface IJson {
    userId?: number;
    id: number;
    title: string;
    completed: boolean;
}

const Comments: FC = (): JSX.Element => {
    const [json, setJson] = useState<IJson[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                const todos = await response.json();
                setJson(todos);
            } catch (error) {
                console.log(`Error fetching users: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {json &&
                json.map((todo) => (
                    <div key={todo.id} className="card">
                        <p>userId: {todo.userId}</p>
                        <p>id: {todo.id}</p>
                        <p>title: {todo.title}</p>
                        <p>completed: {todo.completed ? 'true' : 'false'}</p>
                    </div>
                ))}
        </div>
    );
};

export default Comments;
