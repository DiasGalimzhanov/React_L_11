import React, { useState } from "react";
import Button from "../Button";
import s from "./ToDoCreater.module.scss"

function Creater({ setTodos }) {
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeTask = (e) => setTask(e.target.value);

    const onClick = () => {
        const newTodo = {
            title,
            task,
            date: Date.now(),
        };

        setTodos(prev=> [...prev,newTodo])
    }

    return <div className={s.creater}>
        <input type="text" className={s.imput} placeholder="Заголовок" onChange={onChangeTitle}></input>
        <input type="text" className={s.imput} placeholder="Ваша Заметка" onChange={onChangeTask}></input>
        <Button className={s.button} onClick={onClick} >Save</Button>
    </div>
}

export default Creater;