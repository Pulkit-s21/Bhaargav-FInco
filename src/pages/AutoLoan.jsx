import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { autoLoanInfo } from "../helpers/autoLoanInfo"
import { autoLoanFeatures } from "../helpers/autoLoanFeatures"
import { autoLoanDocs } from "../helpers/autoLoanDocs"
import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import AutoLoanHero from "../assets/images/AutoLoanHero.png"

export const AutoLoan = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={AutoLoanHero} />

      <PageNav
        pageInfo={autoLoanInfo}
        pageFeatures={autoLoanFeatures}
        pageDocs={autoLoanDocs}
      />
    </section>
  )
}
