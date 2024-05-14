import React, { useEffect, useState } from "react"

interface Customer {
  // Определите тип данных для объекта клиента
}

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])

  const addCustomer = (customer: Customer) => {
    setCustomers((prev) => [...prev, customer])
  }

  useEffect(() => {
    console.log("Customers updated:", customers)
  }, [customers]) // Зависимость от customers

  return { customers, addCustomer }
}
