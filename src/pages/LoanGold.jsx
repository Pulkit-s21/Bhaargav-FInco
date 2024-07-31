import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { loanGoldInfo } from "../helpers/loanGoldInfo"
import { loanGoldFeatures } from "../helpers/loanGoldFeatures"
import { loanGoldDocs } from "../helpers/loanGoldDocs"
import LoanGoldHero from "../assets/images/LoanGoldHero.png"
import { useLayoutEffect } from "react"

export const LoanGold = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section className="grid grid-cols-1 gap-6">
      <PageHeader src={LoanGoldHero} />

      <PageNav
        pageInfo={loanGoldInfo}
        pageFeatures={loanGoldFeatures}
        pageDocs={loanGoldDocs}
      />
    </section>
  )
}
