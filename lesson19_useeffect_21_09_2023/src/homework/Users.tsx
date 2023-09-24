import React, { FC, useState, useEffect } from "react";
import './Style.css';

interface IJson {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
    phone: string;
    company: {
        name: string;
    };
}

const Users: FC = (): JSX.Element => {
    const [json, setJson] = useState<IJson[] | null>(null);
    const [selectedUser, setSelectedUser] = useState<number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const users = await response.json();
                setJson(parse(users));
            } catch (error) {
                console.log(`Error fetching users: ${error}`);
            }
        };

        fetchData();
    }, []);

    function parse(users: IJson[]): IJson[] {
        return users.map(user => ({
            ...user,
            phone: user.phone.split(' ')[0]
        }));
    }

    const handleUserClick = (userId: number) => {
        setSelectedUser(userId);
    }

    return (
        <div>
            {json && (
                json.map((user) => (
                    <div className="container">
                        <div key={user.id} className="user-card" onClick={() => handleUserClick(user.id)}>
                            <p>id: {user.id}</p>
                            <p>name: {user.name}</p>
                            <p>username: {user.username}</p>
                            <p>email: {user.email}</p>
                        </div>
                        {selectedUser === user.id && (
                        <div className="additional-information" style={{marginLeft: '15%'}}>
                            <p>street: {user.address.street}</p>
                            <p>city: {user.address.city}</p>
                            <p>phone: {user.phone}</p>
                            <p>company: {user.company.name}</p>
                        </div>
                        )}
                    </div>
                ))
            )}
        </div>
        
    );
};

export default Users;
