export default function GapsDivComp({ icon, title, detail, flex="flex-row", iconWidth="w-15 md:w-15", textCenter }) {
  return (
    <div className={`border border-[#BF8933] flex flex-col lg:${flex} items-center justify-between md:justify-evenly gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-3 p-3 rounded bg-white py-5 w-full`}>
      <img src={icon} alt="career" className={`${iconWidth} h-auto`} />

      <div className={`flex flex-col gap-y-1 justify-end`}>
        <h1 className={`font-semibold text-black`}>{title}</h1>
        <p className={`text-[#A55C2F] break-words ${textCenter}`}>{detail}</p>
      </div>
    </div>
  );
}
