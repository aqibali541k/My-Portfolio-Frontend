import React from "react";
import Sider from "./components/Sider";
import Header from "./components/Header";
import { useTabContext } from "../../context/TabContext";
import Index from "./pages/Routes";

const Dashboard = () => {
  const { isSiderOpen } = useTabContext();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sider />

      <div
        className={`flex-1 transition-all duration-300 ${
          isSiderOpen ? "ml-60" : "ml-16"
        }`}
      >
        <Header />

        {/* 🔥 THIS WAS MISSING */}
        <div className="p-4">
          <Index />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
