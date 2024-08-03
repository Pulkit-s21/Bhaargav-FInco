import Tooltip from "@mui/material/Tooltip"

export const ReviewUs = () => {
  return (
    <section className="flex flex-col gap-4 lg:gap-36 lg:flex-row items-center px-8 lg:px-32">
      <div className="font-Vietnam grid grid-cols-1 gap-4">
        <p className="uppercase text-primary-purple font-bold text-lg">
          Google Reviews
        </p>
        <p className="hidden lg:block font-semibold text-3xl">Review Us</p>
      </div>

      <div className="flex-1 w-full text-center">
        <Tooltip title="Google Search" arrow>
          <a
            className="font-Sora font-semibold text-lg lg:text-2xl underline text-blue-500"
            href="https://g.co/kgs/i9Tk4XW"
            target="_blank"
          >
            https://g.co/kgs/i9Tk4XW
          </a>
        </Tooltip>
      </div>
    </section>
  )
}
