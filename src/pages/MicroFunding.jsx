import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { microFundInfo } from "../helpers/microFundInfo"
import { microFundFeatures } from "../helpers/microFundFeatures"
import { microFundDocs } from "../helpers/microFundDocs"
import { useLayoutEffect } from "react"
import MicroHero from "../assets/images/MicroHero.png"

export const MicroFunding = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={MicroHero} />

      <PageNav
        pageInfo={microFundInfo}
        pageFeatures={microFundFeatures}
        pageDocs={microFundDocs}
      />
    </section>
  )
}
