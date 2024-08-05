import { ServicePageDiv } from "../components/ServicePageDiv"
import { servicePageData } from "../helpers/servicePageData"
import { Newsletter } from "../components/Newsletter"
import { ContactUs } from "../components/ContactUs"
import { PageHeader } from "../components/PageHeader"
import ServiceHero from "../assets/images/ServiceHero.jpg"

export const ServicePage = () => {
  return (
    <section className="grid grid-cols-1 gap-12">
      <PageHeader src={ServiceHero} />

      {/* services  */}
      <div className="grid grid-cols-1 gap-4 lg:gap-10 place-items-center">
        <p className="font-Vietnam text-2xl lg:text-4xl font-semibold text-primary-purple">
          Our Services
        </p>
        {servicePageData.map((data, idx) => {
          return (
            <ServicePageDiv
              key={idx}
              service={data.service}
              mobileDetail={data.mobileDetail}
              src={data.src}
              order={data.order}
              link={data.link}
            />
          )
        })}
      </div>

      {/* newsletter */}
      <Newsletter />

      {/* contact us */}
      <ContactUs />
    </section>
  )
}
