import yes_bank from "../assets/images/yes_bank.png"
import au_bank from "../assets/images/au_bank.png"
import hdfc from "../assets/images/hdfc.png"
import icici from "../assets/images/icici.png"
import induslnd from "../assets/images/induslnd.png"
import sbi from "../assets/images/sbi.png"
import Tooltip from "@mui/material/Tooltip"

export const TrustedBy = () => {
  const trustedBanks = [
    { name: "Yes Bank", src: yes_bank },
    { name: "State Bank of India", src: sbi },
    { name: "HDFC", src: hdfc },
    { name: "ICICI", src: icici },
    { name: "AU Bank", src: au_bank },
    { name: "IndusInd", src: induslnd },
  ]
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start gap-8 px-8">
      <p className="uppercase text-black font-Vietnam font-bold text-2xl lg:text-4xl lg:max-w-[17ch]">
        trusted by
      </p>

      {/* banks */}
      <div className="grid grid-cols-3 lg:pr-8 gap-6 md:gap-16 lg:gap-24 place-items-center">
        {trustedBanks.map((bank, idx) => {
          return (
            <Tooltip key={idx} title={bank.name} arrow>
              <img src={bank.src} alt={bank.name} />
            </Tooltip>
          )
        })}
      </div>
    </section>
  )
}
