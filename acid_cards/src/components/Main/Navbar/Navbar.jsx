
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'


const Navbar = () => {

    return <nav className={styles.navbar}>
        <h4>Элементы</h4>
        <ul type="none">
            <li><NavLink to='/xenon'>   Ксенон  Xe  </NavLink>  (2)</li>
            <li><NavLink to='/ftor'>    Фтор    F   </NavLink>  (2)</li>
            <li><NavLink to='/chlor'>   Хлор    Cl  </NavLink>  (5)</li>
            <li><NavLink to='/brom'>    Бром    Br  </NavLink>  (5)</li>
            <li><NavLink to='/iod'>     Йод     I   </NavLink>  (7)</li>
            <li><NavLink to='/sera'>    Сера    S   </NavLink>  (11)</li>
            <li><NavLink to='/selen'>   Селен   Se  </NavLink>  (3)</li>
            <li><NavLink to='/tellur'>  Теллур  Te  </NavLink>  (3)</li>
            <li><NavLink to='/azot'>    Азот    N   </NavLink>  (5)</li>
            <li><NavLink to='/phosphor'>Фосфор  P   </NavLink>  (9)</li>
            <li><NavLink to='/mishyak'> Мышьяк  As  </NavLink>  (2)</li>
            <li><NavLink to='/surma'>   Сурьма  Sb  </NavLink>  (2)</li>
            <li><NavLink to='/kremniy'> Кремний Si  </NavLink>  (3)</li>
            <li><NavLink to='/bor'>     Бор     B   </NavLink>  (1)</li>
        </ul>
    </nav >
}

export default Navbar;