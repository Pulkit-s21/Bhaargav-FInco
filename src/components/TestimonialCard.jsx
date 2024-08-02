/* eslint-disable react/prop-types */
import Stars from "../assets/images/Stars.png"

export const TestimonialCard = ({ review, user, name, job }) => {
  return (
    <div
      className="grid grid-cols-1 gap-4 p-4 max-w-[60ch]"
      style={{ background: "rgba(247,245,255,1)" }}
    >
      <img loading="lazy" src={Stars} alt="Ratings" />
      <p className="text-neutral-500 lg:text-xl lg:max-w-[50ch]">{review}</p>
      <div className="flex flex-row gap-4">
        <img loading="lazy" src={user} alt="User Image" />
        <div className="grid grid-cols-1 font-Sora">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-neutral-400">{job}</p>
        </div>
      </div>
    </div>
  )
}
