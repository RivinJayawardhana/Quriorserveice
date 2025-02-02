
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashusers from "./pages/Dashusers"

export default function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<Dashusers/>} />
      </Routes>
    </BrowserRouter>
  )
}


