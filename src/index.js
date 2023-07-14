import React from "react";
import ReactDOM from "react-dom/client";
import "./app/app.css";

import { TodoProvider } from "./Components/TodoContext/TodoContext";
import { App } from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
