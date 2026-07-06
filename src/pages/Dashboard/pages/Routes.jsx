import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";
import CreateProject from "./CreateProject";
import ManageProject from "./ManageProject";
import AdminContacts from "./Contact";

const Index = () => {
  return (
    <main className="flex flex-col min-h-screen flex-1">
      <div className="flex-1 bg-gray-50 p-4 md:p-6 overflow-y-auto">
        <Routes>
          {/* default → PROFILE */}
          <Route path="/" element={<Navigate to="profile" replace />} />

          <Route path="profile" element={<Profile />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="manage-project" element={<ManageProject />} />
          <Route path="contact" element={<AdminContacts />} />
        </Routes>
      </div>
    </main>
  );
};

export default Index;
