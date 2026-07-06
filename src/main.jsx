import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@ant-design/v5-patch-for-react-19";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.jsx";
import TabProvider from "./context/TabContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <TabProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TabProvider>
    </AuthProvider>
  </BrowserRouter>,
);
