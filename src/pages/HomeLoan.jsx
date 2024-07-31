import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { homeLoanInfo } from "../helpers/homeLoanInfo"
import { homeLoanFeatures } from "../helpers/homeLoanFeatures"
import { homeLoanDocs } from "../helpers/homeLoanDocs"
import HomeLoanHero from "../assets/images/HomeLoanHero.png"
import { useLayoutEffect } from "react"

export const HomeLoan = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
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
