import ContactHero from "../assets/images/ContactHero.png"
import { ContactUs } from "../components/ContactUs"

export const ContactPage = () => {
  return (
    <section className="grid grid-cols-1 gap-12">
      <div className="lg:px-12">
        <img
          loading="lazy"
          className="h-[15rem] md:h-[25rem] lg:h-[30rem] w-full"
          src={ContactHero}
          alt="Contact Us Image"
        />
      </div>

      <ContactUs />
    </section>
  )
}
