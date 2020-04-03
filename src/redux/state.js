import {rerenderTree} from './../index';

let state = {
    home: {
        newProducts: {
            id: 1, 
            name: 'Name',
            price: 'Price', 
            url: 'https://previews.123rf.com/images/vladvm/vladvm1504/vladvm150400367/39241146-the-computer-icon-pc-symbol-flat-vector-illustration.jpg',
        }
    },
    products: [
        {id: 1, name: 'banan', price: '25$',    url: 'https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?$device-lg$'},
        {id: 2, name: 'appple', price: '12$',   url: 'https://ss7.vzw.com/is/image/VerizonWireless/Apple_iPhone_11_Pro_Midnight_Green_09102019?$png8alpha256$&hei=520'},
        {id: 3, name: 'orenge', price: '30$',   url: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/9/V/9VV61PA-1_T1578468071.png'},
        {id: 4, name: 'water', price: '32$',    url: 'https://ss7.vzw.com/is/image/VerizonWireless/iPhoneX-Svr?$device-lg$'},
        {id: 5, name: 'phone', price: '3200$',  url: 'https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/mobile-browse/Apple/iPhone-Xr/blue/iphone-xr-blue-front.png'},
        {id: 6, name: 'CocaCola', price: '42$', url: 'https://www.cyberpowerpc.com/images/cs/PCO11/cs-193-102_400.png'},
        {id: 7, name: 'tablet', price: '1000$', url: 'https://www.cyberpowerpc.com/images/cs/onyxia2/cs-450-148_400.png'},
        {id: 8, name: 'PC', price: '1300$',     url: 'https://cdn.webshopapp.com/shops/250788/files/263781800/hkc-hkc-at24a-32gb-nl-all-in-one-pc.jpg'},
    ],
    newPost: {
        id: '',
        name: '',
        price: '',
        url: '',
    }
}

export let addProduct = (productName, productPrice, productUrl) => {
    let newProduct = {
        id: 1,
        name: productName,
        price: productPrice,
        url: productUrl,
    };
    
    state.home.newProducts = newProduct;
    state.newPost = state.home.newProducts;
    //console.log(state.newPost)
    rerenderTree();
}

export let pushCatalog = () => {
    let post = {
        id: '',
        name: '',
        price: '',
        url: '',
    }
    post = state.newPost
    state.products.push(post);
    debugger;
}

pushCatalog();


export default state;