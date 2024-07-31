export const Newsletter = () => {
  return (
    <section className="grid grid-cols-1">
      <div className="grid grid-cols-1 gap-4 font-Vietnam px-8 place-items-center lg:place-items-start">
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-purple uppercase font-bold">
          newsletter
        </p>
        <div className="grid grid-cols-1 gap-2 place-items-center lg:place-items-start text-center md:text-start lg:grid-cols-2">
          <p className="text-black font-semibold md:text-xl lg:text-2xl lg:max-w-[25ch]">
            Connect with us over E-mail
          </p>

          <div className="grid grid-cols-1 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-neutral-500 text-center lg:text-start lg:text-xl">
              Have questions or want to connect further? We would love to hear
              from you! Reply to this email or Join our newslatter for more.
            </p>
          </div>
        </div>
      </div>

      {/* sign up div */}
      <div
        className="grid grid-cols-1 gap-2 p-8 mt-12"
        style={{ background: "rgba(246,238,255,1)" }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-Poppins font-semibold text-primary-purple">
          Join Our Newsletter
        </p>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <input
            type="email"
            placeholder="Enter your E-mail Address"
            className="flex-1 rounded-md px-4 py-2 text-white outline-none placeholder:text-white caret-primary-purple"
            style={{ background: "#02273A" }}
          />
          <p className="flex-1 text-neutral-700">
            * Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>
    </section>
  )
}
