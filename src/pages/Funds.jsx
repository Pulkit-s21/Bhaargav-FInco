import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { fundsInfo } from "../helpers/fundsInfo"
import { fundsFeatures } from "../helpers/fundsFeatures"
import { fundsDocs } from "../helpers/fundsDocs"
import { useLayoutEffect } from "react"
import FundsHero from "../assets/images/FundsHero.png"

export const Funds = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={FundsHero} />

      <PageNav
        pageInfo={fundsInfo}
        pageFeatures={fundsFeatures}
        pageDocs={fundsDocs}
      />
    </section>
  )
}
