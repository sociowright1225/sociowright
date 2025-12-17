import StickyScrollText from "@/app/components/StickyScrollText";

export default function About() {
  return (
    <div>
      

      <StickyScrollText
        text={`I'm Milo Theron a photographer based in Melbourne, Australia. 
My work isn't about chasing perfection—it's about capturing the raw, 
unfiltered moments that make a scene feel alive.`}
        mode="word"
        inactiveColor="text-white"
        activeColor="text-black"
        containerHeight="130vh"
        stickyTop="top-28"
        startTrigger={0.25}
        endTrigger={0.85}
        textSize="text-4xl"
        textAlign="text-center"
      />

    </div>
  );
}
