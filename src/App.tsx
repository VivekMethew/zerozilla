import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./pages/products";
import ProductView from "./pages/product_detail";


function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/product/categories/:catName" component={ProductList}></Route>
        <Route path="/products/:prodId" component={ProductView}></Route>
      </Switch>
  );
}

export default App;
