import React, { useState } from "react"
import { getImageByKey } from "../../getImageKey"

interface TooltipProps {
  children: React.ReactNode
  text: () => JSX.Element
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className="tooltip">{text()}</div>}
    </div>
  )
}

interface ClientType {
  title: string
  typeSubscribe: string
  subscriptionDuration: string
  userPlaces: number
  paymentProcedure: string
  generalExpenses: number
}

interface TooltipComponentProps {
  client: ClientType
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  client,
}: TooltipComponentProps) => {
  const textContent = () => {
    return (
      <div>
        <div className="Tooltip_line">
          <span className="Tooltip_line__title" style={{ color: "#DD8447" }}>
            <strong>{client.typeSubscribe}</strong>
          </span>
          <span> Art des Abonnements</span>
        </div>
        <div className="Tooltip_line">
          <span className="Tooltip_line__title">
            <strong>{client.subscriptionDuration}</strong>
          </span>{" "}
          <span>Abonnement</span>
        </div>
        <div className="Tooltip_line">
          <span className="Tooltip_line__title">
            <strong>{client.userPlaces}</strong>
          </span>{" "}
          <span>Benutzersitze</span>
        </div>
        <div className="Tooltip_line">
          <span className="Tooltip_line__title">
            <strong>{client.paymentProcedure}</strong>
          </span>{" "}
          <span>Zahlungsreihenfolge</span>
        </div>
        <div className="Tooltip_line">
          <span className="Tooltip_line__title">
            <strong>{client.generalExpenses}€</strong>
          </span>{" "}
          <span>Gesamtkosten</span>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: "relative" }}>
      <Tooltip text={textContent}>{getImageByKey("warning")}</Tooltip>
    </div>
  )
}

export default TooltipComponent
