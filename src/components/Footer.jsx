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
      detail: "+91 7087080786",
      className: "text-primary-purple",
      href: "tel:+917087080786",
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
              <img
                loading="lazy"
                className="w-24 lg:w-36"
                src={logo}
                alt="Bhaargav Finco"
              />
            </Link>
          </div>

          {/* socials */}
          <div className="flex gap-6 justify-between">
            <div className="flex gap-6">
              <Tooltip title="Just Dial" arrow>
                <a
                  href="https://www.justdial.com/jd-business?source=77&wap=77&docid=0161PX161.X161.240331072327.W3D9"
                  target="_blank"
                >
                  <img loading="lazy" src={JD} alt="Just Dial" />
                </a>
              </Tooltip>
              <Tooltip title="Instagram" arrow>
                <a
                  href="https://www.instagram.com/bhaargav.finco/"
                  target="_blank"
                >
                  <img loading="lazy" src={Instagram} alt="Instagram" />
                </a>
              </Tooltip>
              <Tooltip title="Facebook" arrow>
                <a
                  href="https://www.facebook.com/profile.php?id=61557643652727"
                  target="_blank"
                >
                  <img loading="lazy" src={Facebook} alt="Facebook" />
                </a>
              </Tooltip>
              <Tooltip title="Google" arrow>
                <a
                  href="https://www.google.com/search?q=bhaargav+finco&sca_esv=0ba29d23b081b3ca&sca_upv=1&authuser=1&sxsrf=ADLYWIKti40ZSNLBcjckrK3Mek71ezNxGg%3A1717586957745&source=hp&ei=DUxgZsO5K6Gy2roP1LC58AE&iflsig=AL9hbdgAAAAAZmBaHcuH74eHOSHz_qQr2DBGwqFWKNYz&oq=bhaa&gs_lp=Egdnd3Mtd2l6IgRiaGFhKgIIADIEECMYJzIQEAAYgAQYsQMYQxiDARiKBTIQEAAYgAQYsQMYQxiDARiKBTIFEC4YgAQyBRAuGIAEMg0QLhiABBixAxhDGIoFMgoQLhiABBhDGIoFMhAQLhiABBjRAxhDGMcBGIoFMhAQABiABBixAxhDGIMBGIoFMgUQLhiABEi8HlAAWLcEcAB4AJABAJgBowGgAfQEqgEDMC40uAEByAEA-AEBmAIEoAKoBcICERAuGIAEGJECGNEDGMcBGIoFwgIOEAAYgAQYsQMYgwEYigXCAgsQABiABBixAxiDAcICBBAAGAPCAggQLhiABBixA8ICCxAuGIAEGLEDGIMBmAMAkgcDMC40oAfyOw&sclient=gws-wiz"
                  target="_blank"
                >
                  <img loading="lazy" src={Google} alt="Google" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* middle div */}
        <div className="grid grid-cols-1 place-items-center gap-4 font-Sora">
          <p className="capitalize text-white font-semibold">our services</p>
          <div className="flex flex-row gap-8 text-white">
            <ul className="grid grid-cols-1 gap-2">
              <Link to={"/real_estate"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Real Estate Finance
                </li>
              </Link>
              <Link to={"/loan_property"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Loan against Property
                </li>
              </Link>
              <Link to={"/micro_fund"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Micro Funding
                </li>
              </Link>
              <Link to={"/loan_gold"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Loan against Gold
                </li>
              </Link>
              <Link to={"/home_loan"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Home Loan
                </li>
              </Link>
            </ul>
            <ul className="grid grid-cols-1 gap-2">
              <Link to={"/pvt_loan"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Private loans
                </li>
              </Link>
              <Link to={"/auto_loan"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Auto Loans
                </li>
              </Link>
              <Link to={"/funds"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Funds Showing
                </li>
              </Link>
              <Link to={"/edu_loan"}>
                <li className="whitespace-nowrap text-xs lg:text-sm">
                  Education Loan
                </li>
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
