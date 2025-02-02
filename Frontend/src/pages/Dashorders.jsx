import { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const orderData = [
  { id: 1, orderNumber: "ORD123", customer: "John Doe", totalAmount: "$500", status: "Processing", tracking: "In transit", date: "2025-01-15" },
  { id: 2, orderNumber: "ORD124", customer: "Jane Smith", totalAmount: "$300", status: "Shipped", tracking: "Out for delivery", date: "2025-01-16" },
  { id: 3, orderNumber: "ORD125", customer: "Michael Brown", totalAmount: "$150", status: "Delivered", tracking: "Delivered", date: "2025-01-17" },
];

const DashOrders = () => {
  const [orders, setOrders] = useState(orderData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newTracking, setNewTracking] = useState("");

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const handleTrackingUpdate = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, tracking: newTracking } : order
    ));
    setSelectedOrder(null);
    setNewTracking("");
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

        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Order Management</h1>

        {/* Search Bar */}
        <div className="mb-4 flex items-center bg-white shadow rounded-lg px-4 py-2 w-full max-w-md">
          <FaSearch className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search order..." 
            className="w-full outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white bg-opacity-50 shadow-lg rounded-lg overflow-hidden text-gray-700">
            <thead>
              <tr className="bg-gray-200 bg-opacity-50 text-gray-700 text-left">
                <th className="py-3 px-4"><input type="checkbox" /></th>
                <th className="py-3 px-4">Order Number</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Tracking</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.filter(order => order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())).map(order => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-200 bg-opacity-10 transition">
                  <td className="py-3 px-4"><input type="checkbox" /></td>
                  <td className="py-3 px-4">{order.orderNumber}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.totalAmount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${order.status === "Processing" ? "bg-blue-100 text-blue-600" : order.status === "Shipped" ? "bg-yellow-100 text-yellow-600" : order.status === "Delivered" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{order.tracking}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4 flex justify-center space-x-3">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => setSelectedOrder(order.id)}>
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(order.id)}>
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Update Tracking Section */}
        {selectedOrder && (
          <div className="mt-6 p-5 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Update Tracking</h2>
            <input
              type="text"
              placeholder="Enter new tracking status"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={newTracking}
              onChange={(e) => setNewTracking(e.target.value)}
            />
            <button 
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => handleTrackingUpdate(selectedOrder)}
            >
              Update Tracking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashOrders;
