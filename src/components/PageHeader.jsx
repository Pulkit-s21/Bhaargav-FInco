/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"

export const PageHeader = ({ src }) => {
  const navigate = useNavigate()
  const handleChange = (e) => {
    const selectedLink = e.target.value
    if (selectedLink) {
      navigate(selectedLink)
    }
  }

  const services = [
    {
      link: "",
      service: "Search our services",
    },
    {
      link: "/real_estate",
      service: "Real Estate Finance",
    },
    {
      link: "/loan_property",
      service: "Loan Against Property",
    },
    {
      link: "/loan_gold",
      service: "Loan Against Gold",
    },
    {
      link: "/home_loan",
      service: "Home Loans",
    },
    {
      link: "/edu_loan",
      service: "Education Loans",
    },
    {
      link: "/micro_fund",
      service: "Micro Funding",
    },
    {
      link: "/pvt_loan",
      service: "Private Loans",
    },
    {
      link: "/funds",
      service: "Funds Showing",
    },
    {
      link: "/auto_loan",
      service: "Auto Loans",
    },
  ]

  return (
    <section className="relative lg:px-6">
      <img
        loading="lazy"
        className="h-[15rem] md:h-[25rem] lg:h-[40rem] w-full"
        src={src}
        alt="Service Hero Image"
      />

      <div className="absolute flex items-center bg-white bottom-4 left-1/2 -translate-x-1/2 rounded-md pl-2 w-fit md:w-96">
        <SearchIcon fontSize="medium" />
        <select
          className="flex-1 px-8 py-2 bg-white rounded-md text-md md:text-lg lg:text-xl text-neutral-600 w-56 font-Sora"
          name="Services"
          id="Services"
          onChange={handleChange}
        >
          {services.map((service, idx) => {
            return (
              <option key={idx} value={service.link}>
                {service.service}
              </option>
            )
          })}
        </select>
      </div>
    </section>
  )
}
