import React from "react"

interface MyInputProps {
  placeholder: string
  value: any
  onChange: any
}

const MyInput: React.FC<MyInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div>
      {/* {getImageByKey("personSvg")} */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="MyInput"
      />
    </div>
  )
}

export default MyInput
