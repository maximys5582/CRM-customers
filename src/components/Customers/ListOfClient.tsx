import React, { useMemo, useState, useContext } from "react"
import ClientList from "./ClientList"
import { clientArray } from "../../clientArray/clientArray"
import { ModalContext } from "../../context/ModalContext"
import Modal from "./Modal"
import CreateCustomers from "./CreateCustomers"
import PostFilter from "../PostFilter"

interface MySelectProjectType {
  leftText: string
  new: boolean
  projectCompletion: number
  icon: any
}

interface MyButtons {
  list: boolean
  light_bulb: boolean
  message: boolean
  loop: boolean
}

interface ClientListType {
  clients: {
    firstName: string
    lastName: string
  }
  type: {
    title: string
    typeSubscribe: string
    subscriptionDuration: string
    userPlaces: number
    paymentProcedure: string
    generalExpenses: number
  }
  responsible: {
    img: string
    name: string
  }
  date: string
  employee: number
  user: number
  product: number
  load: number
  project: MySelectProjectType[]
  buttons: MyButtons
}

const ListOfClient: React.FC = () => {
  const { modal, open, close } = useContext(ModalContext)
  const [filter, setFilter] = useState({ sort: "", query: "", order: "asc" })
  const [clients, setClients] = useState<ClientListType[]>(clientArray)

  const createHandler = (newCustomer: ClientListType) => {
    setClients([...clients, newCustomer])
    close()
  }

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...clients].sort((a, b) => {
        const aValue = a[filter.sort as keyof ClientListType]
        const bValue = b[filter.sort as keyof ClientListType]

        if (typeof aValue === "number" && typeof bValue === "number") {
          return filter.order === "asc" ? aValue - bValue : bValue - aValue
        }
        if (typeof aValue === "string" && typeof bValue === "string") {
          return filter.order === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue)
        }
        return 0
      })
    }
    return clients
  }, [filter.sort, filter.order, clients])

  const sortedAndSearchProducts = useMemo(() => {
    return sortedPost.filter((client) =>
      client.clients.firstName
        .toLowerCase()
        .includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPost])

  return (
    <div className="ListOfClient">
      <div className="ListOfClient--top">
        <div style={{ display: "flex" }}>
          <span className="title">List of client</span>
          <span className="count">{clients.length}</span>
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
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>
        {sortedAndSearchProducts.length ? (
          <ClientList client={sortedAndSearchProducts} />
        ) : (
          <h1>Не найдено!</h1>
        )}

        {modal && (
          <Modal title="Create new customer" onClose={close}>
            <CreateCustomers onCreate={createHandler} />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default ListOfClient
