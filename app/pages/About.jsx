import StickyScrollText from "@/app/components/StickyScrollText";

export default function About() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <StickyScrollText
        text={`I'm Chinmay Meharia, an interior photographer and videographer based in India. 
          My work is about more than just showcasing beautiful spaces — it's about capturing the mood,
           texture, and light that give a space its character. I aim to create visuals that feel real, 
           intentional, and emotionally grounded, letting every interior speak for itself.`}
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
