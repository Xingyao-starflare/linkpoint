import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-2xl text-blue-600 hover:text-blue-700 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LP</span>
            </div>
            <span>LinkPoint</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
          </Link>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg font-medium">
          Get Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">About</a>
            </Link>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Contact</a>
            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium mt-2">
              Get Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
