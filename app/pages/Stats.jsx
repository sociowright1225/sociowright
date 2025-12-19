import { CountUpNumber } from "../components/CountUpNumber";

const StatsSection = () => {
  const stats = [
    {
      value: 2,
      title: "Years Experiences",
      description:
        "Two years of capturing space, light, and quiet details. This isn’t just practice—it’s a visual journey shaped by instinct, curiosity, and a deep love for design.",
    },
    {
      value: 101,
      suffix: "%",
      title: "Satisfied Clients",
      description:
        "Not just satisfied—they return. Every project runs smooth thanks to clear communication, precise results, and a process that feels natural.",
    },
    {
      value: 40,
      title: "Clients",
      description:
        "From studios to Bunglows across Raipur, I’ve worked with architects, designers, and brands who value compelling visuals and a fresh perspective.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 ">
      <div className="border-b border-black">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between max-lg:flex-col max-lg:gap-4 gap-8 py-12 border-b border-black"
          >
            {/* Number */}
            <div>
              <CountUpNumber
                value={stat.value}
                suffix={stat.suffix || ""}
              />
            </div>

            {/* Text */}
            <div className="max-w-md">
              <h3 className="text-base font-semibold uppercase tracking-wide mb-3">
                {stat.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
