import { getImageByKey } from "../../getImageKey"
import TooltipComponent from "./TooltipComponent"
import MySelectProject from "./MySelectProject"
import { useState } from "react"  


interface MySelectProjectType {
  leftText: string;
  new: boolean;
  projectCompletion: number;
  icon: any;
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
  project: MySelectProjectType[],
  actions: boolean
}

interface ClientListProps {
  client: ClientListType[]
}



const ClientList: React.FC<ClientListProps> = ({ client }) => {
  const [actionClick, setActionClick] = useState(true)

  const handleClickAction = () => {
    setActionClick(!actionClick)
  }

  return (
    <div>
      {client.map((item, index) => (
        <div className="table" key={index}>
          <div className="client--component">
            <strong>
              {item.clients.firstName} {item.clients.lastName}
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
            {getImageByKey("user_svg")} {item.user}
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
              onClick={handleClickAction}
              className={
                item.actions ? "action action_false" : "action action_true"
              }
            >
              {item.actions
                ? getImageByKey("check_mark")
                : getImageByKey("ads_icon")}
            </div>
          </div>

          <div></div>
        </div>
      ))}
    </div>
  )
}

export default ClientList
