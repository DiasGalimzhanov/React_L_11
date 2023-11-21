import React from "react";
import Button from "../../components/Button";
import s from "./HomePage.module.scss";

function HomePage() {
    const onButtonClick = () => {
        console.log("smt");
    }

    return (<div>
        <Button className={s.button} onClick={onButtonClick}>Save</Button>
        <br />
        <Button onClick={onButtonClick}>Save</Button>
    </div>
    )
}

export default HomePage;