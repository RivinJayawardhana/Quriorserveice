import { useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle, FaSearch } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", company: "TechCorp", role: "Admin", verified: true, status: "Active", image: "https://via.placeholder.com/40" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", company: "WebSolutions", role: "User", verified: true, status: "Active", image: "https://via.placeholder.com/40" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", company: "DesignHub", role: "Editor", verified: false, status: "Banned", image: "https://via.placeholder.com/40" },
  { id: 4, name: "John Doe", email: "john@example.com", company: "TechCorp", role: "Admin", verified: true, status: "Active", image: "https://via.placeholder.com/40" },
  { id: 5, name: "Jane Smith", email: "jane@example.com", company: "WebSolutions", role: "User", verified: true, status: "Active", image: "https://via.placeholder.com/40" },
  { id: 6, name: "Michael Brown", email: "michael@example.com", company: "DesignHub", role: "Editor", verified: false, status: "Banned", image: "https://via.placeholder.com/40" },
];

const Dashusers = () => {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="md:block hidden bg-gray-100">
        <Sidebar />
      </div>
      
      <div className="flex-1 p-5 bg-gray-100">
        {/* Navbar */}
        <Navbar />
        
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">User Management</h1>
        
     

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white bg-opacity-50 shadow-lg rounded-lg overflow-hidden text-gray-700">
            <thead>
              <tr className="bg-gray-200 bg-opacity-50 text-gray-700 text-left">
                <th className="py-3 px-4"><input type="checkbox" /></th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4 text-center">Verified</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())).map(user => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-200 bg-opacity-10 transition">
                  <td className="py-3 px-4"><input type="checkbox" /></td>
                  <td className="py-3 px-4 flex items-center space-x-3">
                    <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full border border-gray-300" />
                    <span>{user.name}</span>
                  </td>
                  <td className="py-3 px-4">{user.company}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4 text-center">
                    {user.verified ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-gray-400" />}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm ${user.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>{user.status}</span>
                  </td>
                  <td className="py-3 px-4 flex justify-center space-x-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(user.id)}>
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashusers;