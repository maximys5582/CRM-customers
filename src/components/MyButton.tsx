import React from "react"

interface MyButtonProps {
  butTitle: string
  onClick: any
}

const MyButton: React.FC<MyButtonProps> = ({ butTitle, onClick }) => {
  return (
    <button type="submit" className="Mybtn" onClick={onClick}>
      {butTitle}
    </button>
  )
}

export default MyButton
