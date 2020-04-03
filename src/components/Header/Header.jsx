import React from 'react';
import s from './Header.module.css';
import logo from './../../assets/foto/logo.png';

const Header = () => {
    return(
        <div className = 'header'>
            <div className={s.logo}>
            <link href="https://fonts.googleapis.com/css?family=Akronim|Indie+Flower|Roboto&display=swap" rel="stylesheet"/>
                <img className={s.foto} src={logo} alt="logo"/>
                <div className={s.text}>Name your Company</div>
            </div>
        </div>
    )
}

export default Header;