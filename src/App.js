import React from "react";
import './App.css';
import Nav from "./component/Nav";
import ProductsContextProvider from "./global/ProductsContexts";
import Products from "./component/Products";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from "./component/Cart";
import NotFound from "./component/NotFound";
import CartContextProvider from "./global/CartContext"; 

function App() {
  return (
    <>
        <ProductsContextProvider>
         <CartContextProvider>
          <Router>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Products}/>
              <Route path="/cart" exact component={Cart}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
          </CartContextProvider>
        </ProductsContextProvider>   
    </>
  );
}

export default App;
