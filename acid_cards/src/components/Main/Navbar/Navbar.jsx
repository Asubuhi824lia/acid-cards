
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'


import acid_elems from "../../../acid_elems.json"


const Navbar = () => {

    const formNavLink = (str_en, str_ru, symbol, number) => {
        return <li><NavLink to={str_en}> {str_ru} {symbol}</NavLink> ({number})</li>
    }

    let NavLinks = acid_elems.elems.map(element => {
        const str_en = element.name_en.toLowerCase()
        const str_ru = element.name_ru[0].toUpperCase() + element.name_ru.slice(1).toLowerCase()
        const symbol = element.symbol
        const number = element.acids.quantity

        return formNavLink(str_en, str_ru, symbol, number)
    });

    return <nav className={styles.navbar}>
        <h4>Элементы</h4>
        <ul type="none">
            {NavLinks}
        </ul>
    </nav >
}

export default Navbar;