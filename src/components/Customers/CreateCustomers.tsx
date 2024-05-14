import React, { useState } from "react"
import MyInput from "../MyInput"
import MyButton from "../MyButton"
import { getImageByKey } from "../../getImageKey"

interface CreateCustomerProps {
  onCreate: (customer: any) => void // Ваш тип данных для объекта клиента
}

const CreateCustomers: React.FC<CreateCustomerProps> = ({ onCreate }) => {
  const [client, setClient] = useState({
    firstName: "миша",
    lastName: "рассказов",
  })
  const [responsible, setResponsible] = useState("шелдон")
  const [date, setDate] = useState("22.22.2222")
  const [employee, setEmployee] = useState("113")
  const [user, setUser] = useState("145")
  const [load, setLoad] = useState("96")
  const [product, setProduct] = useState("30000")
  const [projectCompletion, setProjectCompletion] = useState("")
  const [customerType, setCustomerType] = useState("")
  const [newProduct, setNewProduct] = useState("")

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerType(e.target.value)
  }

  const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newCustomer = {
      id: Date.now(), // Замените на генератор уникальных идентификаторов, если необходимо
      clients: client,
      type: {
        title: customerType,
        typeSubscribe: "",
        subscriptionDuration: "",
        userPlaces: 0,
        paymentProcedure: "",
        generalExpenses: 0,
      },
      responsible: { img: getImageByKey("avatar"), name: responsible },
      date: date,
      employee: parseInt(employee, 10),
      user: parseInt(user, 10),
      load: parseInt(load, 10),
      product: parseInt(product, 10),
      project: [
        {
          leftText: "New project",
          new: newProduct === "Yes",
          projectCompletion: parseInt(projectCompletion, 10),
          icon: getImageByKey("euro_svg"),
        },
      ],
      actions: false,
      buttons: {
        list: true,
        light_bulb: true,
        message: false,
        loop: true,
      },
    }
    onCreate(newCustomer)
    // Сброс значений полей формы
    setClient({ firstName: "", lastName: "" })
    setResponsible("")
    setDate("")
    setEmployee("")
    setUser("")
    setLoad("")
    setProduct("")
    setProjectCompletion("")
    setCustomerType("")
    setNewProduct("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        placeholder={"FirstName"}
        value={client.firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setClient({ ...client, firstName: e.target.value })
        }
      />
      <MyInput
        placeholder={"LastName"}
        value={client.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setClient({ ...client, lastName: e.target.value })
        }
      />

      <label>Type</label>
      <div className="radio-group">
        <div className="radio">
          <label>
            <input
              type="radio"
              name="customerType"
              value="SFF"
              checked={customerType === "SFF"}
              onChange={handleTypeChange}
            />
            SFF
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="customerType"
              value="SA"
              checked={customerType === "SA"}
              onChange={handleTypeChange}
            />
            SA
          </label>
        </div>
      </div>

      <MyInput
        placeholder={"Responsible"}
        value={responsible}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setResponsible(e.target.value)
        }
      />
      <MyInput
        placeholder={"Date"}
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDate(e.target.value)
        }
      />
      <MyInput
        placeholder={"Employee"}
        value={employee}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmployee(e.target.value)
        }
      />
      <MyInput
        placeholder={"User"}
        value={user}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUser(e.target.value)
        }
      />
      <MyInput
        placeholder={"Load"}
        value={load}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLoad(e.target.value)
        }
      />
      <MyInput
        placeholder={"Product"}
        value={product}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setProduct(e.target.value)
        }
      />

      <label>New project</label>
      <div className="radio-group">
        <div className="radio">
          <label>
            <input
              type="radio"
              name="newProduct"
              value="Yes"
              checked={newProduct === "Yes"}
              onChange={handleNewProductChange}
            />
            Yes
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              name="newProduct"
              value="No"
              checked={newProduct === "No"}
              onChange={handleNewProductChange}
            />
            No
          </label>
        </div>
      </div>

      <MyButton butTitle="Create" onClick={handleSubmit} />
    </form>
  )
}

export default CreateCustomers
