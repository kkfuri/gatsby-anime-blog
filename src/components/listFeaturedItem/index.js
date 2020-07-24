import React from "react"

const ListFeaturedItem = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center my-12 md:items-start md:flex-row">
      <h3 className="w-full md:hidden" style={{ marginTop: 0 }}>
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className="max-w-xs rounded shadow"
        style={{ margin: 0 }}
      />
      <div className="space-y-2 md:ml-4">
        <h3 className="hidden md:block" style={{ marginTop: 0 }}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ListFeaturedItem
