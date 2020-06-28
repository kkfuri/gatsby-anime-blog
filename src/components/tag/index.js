import React from "react"
import { Link } from "gatsby"

import stringToSlug from "../../utils/slugify"

function Tag({ tag }) {
  const slug = stringToSlug(tag)
  return (
    <Link
      to={`/tag/${slug}`}
      className="inline mr-1 py-4 font-bold tracking-wider uppercase duration-75 cursor-pointer hover:text-primary-dark"
    >
      [{tag}]
    </Link>
  )
}

export default Tag
