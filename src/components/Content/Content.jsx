import React from 'react';
import s from './Content.module.css'
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import Sale from './Sale/Sale';
import Contact from './Contact/Contact';
import Basket from './Basket/Basket';

const Content = (props) => {
    return (
        <div className = {s.contentBody}>
                <Route path = '/home'    render={ ()=> <Home addProduct = {props.addProduct} home = {props.home} pushCatalog = {props.pushCatalog}/>}/>
                <Route path = '/catalog' render={ ()=> <Catalog products={props.products} pushCatalog = {props.pushCatalog}/>}/>
                <Route path = '/sale'    render={ ()=> <Sale/>}/>
                <Route path = '/contact' render={ ()=> <Contact/>}/>
                <Route path = '/basket'  render={ ()=> <Basket/>}/>
        </div>
    )
}

export default Content;