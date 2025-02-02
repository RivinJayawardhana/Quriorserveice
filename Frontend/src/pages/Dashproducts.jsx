import { useState } from "react";
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const productData = [
  { id: 1, name: "Courier Service", description: "Fast delivery within 24 hours.", image: "/images/quri.jpg" },
  { id: 2, name: "Package Tracking", description: "Track your packages in real-time.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Overnight Shipping", description: "Guaranteed delivery by the next day.", image: "https://via.placeholder.com/150" },
];

const DashProducts = () => {
  const [products, setProducts] = useState(productData);

  const handleAddService = () => {
    // Logic to add a new service (e.g., open a form or show a modal)
    console.log("Add New Service");
  };

  const handleEdit = (id) => {
    // Logic to edit a product
    console.log(`Edit service with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic to delete a product
    setProducts(products.filter(product => product.id !== id));
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

        <h1 className="text-2xl font-semibold mb-4 text-gray-700">Product Dashboard</h1>

        {/* Add Service Button */}
        <div className="mb-6">
          <button 
            onClick={handleAddService} 
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <FaPlusCircle className="mr-2" />
            Add Service
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 shadow rounded-lg hover:shadow-xl transition-all">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-500 mt-2">{product.description}</p>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between">
                <button 
                  onClick={() => handleEdit(product.id)} 
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleDelete(product.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashProducts;
