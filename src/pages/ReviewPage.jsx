import ReviewHero from "../assets/images/ReviewHero.png"
import QRCode from "../assets/images/QRCode.png"
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import google from "../assets/images/google.png"
import justDial from "../assets/images/justDial.png"
import fbCode from "../assets/images/fbCode.png"
import gCode from "../assets/images/googleCode.png"
import igCode from "../assets/images/igCode.png"
import jdCode from "../assets/images/jdCode.png"
import logo from "../assets/images/BF_logo.png"
import { Link } from "react-router-dom"
import { ReviewUs } from "../components/ReviewUs"
import { Newsletter } from "../components/Newsletter"
import { ContactUs } from "../components/ContactUs"

export const ReviewPage = () => {
  const socialCodes = [
    {
      src: facebook,
      title: "Facebook",
      code: fbCode,
    },
    {
      src: instagram,
      title: "Instagram",
      code: igCode,
    },
    {
      src: google,
      title: "Google",
      code: gCode,
    },
    {
      src: justDial,
      title: "Just Dial",
      code: jdCode,
    },
  ]

  return (
    <section className="grid grid-cols-1 gap-12">
      <div className="relative lg:px-6">
        <img
          loading="lazy"
          className="h-[15rem] md:h-[25rem] lg:h-[40rem] w-full"
          src={ReviewHero}
          alt="AboutPage Hero Image"
        />

        <div className="absolute shadow-md shadow-primary-purple flex justify-center bg-white font-Sora -bottom-2 left-1/2 -translate-x-1/2 rounded-md py-2 px-2 lg:px-4 w-fit md:w-96 text-sm lg:text-2xl">
          <p>
            Review
            <span className="text-primary-purple uppercase font-bold"> Us</span>
          </p>
        </div>
      </div>

      <ReviewUs />

      <div className="grid grid-cols-1 gap-6 place-items-center lg:place-items-start lg:grid-cols-2 px-8 lg:px-32">
        <div className="flex flex-col items-center lg:items-start font-Vietnam gap-4">
          <p className="uppercase text-primary-purple font-bold text-lg">
            Google Reviews
          </p>
          <p className="font-semibold text-3xl">Scan to review</p>
        </div>

        <div className="flex-1 w-fit text-center">
          <img loading="lazy" className="w-80" src={QRCode} alt="QR Code" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 place-items-center lg:place-items-start lg:grid-cols-2 px-8 lg:px-32">
        <div className="flex flex-col items-center lg:items-start font-Vietnam  gap-4">
          <p className="uppercase text-primary-purple font-bold text-lg">
            Social links
          </p>
          <p className="font-semibold text-3xl text-center lg:text-start lg:max-w-[20ch]">
            Connect with us on social accounts
          </p>
        </div>

        <div id="socialDiv" className="grid grid-cols-1 gap-4 p-2">
          <div className="grid place-items-center">
            <Link to={"/"}>
              <img loading="lazy" className="w-10 lg:w-14" src={logo} alt="Bhaargav Finco" />
            </Link>
          </div>

          {socialCodes.map((social, idx) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-3 place-items-center gap-12"
              >
                <img
                  loading="lazy"
                  className="w-10 lg:w-14"
                  src={social.src}
                  alt={social.title}
                />
                <div className="grid grid-cols-1 place-items-center gap-4">
                  <p className="font-Beau text-xl">{social.title}</p>
                  <p className="text-xs font-Vietnam font-bold text-primary-purple">
                    @BhaargavFinco
                  </p>
                </div>
                <img
                  loading="lazy"
                  className="border-2 border-primary-purple w-24"
                  src={social.code}
                  alt={`${social.title} QR Code`}
                />
              </div>
            )
          })}
        </div>
      </div>
      <Newsletter />

      <ContactUs />
    </section>
  )
}
