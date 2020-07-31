import React from "react"
import { Link } from "gatsby"

import stringToSlug from "../../utils/slugify"

interface TagProps {
  tag: string
}

function Tag({ tag }: TagProps) {
  const slug = stringToSlug(tag)
  return (
    <Link
      to={`/tag/${slug}`}
      className="inline px-2 font-bold tracking-wider uppercase duration-75 cursor-pointer hover:text-primary-dark"
      aria-label={`Ir para página da tag ${tag}`}
    >
      {tag}
    </Link>
  )
}

export default Tag
