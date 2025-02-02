
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashusers from "./pages/Dashusers"
import DashInvoices from "./pages/Dashinvoices";

export default function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<Dashusers/>} />
        <Route path="/invoice" element={<DashInvoices/>} />
      </Routes>
    </BrowserRouter>
  )
}


