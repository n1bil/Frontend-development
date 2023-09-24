import React, { FC, useState, useEffect } from "react";
import './Style.css';

interface IJson {
    id: number;
    name: string;
    phone: string;
    email: string;
}

const Users: FC = (): JSX.Element => {
    const [json, setJson] = useState<IJson[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
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
            {json &&
                json.map((user) => (
                    <div key={user.id} className="card">
                        <p>id: {user.id}</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.phone}</p>
                        <p>email: {user.email}</p>
                    </div>
                ))}
        </div>
    );
};

export default Users;
