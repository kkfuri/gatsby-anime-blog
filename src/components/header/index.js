import React from "react"
import classnames from "classnames"
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "gatsby"

const ReturnArrow = () => (
  <Link
    to="/"
    aria-label="Retonar para página inicial"
    title="Retornar para página inicial"
  >
    <div className="p-4 absolute duration-150 hover:text-primary">
      <BsArrowLeft size="2em" />
    </div>
  </Link>
)

const Header = ({ minimalist, title, description }) => {
  const titleClasses = classnames(
    "font-display inline px-8 font-normal tracking-wide text-gray-900 duration-400 leading-tight",
    { "text-3xl": minimalist, "text-4xl md:text-6xl": !minimalist }
  )
  const subtitleClasses = classnames(
    "text-gray-600 font-body font-light lowercase tracking-tighter leading-none mt-1 duration-400",
    { "text-xl": minimalist, "text-3xl": !minimalist }
  )
  return (
    <div>
      {minimalist && <ReturnArrow />}
      <div className="text-center">
        <h1 className={titleClasses}>
          <Link to="/" aria-label="Retonar para página inicial">
            {title}
          </Link>
        </h1>
        {description && <h5 className={subtitleClasses}>{description}</h5>}
      </div>
    </div>
  )
}

export default Header
