import React from "react"
import classnames from "classnames"
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import ColorModeButton from "../color-mode"

const ReturnArrow = () => (
  <Link
    to="/"
    aria-label="Retonar para página inicial"
    title="Retornar para página inicial"
    className="p-4 duration-150 hover:text-accent"
  >
    <BsArrowLeft size="2em" />
  </Link>
)

interface HeaderProps {
  minimalist?: boolean
  title?: string
  pageTitle?: string
  description?: string
}

const Header = ({ minimalist, title, pageTitle, description }: HeaderProps) => {
  const titleClasses = classnames(
    "flex font-display md:inline-block px-10 font-normal text-center justify-center tracking-wide text-primary duration-400 leading-tight",
    {
      "text-lg lg:text-3xl max-w-3xl": minimalist,
      "text-2xl md:text-3xl lg:text-6xl": !minimalist,
    }
  )
  const subtitleClasses = classnames(
    "text-secondary font-body font-light lowercase tracking-tighter leading-none mt-1 duration-400",
    { "text-xl": minimalist, "text-3xl": !minimalist }
  )

  return (
    <div
      className={classnames(
        "container mx-auto flex justify-between bg-primary relative z-10 w-full py-6 px-8 top-0 rounded-b-lg items-center",
        { sticky: minimalist }
      )}
    >
      {minimalist && <ReturnArrow />}
      <div className={classnames("text-center max-w-3xl mx-auto")}>
        <AnimatePresence>
          <div>
            {!pageTitle && (
              <motion.h1
                className={titleClasses}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link to="/" aria-label="Retonar para página inicial">
                  {title}
                </Link>
              </motion.h1>
            )}
            {pageTitle && (
              <motion.h1
                className={titleClasses}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {pageTitle}
              </motion.h1>
            )}
          </div>
        </AnimatePresence>
        {description && (
          <motion.h5
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={subtitleClasses}
          >
            {description}
          </motion.h5>
        )}
      </div>
      <ColorModeButton />
    </div>
  )
}

export default Header
