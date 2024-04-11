import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);