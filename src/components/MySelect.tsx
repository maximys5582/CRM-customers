import React from "react"

// Определение типа для опций селектора
interface Option {
  value: string | number
  name: string
}

// Определение типа для пропсов компонента
interface MySelectProps {
  options: Option[]
  defaultValue: string
  value: string | number
  onChange: (value: string | number) => void
}

const MySelect: React.FC<MySelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="custom-select"
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect
