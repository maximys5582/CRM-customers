import React, { useState } from "react"
import { Link } from "react-router-dom"
import { getImageByKey } from "../../getImageKey"
import Customers from "../../pages/Customers"

const Menu = ({ showCustomers, setShowCustomers }: any) => {
  const toggleCustomersVisibility = () => {
    setShowCustomers(!showCustomers)
  }

  return (
    <div className="menu">
      <div className="menu--main">
        <div className="avatar">
          <img src={getImageByKey("avatar")} alt="avatar" />
          <p>ВЫ</p>
          <button>Logout</button>
        </div>
        <nav>
          <Link to="/hr">HR</Link>
          <Link to="/revenue">Revenue</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/bills">Bills</Link>
          <Link
            to="/customers"
            onClick={toggleCustomersVisibility}
            className={showCustomers ? "active" : ""}
          >
            Customers
          </Link>
          <Link to="/doc">Doc</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </div>
      {/* {showCustomers && <Customers />} */}
    </div>
  )
}

export default Menu
