
import styles from './Main.module.css'

import Navbar from './Navbar/Navbar'
import FormArticle from './Article/Articles'

import * as React from "react";
import { Route, Routes } from "react-router-dom";


const Main = (props) => {

    let routes = props.acidElems
        .map(e => <Route path={"/" + e.name_en.toLowerCase()} element={<FormArticle/>} />);

    return (
        <main className={styles.main}>
            <Navbar acidElems={props.acidElems} />
            <div className="articles_wrapper_content">
                <Routes>
                    {routes}
                </Routes>
            </div>
        </main>
    )
}

export default Main;