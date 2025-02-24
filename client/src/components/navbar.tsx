import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Institute Name */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">T</span>
                </div>
                <span className="text-white text-xl font-bold hidden sm:block">
                  TechEdu Institute
                </span>
              </a>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center flex-1 max-w-2xl">
            <div className="flex space-x-12">
              <Link href="/">
                <a className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              </Link>
              <Link href="/courses">
                <a className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200 relative group">
                  Courses
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-200 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              </Link>
            </div>
          </div>

          {/* Right side spacing for balance */}
          <div className="w-10 h-10"></div>
        </div>
      </div>
    </nav>
  );
}