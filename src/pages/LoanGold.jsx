import { PageHeader } from "../components/PageHeader"
import { PageNav } from "../components/PageNav"
import { loanGoldInfo } from "../helpers/loanGoldInfo"
import { loanGoldFeatures } from "../helpers/loanGoldFeatures"
import { loanGoldDocs } from "../helpers/loanGoldDocs"
import LoanGoldHero from "../assets/images/LoanGoldHero.png"
import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

export const LoanGold = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
