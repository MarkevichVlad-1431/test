import React from 'react';
import s from './Product.module.css';
import { NavLink } from 'react-router-dom';
const Product = (props) => {

    return(
        <a className={s.size} href="">
            
            <img src={props.url} alt=""/>

            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.price}>
                {props.price}
            </div>
        </a>
    )
}

export default Product;