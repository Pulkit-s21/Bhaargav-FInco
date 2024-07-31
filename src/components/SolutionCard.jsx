/* eslint-disable react/prop-types */
export const SolutionCard = ({ src, title, detail }) => {
  return (
    <div className="flex flex-col gap-6 rounded-md border-2 p-4">
      <img
        className="w-12 bg-slate-100 p-2 rounded-md"
        src={src}
        alt="Solution Image"
      />
      <p className="font-Vietnam font-semibold lg:text-2xl">{title}</p>
      <p className="font-Sora max-w-[20ch] text-neutral-500">{detail}</p>
    </div>
  )
}
