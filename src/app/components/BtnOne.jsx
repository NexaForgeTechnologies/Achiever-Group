export default function BtnOne({
  name,
  href,
  className = "",
  bgColor = "bg-[#BF8933]",
  hoverBgColor = "hover:bg-[white]",
  textColor = "text-[white]",
  hoverTextColor = "hover:text-[#BF8933]",
  borderColor = "border-[#BF8933]",
  hide
}) {
  return (
    <a href={href} target="_self" className={`${hide}`}>
      <button
        className={`
          ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor}
          font-normal text-sm sm:text-base md:text-lg border-1 ${borderColor} group py-1 md:py-2 px-3 max-w-80 lg:px-5 break-words
          rounded-full flex justify-center items-center cursor-pointer ${className}
        `}
      >
        {name}
      </button>
    </a>
  );
}
