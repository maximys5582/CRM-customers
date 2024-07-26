import React from "react"
import { getImageByKey } from "../getImageKey"

interface MyInputProps {
  placeholder: string
  value: any
  onChange: any
  svg: string
  type: string
}

const MyInput: React.FC<MyInputProps> = ({
  placeholder,
  value,
  onChange,
  svg,
  type,
}) => {
  return (
    <div className="MyInputContainer">
      <div className="MyInputSvg">{getImageByKey(svg)}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="MyInput"
      />
    </div>
  )
}

export default MyInput
