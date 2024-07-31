import AboutHero from "../assets/images/AboutHero.png"
import AboutPage2 from "../assets/images/AboutPage2.png"
import Trademark from "../assets/images/Trademark.png"
import MoneyLender from "../assets/images/MoneyLender.png"
import FirmReg from "../assets/images/FirmReg.png"
import UdyamReg from "../assets/images/UdyamReg.png"
import { Certificates } from "../components/Certificates"
import { useLayoutEffect } from "react"
import { Link } from "react-router-dom"

export const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  // need to add the files in the project folder and add path to the fileUrl for download
  const docsList = [
    {
      title: "Trademark Registration of Bhaargav Finco",
      description:
        "At Bhaargav Finco, we take pride in our identity and brand, which is why we have registered our trademark to protect and distinguish our services in the financial sector. Our trademark registration covers our company name, logo, and other distinctive elements that represent our brand.",
      purpose:
        "The primary purpose of trademark registration is to safeguard our brand identity and ensure our clients can easily recognize and trust our services. Here's why we registered our trademark: Brand Protection, Preventing Misuse, Market Presence.",
      document: "Here is the document for trademark Registration of the firm :",
      src: Trademark,
      fileUrl: "",
      fileName: "Trademark Certificate",
    },
    {
      title: "Money lender license of Bhaargav Finco",
      description:
        "Bhaargav Finco is a licensed money lender, authorized to provide a variety of financial services and loan products. Our money lender license, granted by the relevant regulatory authority, enables us to operate legally and ethically within the financial sector.",
      purpose:
        "The primary purpose of obtaining a money lender license is to ensure that Bhaargav Finco operates within the legal framework and maintains high standards of integrity and trust. Here's why we obtained this license as Legal compliance and consumer protection.",
      document: "Here is the document for trademark Registration of the firm :",
      src: MoneyLender,
      fileUrl: "",
      fileName: "Money Lender Certificate",
    },
    {
      title: "Firm Registration of Bhaargav Finco",
      description:
        "Bhaargav Finco is officially registered as a financial services firm, authorized to operate and provide various loan and financial products. Our firm registration, completed with the relevant government authority, confirms our legal status and establishes our credibility in the financial sector.",
      purpose:
        "The primary purpose of firm registration is to formalize our business operations and establish a legal identity. Here's why we registered Bhaargav Finco as Legal Recognition, Operational Legitimacy, Trust and Credibility, Business Opportunities, Protection and Rights.",
      document: "Here is the document for trademark Registration of the firm :",
      src: FirmReg,
      fileUrl: "",
      fileName: "Registration Certificate",
    },
    {
      title: "Trademark Registration of Bhaargav Finco",
      description:
        "Bhaargav Finco is registered under the Udyam Registration scheme, which is a government initiative for Micro, Small, and Medium Enterprises (MSMEs) in India. This registration confirms our status as an MSME and entitles us to various benefits and support from the government.",
      purpose:
        "The primary purpose of obtaining Udyam Registration is to avail the benefits provided by the government for MSMEs and to formalize our status as a recognized enterprise. Here's why we registered Bhaargav Finco under the Udyam scheme as market access and financial support.",
      document: "Here is the document for trademark Registration of the firm :",
      src: UdyamReg,
      fileUrl: "",
      fileName: "Udyam Registration Certificate",
    },
  ]

  return (
    <section className="grid grid-cols-1 gap-6 py-4">
      <div className="relative lg:px-6">
        <img
          className="h-[15rem] md:h-[25rem] lg:h-[40rem] w-full"
          src={AboutHero}
          alt="AboutPage Hero Image"
        />

        <div className="absolute flex justify-center bg-white font-Sora -bottom-2 left-1/2 -translate-x-1/2 rounded-md py-2 px-2 lg:px-4 w-fit md:w-96 text-xs lg:text-2xl">
          <p>
            Get to Know{" "}
            <span className="text-primary-purple uppercase font-bold">
              about us
            </span>
          </p>
        </div>
      </div>

      <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8">
        {/* left Div */}
        <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 font-Vietnam">
          <p className="text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
            about us
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-evenly">
              <p className="text-black font-semibold hidden lg:block lg:text-4xl lg:max-w-[17ch]">
                What Bhaargav Finco is and Why it exists
              </p>
              <button className="hidden lg:block font-Sora font-semibold capitalize bg-primary-purple text-white lg:text-xl w-fit py-1 px-4 rounded-full hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200">
                <Link to={"/contact"}>contact us</Link>
              </button>
            </div>

            <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[70ch]">
              <p className="text-neutral-500 text-center text-sm md:text-start md:text-lg">
                Bhaargav Finco is a finance and loan company based in Ludhiana,
                Punjab. This company is involved in providing various financial
                services, including personal loans, business loans, home loans,
                gold loans, and other financial products. At Bhaargav Finco, we
                are dedicated to providing comprehensive financial solutions
                tailored to meet your unique needs. Located in the vibrant city
                of Ludhiana, we have been serving our community with integrity
                and professionalism for so many years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:px-6">
        <img
          className="h-[10rem] md:h-[25rem] lg:h-[40rem] w-full"
          src={AboutPage2}
          alt="About Page Image"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8">
          {/* left Div */}
          <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 font-Vietnam">
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
              our mission
            </p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <p className="text-black text-center md:text-start font-semibold md:text-xl lg:text-3xl lg:max-w-[17ch]">
                Empowering Financial Growth
              </p>

              <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
                <p className="text-neutral-500 text-center md:text-start text-sm md:text-lg">
                  Our mission is to empower individuals and businesses by
                  offering accessible and reliable financial services. We aim to
                  facilitate your financial journey with a diverse range of loan
                  products and services, ensuring you achieve your financial
                  goals with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8">
          {/* left Div */}
          <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 font-Vietnam">
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
              our vision
            </p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <p className="text-black text-center md:text-start font-semibold md:text-xl lg:text-3xl lg:max-w-[17ch]">
                Building a Secure Financial Future
              </p>

              <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
                <p className="text-neutral-500 text-center md:text-start text-sm md:text-lg">
                  Our vision is to be the leading financial services provider in
                  Ludhiana, recognized for our commitment to customer
                  satisfaction, innovation, and ethical practices. We strive to
                  build long-lasting relationships with our clients, fostering a
                  secure financial future for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8">
          {/* left Div */}
          <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 font-Vietnam">
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
              our approach
            </p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <p className="text-black text-center md:text-start font-semibold md:text-xl lg:text-3xl lg:max-w-[17ch]">
                Customer-Centric and Transparent
              </p>

              <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
                <p className="text-neutral-500 text-center md:text-start text-sm md:text-lg">
                  At Bhaargav Finco, we believe in a customer-centric approach.
                  Our team of experienced professionals is dedicated to
                  understanding your needs and offering personalized financial
                  solutions. We maintain complete transparency in all our
                  dealings, ensuring you are informed and confident every step
                  of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8">
          {/* left Div */}
          <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 font-Vietnam">
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
              our credentials
            </p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              <p className="text-black text-center md:text-start font-semibold md:text-xl lg:text-3xl lg:max-w-[17ch]">
                Firm Documents and Credentials
              </p>

              <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
                <p className="text-neutral-500  text-center md:text-start text-sm md:text-lg">
                  As a transparent and trustworthy financial services provider,
                  we believe in sharing our credentials and certifications with
                  our clients. Here are the key documents that establish our
                  legitimacy and credibility in the finance and loan sector:
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {docsList.map((doc, idx) => {
          return (
            <Certificates
              key={idx}
              idx={idx}
              title={doc?.title}
              description={doc?.description}
              purpose={doc?.purpose}
              document={doc?.document}
              src={doc?.src}
              fileUrl={doc?.fileUrl}
              fileName={doc?.fileName}
            />
          )
        })}
      </div>
    </section>
  )
}
