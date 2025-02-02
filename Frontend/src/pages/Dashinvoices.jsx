import { useState } from "react";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const invoiceData = [
  { id: 1, invoiceNumber: "INV123", customer: "John Doe", amount: "$500", status: "Paid", date: "2025-01-15" },
  { id: 2, invoiceNumber: "INV124", customer: "Jane Smith", amount: "$300", status: "Pending", date: "2025-01-16" },
  { id: 3, invoiceNumber: "INV125", customer: "Michael Brown", amount: "$150", status: "Unpaid", date: "2025-01-17" },
];

const DashInvoices = () => {
  const [invoices, setInvoices] = useState(invoiceData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
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

        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Invoice Management</h1>

        {/* Search Bar */}
     
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white bg-opacity-50 shadow-lg rounded-lg overflow-hidden text-gray-700">
            <thead>
              <tr className="bg-gray-200 bg-opacity-50 text-gray-700 text-left">
                <th className="py-3 px-4"><input type="checkbox" /></th>
                <th className="py-3 px-4">Invoice Number</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.filter(invoice => invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase())).map(invoice => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-200 bg-opacity-10 transition">
                  <td className="py-3 px-4"><input type="checkbox" /></td>
                  <td className="py-3 px-4">{invoice.invoiceNumber}</td>
                  <td className="py-3 px-4">{invoice.customer}</td>
                  <td className="py-3 px-4">{invoice.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${invoice.status === "Paid" ? "bg-green-100 text-green-600" : invoice.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{invoice.date}</td>
                  <td className="py-3 px-4 flex justify-center space-x-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(invoice.id)}>
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

export default DashInvoices;
