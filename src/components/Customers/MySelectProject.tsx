import React, { useState } from "react"
import { getImageByKey } from "../../getImageKey"

interface ClientType {
  title: string
}

interface MySelectProjectType {
  leftText: string
  new: boolean
  projectCompletion: number
  icon: any
}

interface MySelectProjectProps {
  options: MySelectProjectType[]
  type: ClientType
}

const MySelectProject: React.FC<MySelectProjectProps> = ({ options, type }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible((prew) => !prew)
  }

  if (!options || options.length === 0) {
    return null // Рендерим компонент пустым, если массив options не определен или пуст
  }

  return (
    <div
      className={isVisible ? "MySelectProject MSP_activ" : "MySelectProject"}
      onClick={toggleVisibility}
    >
      <span
        className={
          isVisible
            ? "MySelectProject_title MSP_title MSP_title"
            : "MySelectProject_title"
        }
      >
        {options.length > 0 && ( // Проверяем, что в массиве есть элементы
          <React.Fragment>
            {getImageByKey("project_svg")} Project
            <span>
              <p className={options[0].new ? "selectLine__new" : " "}>
                {options[0].new ? "New" : " "}
              </p>
            </span>
            <span className={isVisible ? "arrow arrow_active" : "arrow"}>
              {getImageByKey("arrow_down")}
            </span>
          </React.Fragment>
        )}
      </span>
      {isVisible && (
        <div className="selectContent">
          {options.map((option, index) => (
            <div key={index} className="selectLine">
              <span>{option.leftText}</span>
              <span>
                <p className={option.new ? "selectLine__new" : " "}>
                  {option.new ? "New" : " "}
                </p>
              </span>
              <span style={{ color: "#CCCCCC" }}>
                {type.title === "SFF" ? "SFF" : "SA"}
              </span>
              <span>{option.projectCompletion}%</span>
              <span>{option.icon}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MySelectProject
