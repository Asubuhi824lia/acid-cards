import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.navbar}>
        <ul type="none">
            <li><a href='#'>Ксенон  Xe</a>  (2)</li>
            <li><a href='#'>Фтор    F</a>   (2)</li>
            <li><a href='#'>Хлор    Cl</a>  (5)</li>
            <li><a href='#'>Бром    Br</a>  (5)</li>
            <li><a href='#'>Йод     I</a>   (7)</li>
            <li><a href='#'>Сера    S</a>   (11)</li>
            <li><a href='#'>Селен   Se</a>  (3)</li>
            <li><a href='#'>Теллур  Te</a>  (3)</li>
            <li><a href='#'>Азот    N</a>   (5)</li>
            <li><a href='#'>Фосфор  P</a>   (9)</li>
            <li><a href='#'>Мышьяк  As</a>  (2)</li>
            <li><a href='#'>Сурьма  Sb</a>  (2)</li>
            <li><a href='#'>Кремний Si</a>  (3)</li>
            <li><a href='#'>Бор     B</a>   (1)</li>
        </ul>
    </nav>
}

export default Navbar;