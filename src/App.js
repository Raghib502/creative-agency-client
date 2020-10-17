import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Order from './Components/Order/Order';
import AllOrder from './Components/AllOrder/AllOrder';
import ServiceList from './Components/ServiceList/ServiceList';
import Review from './Components/Review/Review';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
              </PrivateRoute>
            <PrivateRoute path="/service">
              <ServiceList></ServiceList>
            </PrivateRoute>
            <PrivateRoute path='/review'>
             <Review></Review>
           </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
