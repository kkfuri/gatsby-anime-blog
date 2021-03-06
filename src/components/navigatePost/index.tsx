import React from "react"
import { Link } from "gatsby"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import Img, { FluidObject } from "gatsby-image"

interface NavigatePostProps {
  title: string
  slug: string
  image: FluidObject
  prev?: boolean
  next?: boolean
}

const NavigatePost = ({
  title,
  slug,
  image,
  prev,
  next,
}: NavigatePostProps) => {
  return (
    <Link to={`/${slug}`} className="group hover:text-accent">
      <div className="inline-block duration-150">
        <span className="flex items-center justify-center mb-2 space-x-4 text-primary">
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
        <div className="max-w-xs p-4 rounded cursor-pointer">
          <Img
            fluid={image}
            className="mb-2 rounded-sm shadow"
            style={{ width: 288 }}
            alt={`Ir para página do post ${title}`}
          />
          <h4 className="hidden text-center md:block md:text-lg font-display">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default NavigatePost
