import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { homeLoanInfo } from "../helpers/homeLoanInfo"
import { homeLoanFeatures } from "../helpers/homeLoanFeatures"
import { homeLoanDocs } from "../helpers/homeLoanDocs"
import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import HomeLoanHero from "../assets/images/HomeLoanHero.png"

export const HomeLoan = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={HomeLoanHero} />

      <PageNav
        pageInfo={homeLoanInfo}
        pageFeatures={homeLoanFeatures}
        pageDocs={homeLoanDocs}
      />
    </section>
  )
}
