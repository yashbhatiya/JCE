export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          alt="Tech Education"
        />
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Shape Your Future with</span>
            <span className="block text-yellow-300">TechEdu Institute</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl">
            Empowering students with cutting-edge technology education and practical skills for the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}