export default function GapsDivComp({ icon, title, detail, flex="flex-row" }) {
  return (
    <div className={`border border-[#BF8933] flex flex-col lg:${flex} items-center justify-between md:justify-evenly gap-y-5 lg:gap-y-0 lg:gap-x-5 p-3 max-w-70 rounded bg-white`}>
      <img src={icon} alt="career" className={`w-15 md:w-35 h-auto`} />

      <div className={`flex flex-col gap-y-1 justify-end`}>
        <h1 className="font-semibold">{title}</h1>
        <p className="text-[#A55C2F] break-words">{detail}</p>
      </div>
    </div>
  );
}
