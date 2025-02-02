
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashusers from "./pages/Dashusers"
import DashInvoices from "./pages/Dashinvoices";
import DashOrders from "./pages/Dashorders";
import DashProducts from "./pages/Dashproducts";
import MessagesDashboard from "./pages/massages";
import Login from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<Dashusers/>} />
        <Route path="/invoice" element={<DashInvoices/>} />
        <Route path="/orders" element={<DashOrders/>} />
        <Route path="/products" element={<DashProducts/>} />
        <Route path="/massages" element={<MessagesDashboard/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}


