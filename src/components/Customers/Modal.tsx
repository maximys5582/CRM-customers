import React from "react"

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div onClick={onClose} className="Modal" />
      <div className="modalWindow">
        <h1 className="modalWindow_title">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default Modal
