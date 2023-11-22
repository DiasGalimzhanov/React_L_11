import React from "react";
import Button from "../../components/Button";
import s from "./HomePage.module.scss";
import Header from "../../components/Header";
import Creater from "../../components/ToDoCreater/ToDoCreater";
import TodoGrid from "../../components/TodoGrid/TodoGrid";

function HomePage() {
    const todos = [{
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
    }];

    const onButtonClick = () => {
        console.log("smt");
    }

    return (<div>
        <Header></Header>
        <Creater></Creater>
        <TodoGrid todos={todos}></TodoGrid>
    </div>
    )
}

export default HomePage;