/* eslint-disable react/prop-types */
import tick from "../assets/images/tick.png"

export const KeyFeatures = ({ title, desc }) => {
  return (
    <div className="flex flex-row gap-6 w-full lg:w-fit px-6 py-4 rounded-lg bg-primary-featureBox shadow-md shadow-primary-featureShadow">
      <div className="flex flex-col justify-center">
        <img loading="lazy" src={tick} alt="Requirements" />
      </div>
      <div className="grid grid-cols-1 font-Sora">
        <p className="font-semibold text-lg lg:text-xl">{title}</p>
        <p className="text-sm lg:text-base text-neutral-600 max-w-[28ch] lg:max-w-[30ch]">
          {desc}
        </p>
      </div>
    </div>
  )
}
