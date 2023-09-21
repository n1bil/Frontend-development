import React, { FC, useState, useEffect } from "react";
import './style.css';

interface IJson {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Users: FC = (): JSX.Element => {
    const [json, setJson] = useState<IJson[] | null>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const users = await response.json();
                setJson(users);
            } catch (error) {
                console.log(`Error fetching users: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {json && (
                json.map((user) => (
                    <div key={user.id} className="user-card">
                        <p>userId: {user.userId}</p>
                        <p>id: {user.id}</p>
                        <p>title: {user.title}</p>
                        <p>body: {user.body}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Users;
