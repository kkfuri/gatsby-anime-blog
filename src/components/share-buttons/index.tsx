import React from "react"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

const sharers = [
  {
    id: 1,
    baseUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    Component: FaFacebookF,
  },
  {
    id: 2,
    baseUrl: "https://twitter.com/intent/tweet?text=",
    Component: FaTwitter,
  },
]

interface ShareButtonsProps {
  showText?: boolean
  link: string
}

const ShareButtons = ({ showText = true, link }: ShareButtonsProps) => {
  if (!link) return <> </>
  return (
    <div className="flex flex-wrap items-center justify-center space-x-4 md:justify-end">
      {showText && (
        <p className="block mx-2 text-xs font-bold tracking-widest uppercase">
          Compartilhar
        </p>
      )}
      {sharers.map(i => (
        <a
          key={i.id}
          href={i.baseUrl.concat(link)}
          target="_blank"
          rel="noreferrer"
          className="p-1 duration-150 transform hover:text-accent hover:scale-105"
        >
          <i.Component />
        </a>
      ))}
    </div>
  )
}

export default ShareButtons
