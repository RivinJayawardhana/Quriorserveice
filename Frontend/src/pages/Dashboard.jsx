import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ReportsChart from "../components/ReportsChart";
import AnalyticsChart from "../components/AnalyticsChart";
import { FaHeart, FaBox, FaShoppingBag, FaBriefcase } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Navbar />
        <div className="grid grid-cols-4 gap-4 my-5">
          <Card icon={<FaHeart />} title="Save Products" count="178" color="border-blue-500" />
          <Card icon={<FaBox />} title="Stock Products" count="20" color="border-yellow-500" />
          <Card icon={<FaShoppingBag />} title="Sales Products" count="190" color="border-red-500" />
          <Card icon={<FaBriefcase />} title="Job Applications" count="12" color="border-purple-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ReportsChart />
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
