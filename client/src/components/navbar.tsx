import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">
          {/* Logo on the left */}
          <div className="absolute left-4">
            <Link href="/">
              <a className="text-white text-xl font-bold">TechEdu Institute</a>
            </Link>
          </div>

          {/* Centered navigation links */}
          <div className="flex space-x-8">
            <Link href="/">
              <a className="text-white hover:text-yellow-300 text-lg">Home</a>
            </Link>
            <Link href="/courses">
              <a className="text-white hover:text-yellow-300 text-lg">Courses</a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:text-yellow-300 text-lg">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}