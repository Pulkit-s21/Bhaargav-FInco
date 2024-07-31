import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { autoLoanInfo } from "../helpers/autoLoanInfo"
import { autoLoanFeatures } from "../helpers/autoLoanFeatures"
import { autoLoanDocs } from "../helpers/autoLoanDocs"
import { useLayoutEffect } from "react"
import AutoLoanHero from "../assets/images/AutoLoanHero.png"

export const AutoLoan = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
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
