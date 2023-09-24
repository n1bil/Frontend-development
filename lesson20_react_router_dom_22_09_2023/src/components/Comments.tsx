import React, { FC, useState, useEffect } from "react";
import './Style.css';

interface IJson {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments: FC = (): JSX.Element => {
    const [json, setJson] = useState<IJson[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/comments"
                );
                const comments = await response.json();
                setJson(comments);
            } catch (error) {
                console.log(`Error fetching users: ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {json &&
                json.map((comment) => (
                    <div key={comment.id} className="card">
                        <p>userId: {comment.postId}</p>
                        <p>id: {comment.id}</p>
                        <p>name: {comment.name}</p>
                        <p>email: {comment.email}</p>
                        <p>body: {comment.body}</p>
                    </div>
                ))}
        </div>
    );
};

export default Comments;
