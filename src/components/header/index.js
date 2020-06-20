import React from "react"
import classnames from "classnames"

const Header = ({ minimalist, title, description }) => {
  const titleClasses = classnames(
    "font-display font-normal tracking-wide text-gray-900 duration-400 leading-tight",
    { "text-3xl": minimalist, "text-4xl md:text-6xl": !minimalist }
  )
  const subtitleClasses = classnames(
    "text-gray-600 font-body font-light lowercase tracking-tighter leading-none mt-1 duration-400",
    { "text-xl": minimalist, "text-3xl": !minimalist }
  )
  return (
    <div className="text-center">
      <a href="/" aria-label="Retonar para página inicial">
        <h2 className={titleClasses}>{title}</h2>
      </a>
      {description && <h5 className={subtitleClasses}>{description}</h5>}
    </div>
  )
}

export default Header
