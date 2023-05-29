
import styles from './Main.module.css'

import Navbar from './Navbar/Navbar'
import { Xsenon, Ftor } from './Article/Articles'

import * as React from "react";
import { Route, Routes } from "react-router-dom";

import acid_elems from "../../acid_elems.json"


const FormArticle = () => {
    const url = window.location.href

    let elem;
    if (url.includes('/'))
        elem = url.split('/').pop()
    else
        elem = url.split('\\').pop()

    console.log(elem)

    return (
        <div>
            <h1>{elem}</h1>
            <section></section>
        </div >)
}

const formRoute = (elem) => {
    const path = "/" + elem;
    return <Route path={path} element={<FormArticle />} />
}


const Main = () => {

    let routes = []
    acid_elems.elems.forEach(element => {
        const route = formRoute(element.name_en.toLowerCase())
        routes.push(route)
    });

    return (
        <main className={styles.main}>
            <Navbar />
            <div class="articles_wrapper_content">
                {/* <FormArticle name="xenon" /> */}
                <Routes>
                    {routes}
                </Routes>
            </div>
        </main>
    )
}

export default Main;