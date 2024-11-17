'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png"
              alt="M&M Seafoods Logo" 
              width={48} 
              height={48} 
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold text-blue-900">M&M Seafoods</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/#products">Products</NavLink>
            <NavLink href="/our-story">Heritage</NavLink>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-blue-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <Button
            size="sm"
            className="hidden md:block bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
          >
            <Link href="/contact" className="text-white">Contact</Link>
          </Button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <NavLink href="/#products">Products</NavLink>
            <NavLink href="/our-story">Heritage</NavLink>
            <Link href="/contact" className="block">
              <Button
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
              >
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href} 
      className="block md:inline text-blue-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
    >
      {children}
    </Link>
  )
}