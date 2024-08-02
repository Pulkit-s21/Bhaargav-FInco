import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { pvtLoanInfo } from "../helpers/pvtLoanInfo"
import { pvtLoanFeatures } from "../helpers/pvtLoanFeatures"
import { pvtLoanDocs } from "../helpers/pvtLoanDocs"
import { useLayoutEffect } from "react"
import PvtLoanHero from "../assets/images/PvtLoanHero.png"
import { useLocation } from "react-router-dom"

export const PvtLoan = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={PvtLoanHero} />

      <PageNav
        pageInfo={pvtLoanInfo}
        pageFeatures={pvtLoanFeatures}
        pageDocs={pvtLoanDocs}
      />
    </section>
  )
}
