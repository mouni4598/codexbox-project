import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './Routes';
import { Provider } from "react-redux";
import Store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <AppRoutes />
  </Provider>
);
