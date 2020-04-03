import React from 'react';
import s from './LeftSidebar.module.css';
import insta from './../../assets/foto/icons/insta.png';
import youtube from './../../assets/foto/icons/youtube.png';
import twitter from './../../assets/foto/icons/twitter.png';
import { NavLink } from 'react-router-dom';

const LeftSidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <div className={s.title}>Menu</div>
            <ul className={s.nav}>
                <div>
                    <NavLink to='/home'>Home</NavLink>
                </div>
                <div>
                    <NavLink to="/catalog">Product Catalog</NavLink>
                </div>
                <div>
                    <NavLink to="/sale">Sale</NavLink>
                </div>
                <div>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className={s.basket}>
                    <NavLink to="/basket">Basket</NavLink>
                </div>
            </ul>
            <div className={s.links}>
                <a href="insta">
                    <img src={youtube} alt="youtube"/>
                </a>
                <a href="youtube">
                    <img src={insta} alt="insta"/>
                </a>
                <a href="twitter">
                    <img src={twitter} alt="twitter"/>
                </a>
            </div>
        </div>
    )
}

export default LeftSidebar;