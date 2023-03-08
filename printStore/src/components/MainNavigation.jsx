import {Link} from 'react-router-dom'
import styles from './MainNavigation.module.css'
const MainNavigation = () => {
    return (
        <header className={`${styles.container}`}>
            <nav className={`${styles.nav_bar}`}>
                    <ul className={`${styles.nav_list_01}`}>
                        <li><Link to="/">Home</Link></li>
                        
                    </ul>
                    <ul className={`${styles.nav_list_01} `}>
                        <li className={`${styles.nav_item__push_right}`}><Link to="/draw">Draw</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li>
                            <ul className={`${styles.nav_list_01} ${styles.nav_list_02}`}>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/inspiration">Inspiration</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;