import { Link } from "react-router-dom"
export const About = () => {
  return (
    <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8 lg:px-24">
      {/* left Div */}
      <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-4 font-Vietnam">
        <p className="text-xl md:text-2xl text-primary-purple uppercase font-bold">
          about us
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-black font-semibold hidden lg:block lg:text-4xl lg:max-w-[17ch]">
            What Bhaargav Finco is and Why it exists
          </p>

          <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-center lg:text-start text-sm md:text-lg text-neutral-500">
              Bhaargav Finco is a finance and loan company based in Ludhiana,
              Punjab. This company is involved in providing various financial
              services, including personal loans, business loans, home loans,
              gold loans, and other financial products.
            </p>
            <button className="font-Sora font-semibold capitalize bg-primary-purple text-white lg:text-xl w-fit py-1 px-4 rounded-md hover:text-primary-purple hover:bg-white hover:border-primary-purple outline-none border-transparent border-2 transition-all duration-200">
              <Link to={"/about"}>know more</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
