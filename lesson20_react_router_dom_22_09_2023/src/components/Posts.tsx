import React, { FC, useState, useEffect } from "react";
import './Style.css';

interface IJson {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Users: FC = (): JSX.Element => {
    const [json, setJson] = useState<IJson[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const posts = await response.json();
                setJson(posts);
            } catch (error) {
                console.log(`Error fetching users: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {json &&
                json.map((post) => (
                    <div key={post.id} className="card">
                        <p>userId: {post.userId}</p>
                        <p>id: {post.id}</p>
                        <p>post: {post.title}</p>
                        <p>body: {post.body}</p>
                    </div>
                ))}
        </div>
    );
};

export default Users;
