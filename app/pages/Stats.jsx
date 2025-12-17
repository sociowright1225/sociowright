import { CountUpNumber } from "../components/CountUpNumber";

const StatsSection = () => {
  const stats = [
    {
      value: 10,
      title: "Years Experiences",
      description:
        "A decade of capturing light, emotion, and unscripted moments. This isn’t just experience—it’s a visual journey shaped by instinct, curiosity, and bold decisions.",
    },
    {
      value: 101,
      suffix: "%",
      title: "Satisfied Clients",
      description:
        "Not just satisfied—they return. Every project runs smooth thanks to clear communication, precise results, and a process that feels natural.",
    },
    {
      value: 14,
      title: "Awards Won",
      description:
        "From high-fashion editorials to raw personal narratives—these awards reflect work that’s daring, honest, and just a little unconventional.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="border-t border-black">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-black"
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
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
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
