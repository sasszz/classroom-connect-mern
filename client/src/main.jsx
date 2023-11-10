import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { UserProvider } from "./UserProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
