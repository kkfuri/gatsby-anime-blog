import React from "react"
import { FaHeart } from "react-icons/fa"

const Footer = () => (
  <footer className="w-full py-1 mx-auto bg-gray-200">
    <div className="container mx-auto text-right">
      <code className="text-xs">
        feito com <FaHeart className="inline" /> por{" "}
        <a href="https://github.com/kkfuri" target="_blank" rel="noopener">
          @kkfuri
        </a>
      </code>
    </div>
  </footer>
)

export default Footer
