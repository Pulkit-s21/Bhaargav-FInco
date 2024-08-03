/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const FAQ = ({ num, service, src, mobileDetail, detail, link }) => {
  return (
    <div
      className="border-dividers-lightGray grid grid-cols-1 gap-2 relative overflow-hidden rounded-lg text-left lg:max-w-5xl shadow-md shadow-primary-purple"
      style={{ background: "rgba(150,71,255,.1)" }}
    >
      <input
        className="
      peer
      w-full
      absolute
      top-0
      inset-x-0
      h-16
      cursor-pointer
      opacity-0
      "
        type="checkbox"
      />
      {/* service */}
      <div className="flex items-center transition-all duration-500 px-4 pt-3">
        <h3 className="flex max-w-[25ch] md:max-w-[40ch] md:text-lg lg:max-w-[50ch] lg:text-xl font-Vietnam font-bold capitalize">
          {num}. <span className="">{service}</span>
        </h3>
      </div>
      {/* arrow */}
      <div className="absolute rotate-0 peer-checked:rotate-180 transition-all duration-500 top-3 right-3 text-primary-softRed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {/* detail */}
      <div
        className="
      overflow-hidden
      transition-all 
      duration-700
      max-h-0 
      peer-checked:max-h-96
      grid 
      grid-cols-1
      md:grid-cols-2
      gap-2
      md:px-8
      text-center
      "
      >
        <img
          loading="lazy"
          className="h-52 lg:h-full w-full md:w-80"
          src={src}
          alt="Image 1"
        />
        <div className="grid grid-cols-1 gap-2">
          <p className="uppercase lg:text-2xl font-Vietnam font-semibold">
            {service}
          </p>
          <p className="lg:hidden font-Sora text-neutral-500 text-xs">
            {mobileDetail}
          </p>
          <p className="hidden md:block font-Sora font-semibold text-neutral-500">
            {detail}
          </p>
          <Link to={link} className="py-2">
            <button className="font-Sora font-semibold capitalize bg-primary-purple text-white lg:text-xl w-fit py-1 px-4 rounded-md hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200">
              Learn More +
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
