import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/header';

import Home from './Components/Home/home';
import Product from './Components/Product/product';

import Footer from './Components/Footer/footer';
import  Cart  from './Components/Cart/cart';
import Clothing from './Components/Clothing/clothing';
import Accessories from './Components/Accessories/accessories';
import Payment from './Components/Payment/payment';




const App = () => {
  return (
     <div>
       <BrowserRouter>
       <Header />

       <Switch >
        <div className="pt-5 px-4" style={{boxSizing:"border-box"}}>
       <Route path="/" exact component={Home} />
       <Route path="/clothing" component={Clothing} />
       <Route path="/accessories" component={Accessories} />
       <Route path="/Product/:id" component={Product} />
       <Route path="/cart" component={Cart} />
       <Route path="/payment" component={Payment} />

       </div>
       </Switch>
       <Footer />
       </BrowserRouter>
     </div>
       );
}
 
export default App;

