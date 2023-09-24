import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Todo from "./components/Todo";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Users />}/>
                  <Route path="posts" element={<Posts />}/>
                  <Route path="comments" element={<Comments />}/>
                  <Route path="todo" element={<Todo />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
