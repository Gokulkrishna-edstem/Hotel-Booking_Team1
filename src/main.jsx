import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provider is given to make the reducers works   */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
