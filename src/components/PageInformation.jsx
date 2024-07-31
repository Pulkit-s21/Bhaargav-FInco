/* eslint-disable react/prop-types */
export const PageInformation = ({ title, detail }) => {
  return (
    <div id="all" className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex items-start justify-center">
        <p className="uppercase text-primary-purple font-semibold md:text-2xl text-lg lg:text-3xl lg:max-w-[25ch]">
          {title}
        </p>
      </div>

      <div className="grid grid-cols-1 place-items-center px-4">
        <p className="text-base text-center lg:text-start md:text-lg lg:text-xl text-neutral-500 max-w-[60ch]">
          {detail}
        </p>
      </div>
    </div>
  )
}
