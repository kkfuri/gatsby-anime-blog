import React from "react"
import { Link } from "gatsby"

import stringToSlug from "../../utils/slugify"

function Tag({ tag }) {
  const slug = stringToSlug(tag)
  return (
    <Link
      to={`/tag/${slug}`}
      className="inline mr-1 font-bold tracking-wider uppercase duration-75 cursor-pointer hover:text-primary-dark"
      aria-label={`Ir para página da tag ${tag}`}
    >
      [{tag}]
    </Link>
  )
}

export default Tag
