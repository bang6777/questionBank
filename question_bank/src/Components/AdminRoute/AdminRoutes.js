import React from 'react';
import {Route, Redirect} from 'react-router-dom';
let isLoggedAdmin=localStorage.getItem("admin");
const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}  
    render={props =>
      isLoggedAdmin !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default AdminRoute;