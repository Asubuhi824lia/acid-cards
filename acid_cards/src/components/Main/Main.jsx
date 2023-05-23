import React from   'react'
import styles from  './Main.module.css'

import Navbar from  './Navbar/Navbar'
import Article from './Article/Article'


const Main = () => {
    return <main className={styles.main}>
        <Navbar />
        <Article />
    </main>
}

export default Main;