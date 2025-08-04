export default function VentureSheetCont() {
  return (
    <section className="flex flex-col gap-y-4 my-10 md:my-20">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <h1 className="text-lg md:text-xl font-semibold text-center text-gray-500">
          Together, They Build Something Bigger
        </h1>
        <p className="text-base text-gray-500 text-center max-w-[50ch]">
          Each venture solves a specific problem — but together, they form a high-impact ecosystem that
          enables long-term personal, professional, and enterprise growth.
        </p>
      </div>

      {/* Table Header */}
      <section className="grid grid-cols-5 border border-[#A55C2F] rounded">
        {["Venture", "Connect", "Grow", "Lead", "Measure"].map((col) => (
          <div key={col} className="flex items-center justify-center py-5 px-2">
            <h1 className="text-sm md:text-base font-semibold text-gray-500 text-center">
              {col}
            </h1>
          </div>
        ))}
      </section>

      {/* Row 1 */}
      <section className="grid grid-cols-5 border border-[#A55C2F] rounded">
        <div className="flex items-center sm:justify-center p-3">
          <p className="text-sm md:text-base text-gray-500 ">
            The Procurement Plug
          </p>
        </div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
      </section>

      {/* Row 2 */}
      <section className="grid grid-cols-5 border border-[#A55C2F] rounded">
        <div className="flex items-center justify-center p-3">
          <p className="text-sm md:text-base text-gray-500 text-center">PTX</p>
        </div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
        <div className="flex items-center justify-center p-3"></div>
      </section>

      {/* Row 3 */}
      <section className="grid grid-cols-5 border border-[#A55C2F] rounded">
        <div className="flex items-center justify-center p-3">
          <p className="text-sm md:text-base text-gray-500 text-center">Xec Plug</p>
        </div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
        <div className="flex items-center justify-center p-3"></div>
      </section>

      {/* Row 4 */}
      <section className="grid grid-cols-5 border border-[#A55C2F] rounded">
        <div className="flex items-center sm:justify-center p-3">
          <p className="text-sm md:text-base text-gray-500 text-center">AchieveMeter</p>
        </div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
        <div className="flex items-center justify-center p-3"></div>
        <div className="flex items-center justify-center p-3">
          <h1 className="text-xl md:text-3xl font-semibold text-[#A55C2F]">✔</h1>
        </div>
      </section>
    </section>
  );
}
