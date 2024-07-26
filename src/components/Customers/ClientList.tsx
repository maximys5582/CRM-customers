import { getImageByKey } from "../../getImageKey"
import TooltipComponent from "./TooltipComponent"
import MySelectProject from "./MySelectProject"
import { useEffect, useState } from "react"
import { json } from "react-router-dom"

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

interface ClientListProps {
  client: ClientListType[]
}

const ClientList: React.FC<ClientListProps> = ({ client }) => {
  const [buttonStates, setButtonStates] = useState<MyButtons[]>(
    () =>
      JSON.parse(localStorage.getItem("buttonStates") || "[]") ||
      client.map((item) => ({
        list: item.buttons?.list || false,
        light_bulb: item.buttons?.light_bulb || false,
        message: item.buttons?.message || false,
        loop: item.buttons?.loop || false,
      }))
  )

  const [actionClicks, setActionClicks] = useState<boolean[]>(
    () =>
      JSON.parse(localStorage.getItem("actionClicks") || "[]") ||
      Array(client.length).fill(true)
  )

  useEffect(() => {
    setButtonStates(
      client.map((item) => ({
        list: item.buttons?.list || true,
        light_bulb: item.buttons?.light_bulb || false,
        message: item.buttons?.message || false,
        loop: item.buttons?.loop || false,
      }))
    )
  }, [client])

  useEffect(() => {
    const savedButtonStates = localStorage.getItem("buttonStates")
    if (savedButtonStates) {
      setButtonStates(JSON.parse(savedButtonStates))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("buttonStates", JSON.stringify(buttonStates))
  }, [buttonStates])

  useEffect(() => {
    localStorage.setItem("actionClicks", JSON.stringify(actionClicks))
  }, [actionClicks])

  const handleClickAction = (index: number) => {
    setActionClicks((prevState) => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }

  const handleButtonAction = (
    clientIndex: number,
    buttonType: keyof MyButtons
  ) => {
    setButtonStates((prevState) => {
      const newState = [...prevState]
      if (!newState[clientIndex]) {
        newState[clientIndex] = {
          list: false,
          light_bulb: false,
          message: false,
          loop: false,
        }
      }
      newState[clientIndex] = {
        ...newState[clientIndex],
        [buttonType]: !newState[clientIndex][buttonType],
      }
      return newState
    })
  }

  return (
    <>
      <div className="table_titles">
        <p className="table_titles__title">Customers</p>
        <p className="table_titles__title">type</p>
        <p className="table_titles__title">responsible</p>
        <p className="table_titles__title">date</p>
        <p className="table_titles__title">employees</p>
        <p className="table_titles__title">consumer</p>
        <p className="table_titles__title">cost</p>
        <p className="table_titles__title">equity</p>
        <p className="table_titles__title">project</p>
        <p className="table_titles__title">Action</p>
      </div>

      <div className="List-customer">
        {client.map((item, index) => (
          <div className="table" key={index}>
            <div className="client--component">
              <strong>
                {item.clients?.firstName} {item.clients?.lastName}
              </strong>
            </div>

            <div className={"client--component"}>
              <p
                className={
                  item.type.title === "SFF" ? "qwe color-SFF" : "qwe color-SA"
                }
              >
                {item.type.title}
              </p>

              {item.type.title === "SFF" ? (
                ""
              ) : (
                <TooltipComponent client={item.type} />
              )}
            </div>

            <div className="client--component" style={{ color: "#CCCCCC" }}>
              {item.responsible.img ? (
                <img src={item.responsible.img} alt="" />
              ) : (
                <span>{item.responsible.name}</span>
              )}
            </div>

            <div className="client--component __svg">
              {getImageByKey("date_svg")} {item.date}
            </div>

            <div className="client--component __svg">
              {getImageByKey("user_svg")} {item.employee}
            </div>

            <div className="client--component __svg">
              {getImageByKey("users")} <span>{item.user}</span>
              <span style={{ color: "#CCCCCC" }}>out of 200</span>
            </div>

            <div className="client--component __svg">
              {getImageByKey("euro_svg")} {item.product} €
            </div>

            <div className="client--component __svg">
              {getImageByKey("euro_svg")}
              {item.load} Mio.
            </div>

            <div className="client--component __svg">
              <div style={{ position: "relative" }}>
                <MySelectProject options={item.project} type={item.type} />
              </div>
            </div>
            <div className="client--component">
              <div
                onClick={() => handleClickAction(index)}
                className={
                  actionClicks[index]
                    ? "action action_false"
                    : "action action_true"
                }
              >
                {actionClicks[index]
                  ? getImageByKey("check_mark")
                  : getImageByKey("ads_icon")}
              </div>
            </div>
            <div className="client_buttons">
              {item.buttons && (
                <>
                  {item.buttons.list !== undefined && (
                    <div
                      onClick={() => handleButtonAction(index, "list")}
                      className={
                        buttonStates[index]?.list
                          ? "client_buttons__button client_buttons__button__active"
                          : "client_buttons__button"
                      }
                    >
                      {getImageByKey("list")}
                    </div>
                  )}
                  {item.buttons.light_bulb !== undefined && (
                    <div
                      onClick={() => handleButtonAction(index, "light_bulb")}
                      className={
                        buttonStates[index]?.light_bulb
                          ? "client_buttons__button client_buttons__button__active"
                          : "client_buttons__button"
                      }
                    >
                      {getImageByKey("light_bulb")}
                    </div>
                  )}
                  {item.buttons.message !== undefined && (
                    <div
                      onClick={() => handleButtonAction(index, "message")}
                      className={
                        buttonStates[index]?.message
                          ? "client_buttons__button client_buttons__button__active"
                          : "client_buttons__button"
                      }
                    >
                      {getImageByKey("message")}
                    </div>
                  )}
                  {item.buttons.loop !== undefined && (
                    <div
                      onClick={() => handleButtonAction(index, "loop")}
                      className={
                        buttonStates[index]?.loop
                          ? "client_buttons__button client_buttons__button__active"
                          : "client_buttons__button"
                      }
                    >
                      {getImageByKey("loop")}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ClientList
