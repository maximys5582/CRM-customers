import React from "react"
import MySelect from "./MySelect"

const PostFilter = ({ filter, setFilter }: any) => {
  return (
    <>
      <input
        className="searchCustomers"
        value={filter.query}
        placeholder="Suche nach Unternehmen oder Projekten"
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting"
        options={[
          { value: "product", name: "Cost of the project" },
          { value: "date", name: "Date" },
        ]}
      />

      <MySelect
        value={filter.order}
        onChange={(selectedOrder) =>
          setFilter({ ...filter, order: selectedOrder })
        }
        defaultValue="Order"
        options={[
          { value: "asc", name: "Ascending" },
          { value: "desc", name: "Descending" },
        ]}
      />
    </>
  )
}

export default PostFilter
