// В файле ListOfClient.tsx

import React, { useState } from "react"
import ClientList from "./ClientList"
import { clientArray } from "../../clientArray/clientArray"
import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"
import Modal from "./Modal"
import CreateCustomers from "./CreateCustomers"

const ListOfClient = () => {
  const { modal, open, close } = useContext(ModalContext)
  const [clients, setClients] = useState(clientArray)

  const createHandler = (newCustomer: any) => {
    setClients([...clients, newCustomer])
    close()
  }

  return (
    <div className="ListOfClient">
      <div className="ListOfClient--top">
        <div style={{ display: "flex" }}>
          <span className="title">List of client</span>
          <span className="count">6430</span>
        </div>

        <div className="add--partner">
          <button className="add--partner--btn" onClick={open}>
            <strong>+ </strong>New Partner
          </button>
        </div>
      </div>

      <div style={{ border: "1px solid #CCCCCC" }} />

      <div className="ListOfClient--main">
        <div className="SearchAndFilters">
          <input
            type="text"
            className="searchCustomers"
            placeholder="Search for Companies or Projects"
          />

          <label className="custom-select">
            <select id="styledSelect1" name="options">
              <option value="">Any recommendation</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </label>

          <label className="custom-select">
            <select id="styledSelect1" name="options">
              <option value="">All types</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </label>
        </div>

        <div className="List-customer">
          <ClientList client={clients} />
        </div>

        {modal && (
          <Modal title="Create new customer" onClose={() => close()}>
            <CreateCustomers onCreate={createHandler} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default ListOfClient
