
import { Hero } from "../components/Hero";
import { SocialProof } from "../components/SocialProof";
// import { Features } from "../components/Features";
// import { FAQ } from "../components/FAQ";
import { GradientBlob } from "@/components/GradientBlob";
import { Giveaway } from "../components/Giveaway";


export default function App() {
  return (
    <main className="relative bg-[#050505] min-h-screen overflow-hidden font-sans selection:bg-[#FF6B00] selection:text-white">
      {/* Background Effects */}
     

      <div className="relative z-10">
         <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <GradientBlob color="#FFB800" className="w-[500px] h-[500px] -top-20 -right-20 opacity-20" delay={0} />
          <GradientBlob color="#FF6B00" className="w-[600px] h-[600px] top-[20%] -left-32 opacity-15" delay={2} />
          <GradientBlob color="#EC4899" className="w-[400px] h-[400px] bottom-0 left-1/3 opacity-15" delay={4} />
        </div>
        <Hero />
        <SocialProof />
        {/* <Features /> */}
        {/* <FAQ /> */}
        <Giveaway />
      </div>
    </main>
  );
}
