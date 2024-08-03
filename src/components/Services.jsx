import { FAQ } from "./FAQ"
import { data } from "../helpers/data"

export const Services = () => {
  return (
    <section className="mt-16 grid grid-cols-1 px-8 lg:px-24">
      <div className="grid grid-cols-1 gap-4 place-items-center lg:place-items-start font-Vietnam">
        <p className="text-xl md:text-2xl text-primary-purple uppercase font-bold">
          services
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="hidden lg:block text-black font-semibold lg:text-4xl lg:max-w-[17ch]">
            What do we provide?
          </p>

          <div className="grid grid-cols-1 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-center lg:text-start text-sm md:text-lg text-neutral-500">
              Bhaargav Finco provide a range of lodetail, including vehicle
              lodetail, SME lodetail, and housing finance. This company is
              involved in providing various financial services, including
              personal lodetail, business lodetail, home lodetail, gold
              lodetail, and other financial products.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="grid grid-cols-1 py-20 place-items-center gap-4">
        {data.map((data, idx) => {
          return (
            <FAQ
              key={idx}
              link={data.link}
              num={`0${idx + 1}`}
              src={data.src}
              service={data.service}
              mobileDetail={data.mobileDetail}
              detail={data.detail}
            />
          )
        })}
      </div>

      {/* benefits */}
      <div className="grid grid-cols-1 gap-4 font-Vietnam place-items-center lg:place-items-start ">
        <p className="text-xl md:text-2xl text-primary-purple uppercase font-bold">
          benefits and features
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="hidden lg:block text-black font-semibold lg:text-4xl lg:max-w-[20ch]">
            Why you should choose us
          </p>

          <div className="grid grid-cols-1 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-center lg:text-start text-neutral-500 text-sm md:text-lg">
              As a Ludhiana-based company, Bhaargav Finco likely has a deep
              understanding of the local market, including specific economic
              conditions and customer needs. This local expertise can be
              beneficial for clients seeking personalized financial solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
