import React, { useState } from "react"

const updateClientArray = () => {
  const [clientArray, setClientArray] = useState()

  const createHandler = (newCustomer: any[]) => {
    // Обновление массива clientArray с помощью функции setClientArray
    setClientArray((prevArray) => [...prevArray, newCustomer])
    // Закрытие модального окна
    close()
  }
}

export default updateClientArray
