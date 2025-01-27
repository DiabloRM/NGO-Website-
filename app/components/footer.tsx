"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Nepal NGO</h3>
            <p className="text-sm mt-2">Making a difference in Nepal</p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <Link href="https://facebook.com" className="hover:text-blue-400 transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nepal NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

