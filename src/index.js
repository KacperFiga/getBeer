import React from "react";
import ReactDOM from "react-dom";
import App from "./components/templates/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import GLobalStyles from "./assets/styles/GlobalStyles";
import store from "./store/store";
ReactDOM.render(
  <React.StrictMode>
    <GLobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
