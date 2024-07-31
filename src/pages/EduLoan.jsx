import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { eduLoanInfo } from "../helpers/eduLoanInfo"
import { eduLoanFeatures } from "../helpers/eduLoanFeatures"
import { eduLoanDocs } from "../helpers/eduLoanDocs"
import { useLayoutEffect } from "react"
import EduLoanHero from "../assets/images/EduLoanHero.png"

export const EduLoan = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
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
