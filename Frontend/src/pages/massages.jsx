import { useState } from "react";
import { FaEnvelope, FaEnvelopeOpen, FaTrash, FaReply } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const messagesData = [
  { id: 1, sender: "John Doe", subject: "Project Update", time: "10:30 AM", status: "unread", content: "Hello, here’s an update on the project..." },
  { id: 2, sender: "Jane Smith", subject: "Meeting Reminder", time: "12:45 PM", status: "read", content: "Reminder for our meeting at 3 PM." },
  { id: 3, sender: "Michael Brown", subject: "Invoice Details", time: "Yesterday", status: "unread", content: "Please check the attached invoice." },
];

const MessagesDashboard = () => {
  const [messages, setMessages] = useState(messagesData);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const handleSelectMessage = (msg) => {
    setSelectedMessage(msg);
    setMessages(messages.map(m => (m.id === msg.id ? { ...m, status: "read" } : m)));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="md:block hidden bg-gray-100">
        <Sidebar />
      </div>
      <div className="flex-1 p-5 bg-gray-100">
        <Navbar />
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Messages</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-3">Inbox</h2>
            {messages.map(msg => (
              <div key={msg.id} 
                className={`p-3 flex justify-between items-center cursor-pointer border-b ${msg.status === "unread" ? "bg-blue-50" : ""}`}
                onClick={() => handleSelectMessage(msg)}>
                <div>
                  <h3 className="font-medium">{msg.sender}</h3>
                  <p className="text-sm text-gray-600">{msg.subject}</p>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                {msg.status === "unread" ? <FaEnvelope className="text-blue-500" /> : <FaEnvelopeOpen className="text-gray-400" />}
              </div>
            ))}
          </div>

          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            {selectedMessage ? (
              <div>
                <h2 className="text-xl font-semibold">{selectedMessage.subject}</h2>
                <p className="text-sm text-gray-500">From: {selectedMessage.sender}</p>
                <p className="mt-4 text-gray-700">{selectedMessage.content}</p>
                <div className="mt-6 flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-700 flex items-center">
                    <FaReply className="mr-2" /> Reply
                  </button>
                  <button className="text-red-500 hover:text-red-700 flex items-center" onClick={() => handleDelete(selectedMessage.id)}>
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center">Select a message to view</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesDashboard;