import StickyScrollText from "@/app/components/StickyScrollText";

export default function About() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <StickyScrollText
        text={`I’m Chinmay Meharia, the founder of Socio Wright. I built this agency to bridge the gap
between high-end production and high-converting strategy. Most agencies give you one
or the other—pretty visuals that don’t sell, or dry data that bores your audience. My
approach is different. I believe modern marketing requires both: stories that stop the
scroll and strategies that drive the sale.

`}
        mode="word"
        inactiveColor="text-white"
        activeColor="text-black"
        containerHeight="250vh"
        stickyTop="top-28"
        startTrigger={0.25}
        endTrigger={2}
        textSize="text-4xl max-lg:text-2xl"
        textAlign="text-center"
      />
    </div>
  );
}
