import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { SimpleForm } from "./Components/SimpleForm";
import { CallbackHook } from "./Components/CallBackHook";
import { Focus } from "./Components/Focus";
import { LoginForm } from "./Components/LoginForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>
);