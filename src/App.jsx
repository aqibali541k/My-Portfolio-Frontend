import React from "react";
import Index from "./pages/Routes";
import "./App.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const App = () => {
  return (
    <>
      {/* Custom cursor — renders above everything, desktop only */}
      <CustomCursor />
      <Index />
    </>
  );
};

export default App;
