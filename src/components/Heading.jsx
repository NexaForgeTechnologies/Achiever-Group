export default function Heading({
  name,
  href,
  className = "",
  bgColor = "bg-[#F4EDE1]",
  textColor = "text-[#A55C2F]",
  maxWidth="max-w-80"
}) {
  return (
    
      <button
        className={`
          ${bgColor} ${textColor}
          font-normal  text-sm sm:text-base md:text-lg group py-2 lg:py-2 px-3 ${maxWidth} lg:px-5 break-words
          rounded inline-block justify-center items-center ${className}
        `}
      >
        {name}
      </button>
  );
}
