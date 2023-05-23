
import styles from './Main.module.css'

import Navbar from './Navbar/Navbar'
import { Xsenon, Ftor } from './Article/Articles'

import * as React from "react";
import { Route, Routes } from "react-router-dom";


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

const Main = () => {
    return (
        <main className={styles.main}>
            <Navbar />
            <div class="articles_wrapper_content">
                {/* <FormArticle name="xenon" /> */}
                <Routes>
                    <Route path="/xenon"    element={<FormArticle />} />
                    <Route path="/ftor"     element={<Ftor />} />
                    <Route path="/chlor"    element={<FormArticle />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main;