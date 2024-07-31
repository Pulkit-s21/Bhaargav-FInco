/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import map from "../assets/images/map.png"
import call from "../assets/svg/call.svg"
import printer from "../assets/svg/printer.svg"
import email from "../assets/svg/email.svg"
import location from "../assets/svg/location.svg"
import JD from "../assets/svg/JD.svg"
import Google from "../assets/svg/Google.svg"
import Facebook from "../assets/svg/Facebook.svg"
import Instagram from "../assets/svg/Instagram.svg"
import Forward from "../assets/svg/Forward.svg"
import Tooltip from "@mui/material/Tooltip"
import Swal from "sweetalert2"
import { useState } from "react"
import { Details } from "./Details"
import { Link } from "react-router-dom"
import { useLayoutEffect } from "react"

export const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.first_name) newErrors.first_name = "First name is required"
    if (!formData.last_name) newErrors.last_name = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid"
    if (!formData.phone_number)
      newErrors.phone_number = "Phone number is required"
    if (
      formData.phone_number &&
      !/^((\+91?)|\+)?[7-9][0-9]{9}$/.test(formData.phone_number)
    )
      newErrors.phone_number = "Phone number is invalid"
    if (!formData.message) newErrors.message = "Message is required"

    return newErrors
  }

  // * sending whatsapp message
  const handleMessage = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const { first_name, last_name, email, phone_number, message } = formData
    const ownerNumber = +919872459519

    const whatsappMessage = `
      Hello, my name is *${first_name} ${last_name}*.\nMy email is: ${email}\nMy phone number is: ${phone_number}\n*Message:* ${message}
      `.trim()

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, "_blank")

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    })

    Swal.fire({
      imageUrl: "https://i.postimg.cc/W1R65bpL/Booking-image.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Successful booking image",
      html: `
          <div class="flex flex-col gap-4">
            <p class="text-neutral-500 font-Sora">
              Your message is stored with us. Our team will contact you soon.
            </p>
            <div class="flex justify-center gap-6">
              <a class="text-blue-300 hover:text-blue-500 transition-all" href="/services">Explore your services</a>
              <a class="text-blue-300 hover:text-blue-500 transition-all" href="/">HomePage</a>
            </div>
          </div>
        `,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    })
    setErrors({})
  }

  // save booking in db
  // const handleBooking = async (e) => {
  //   e.preventDefault()
  //   if (
  //     !formData.first_name ||
  //     !formData.last_name ||
  //     !formData.email ||
  //     !formData.phone_number ||
  //     !formData.message
  //   ) {
  //     Swal.fire({
  //       title: "UnSuccessful",
  //       text: "All fields are required!",
  //       icon: "error",
  //     })
  //   } else {
  //     try {
  //       const res = await fetch("http://localhost:3001/submit", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       })

  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`)
  //       }

  //       // custom popup for when query is saved
  //       Swal.fire({
  //         imageUrl: "https://i.postimg.cc/x8bVWZDN/Booking-image.png",
  //         imageWidth: 400,
  //         imageHeight: 200,
  //         imageAlt: "Successful image",
  //         html: `
  //         <div class="flex flex-col gap-4">
  //           <p class="text-neutral-400 text-sm md:text-base font-Sora">
  //             Your information is stored with us. <br/>
  //             Our team will contact you soon
  //           </p>
  //           <div class="flex justify-around text-sm md:text-base gap-8 font-Sora">
  //             <a class="text-blue-300" href="/services">Explore our services</a>
  //             <a class="text-blue-300" href="/">Home Page</a>
  //           </div>
  //         </div>
  //         `,
  //       })
  //       setFormData({
  //         first_name: "",
  //         last_name: "",
  //         email: "",
  //         phone_number: "",
  //         message: "",
  //       })
  //     } catch (error) {
  //       Swal.fire({
  //         title: "UnSuccessful",
  //         text: "Some error occured during booking",
  //         icon: "error",
  //       })
  //       console.error("Error submitting appointment:", error)
  //     }
  //   }
  // }

  const details = [
    {
      src: call,
      detail: "+91 9888444547",
      href: "tel:+919888444547",
    },
    {
      src: printer,
      detail: "+91 7087080786",
      href: "tel:+917087080786",
    },
    {
      src: email,
      detail: "bhaargavfinco@gmail.com",
      href: "mailto:bhaargavfinco@gmail.com",
    },
    {
      src: location,
      detail: "271, Sukhmani enclave, South city, Canal Road, Ludhiana 141012",
      href: "https://maps.app.goo.gl/5vvCMqU7K3SHzynB6",
      className: "w-6 lg:w-7",
    },
  ]

  return (
    <section className="h-[80rem] lg:h-[65rem]">
      <div className="grid grid-cols-1 gap-4 place-items-center lg:place-items-start text-center font-Vietnam px-8">
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
          contact us
        </p>
        <div className="grid grid-cols-1 gap-2 lg:text-start lg:grid-cols-2">
          <p className="text-black font-semibold md:text-xl lg:text-3xl lg:max-w-[25ch]">
            Connect with us anytime
          </p>

          <div className="grid grid-cols-1 gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-neutral-500 lg:text-xl">
              Whether you are ready to get started or simply have a question,
              our friendly support team is here to assist you. Connect with us
              anytime!
            </p>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="relative mt-12">
        <img className="w-full lg:h-[35rem]" src={map} alt="Address" />

        <div className="absolute top-24 md:top-44 lg:top-40 lg:-bottom-24 font-Sora left-[50%] -translate-x-[50%] rounded-md p-4 bg-white grid xl:grid-cols-2 gap-4 w-80 md:w-96 lg:w-fit">
          {/* left div */}
          <div className="grid grid-cols-1 gap-10 bg-neutral-800 rounded-md px-4 py-6">
            <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-2">
              <p className="text-lg text-white font-semibold">
                Contact Information
              </p>
              <p className="text-xs lg:text-sm text-neutral-300">
                Say Something to start a live chat!
              </p>
            </div>

            {/* details */}
            <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-4">
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

            {/* socials */}
            <div className="flex gap-6 justify-between">
              <div className="flex gap-6">
                <Tooltip title="Facebook" arrow>
                  <a className="h-fit" href="/" target="_blank">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </Tooltip>
                <Tooltip title="Instagram" arrow>
                  <a className="h-fit" href="/" target="_blank">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </Tooltip>
                <Tooltip title="Google" arrow>
                  <a className="h-fit" href="/" target="_blank">
                    <img src={Google} alt="Google" />
                  </a>
                </Tooltip>
                <Tooltip title="Just Dial" arrow>
                  <a className="h-fit" href="/" target="_blank">
                    <img src={JD} alt="Just Dial" />
                  </a>
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Forward" arrow>
                  <a className="h-fit" href="/" target="_blank">
                    <img src={Forward} alt="Forward" />
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* right div */}
          <form
            onSubmit={handleMessage}
            className="flex flex-col gap-4 justify-between border-2 rounded-md p-2"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm" htmlFor="first_name">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border-b-2 text-sm border-neutral-400 outline-none"
                  required
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm" htmlFor="last_name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="border-b-2 text-sm border-neutral-400 outline-none"
                  required
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="border-b-2 text-sm border-neutral-400 outline-none"
                  required
                  autoComplete="off"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm" htmlFor="phone_number">
                  Phone Number
                </label>
                <input
                  required
                  value={formData.phone_number}
                  onChange={handleChange}
                  id="phone_number"
                  type="tel"
                  name="phone_number"
                  placeholder="+91 1234567890"
                  className="border-b-2 text-sm border-neutral-400 outline-none"
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone_number}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  type="text"
                  name="message"
                  maxLength={300}
                  placeholder="Write your message.."
                  className="border-b-2 text-sm border-neutral-400 outline-none lg:max-h-64"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
            </div>

            {/* buttons */}
            {/* see if the appointment btn can move to page top when clicked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4">
              <button className="text-sm font-Sora font-semibold md:text-md text-white bg-neutral-800 capitalize rounded-lg py-1 px-2 border-2 border-transparent hover:bg-white hover:text-neutral-800 transition-all hover:border-neutral-800">
                <Link to={"/appointment"}>book appointment</Link>
              </button>
              <button
                type="submit"
                className="text-sm md:text-md font-Sora font-semibold capitalize bg-primary-purple text-white w-fit py-1 px-4 rounded-md hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200"
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
