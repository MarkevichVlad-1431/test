import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Content from './components/Content/Content';

const App  = (props) => {

  return(
    <div className='body'>
      <Header className='header'/>
      <LeftSidebar className='leftSidebar'/>
      <Content className='content' 
              products = {props.state.products} 
              addProduct = {props.addProduct}
              home = {props.state.home}
              pushCatalog = {props.pushCatalog}/>
    </div>
  )
}
export default App;
