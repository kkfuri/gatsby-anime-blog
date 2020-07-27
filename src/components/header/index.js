import React, { useEffect, useState } from "react"
import classnames from "classnames"
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const ReturnArrow = () => (
  <Link
    to="/"
    aria-label="Retonar para página inicial"
    title="Retornar para página inicial"
  >
    <div className="absolute duration-150 hover:text-primary">
      <BsArrowLeft size="2em" />
    </div>
  </Link>
)

const Header = ({ minimalist, title, pageTitle, description }) => {
  const [showTitle, setShowTitle] = useState(true)
  const titleClasses = classnames(
    "flex font-display md:inline-block px-10 font-normal text-center justify-center tracking-wide text-gray-900 duration-400 leading-tight",
    {
      "text-lg lg:text-3xl max-w-3xl": minimalist,
      "text-2xl md:text-3xl lg:text-6xl": !minimalist,
    }
  )
  const subtitleClasses = classnames(
    "text-gray-600 font-body font-light lowercase tracking-tighter leading-none mt-1 duration-400",
    { "text-xl": minimalist, "text-3xl": !minimalist }
  )

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY
      if (currentScrollY > 5 && pageTitle) setShowTitle(false)
      else setShowTitle(true)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pageTitle, title])

  return (
    <div
      className={classnames("bg-gray-100 z-10 w-full py-6 px-2 top-0", {
        "container mx-auto sticky": minimalist,
      })}
    >
      {minimalist && <ReturnArrow />}
      <div
        className={classnames("text-center", {
          "max-w-3xl mx-auto": minimalist,
        })}
      >
        <AnimatePresence>
          <motion.div
            show={{
              transition: {
                staggerChildren: 0.5,
              },
            }}
          >
            {showTitle && (
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
            {!showTitle && (
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
          </motion.div>
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
    </div>
  )
}

export default Header
