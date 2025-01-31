import { FaChartBar, FaBell, FaCog, FaLock, FaTable, FaCalendar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5">
      <h2 className="text-xl font-bold text-blue-500">Base</h2>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <FaChartBar />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <FaTable />
            <span>Reports</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <FaCalendar />
            <span>Calendar</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <FaBell />
            <span>Notifications</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <FaCog />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
            <FaLock />
            <span>Security</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
