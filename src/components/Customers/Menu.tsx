import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getImageByKey } from "../../getImageKey"

const Menu = () => {
  const [activeItemMenu, setActiveItemMenu] = useState(() => {
    // Инициализация состояния из localStorage
    return localStorage.getItem("activeItemMenu") || ""
  })

  useEffect(() => {
    const savedActiveItemMenu = localStorage.getItem("activeItemMenu")
    if (savedActiveItemMenu) {
      setActiveItemMenu(savedActiveItemMenu)
    }
  }, [])

  const handleClick = (item: string) => {
    setActiveItemMenu(item)
    localStorage.setItem("activeItemMenu", item)
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
          <Link
            to="/hr"
            className={activeItemMenu === "hr" ? "active" : ""}
            onClick={() => handleClick("hr")}
          >
            HR
          </Link>
          <Link
            to="/revenue"
            className={activeItemMenu === "revenue" ? "active" : ""}
            onClick={() => handleClick("revenue")}
          >
            Revenue
          </Link>
          <Link
            to="/calendar"
            className={activeItemMenu === "calendar" ? "active" : ""}
            onClick={() => handleClick("calendar")}
          >
            Calendar
          </Link>
          <Link
            to="/bills"
            className={activeItemMenu === "bills" ? "active" : ""}
            onClick={() => handleClick("bills")}
          >
            Bills
          </Link>
          <Link
            to="/customers"
            className={activeItemMenu === "customers" ? "active" : ""}
            onClick={() => handleClick("customers")}
          >
            Customers
          </Link>
          <Link
            to="/doc"
            className={activeItemMenu === "doc" ? "active" : ""}
            onClick={() => handleClick("doc")}
          >
            Doc
          </Link>
          <Link
            to="/settings"
            className={activeItemMenu === "settings" ? "active" : ""}
            onClick={() => handleClick("settings")}
          >
            Settings
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Menu
