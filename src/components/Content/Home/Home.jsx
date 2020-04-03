import React from 'react';
import s from './Home.module.css';
import { pushCatalog } from '../../../redux/state';

const Home = (props) => {
    let newName = React.createRef();
    let newPrice = React.createRef();
    let newUrl = React.createRef();
    let show = () => {
        let text = newName.current.value;
        let price = newPrice.current.value;
        let url = newUrl.current.value;

        props.addProduct(text, price, url);
        newName.current.value = '';
        newPrice.current.value = '';
        newUrl.current.value = '';
    }


    let addProduct = () => {
        pushCatalog();
        
        newName.current.value = '';
        newPrice.current.value = '';
        newUrl.current.value = '';
    }   
    return (
        <div className={s.main}>
            <div className={s.title}>Add new product</div>
            <div className={s.name}>
                <span className={s.menu}>1. Input name product:</span> <input ref={newName} />
            </div>
            <div className={s.name}>
                <span className={s.menu}>2. Enter product price:</span> <input ref={newPrice} />
            </div>
            <div className={s.name}>
                <span className={s.menu}>3. Input Url img:</span> <input ref={newUrl} />
            </div>
            <button className={s.create} onClick={show}> Create</button>
            <button className={s.create} onClick={addProduct}> add</button>

            <div className={s.show}>
                <div className={s.showTitle}>Current state of the ad</div>
            </div>

            <div className={s.ad} >
                <img src={props.home.newProducts.url} alt="" />

                <div className={s.name}>
                    {props.home.newProducts.name}
                </div>
                <div className={s.price}>
                    {props.home.newProducts.price}
                </div>
            </div>
        </div >
    )
}

export default Home;