
import styles from './Article.module.css'


import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/xenon",
        element: <div className={styles.acid_cards}>
            <h1>Ксенон Xe</h1>
            <section></section>
        </div>,
    },
    {
        path: "/ftor",
        element: <div className={styles.acid_cards}>
            <h1>Фтор F</h1>
            <section></section>
        </div>,
    },
]);


export default router;