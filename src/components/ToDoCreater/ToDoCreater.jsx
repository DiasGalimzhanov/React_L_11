import React from "react";
import Button from "../Button";
import s from "./ToDoCreater.module.scss"

function Creater() {
    return <div className={s.creater}>
        <input type="text" className={s.imput} placeholder="Заголовок"></input>
        <input type="text" className={s.imput} placeholder="Ваша Заметка"></input>
        <Button className={s.button}>Save</Button>
    </div>
}

export default Creater;