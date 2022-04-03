import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from "./Components/Slider";
import React, { useState } from 'react';
import Nav from "./Components/Nav";
import ContactUs from "./Components/Contact/ContactUs";
import Faq from "./Components/FAQ/Faq";
import AboutUs from "./Components/About/AboutUs";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import BreakFast from './Components/Menu/pages/Menu/BreakFast';
import Lunch from './Components/Menu/pages/Menu/Launch';
import Dinner from './Components/Menu/pages/Menu/Dinner';
// import myStore from './Components/Menu/store/myStore'
import { Provider } from "react-redux";
import ShoppingList from './Components/Menu/pages/ShoppingList'
import MealDetails from "./Components/Menu/pages/Menu/MealDetail";
import AllMeals from "./Components/Menu/pages/Menu/AllMeals";
import Regisiterpage from './Components/regisiter/registerpage';
import Loginpage from './Components/regisiter/loginpage';
import NotFound from './Components/Not-Found/NotFound'
import Profile from './Components/Profile/profile'; 
import Dashboard from './Components/Admin/AdminDashboard/Dashboard';
import CheckOut from './Components/CheckOut/Checkout';
import AdminNavAndSidebar from './Components/Admin/AdminNav&Sidebar/AdminNavAndSidebar'
import ProductsTable from "./Components/Admin/ProductsTable/ProductsTable";
import AddMeal from "./Components/Admin/Meals/AddMeal";
import EditMeal from "./Components/Admin/Meals/EditMeal";
import Adduser from "./Components/Admin/Meals/Adduser";
import TotalContext from './store/total-context';
import MealsContext from './store/meals-context';
import UsersTable from "./Components/Admin/AdminDashboard/UsersTable/UsersTable";
import Vieworder from "./Components/Admin/Orderstable/Vieworder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Provider store={myStore}> */}
      <MealsContext.Provider value={{ meals : []}}>
      <TotalContext.Provider value={{ totalPrice : 0}}>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route  exact path="/faq" component={Faq} />
          <Route exact  path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route  exact path= "/BreakFast"  component={BreakFast} />
          <Route exact path= "/Lunch"  component={Lunch} />
          <Route  exact path= "/Dinner" component={Dinner} />
          <Route  exact path= "/shoppinglist" component={ShoppingList} />
\
          <Route exact path= "/menudetails/:id"  component={MealDetails} />
          <Route exact path ='/allMeals'  component={AllMeals}/>
          <Route exact path="/register"  component={Regisiterpage} />
          <Route exact path="/login"  component={Loginpage} />
          <Route exact path="/profile" component={Profile} />
          <Route  exact path="/admin" component={Dashboard} />
          <Route  path="/checkout" component={CheckOut} />  
          <Route path="/adminnavandside" component={AdminNavAndSidebar} />
          <Route path="/adminnavandside/products" component={ProductsTable} />
          <Route path="/adminnavandside/users" component={UsersTable}/>
          <Route exact path="/Meals/add" component={AddMeal}/>
          <Route exact path="/Meals/edit/:id" component={EditMeal}/>
          <Route exact path="/users/add" component={Adduser}/>
          <Route exact path="/orders/view/:id" component={Vieworder}/>
          <Route  exact path="*" component={NotFound} /> 
        </Switch>
        <Footer/>
        {/* </Provider> */}
        </TotalContext.Provider>
        </MealsContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
