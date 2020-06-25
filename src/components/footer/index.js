import React from "react"
import { FaGithub } from "react-icons/fa"

const Footer = () => (
  <footer className="w-full py-4 mx-auto bg-gray-200">
    <div className="container mx-auto text-right px-8">
      <a
        href="https://github.com/kkfuri"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub className="inline text-2xl text-gray-600 hover:text-primary duration-150" />
      </a>
    </div>
  </footer>
)

export default Footer
