import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <div className="flex items-center space-x-2">
        <FaSearch />
        <input type="text" placeholder="Search" className="outline-none border-b border-gray-300 px-2" />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600" />
        <FaUserCircle className="text-gray-600" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
