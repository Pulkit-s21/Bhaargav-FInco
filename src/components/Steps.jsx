/* eslint-disable react/prop-types */
import step from "../assets/images/step.png"

export const Steps = ({ title, desc }) => {
  return (
    <div className="flex flex-col font-Sora items-center text-center z-20">
      <img loading="lazy" src={step} alt="Step Image" />
      <p className="lg:text-2xl font-bold">{title}</p>
      <p className="lg:w-[20ch]">{desc}</p>
    </div>
  )
}
