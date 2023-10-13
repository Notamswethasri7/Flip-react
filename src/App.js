// import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar.js';
import Menu from './components/Menu.js';
import Cards from './components/Cards.js';
import Banner from './components/Banner.js';
import Products from './components/products';
import Form from './components/Form.js'
import './css/bootstrap.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Cards/>
                <Products/>
                <Form/>
                <BrowserRouter>
                <Routes>
                 <Route path='/' element={Searchbar}></Route>
                 <Route path='/Form' element={Form}></Route>
                 </Routes>
                </BrowserRouter>
        </div>
   </div>
   </>
  );
}

export default App;
