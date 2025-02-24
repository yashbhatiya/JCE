import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-white text-xl font-bold">TechEdu Institute</a>
          </Link>
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-white hover:text-yellow-300">Home</a>
            </Link>
            <Link href="/courses">
              <a className="text-white hover:text-yellow-300">Courses</a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:text-yellow-300">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
