import { FaChartBar, FaBell, FaCog, FaLock, FaTable, FaCalendar, FaEnvelope, FaClipboardList, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaChartBar /> },
    { name: "Analytics", icon: <FaClipboardList /> },
    { name: "Invoice", icon: <FaTable /> },
    { name: "Schedule", icon: <FaCalendar /> },
    { name: "Calendar", icon: <FaCalendar /> },
    { name: "Messages", icon: <FaEnvelope />, badge: 49 },
    { name: "Notification", icon: <FaBell /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Sign In", icon: <FaLock /> },
    { name: "Sign Up", icon: <FaShoppingCart /> },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-white to-gray-100 shadow-lg p-5 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          B
        </div>
        <h2 className="text-xl font-bold text-gray-500">Base</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`relative flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
              ${
                active === item.name
                  ? "text-[#8c4de3] font-semibold"
                  : "text-gray-500 text-lg hover:text-[#8c4de3]"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center transition-all duration-300
                ${active === item.name ? "text-[#8c4de3]" : "text-gray-500 group-hover:text-[#8c4de3]"}`}
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
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
