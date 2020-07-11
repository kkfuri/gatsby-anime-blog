import React from "react"
import { Link } from "gatsby"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import Img from "gatsby-image"

const NavigatePost = ({ title, slug, image, prev, next }) => {
  return (
    <Link to={`/${slug}`} className="group hover:text-primary">
      <div className="transform hover:scale-110 duration-150">
        <span className="flex items-center space-x-4 justify-center mb-2 text-gray-900">
          {next && (
            <>
              <p>post mais antigo</p>
              <BsArrowRight />
            </>
          )}
          {prev && (
            <>
              <BsArrowLeft />
              <p>post mais recente</p>
            </>
          )}
        </span>
        <div className="p-4 rounded cursor-pointer max-w-xs w-full">
          <Img
            fluid={image}
            className="rounded h-40 w-full"
            alt={`Ir para página do post ${title}`}
          />
          <h4 className="hidden md:block md:text-xl lg:text-2xl font-display text-center">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default NavigatePost
