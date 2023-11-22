import React, { useState } from "react";
import Button from "../../components/Button";
import s from "./HomePage.module.scss";
import Header from "../../components/Header";
import Creater from "../../components/ToDoCreater/ToDoCreater";
import TodoGrid from "../../components/TodoGrid/TodoGrid";


function HomePage() {


    const [todos, setTodos] = useState ([{
        title: "Task 1",
        task: "Do somthing",
        date: "21.11.2023",
    }, {
        title: "Task 2",
        task: "Do somthing",
        date: "21.11.2023",
    }, {
        title: "Task 3",
        task: "Do somthing",
        date: "21.11.2023",
    }]);

    return (<div>
        <Header></Header>
        <Creater setTodos={setTodos}></Creater>
        <TodoGrid todos={todos}></TodoGrid>
    </div>
    )
}

export default HomePage;