import yes_bank from "../assets/images/yes_bank.png"
import au_bank from "../assets/images/au_bank.png"
import hdfc from "../assets/images/hdfc.png"
import icici from "../assets/images/icici.png"
import induslnd from "../assets/images/induslnd.png"
import sbi from "../assets/images/sbi.png"
import Tooltip from "@mui/material/Tooltip"

export const TrustedBy = () => {
  const trustedBanks = [
    { name: "HDFC", src: hdfc },
    { name: "AU Bank", src: au_bank },
    { name: "ICICI", src: icici },
    { name: "State Bank of India", src: sbi },
    { name: "IndusInd", src: induslnd },
    { name: "Yes Bank", src: yes_bank },
  ]
  return (
    <section className="mt-16 grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-2 gap-2 px-8 lg:px-24">
      <p className="uppercase text-primary-purple font-Vietnam font-bold text-2xl lg:text-4xl lg:max-w-[17ch]">
        trusted by
      </p>

      {/* banks */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6 place-items-center">
        {trustedBanks.map((bank, idx) => {
          return (
            <Tooltip key={idx} title={bank.name} arrow>
              <img loading="lazy" className="lg:w-20 xl:w-24" src={bank.src} alt={bank.name} />
            </Tooltip>
          )
        })}
      </div>
    </section>
  )
}
