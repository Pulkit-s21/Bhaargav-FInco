import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { estateInfo } from "../helpers/estateInfo"
import { estateFeatures } from "../helpers/estateFeatures"
import { estateDocs } from "../helpers/estateDocs"
import { useLayoutEffect } from "react"
import EstateHero from "../assets/images/EstateHero.png"

export const RealEstate = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={EstateHero} />

      <PageNav
        pageInfo={estateInfo}
        pageFeatures={estateFeatures}
        pageDocs={estateDocs}
      />
    </section>
  )
}
