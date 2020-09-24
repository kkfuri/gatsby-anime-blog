import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaMoon, FaSun } from "react-icons/fa"

import { useColorMode } from "../../context/color-mode"

const ColorModeButton = () => {
  const { theme, toggleTheme } = useColorMode()
  return (
    <button
      className="relative flex items-center justify-center w-6 h-6 p-3 text-sm border-0 lg:w-10 lg:h-10 lg:text-2xl lg:p-4 text-accent focus:outline-none"
      onClick={toggleTheme}
    >
      <AnimatePresence exitBeforeEnter>
        {theme === "dark" && (
          <motion.div
            key="dark"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaMoon />
          </motion.div>
        )}
        {theme === "light" && (
          <motion.div
            key="light"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaSun />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ColorModeButton
