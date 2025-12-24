import { CountUpNumber } from "../components/CountUpNumber";

const StatsSection = () => {
  const stats = [
    {
      value: 2,
      title: "YEARS OF STRATEGY",
      description: `Two years of bridging the gap between creative content and commercial goals.
We’ve spent this time perfecting a formula that combines high-end aesthetics with
hard-hitting marketing psychology to deliver real ROI.
`,
    },
    {
      value: 101,
      suffix: "%",
      title: "Client Satisfaction",
      description: `We don’t act like an external vendor; we operate like your internal marketing
arm. We argue for your best interests, celebrate your wins, and sweat the details so you
don't have to. It’s less of a contract, more of a collaboration.`,
    },
    {
      value: 40,
      title: " Clients across industries",
      description: `We speak the language of design and build. From architectural hardware and
digital signage to bespoke furniture, we understand the nuances of your niche. We help
40+ businesses bridge the gap between industrial manufacturing and consumer desire.
`,
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
              <CountUpNumber value={stat.value} suffix={stat.suffix || ""} />
            </div>

            {/* Text */}
            <div className="max-w-md">
              <h3 className="text-base  font-semibold uppercase tracking-wide mb-3">
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
