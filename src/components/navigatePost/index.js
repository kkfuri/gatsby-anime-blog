import React from "react"
import { Link } from "gatsby"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

const NavigatePost = ({ title, slug, image, prev, next }) => {
  return (
    <Link href={slug} className="group hover:text-primary">
      {next && (
        <span className="flex items-center space-x-4 justify-center mb-4">
          <p>Ir para post mais antigo</p> <BsArrowRight />
        </span>
      )}
      {prev && (
        <span className="flex items-center space-x-4 justify-center mb-4">
          <BsArrowLeft /> <p>Ir para post mais recente</p>
        </span>
      )}
      <div className="p-4 rounded shadow cursor-pointer max-w-xs">
        <img
          src={image}
          className="rounded"
          alt={`Ir para página do post ${title}`}
        />
        <h4 className="text-2xl">{title}</h4>
      </div>
    </Link>
  )
}

export default NavigatePost
