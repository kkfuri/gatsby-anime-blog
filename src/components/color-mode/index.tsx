import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaMoon, FaSun } from "react-icons/fa"

import { useColorMode } from "../../context/color-mode"

const ColorModeButton = () => {
  const { theme, toggleTheme } = useColorMode()
  return (
    <button
      className="relative flex items-center justify-center w-10 h-10 p-4 text-2xl border-0 hover:text-accent focus:outline-none"
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
