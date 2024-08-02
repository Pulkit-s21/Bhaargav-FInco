import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { microFundInfo } from "../helpers/microFundInfo"
import { microFundFeatures } from "../helpers/microFundFeatures"
import { microFundDocs } from "../helpers/microFundDocs"
import { useLayoutEffect } from "react"
import MicroHero from "../assets/images/MicroHero.png"
import { useLocation } from "react-router-dom"

export const MicroFunding = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
