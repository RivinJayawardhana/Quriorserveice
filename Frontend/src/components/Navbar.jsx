import { FaBars, FaSearch, FaBell, FaSignOutAlt, FaQuestionCircle, FaExchangeAlt, FaCog, FaUser } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [notifications, setNotifications] = useState(2);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    name: "English",
    code: "eng",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
  });

  const languages = [
    { name: "English", code: "eng", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" },
    { name: "বাংলা", code: "ban", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
    { name: "中文", code: "zh", flag: "https://img.goodfon.com/original/5000x3333/8/38/china-flag-flag-of-china-east-asia-chinese-chinese-flag-prc.jpg" },
    { name: "Türkçe", code: "tr", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
    { name: "Dutch", code: "nld", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" }
  ];

  const dropdownRef = useRef(null);
  const profileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center bg-white px-6 py-3 relative">
      {/* Sidebar Toggle and Search Bar */}
      <div className="flex items-center space-x-4 w-1/2">
        <FaBars className="text-gray-600 text-xl cursor-pointer" />
        <div className="relative flex-grow">
          <FaSearch className="absolute right-80 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className={`w-md pl-4 pr-12 py-2 rounded-md focus:outline-none transition-shadow ${searchFocus ? "border shadow-sm" : "border-transparent"}`}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-8">
        {/* Language Selection */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={selectedLang.flag}
            alt={selectedLang.name}
            className="w-7 h-5 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2 w-52">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedLang(lang);
                    setShowDropdown(false);
                  }}
                >
                  {/* Left Section: Flag and Language Name */}
                  <div className="flex items-center space-x-2">
                    <img src={lang.flag} alt={lang.name} className="w-6 h-4" />
                    <span>{lang.name}</span>
                  </div>

                  {/* Right Section: Country Code */}
                  <span className="text-gray-500">{lang.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {notifications}
            </span>
          )}
        </div>

        {/* User Profile */}
        <div className="relative" ref={profileMenuRef}>
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt="User Profile"
            className="w-11 h-11 rounded-full border cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-3 w-56 text-sm">
              {/* Profile Header */}
              <div className="flex items-center space-x-3 p-2 border-b">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Easin Arafat</p>
                  <p className="text-sm text-gray-500">easin@example.com</p>
                </div>
              </div>

              {/* Menu Items with Icons */}
              <div className="mt-2 space-y-0">
                <p className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <FaUser className="text-gray-600" />
                  <span>View Profile</span>
                </p>
                <p className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <FaCog className="text-gray-600" />
                  <span>Account Settings</span>
                </p>
                <p className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <FaBell className="text-gray-600" />
                  <span>Notifications</span>
                </p>
                <p className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <FaExchangeAlt className="text-gray-600" />
                  <span>Switch Account</span>
                </p>
                <p className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <FaQuestionCircle className="text-gray-600" />
                  <span>Help Center</span>
                </p>
                <p className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer text-red-600">
                  <FaSignOutAlt className="text-red-600" />
                  <span>Logout</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
