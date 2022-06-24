import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Loader from './Shared/Loader';
import { useSelector } from "react-redux";
import PublicRoute from './public_routes';



const AppRoutes = () => {
  const loading = useSelector((state) => state.Loader.loading);
  return(
  <Router>
  <Loader loading={loading} />
    <Routes>
      <Route path='/Login' element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path='/' element={<Navigate replace to="/Login"/>}/>
      <Route path='*' element={<Navigate replace to="/Login"/>}/>
    </Routes>
  </Router>
  )
};
export default AppRoutes;