import { Link } from "react-router-dom"
import logo from "../assets/images/BF_logo.png"
import JD from "../assets/svg/JD.svg"
import Google from "../assets/svg/Google.svg"
import Facebook from "../assets/svg/Facebook.svg"
import Instagram from "../assets/svg/Instagram.svg"
import Tooltip from "@mui/material/Tooltip"
import call from "../assets/svg/call.svg"
import printer from "../assets/svg/printer.svg"
import email from "../assets/svg/email.svg"
import location from "../assets/svg/location.svg"
import { Details } from "./Details"

export const Footer = () => {
  const currentYear = new Date().getFullYear() // for the copyright to update yearly

  const details = [
    {
      src: location,
      detail: "271, Sukhmani enclave, South city, Canal Road, Ludhiana 141012",
      className: "w-6 text-primary-purple",
      href: "https://maps.app.goo.gl/5vvCMqU7K3SHzynB6",
    },
    {
      src: email,
      detail: "bhaargavfinco@gmail.com ",
      className: "text-primary-purple",
      href: "mailto:bhaargavfinco@gmail.com",
    },
    {
      src: call,
      detail: "+91 9888444547",
      className: "text-primary-purple",
      href: "tel:+919888444547",
    },
    {
      src: printer,
      detail: "+91 7087080786",
      className: "text-primary-purple",
      href: "tel:+917087080786",
    },
  ]

  return (
    <footer className="grid grid-cols-1 px-12 py-8 gap-12 bg-neutral-800">
      <p className="h-1 bg-purple-500"></p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 place-items-center">
        {/* left div */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center gap-2">
            <Link to={"/"}>
              <img className="w-24 lg:w-36" src={logo} alt="Bhaargav Finco" />
            </Link>
          </div>

          {/* socials */}
          <div className="flex gap-6 justify-between">
            <div className="flex gap-6">
              <Tooltip title="Just Dial" arrow>
                <a href="/" target="_blank">
                  <img src={JD} alt="Just Dial" />
                </a>
              </Tooltip>
              <Tooltip title="Instagram" arrow>
                <a href="/" target="_blank">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </Tooltip>
              <Tooltip title="Facebook" arrow>
                <a href="/" target="_blank">
                  <img src={Facebook} alt="Facebook" />
                </a>
              </Tooltip>
              <Tooltip title="Google" arrow>
                <a href="/" target="_blank">
                  <img src={Google} alt="Google" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* middle div */}
        <div className="grid grid-cols-1  place-items-center gap-4 font-Sora">
          <p className="capitalize text-white font-semibold">our services</p>
          <div className="flex flex-row gap-6 text-white">
            <ul className="grid grid-cols-1 gap-1">
              <Link to={"/real_estate"}>
                <li>Real Estate Finance</li>
              </Link>
              <Link to={"/loan_property"}>
                <li>Loan against Property</li>
              </Link>
              <Link to={"/micro_fund"}>
                <li>Micro Funding</li>
              </Link>
              <Link to={"/loan_gold"}>
                <li>Loan against Gold</li>
              </Link>
              <Link to={"/home_loan"}>
                <li>Home Loan</li>
              </Link>
            </ul>
            <ul className="grid grid-cols-1 gap-1">
              <Link to={"/pvt_loan"}>
                <li>Private loans</li>
              </Link>
              <Link to={"/auto_loan"}>
                <li>Auto Loans</li>
              </Link>
              <Link to={"/funds"}>
                <li>Funds Showing</li>
              </Link>
              <Link to={"/edu_loan"}>
                <li>Education Loan</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* right div */}
        <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-4 font-Sora w-full text-white">
          <p className="capitalize font-semibold text-center">contact us</p>
          {details.map((data, idx) => {
            return (
              <Details
                className={data?.className}
                key={idx}
                src={data?.src}
                detail={data?.detail}
                href={data?.href}
              />
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <hr />

        <div className="flex flex-col gap-4 text-center lg:flex-row justify-between font-Sora text-white text-sm lg:text-base">
          <p>{`Copyright ©${currentYear} All rights reserved`}</p>
          <p>
            Designed By{" "}
            <a
              className="underline font-semibold"
              href="https://www.instagram.com/dgdesigns25/"
              target="_blank"
            >
              DGDesigns25
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
