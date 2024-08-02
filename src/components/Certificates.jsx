/* eslint-disable react/prop-types */
export const Certificates = ({
  idx,
  title,
  description,
  purpose,
  document,
  src,
  fileUrl,
  fileName,
}) => {
  return (
    <section className="mt-16 grid grid-cols-1  place-items-center lg:place-items-start px-8 lg:px-24">
      {/* left Div */}
      <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 font-Vietnam">
        <p className="text-base md:text-xl lg:text-2xl text-primary-purple capitalize font-semibold">
          {`0${idx + 1}`} <span className="block lg:inline">{title}</span>
        </p>
        <div className="grid grid-cols-1 gap-2 place-items-center md:place-items-start lg:grid-cols-2">
          <p className="text-black font-semibold md:text-xl lg:text-2xl lg:max-w-[17ch]">
            Description
          </p>

          <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-neutral-500 text-center md:text-start text-sm md:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 place-items-center md:place-items-start  lg:grid-cols-2">
          <p className="text-black font-semibold md:text-xl lg:text-2xl lg:max-w-[17ch]">
            Purpose
          </p>

          <div className="grid grid-cols-1 place-items-center gap-4 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-neutral-500 text-center md:text-start text-sm md:text-lg">
              {purpose}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 place-items-center md:place-items-start  lg:grid-cols-2 w-full">
          <p className="text-black font-semibold md:text-xl lg:text-2xl lg:max-w-[17ch]">
            Document
          </p>

          <div className="grid grid-cols-1 gap-8 md:max-w-[55ch] lg:max-w-[75ch]">
            <p className="text-neutral-500 text-center md:text-start text-sm md:text-lg">
              {document}
            </p>

            <div className="grid grid-cols-1 gap-4">
              <img src={src} alt="Documents Image" />
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                <button className="bg-primary-downloadBtn border-2 border-transparent hover:border-primary-downloadBtn hover:bg-white hover:text-primary-downloadBtn transition-all text-white font-Sora font-bold py-2 px-4 rounded-md">
                  <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                </button>
                <button className="bg-primary-downloadBtn border-2 border-transparent hover:border-primary-downloadBtn hover:bg-white hover:text-primary-downloadBtn transition-all text-white font-Sora font-bold py-2 px-4 rounded-md">
                  <a href={fileUrl} download={fileName}>
                    Download Document
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
