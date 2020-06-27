import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Page404 = () => {
  return (
    <Layout minimalist>
      <div className="flex justify-center items-center flex-col flex-1">
        <div className="mb-2 -mt-40 text-center">
          <h1 className="font-semibold font-display text-6xl text-primary leading-none">
            404
          </h1>
          <p className="font-bold leading-none">Página não encontrada</p>
        </div>
        <Link to="/">
          <span className="px-4 py-2 duration-150 uppercase text-xs leading-loose tracking-wider hover:text-primary">
            Voltar para tela de início
          </span>
        </Link>
      </div>
    </Layout>
  )
}

export default Page404
