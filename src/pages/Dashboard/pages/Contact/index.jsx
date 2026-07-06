import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Popconfirm } from "antd";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/contact/all`);
    setContacts(res.data.contacts);
  };

  const deleteContact = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/contact/${id}`);
    message.success("Message deleted");
    fetchContacts();
  };

  const isNewMessage = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - createdDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 2;
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-1 sm:px-2 py-2">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-indigo-700">
              Contact Messages
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              User inquiries & feedback
            </p>
          </div>

          <span className="self-start sm:self-auto px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
            {contacts.length} Messages
          </span>
        </div>

        {/* EMPTY STATE */}
        {contacts.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            No contact messages yet
          </div>
        )}

        {/* MESSAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="
                bg-white
                rounded-3xl
                border border-indigo-100
                shadow-sm
                hover:shadow-lg
                transition
                p-5
              "
            >
              {/* TOP */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {c.name}
                  </h3>

                  <p className="text-sm text-indigo-600 break-all">{c.email}</p>

                  {c.phone && (
                    <p className="text-sm text-gray-500">{c.phone}</p>
                  )}
                </div>

                <Popconfirm
                  title="Delete this message?"
                  description="This action cannot be undone."
                  onConfirm={() => deleteContact(c._id)}
                  okText="Delete"
                  cancelText="Cancel"
                >
                  <button className="px-3 py-1.5 text-xs rounded-xl bg-red-50 text-red-600 hover:bg-red-100 active:scale-95 transition">
                    Delete
                  </button>
                </Popconfirm>
              </div>

              {/* MESSAGE */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700 text-sm leading-relaxed">
                {c.message}
              </div>

              {/* FOOTER */}
              <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
                <span>
                  {new Date(c.createdAt).toLocaleDateString()}{" "}
                  {new Date(c.createdAt).toLocaleTimeString()}
                </span>

                <span
                  className={`font-semibold ${
                    isNewMessage(c.createdAt)
                      ? "text-green-500"
                      : "text-gray-400"
                  }`}
                >
                  {isNewMessage(c.createdAt) ? "NEW" : "OLD"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;
