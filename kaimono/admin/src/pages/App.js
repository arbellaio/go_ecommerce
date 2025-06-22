import React, { Component, useState } from "react";
import history from "../util/history";
import {
  Redirect,
  Route,
  Router,
  Routes,
  Switch,
  withRouter,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Orders from "./Orders";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import Register from "./Register";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/orders"} component={Orders} />
            <Route exact path={"/products"} component={Products}/>
            <Route exact path={"/add-product"} component={AddProduct} />
            <Route exact path={"/add-category"} component={AddCategory} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
