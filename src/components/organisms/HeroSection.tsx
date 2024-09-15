const HeroSection: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-center mb-6 leading-tight md:w-9/12">
        Find Out Who Doesn{"'"}t Follow Back on Instagram—
        <span className="bg-violet-300">100% Safe</span> and{" "}
        <span className="bg-violet-300">No Login Required!</span>
      </h1>
      <h4 className="text-xl font-normal text-center leading-tight md:w-3/4 mb-12">
        Your Privacy Matters. No Account Access Needed, Just a Simple File
        Upload.
      </h4>

      {/* CTA */}
      <div className="flex items-center gap-x-4">
        <button className="bg-violet-600 text-[#fefefe] px-4 py-2 rounded-lg hover:bg-violet-500 transition">How it is safe?</button>
        <button className="bg-violet-200 text-violet-600 font-semibold px-4 py-2 rounded-lg hover:bg-violet-300 hover:text-violet-500 transition">Try it now</button>
      </div>
    </div>
  );
}

export default HeroSection;