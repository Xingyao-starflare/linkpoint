import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LP</span>
              </div>
              LinkPoint
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for global client connections and outsourcing solutions.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/"><a className="hover:text-blue-400 transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-blue-400 transition-colors">About Us</a></Link></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Email:</strong> klaycklay0102@gmail.com
            </p>
            <p className="text-sm text-gray-400">
              <strong>Address:</strong> Kneza Mihaila 33, Belgrade, Serbia
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 LINKPOINT DOO BEOGRAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
