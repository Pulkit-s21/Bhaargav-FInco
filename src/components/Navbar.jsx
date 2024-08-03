import { useState } from "react"
import { Link } from "react-router-dom"
// import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import logo from "../assets/images/BF_logo.png"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export const Navbar = () => {
  const navItems = [
    { id: 1, link: "our services", to: "/services" },
    { id: 2, link: "about us", to: "/about" },
    { id: 3, link: "review us", to: "/review" },
    { id: 4, link: "contact us", to: "/contact" },
    { id: 5, link: "book appointment", to: "/appointment" },
  ]

  const [open, setOpen] = useState(false)
  // const [hidden, setHidden] = useState(false)

  // const { scrollY } = useScroll()

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious()
  //   if (latest > previous && latest > 10) {
  //     setHidden(true)
  //   } else {
  //     setHidden(false)
  //   }
  // })

  return (
    <nav
      // variants={{
      //   visible: { y: 0 },
      //   hidden: { y: "-100%" },    // if want to animate hiding and showing the navbar on scroll
      // }}
      // animate={hidden ? "hidden" : "visible"}
      // transition={{ duration: "0.35", ease: "easeInOut" }}
      className="w-full px-2"
    >
      <div className="md:flex bg-white p-4 sm:px-6 items-center justify-between">
        {/* Logo DIv */}
        <div className="flex items-center justify-between">
          {/* Icon and title Div */}
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <img loading="lazy" className="w-10 lg:w-14" src={logo} alt="Bhaargav Finco" />
            </Link>
          </div>
          {/* Menu Icons */}
          <div
            onClick={() => {
              setOpen(!open)
            }}
            className="md:hidden"
          >
            {open ? (
              <CloseIcon
                className="cursor-pointer text-gray-400 hover:text-black transition-all"
                fontSize="large"
              />
            ) : (
              <MenuIcon
                className="cursor-pointer text-gray-400 hover:text-black transition-all"
                fontSize="large"
              />
            )}
          </div>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row gap-4 md:gap-6 md:items-center bg-white py-6 md:py-0 left-0 px-4 transition-all duration-200 absolute md:static w-full md:w-auto z-[100] ${
            open ? "top-16 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {navItems.map((link) => {
            return (
              <Link
                to={link.to}
                className="bg-slate-100 rounded-lg px-2 py-1 text-sm lg:text-md text-neutral-700 hover:bg-neutral-700 hover:text-slate-100 transition-all font-medium w-fit capitalize last:bg-black last:text-white last:hover:text-primary-purple last:hover:bg-white border-2 border-transparent last:hover:border-primary-purple"
                key={link.id}
                onClick={() => setOpen(false)}
              >
                {link.link}
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
