import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { testimonialData } from "../helpers/testimonialData"
import { TestimonialCard } from "./TestimonialCard"
import "../testimonial.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export const Testimonials = () => {
  return (
    <section className="grid grid-cols-1 gap-4 px-8 place-items-center">
      <div className="grid grid-cols-1 gap-4 font-Vietnam place-items-center lg:place-items-start">
        <p className="text-xl md:text-2xl text-primary-purple uppercase font-bold">
          Customer testimonials
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="hidden lg:block text-black font-semibold lg:text-4xl lg:max-w-[17ch]">
            What our Clients <span className="lg:block">say?</span>
          </p>

          <div className="text-center lg:text-start md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-neutral-500 text-sm md:text-lg lg:text-xl">
              Site where customers share their experiences with Ludhiana-based
              financial services.
            </p>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mt-10 hidden lg:block pb-12"
        style={{ width: "90vw" }}
      >
        {testimonialData.map((data, idx) => {
          return (
            <SwiperSlide className="px-20" key={idx}>
              <TestimonialCard
                review={data.review}
                user={data.user}
                name={data.name}
                job={data.job}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="grid grid-cols-1 gap-6 lg:hidden">
        {testimonialData.map((data, idx) => {
          return (
            <TestimonialCard
              key={idx}
              review={data.review}
              user={data.user}
              name={data.name}
              job={data.job}
            />
          )
        })}
      </div>
    </section>
  )
}
