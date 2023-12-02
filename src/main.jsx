import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import MainRoutes from "./Routes/MainRoutes.jsx";
import { Provider } from "react-redux";
import { Store, persistor } from "./redux/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <MainRoutes />
      </Router>
    </PersistGate>
  </Provider>
);
