import React, { useEffect, useState } from "react"
import ListOfClient from "../components/Customers/ListOfClient"

const Customers = () => {
  const [activeItem, setActiveItem] = useState("")
  const [listOfClient, setListOfClient] = useState(false)

  const toggleListOfClientVisibility = () => {
    setListOfClient(!listOfClient)
  }

  const handleClick = (item: string) => {
    setActiveItem(item === activeItem ? "" : item)
    localStorage.setItem("activeItem", item === activeItem ? "" : item)
    localStorage.setItem("activePageCustomers", item)

    if (item === "clients") {
      toggleListOfClientVisibility()
    } else if (item === "todo" && activeItem === "clients") {
      toggleListOfClientVisibility()
    }
  }

  useEffect(() => {
    const savedActiveItem = localStorage.getItem("activeItem")
    if (savedActiveItem) {
      setActiveItem(savedActiveItem)
      if (savedActiveItem === "clients") {
        setListOfClient(true)
      }
    }
  }, [])

  return (
    <div className="Customers">
      <div className="Navigation">
        <div className="Navigation--top">
          <p className="Navigation--title-customers">customers</p>
        </div>
        <div className="Navigation--other">
          <p className="Navigation--title-navigation">Navigation</p>

          <div className="change--exercise">
            <p
              className={activeItem === "clients" ? "active" : ""}
              onClick={() => handleClick("clients")}
            >
              List of clients
            </p>
            <p
              className={activeItem === "todo" ? "active" : ""}
              onClick={() => handleClick("todo")}
            >
              To-Do-List
            </p>
          </div>
        </div>
      </div>
      {listOfClient && (
        <div>
          <ListOfClient />
        </div>
      )}
    </div>
  )
}

export default Customers
