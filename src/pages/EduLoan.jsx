import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { eduLoanInfo } from "../helpers/eduLoanInfo"
import { eduLoanFeatures } from "../helpers/eduLoanFeatures"
import { eduLoanDocs } from "../helpers/eduLoanDocs"
import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import EduLoanHero from "../assets/images/EduLoanHero.png"

export const EduLoan = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={EduLoanHero} />

      <PageNav
        pageInfo={eduLoanInfo}
        pageFeatures={eduLoanFeatures}
        pageDocs={eduLoanDocs}
      />
    </section>
  )
}
