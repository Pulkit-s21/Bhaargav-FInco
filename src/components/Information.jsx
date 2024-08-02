import { useEffect, useState } from "react"
import img_1 from "../assets/images/img_1.png"
import img_2 from "../assets/images/img_2.png"
import img_3 from "../assets/images/img_3.png"
import MobileHero from "../assets/images/MobileHero.png"
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
        <h2 className="font-Vietnam font-bold text-center lg:text-start text-3xl md:text-4xl lg:text-6xl max-w-[20ch] capitalize tracking-wider lg:tracking-widest">
          Secure your <span className="lg:block">financial</span> future{" "}
          <span className="text-4xl lg:text-5xl text-primary-purple">{feature}</span>
        </h2>
        <img loading="lazy" className="lg:hidden" src={MobileHero} alt="Mobile Image" />
        <p className="text-neutral-500 text-sm md:text-lg font-Sora md:max-w-[50ch] lg:max-w-[40ch] text-center lg:text-start">
          Bhaargav Finco is a finance and loan company based in Ludhiana, Punjab
          involved in providing various financial services, including personal
          loans, business loans, home loans, gold loans, and other financial
          products.
        </p>
        <button className="font-Sora font-semibold capitalize bg-primary-purple text-white lg:text-xl w-fit py-1 px-6 rounded-full lg:rounded-md hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200">
          <Link to={"/contact"}>lets connect</Link>
        </button>
      </div>

      {/* Image Div */}
      {/* <div className="hidden lg:block relative">
        <img
          className="absolute top-[-6rem] left-[20rem] z-10"
          src={img_1}
          alt="Image 1"
        />
        <img className="absolute" src={img_2} alt="Image 2" />
        <img
          className="absolute bottom-[-2rem] left-[20rem]"
          src={img_3}
          alt="Image 3"
        />
      </div> */}

      {/* grid look */}
      <div className="hidden lg:grid grid-cols-2 grid-rows-2 place-items-end">
        <img loading="lazy" className="row-span-2 h-[30rem]" src={img_2} alt="Image 2" />
        <img loading="lazy" className="row-span-1 place-self-start h-[15rem]" src={img_1} alt="Image 1" />
        <img loading="lazy" className="h-[15rem]" src={img_3} alt="Image 3" />
      </div>
    </section>
  )
}
