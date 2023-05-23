
import styles from './Navbar.module.css'


const Navbar = () => {
    return <nav className={styles.navbar}>
        <h4>Элементы</h4>
        <ul type="none">
            <li><a href='/xenon'>   Ксенон  Xe</a>  (2)</li>
            <li><a href='/ftor'>    Фтор    F</a>   (2)</li>
            <li><a href='/chlor'>   Хлор    Cl</a>  (5)</li>
            <li><a href='/brom'>    Бром    Br</a>  (5)</li>
            <li><a href='/iod'>     Йод     I</a>   (7)</li>
            <li><a href='/sera'>    Сера    S</a>   (11)</li>
            <li><a href='/selen'>   Селен   Se</a>  (3)</li>
            <li><a href='/tellur'>  Теллур  Te</a>  (3)</li>
            <li><a href='/azot'>    Азот    N</a>   (5)</li>
            <li><a href='/phosphor'>Фосфор  P</a>   (9)</li>
            <li><a href='/mishyak'> Мышьяк  As</a>  (2)</li>
            <li><a href='/surma'>   Сурьма  Sb</a>  (2)</li>
            <li><a href='/kremniy'> Кремний Si</a>  (3)</li>
            <li><a href='/bor'>     Бор     B</a>   (1)</li>
        </ul>
    </nav>
}

export default Navbar;