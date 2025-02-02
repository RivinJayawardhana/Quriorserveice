import { Link, useLocation } from "react-router-dom";
import { FaChartBar, FaBell, FaCog, FaLock, FaTable, FaCalendar, FaEnvelope, FaClipboardList, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const menuItems = [
    { name: "Dashboard", icon: <FaChartBar />, path: "/" },
    { name: "Users", icon: <FaClipboardList />, path: "/users" },
    { name: "Invoice", icon: <FaTable />, path: "/invoice" },
    { name: "Orders", icon: <FaCalendar />, path: "/orders" },
    { name: "Products", icon: <FaCalendar />, path: "/products" },
    { name: "Messages", icon: <FaEnvelope />, path: "/massages", badge: 49 },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
    { name: "Sign In", icon: <FaLock />, path: "/login" },
  
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-white to-gray-100 shadow-lg p-5 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          B
        </div>
        <h2 className="text-xl font-bold text-gray-400">Base</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                to={item.path}
                onClick={() => setActive(item.path)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
                ${
                  active === item.path
                    ? "text-[#8c4de3] font-semibold"
                    : "text-gray-400 text-lg hover:text-[#8c4de3]"
                }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center transition-all duration-300
                  ${active === item.path ? "text-[#8c4de3]" : "text-gray-400 group-hover:text-[#8c4de3]"}`}
                >
                  {item.icon}
                </div>
                <span>{item.name}</span>

                {/* Message Count Badge */}
                {item.badge && (
                  <span className="absolute right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
