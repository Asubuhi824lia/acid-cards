import logo from './../../logo.svg';
import classes from './Header.module.css'


const Header = () => {
    return <header className={classes.App_header}>
        <img src={logo} className={classes.App_logo} alt="logo" />
    </header>
}

export default Header;