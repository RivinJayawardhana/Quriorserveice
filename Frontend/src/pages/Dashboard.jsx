import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ReportsChart from "../components/ReportsChart";
import AnalyticsChart from "../components/AnalyticsChart";
import { FaHeart, FaBox, FaShoppingBag, FaBriefcase } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar - Use Tailwind to hide it on mobile */}
      <div className="md:block hidden bg-gray-100">
        <Sidebar />
      </div>

      <div className="flex-1 p-5 bg-gray-100">
        {/* Navbar */}
        <Navbar/>

        {/* Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6 bg-gray-100">
          <Card icon={<FaHeart className="text-blue-600"/>} title="Save Products" count="178" bgColor="bg-blue-100" />
          <Card icon={<FaBox className="text-yellow-200" />} title="Stock Products" count="20" bgColor="bg-yellow-50" />
          <Card icon={<FaShoppingBag className="text-orange-300"/>} title="Sales Products" count="190" bgColor="bg-red-50" />
          <Card icon={<FaBriefcase  className="text-blue-600"/>} title="Job Applications" count="12" bgColor="bg-blue-100" />
        </div>


        {/* Charts - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ReportsChart />
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
