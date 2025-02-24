import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Institute Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TechEdu Institute</h3>
            <p className="mb-4">Empowering students with cutting-edge technology education and practical skills for the digital age.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-yellow-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a className="hover:text-yellow-300">Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-yellow-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>123 Education Street, Tech City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@techedu.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TechEdu Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
