import BookingHero from "../assets/images/BookingHero.png"
import { Booking } from "../components/Booking"
import { Newsletter } from "../components/Newsletter"
import { ContactUs } from "../components/ContactUs"
import { useLocation } from "react-router-dom"
import { useLayoutEffect } from "react"

export const BookingPage = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <section className="grid grid-cols-1 gap-6">
      <div className="relative lg:px-6">
        <img
          loading="lazy"
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
