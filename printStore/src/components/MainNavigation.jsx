import {Link} from 'react-router-dom'
import styles from './MainNavigation.module.css';
import { useState } from 'react';
const MainNavigation = () => {

    const [menu, setMenu] = useState(true)

    const changeHamburger = (e) => {
        const target = document.getElementsByClassName(`${styles.hamburger}`)
        if(menu) {
            setMenu(false);
            // target.classList.add(`${styles.change}`);
        }
        else{
            setMenu(true);
            // target.classList.remove(`${styles.change}`);
        }
        
        
    };

    console.log(menu)

    return (
        <header className={`${styles.container}`}>
            <nav className={`${styles.nav_bar}`}>
                    <ul className={`${styles.nav_list_01}`}>
                        <li><Link to="/">Home</Link></li>
                        
                    </ul>

                    <button className={`${styles.hamburger} ${!menu ? styles.change : ''}`} onClick={changeHamburger}>
                        <div className={`${styles.bar1}`}></div>
                        <div className={`${styles.bar2}`}></div>
                        <div className={`${styles.bar3}`}></div>
                    </button>
                    <ul className={`${styles.nav_list_01} ${styles.list01}`}>
                        <li className={`${styles.nav_item__push_right}`}><Link to="/draw">Draw</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li>
                            <ul className={`${styles.nav_list_01} ${styles.nav_list_02}`}>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/inspiration">Inspiration</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
            {menu || <nav className={`${styles.mobile_nav}`}>
                <ul>
                    <li onClick={changeHamburger}><Link to="/draw">Draw</Link></li>
                    <li onClick={changeHamburger}><Link to="/work">Work</Link></li>
                    <li onClick={changeHamburger}><Link to="/login">Login</Link></li>
                    <li onClick={changeHamburger}><Link to="/cart">Cart</Link></li>
                    <li onClick={changeHamburger}><Link to="/about">About</Link></li>
                    <li onClick={changeHamburger}><Link to="/inspiration">Inspiration</Link></li>
                    <li onClick={changeHamburger}><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>}
            
        </header>
    )
}

export default MainNavigation;