import React from "react"

function Tag({ children }) {
  return (
    <p className="inline mr-1 font-bold tracking-wider uppercase duration-75 cursor-pointer hover:text-primary-dark">
      {children}
    </p>
  )
}

export default Tag
