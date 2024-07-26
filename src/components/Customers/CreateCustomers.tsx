import React, { useState } from "react"
import MyInput from "../MyInput"
import MyButton from "../MyButton"
import { getImageByKey } from "../../getImageKey"

interface CreateCustomerProps {
  onCreate: (customer: any) => void
}

const CreateCustomers: React.FC<CreateCustomerProps> = ({ onCreate }) => {
  const [client, setClient] = useState({
    firstName: "миша",
    lastName: "рассказов",
  })
  const [responsible, setResponsible] = useState("шелдон")
  const [date, setDate] = useState("22.22.2222")
  const [subscription, setSubscription] = useState("1 month")
  const [usPlaces, setUsPlaces] = useState(200)
  const [generalExpenses, setGeneralExpenses] = useState(500000)
  const [employee, setEmployee] = useState("113")
  const [user, setUser] = useState("145")
  const [load, setLoad] = useState("96")
  const [product, setProduct] = useState("30000")
  const [projectCompletion, setProjectCompletion] = useState("")
  const [customerType, setCustomerType] = useState("")
  const [newProduct, setNewProduct] = useState("")
  const [paymentProcedure, setPaymentProcedure] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerType(e.target.value)
  }

  const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct(e.target.value)
  }

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()

    if (
      !client.firstName ||
      !client.lastName ||
      !responsible ||
      !date ||
      !subscription ||
      !usPlaces ||
      !generalExpenses ||
      !employee ||
      !user ||
      !load ||
      !product ||
      !customerType ||
      !newProduct ||
      !paymentProcedure
    ) {
      setErrorMessage("Введите всю информацию")
      return
    }

    const newCustomer = {
      id: Date.now(),
      clients: client,
      type: {
        title: customerType,
        typeSubscribe: "STUDIO",
        subscriptionDuration: subscription,
        userPlaces: usPlaces,
        paymentProcedure: paymentProcedure,
        generalExpenses: generalExpenses,
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
        {
          leftText: "Other project",
          new: newProduct === "Yes",
          projectCompletion: parseInt(projectCompletion, 10),
          icon: getImageByKey("euro_svg"),
        },
        {
          leftText: "Projektname goes",
          new: false,
          projectCompletion: 82,
          icon: getImageByKey("euro_svg"),
        },
        {
          leftText: "Other project",
          new: false,
          projectCompletion: 82,
          icon: getImageByKey("euro_svg"),
        },
        {
          leftText: "Projektname goes",
          new: false,
          projectCompletion: 82,
          icon: getImageByKey("euro_svg"),
        },
        {
          leftText: "Other project",
          new: false,
          projectCompletion: 82,
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
    setClient({ firstName: "", lastName: "" })
    setResponsible("")
    setDate("")
    setSubscription("")
    setUsPlaces(0)
    setGeneralExpenses(0)
    setEmployee("")
    setUser("")
    setLoad("")
    setProduct("")
    setProjectCompletion("")
    setCustomerType("")
    setNewProduct("")
    setPaymentProcedure("")
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <MyInput
        svg="person"
        placeholder={"FirstName"}
        value={client.firstName}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setClient({ ...client, firstName: e.target.value })
        }
      />
      <MyInput
        svg="person"
        placeholder={"LastName"}
        value={client.lastName}
        type="text"
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
        svg="date"
        placeholder={"Subscription"}
        value={subscription}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSubscription(e.target.value)
        }
      />
      <MyInput
        svg="locale"
        placeholder={"User places"}
        type="text"
        value={usPlaces}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsPlaces(parseInt(e.target.value, 10))
        }
      />
      <label className="custom-select">
        <select
          value={paymentProcedure}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPaymentProcedure(e.target.value)
          }
        >
          <option value="">Payment procedure</option>
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </label>
      <MyInput
        svg="euro"
        placeholder={"General expenses"}
        type="text"
        value={generalExpenses}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setGeneralExpenses(parseInt(e.target.value, 10))
        }
      />
      <MyInput
        svg="staff"
        placeholder={"Responsible"}
        type="text"
        value={responsible}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setResponsible(e.target.value)
        }
      />
      <MyInput
        svg="date"
        placeholder={"Date"}
        type="date"
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDate(e.target.value)
        }
      />
      <MyInput
        svg="staff"
        placeholder={"Staff"}
        value={employee}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmployee(e.target.value)
        }
      />
      <MyInput
        svg="consumer"
        placeholder={"Consumer"}
        value={user}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUser(e.target.value)
        }
      />
      <MyInput
        svg="TheCostOfTheProject"
        placeholder={"Equity capital"}
        value={load}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLoad(e.target.value)
        }
      />
      <MyInput
        svg="TheCostOfTheProject"
        placeholder={"The cost of the project"}
        value={product}
        type="text"
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
