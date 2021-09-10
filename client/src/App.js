import './App.css';
import { Switch, Route } from "react-router-dom";
import {
  Dashboard, 
  ListProduct, 
  DetailProduct, 
  Order, 
  Login, 
  Register, 
  Checkout,
  Homebase,
  UserList,
  AddProduct
} from './pages'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route exact path="/listProduct">
          <ListProduct/>
        </Route>
        <Route exact path="/detailProduct">
          <DetailProduct/>
        </Route>
        <Route exact path="/myOrder">
          <Order/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/admin">
          <Homebase/>
        </Route>
        <Route exact path="/admin/user">
          <UserList/>
        </Route>
        <Route exact path="/admin/add">
          <AddProduct/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
