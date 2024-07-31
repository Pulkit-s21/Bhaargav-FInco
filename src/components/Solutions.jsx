import { SolutionData } from "../helpers/SolutionData"
import { SolutionCard } from "./SolutionCard"
export const Solutions = () => {
  return (
    <section className="grid grid-cols-1 gap-4 place-items-center px-8">
      <p className="hidden lg:block font-Vietnam font-bold lg:text-3xl">Our Solution for your business</p>
      <p className="hidden lg:block font-Sora text-neutral-500">
        We make it easy for users to use our platform, thats why we provide this
        benefit.
      </p>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {SolutionData.map((data, idx) => {
          return (
            <SolutionCard
              key={idx}
              src={data.src}
              title={data.title}
              detail={data.detail}
            />
          )
        })}
      </div>
    </section>
  )
}
