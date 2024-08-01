import { useState, useRef, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Swal from "sweetalert2"

export const Booking = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    const today = new Date()
    const threeWeeksFromToday = new Date()
    threeWeeksFromToday.setDate(today.getDate() + 21)

    const formatDate = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, "0")
      const day = String(date.getDate()).padStart(2, "0")
      const hours = String(date.getHours()).padStart(2, "0")
      const minutes = String(date.getMinutes()).padStart(2, "0")
      return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    const minDate = formatDate(today)
    const maxDate = formatDate(threeWeeksFromToday)

    if (inputRef.current) {
      inputRef.current.setAttribute("min", minDate)
      inputRef.current.setAttribute("max", maxDate)
    }
  }, [])

  const services = [
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

  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    service: "",
    dateTime: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    aadhar: "",
    pan: "",
    pincode: "",
    address: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })

    if (name === "dateTime") {
      const inputDate = new Date(value)
      const today = new Date()
      const threeWeeksFromToday = new Date()
      threeWeeksFromToday.setDate(today.getDate() + 21)

      if (inputDate < today || inputDate > threeWeeksFromToday) {
        setErrors({
          ...errors,
          dateTime: "Please select a date within the next three weeks.",
        })
      } else {
        const { ...restErrors } = errors
        setErrors(restErrors)
      }
    }
  }

  const validateAadhar = (value) => /^\d{12}$/.test(value)
  const validatePincode = (value) => /^\d{6}$/.test(value)
  const validatePan = (value) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)
  const validateMobile = (value) => /^[6-9]\d{9}$/.test(value)

  const validateForm = () => {
    let newErrors = {}
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required"
      }
    })

    if (formData.aadhar && !validateAadhar(formData.aadhar)) {
      newErrors.aadhar =
        "Invalid Aadhar number. It should be a 12-digit numeric value."
    }

    if (formData.pincode && !validatePincode(formData.pincode)) {
      newErrors.pincode =
        "Invalid PIN code. It should be a 6-digit numeric value."
    }

    if (formData.pan && !validatePan(formData.pan)) {
      newErrors.pan =
        "Invalid PAN card number. It should be a 10-character alphanumeric value (e.g., ABCDE1234F)."
    }

    if (formData.mobile && !validateMobile(formData.mobile)) {
      newErrors.mobile =
        "Invalid mobile number. It should be a 10-digit numeric value starting with 6-9."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateHumanReadableID = () => {
    const uuid = uuidv4()
    const shortUUID = `APPT-${uuid.split("-")[0]}`
    return shortUUID
  }

  const appointmentId = generateHumanReadableID()
  // * booking an appointment
  const handleBooking = () => {
    if (validateForm()) {
      const {
        service,
        firstName,
        lastName,
        mobile,
        dateTime,
        dob,
        aadhar,
        pan,
        pincode,
        address,
      } = formData

      const userNumber = mobile
      const ownerNumber = +919872459519

      let date = new Date(dateTime)

      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }

      let appointmentDate = date.toLocaleString("en-IN", options)

      const cancelUrl = `https://wa.me/${ownerNumber}?text=Cancel%20the%20appointment%20for%20${firstName}%20${lastName}%20(ID:%20${appointmentId})%20Confirm%20cancel%20Appointment:https://wa.me/${userNumber}?text=Cancelled`

      const rescheduleUrl = `https://wa.me/${ownerNumber}?text=Reschedule%20the%20appointment%20for%20${firstName}%20${lastName}%20(ID:%20${appointmentId})%20to%20`

      // * Message to the user
      const userMessage = `Dear *${firstName.trim(
        " "
      )}*\nYou have successfully booked an appointment ID:*${appointmentId}*\nwith *Mr.kanav goyal* for ${appointmentDate}\nat *271, Sukhmani enclave, South city, Canal Road, Ludhiana 141012*\nfor *${service}*.\nPlease contact +${ownerNumber} for any queries.\nTo reschedule/cancel please select option below and for rescheduling please mention the new date.\n*-Bhaargav Finco*
      \n\nCancel Appointment: ${cancelUrl}
      \nReschedule Appointment: ${rescheduleUrl}`.trim()

      // * Message to the owner
      const ownerMessage = `Hello, I have booked an appointment with ID: *${appointmentId}*\n for *${service}* on *${appointmentDate}*.\nMy personal details are - \n*${firstName} ${lastName.trim(
        " "
      )}*\n${dob}\n${mobile}\nAadhar Card: ${aadhar}\nPanCard: ${pan}\nHome Address: ${address}\n${pincode}`.trim()

      const userWhatsAppUrl = `https://wa.me/${userNumber}?text=${encodeURIComponent(
        userMessage
      )}`
      const ownerWhatsAppUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
        ownerMessage
      )}`

      window.open(ownerWhatsAppUrl, "_blank")
      setTimeout(() => {
        Swal.fire({
          html: `
          <div class="flex flex-col gap-4 items-center">
            <p class="font-Sora">Once you have sent the booking message click the button to receive your confirmation message</p>
            <button class="text-white px-8 py-1 bg-primary-purple rounded-md border-2 border-transparent hover:border-primary-purple hover:text-primary-purple hover:bg-white transition-all">
              <a href=${userWhatsAppUrl} target="_blank">Receive</a>
            </button>
          </div>
        `,
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            handleBooking()
          }
        })
      }, 3000)

      setFormData({
        service: "",
        dateTime: "",
        firstName: "",
        lastName: "",
        dob: "",
        mobile: "",
        aadhar: "",
        pan: "",
        pincode: "",
        address: "",
      })

      setErrors({})
    }
  }

  const confirmDetails = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const {
        service,
        firstName,
        lastName,
        mobile,
        dateTime,
        dob,
        aadhar,
        pan,
        pincode,
        address,
      } = formData

      let date = new Date(dateTime)

      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }

      let appointmentDate = date.toLocaleString("en-IN", options)

      // * popup modal code
      Swal.fire({
        html: `
          <div class="flex flex-col gap-6">
              <p class="font-Sora font-semibold">PLEASE GO THROUGH THE DETAILS</p>
              <hr />

              <div class="flex justify-between items-center">
                <div class="flex gap-2 items-center">
                  <strong class="text-sm">Service:</strong>
                  <p class="text-xs">${service}</p>
                </div>
                <div class="flex gap-2 items-center">
                  <strong class="text-sm">Booking:</strong>
                  <p class="text-xs">${appointmentDate}</p>
                </div>
              </div>

              <div class="text-left">
                <div class="flex justify-center text-white font-Vietnam font-bold bg-primary-purple">
                  Appointment Details
                </div>
                <table class="text-xs mt-6">
                  <tbody>
                    <tr class="">
                      <td rowSpan="6" class="align-middle font-bold text-base">
                        Personal Information
                      </td>
                      <td class="font-semibold">Full Name:</td>
                      <td>${firstName} ${lastName}</td>
                      <td class="pl-3 font-semibold">Date Of Birth:</td>
                      <td>${dob}</td>
                    </tr>
                    <tr class="">
                      <td class="font-semibold">Mobile Number:</td>
                      <td>${mobile}</td>
                      <td class="pl-3 font-semibold">Aadhar Card:</td>
                      <td>${aadhar}</td>
                    </tr>
                    <tr class="">
                      <td class="font-semibold">Pan Card:</td>
                      <td>${pan}</td>
                      <td class="pl-3 font-semibold">Pin Code:</td>
                      <td>${pincode}</td>
                    </tr>
                    <tr class="">
                      <td class="font-semibold">Your Address:</td>
                      <td colSpan="3">${address}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        `,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Book appointment",
        cancelButtonText: "Edit details",
      }).then((result) => {
        if (result.isConfirmed) {
          handleBooking()
        }
      })
    }
  }

  return (
    <section
      id="process"
      className="grid grid-cols-1 gap-4 py-4 bg-primary-bookingbgClr"
      style={{ boxShadow: "inset 0 0 10px #9647FF" }}
    >
      <p className="font-Vietnam font-bold lg:text-2xl bg-primary-purple text-white text-center p-3">
        Book An Appointment
      </p>

      <form className="grid grid-cols-1 gap-6 px-6">
        <div className="grid grid-cols-1 gap-2 lg:max-w-96">
          <label>
            Service <span className="text-red-500">*</span>
          </label>
          <select
            className="px-4 bg-white border-2 rounded-md py-2"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service, idx) => (
              <option key={idx} value={service.service}>
                {service.service}
              </option>
            ))}
          </select>
          {errors.service && <p style={{ color: "red" }}>{errors.service}</p>}
        </div>

        <div className="grid grid-cols-1 gap-2 lg:max-w-96">
          <label>Date and Time</label>
          <input
            className="px-4 bg-white border-2 rounded-md py-2"
            type="datetime-local"
            name="dateTime"
            id="appointment"
            ref={inputRef}
            value={formData.dateTime}
            onChange={handleChange}
          />
          {errors.dateTime && <p style={{ color: "red" }}>{errors.dateTime}</p>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>First Name</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="text"
              name="firstName"
              autoComplete="off"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p style={{ color: "red" }}>{errors.firstName}</p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>Last Name:</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="text"
              name="lastName"
              autoComplete="off"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>Date of Birth</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
          </div>
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>Mobile Number</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="text"
              name="mobile"
              autoComplete="off"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>Aadhar Number</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="text"
              name="aadhar"
              autoComplete="off"
              value={formData.aadhar}
              onChange={handleChange}
              maxLength="12"
            />
            {errors.aadhar && <p style={{ color: "red" }}>{errors.aadhar}</p>}
          </div>
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>PAN Card</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="text"
              name="pan"
              autoComplete="off"
              value={formData.pan}
              onChange={handleChange}
              maxLength="10"
            />
            {errors.pan && <p style={{ color: "red" }}>{errors.pan}</p>}
          </div>
          <div className="grid grid-cols-1 gap-2 lg:max-w-96">
            <label>PIN Code</label>
            <input
              className="px-4 bg-white border-2 rounded-md py-2"
              type="text"
              name="pincode"
              autoComplete="off"
              value={formData.pincode}
              onChange={handleChange}
              maxLength="6"
            />
            {errors.pincode && <p style={{ color: "red" }}>{errors.pincode}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:max-w-96">
          <label>Address</label>
          <textarea
            className="px-4 bg-white border-2 rounded-md py-2"
            name="address"
            placeholder="Enter full address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 place-items-center">
          <button
            onClick={confirmDetails}
            className="text-white px-8 py-1 bg-primary-downloadBtn rounded-md border-2 border-transparent hover:border-primary-downloadBtn hover:text-primary-downloadBtn hover:bg-white transition-all"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
