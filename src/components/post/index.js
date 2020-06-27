import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import dayjs from "dayjs"

import Tag from "../tag"

function Post({ slug, title, date, excerpt, image, tags, featured, showImg }) {
  const classesTitle = classnames(
    "mt-2 text-3xl md:text-2xl leading-tight duration-150 font-display group-hover:text-primary",
    { "text-4xl md:text-6xl": featured }
  )
  const classesCover = classnames("object-cover w-full rounded md:h-auto", {
    block: showImg,
    "block xl:hidden": !showImg,
  })
  return (
    <article className="flex flex-col">
      <Link to={slug} aria-label="Ir para a página da publicação">
        <div className="group hover:text-primary">
          <img
            className={classesCover}
            style={{ height: featured ? 680 : 244 }}
            src={image}
            alt={`Imagem do post ${title}`}
          />
          <h2 className={classesTitle}>{title}</h2>
        </div>
      </Link>
      <div className="flex flex-wrap items-center space-x-4">
        <div className="inline">
          {tags?.map(tag => (
            <Tag tag={tag} />
          ))}
          <h6 className="inline ml-4 tracking-widest text-gray-600 font-body">
            {dayjs(date).format("DD.MM.YYYY")}
          </h6>
        </div>
      </div>
      {!featured && (
        <p className="flex-1 mt-2 cursor-default">{excerpt.slice(0, 200)}...</p>
      )}
    </article>
  )
}

export default Post
