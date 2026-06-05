const brands = ['Rittal', 'Legrand', 'Phoenix Contact', 'ZPAS', 'Weiss', 'Hitec'];

export default function BrandsMarquee() {
  const row = [...brands, ...brands];
  return (
    <div className="marquee-wrap bg-[#05070E] border-y border-white/10 overflow-hidden py-7">
      <div className="marquee-track items-center">
        {row.map((b, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-[26px] text-white/35 hover:text-[#6FA0E0] transition-colors whitespace-nowrap"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
