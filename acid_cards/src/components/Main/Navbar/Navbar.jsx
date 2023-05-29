
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'


const Navbar = (props) => {

    const formNavLink = (str_en, str_ru, symbol, number) => {
        return <li><NavLink to={str_en}> {str_ru} {symbol}</NavLink> ({number})</li>
    }

    let NavLinks = props.acidElems.elems.map(elem => {
        const str_en = elem.name_en.toLowerCase()
        const str_ru = elem.name_ru[0].toUpperCase() + elem.name_ru.slice(1).toLowerCase()
        const symbol = elem.symbol
        const number = elem.acids.quantity

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