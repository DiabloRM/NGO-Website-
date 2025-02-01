"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nepal NGO</h3>
            <p className="text-blue-100">Making a lasting difference in Nepal through sustainable development and community empowerment.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-100 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-blue-100 hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-blue-100 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-blue-100">
                <MapPin size={18} />
                <span>123 Main Street, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-100">
                <Phone size={18} />
                <span>+977 1234567890</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-100">
                <Mail size={18} />
                <span>info@nepalngo.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-blue-100">Subscribe to our newsletter for updates and news.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
            <p>&copy; {new Date().getFullYear()} Nepal NGO. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

