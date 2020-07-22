import React from "react"
import { Link } from "gatsby"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import Img from "gatsby-image"

const NavigatePost = ({ title, slug, image, prev, next }) => {
  return (
    <Link to={`/${slug}`} className="group hover:text-primary">
      <div className="inline-block duration-150 transform hover:scale-110">
        <span className="flex items-center justify-center mb-2 space-x-4 text-gray-900">
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
        <div className="h-40 max-w-xs p-4 rounded cursor-pointer">
          <Img
            fluid={image}
            className="h-40 rounded"
            style={{ width: 288 }}
            alt={`Ir para página do post ${title}`}
          />
          <h4 className="hidden text-center md:block md:text-xl lg:text-xl font-display">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default NavigatePost
