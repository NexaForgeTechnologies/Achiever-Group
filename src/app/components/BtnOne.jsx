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
          font-normal text-sm sm:text-base lg:text-lg border ${borderColor} group 
          py-2 px-2 sm:px-3 md:px-3 lg:px-2 xl:px-4  break-words
          rounded-full flex justify-center items-center cursor-pointer w-auto ${className}
        `}
      >
        {name}
      </button>
    </a>
  );
}
