import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*Provider allows you to retrieve the redux store (the store is a box where all the useful information is stored) */}
    <Provider store={store}>
      {/*BrowserRouter allows to initialize the use of routes on the front side */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
