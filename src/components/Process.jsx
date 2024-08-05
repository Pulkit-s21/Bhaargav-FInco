import { processData } from "../helpers/processData"
import { Steps } from "./Steps"

export const Process = () => {
  return (
    <section
      className="hidden lg:grid grid-cols-1 place-items-center gap-6 py-16"
      style={{ background: "rgba(47,47,47,.91)" }}
    >
      <p className="uppercase font-bold font-Vietnam lg:text-2xl text-white">
        steps
      </p>
      <p className="font-Vietnam font-extrabold lg:text-3xl text-white">
        How our process works?
      </p>

      <div className="flex relative gap-4 justify-between text-white">
        <p className="absolute top-1/2 left-0 right-0 h-1 bg-purple-500 transform -translate-y-10 z-0"></p>
        {processData.map((data, idx) => {
          return <Steps key={idx} title={data.title} desc={data.desc} />
        })}
      </div>
    </section>
  )
}
