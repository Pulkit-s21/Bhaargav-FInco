import { useEffect, useState } from "react"
import Info from "../assets/images/Info.png"
import { Link } from "react-router-dom"

export const Information = () => {
  const texts = ["Easily", "Simply", "Smartly"]
  const [index, setIndex] = useState(0)
  const [feature, setFeature] = useState(texts[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % texts.length
        setFeature(texts[newIndex]) // Update feature based on new index
        return newIndex
      })
    }, 900)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [texts])
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-12 lg:mt-28 px-8 lg:px-24">
      {/* Text Div */}
      <div className="grid grid-cols-1 gap-4 place-items-center lg:place-items-start">
        <h2 className="font-Vietnam font-bold text-center lg:text-start text-3xl lg:text-6xl max-w-[20ch] capitalize tracking-wider lg:tracking-widest">
          Secure your <span className="lg:block">financial</span> future{" "}
          <span className="text-primary-purple">{feature}</span>
        </h2>
        <p className="text-neutral-500 text-sm md:text-lg lg:text-xl font-Sora md:max-w-[50ch] lg:max-w-[35ch] text-center lg:text-start">
          Bhaargav Finco is a finance and loan company based in Ludhiana, Punjab
          involved in providing various financial services, including personal
          loans, business loans, home loans, gold loans, and other financial
          products.
        </p>
        <button className="font-Sora font-semibold capitalize bg-primary-purple text-white lg:text-xl w-fit py-1 px-6 rounded-full lg:rounded-md hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200">
          <Link to={"/contact"}>lets connect</Link>
        </button>
      </div>

      <div className="flex justify-center">
        <img className="w-96 lg:w-[35rem]" src={Info} alt="Intro Image" />
      </div>
    </section>
  )
}
