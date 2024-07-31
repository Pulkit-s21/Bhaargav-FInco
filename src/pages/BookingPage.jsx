import BookingHero from "../assets/images/BookingHero.png"
import { Booking } from "../components/Booking"
import { Newsletter } from "../components/Newsletter"
import { ContactUs } from "../components/ContactUs"

export const BookingPage = () => {
  return (
    <section className="grid grid-cols-1 gap-6">
      <div className="relative lg:px-6">
        <img
          className="h-[15rem] md:h-[25rem] lg:h-[40rem] w-full"
          src={BookingHero}
          alt="AboutPage Hero Image"
        />
      </div>

      <Booking />

      <Newsletter />

      <ContactUs />
    </section>
  )
}
