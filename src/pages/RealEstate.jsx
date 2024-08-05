import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { estateInfo } from "../helpers/estateInfo"
import { estateFeatures } from "../helpers/estateFeatures"
import { estateDocs } from "../helpers/estateDocs"
import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import EstateHero from "../assets/images/EstateHero.png"

export const RealEstate = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
