
import styles from './Main.module.css'

import Navbar from './Navbar/Navbar'
import router from './Article/Articles'

import * as React from "react";
import { RouterProvider } from "react-router-dom";


const Main = () => {
    return (
        <main className={styles.main}>
            <Navbar />
            <div class="articles_wrapper_content">
                <React.StrictMode>
                    <RouterProvider router={router} />
                </React.StrictMode>
            </div>
        </main>
    )
}

export default Main;