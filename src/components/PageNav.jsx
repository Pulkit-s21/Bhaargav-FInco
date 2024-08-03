/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { KeyFeatures } from "./KeyFeatures"
import { DocumentReq } from "./DocumentReq"
import { Newsletter } from "./Newsletter"
import { ContactUs } from "./ContactUs"
import { Booking } from "./Booking"
import DownloadingIcon from "@mui/icons-material/Downloading"
import { PageInformation } from "./PageInformation"

export const PageNav = ({ pageInfo, pageFeatures, pageDocs }) => {
  const navList = [
    {
      link: "#features",
      title: "Key Features",
    },
    {
      link: "#docs",
      title: "Documents",
    },
    {
      link: "#process",
      title: "Application Process",
    },
  ]
  return (
    <section className="grid grid-cols-1 gap-12">
      <nav className="grid grid-cols-2 md:grid-cols-3 font-Vietnam font-semibold">
        <div className="md:col-span-2 bg-neutral-800 flex-1 text-white flex flex-col md:justify-center md:items-center md:flex-row gap-3 lg:gap-6 pl-12">
          <a
            className="p-2 text-sm md:text-md lg:p-4 text-primary-purple"
            href="#all"
          >
            All
          </a>
          {navList.map((nav, idx) => {
            return (
              <a
                className="p-2 lg:p-4 text-sm md:text-md hover:text-blue-400 transition-all duration-200"
                key={idx}
                href={nav.link}
              >
                {nav.title}
              </a>
            )
          })}
        </div>
        <div className="flex items-center bg-white px-4 lg:px-12 lg:py-4">
          <Link
            className="bg-primary-blueish text-white text-sm px-2 py-1 lg:px-4 lg:py-2 rounded-lg border-2 border-transparent hover:text-primary-blueish hover:bg-white hover:border-primary-blueish transition-all"
            to={"/appointment"}
          >
            Book Appointment
          </Link>
        </div>
      </nav>

      {/* information div */}
      {pageInfo.map((data, idx) => {
        return (
          <PageInformation
            key={idx}
            title={data.title}
            detail={data.detail}
            className={data.className}
          />
        )
      })}

      {/* key features */}
      <section id="features" className="grid grid-cols-1 place-items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="flex items-start justify-center lg:pr-[10rem]">
            <p className="capitalize text-primary-blueish font-semibold text-lg md:text-xl lg:text-3xl">
              Key Features
            </p>
          </div>

          <></>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:py-4 lg:px-40 place-items-center w-full">
          {pageFeatures.map((feature, idx) => {
            return (
              <KeyFeatures
                key={idx}
                title={feature?.title}
                desc={feature?.desc}
              />
            )
          })}
        </div>
      </section>

      {/* docs required */}
      <section id="docs">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="flex items-start justify-center lg:pr-[2rem]">
            <p className="capitalize text-primary-blueish font-semibold text-lg md:text-xl lg:text-3xl">
              Documents Required
            </p>
          </div>

          <></>
        </div>

        {pageDocs.map((doc, idx) => {
          return (
            <DocumentReq
              key={idx}
              title={doc?.title}
              desc={doc?.desc}
              desc2={doc?.desc2}
            />
          )
        })}

        <div className="grid grid-cols-1 place-items-center md:place-items-end py-2 px-14 lg:px-24">
          <button className="bg-primary-downloadBtn text-white font-Sora font-bold py-2 px-4 rounded-2xl">
            {" "}
            <DownloadingIcon sx={{ color: "white" }} /> Document Format
          </button>
        </div>
      </section>

      {/* booking */}
      <Booking />

      {/* newsletter */}
      <Newsletter />

      {/* contact us */}
      <ContactUs />
    </section>
  )
}
