import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addProduct} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

import {pushCatalog} from './redux/state';

// ReactDOM.render(
//     <BrowserRouter>
//         <App state = {state}/>
//     </BrowserRouter>, document.getElementById('root'));


 export let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state} addProduct = {addProduct} pushCatalog = {pushCatalog}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderTree();
serviceWorker.unregister();
