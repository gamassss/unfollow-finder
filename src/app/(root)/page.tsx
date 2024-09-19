import HeroSection from "@/components/organisms/HeroSection";
import UploadSection from "@/components/organisms/UploadSection";
import UsageSection from "@/components/organisms/UsageSection";

export default function Home() {
  return (
    <div className="container text-black bg-[#fefefe]">
      <HeroSection />
      <UsageSection />
      <UploadSection />
    </div>
  );
}
