import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Page404 = () => {
  return (
    <Layout minimalist>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="mb-2 -mt-40 text-center">
          <h1 className="text-6xl font-semibold leading-none font-display text-accent">
            404
          </h1>
          <p className="font-bold leading-none">Página não encontrada</p>
        </div>
        <Link to="/">
          <span className="px-4 py-2 text-xs leading-loose tracking-wider uppercase duration-150 hover:text-accent">
            Voltar para tela de início
          </span>
        </Link>
      </div>
    </Layout>
  )
}

export default Page404
