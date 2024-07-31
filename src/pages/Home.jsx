import { About } from "../components/About"
import { Information } from "../components/Information"
import { Process } from "../components/Process"
import { Services } from "../components/Services"
import { Solutions } from "../components/Solutions"
import { TrustedBy } from "../components/TrustedBy"
import { Testimonials } from "../components/Testimonials"
import { ReviewUs } from "../components/ReviewUs"
import { Newsletter } from "../components/Newsletter"
import { ContactUs } from "../components/ContactUs"

export const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      <Information />
      <TrustedBy />
      <About />
      <Services />
      <Solutions />
      <Process />
      <Testimonials />
      <ReviewUs />
      <Newsletter />
      <ContactUs />
    </div>
  )
}
