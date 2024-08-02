/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const ServicePageDiv = ({ src, service, mobileDetail, order, link }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-44 p-4">
      <img loading="lazy" className="rounded-2xl md:max-w-xl" src={src} alt="Service Image" />
      <div
        className={`flex flex-col gap-4 justify-start items-center text-center lg:text-start lg:items-start font-Vietnam ${order}`}
      >
        <p className="font-Vietnam font-semibold uppercase lg:text-2xl">
          {service}
        </p>
        <p className="md:text-lg lg:text-xl md:max-w-[30ch]  lg:max-w-[35ch] text-neutral-500">
          {mobileDetail}
        </p>
        <button className="font-Sora font-semibold capitalize bg-primary-purple text-white lg:text-xl w-fit py-1 px-6 rounded-full lg:rounded-md hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200">
          <Link to={link}>learn more +</Link>
        </button>
      </div>
    </div>
  )
}
