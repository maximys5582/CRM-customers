import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Customers from "./pages/Customers"
import HR from "./pages/HR"
import Revenue from "./pages/Revenue"
import Calendar from "./pages/Calendar"
import Bills from "./pages/Bills"
import Doc from "./pages/Doc"
import Settings from "./pages/Settings"
import Menu from "./components/Customers/Menu"

function App() {
  const [showCustomers, setShowCustomers] = useState(false)

  return (
    <>
      <Menu showCustomers={showCustomers} setShowCustomers={setShowCustomers} />
      <Routes>
        {showCustomers && <Route path="/customers" element={<Customers />} />}
        <Route path="/hr" element={<HR />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App
