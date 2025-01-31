import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ReportsChart from "../components/ReportsChart";
import AnalyticsChart from "../components/AnalyticsChart";
import { FaHeart, FaBox, FaShoppingBag, FaBriefcase } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
  <Sidebar />
  <div className="flex-1 p-10 bg-white bg-opacity-90 rounded-xl shadow-xl backdrop-blur-lg">
    <Navbar />
    <div className="grid grid-cols-4 gap-8 my-8">
      {/* Card 1 */}
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3">
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiStack-root bg-white bg-opacity-80 border-2 border-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <div className="MuiStack-root p-4 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--mage" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.19 12.683c-2.5 5.41-8.62 8.2-8.88 8.32a.85.85 0 0 1-.62 0c-.25-.12-6.38-2.91-8.88-8.32c-1.55-3.37-.69-7 1-8.56a4.93 4.93 0 0 1 4.36-1.05a6.16 6.16 0 0 1 3.78 2.62a6.15 6.15 0 0 1 3.79-2.62a4.93 4.93 0 0 1 4.36 1.05c1.78 1.56 2.65 5.19 1.09 8.56"></path>
            </svg>
            <h5 className="MuiTypography-root MuiTypography-h5 text-xl font-semibold text-blue-700 mt-4">178+</h5>
            <p className="MuiTypography-root MuiTypography-body2 text-sm text-gray-500">Save Products</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3">
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiStack-root bg-white bg-opacity-80 border-2 border-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <div className="MuiStack-root p-4 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--solar" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 4.75h-1a.25.25 0 0 0-.25.25v1H14c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h1.25V5c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V2a.75.75 0 0 1 .75-.75M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></path>
            </svg>
            <h5 className="MuiTypography-root MuiTypography-h5 text-xl font-semibold text-yellow-700 mt-4">20+</h5>
            <p className="MuiTypography-root MuiTypography-body2 text-sm text-gray-500">Stock Products</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3">
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiStack-root bg-white bg-opacity-80 border-2 border-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <div className="MuiStack-root p-4 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--solar" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667c.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079S18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143c.606-.496 1.396-.63 2.693-.667M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></path>
            </svg>
            <h5 className="MuiTypography-root MuiTypography-h5 text-xl font-semibold text-red-700 mt-4">190+</h5>
            <p className="MuiTypography-root MuiTypography-body2 text-sm text-gray-500">Sales Products</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3">
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiStack-root bg-white bg-opacity-80 border-2 border-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
          <div className="MuiStack-root p-4 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="2em" height="2em" viewBox="0 0 20 20">
              <g fill="currentColor">
                <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443q.857.083 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54c-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41 41 0 0 1 6 4.193zm6.5 0v.325a42 42 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zm-3.75 3.347c-1.089 0-2.05-.157-3.17-.404c.114.301.237.599.371.895c1.646.16 3.26.316 4.88.468c-.075-.32-.141-.648-.204-.979c-1.02-.193-2.02-.309-3.08-.308zM10 6.625z" clip-rule="evenodd"></path>
              </g>
            </svg>
            <h5 className="MuiTypography-root MuiTypography-h5 text-xl font-semibold text-purple-700 mt-4">50+</h5>
            <p className="MuiTypography-root MuiTypography-body2 text-sm text-gray-500">Purchase Products</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  

  );
};

export default Dashboard;
