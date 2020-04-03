import React from 'react';
import s from './Catalog.module.css' ;
import Product from './Product/Product';
import icon from './../../../assets/foto/icons/1.png'

const Catalog = (props) => {

    const Goods = props.products.map( p => <Product url={p.url} name = {p.name} price = {p.price}/>)

    return(
        <div className={s.cont}>
            <button className={s.title} >
                <img src={icon} alt="foto"/>
                range
            </button>
            <div className={s.products}>{Goods}</div>
           
        </div>
    )
}

export default Catalog