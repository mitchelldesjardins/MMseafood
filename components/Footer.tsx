'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shell, Anchor, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shell className="w-8 h-8" />
              <span className="text-xl font-bold">M&M Seafoods</span>
            </Link>
            <p className="text-blue-200 mb-4">
              Bringing the finest Atlantic Canadian seafood to tables worldwide since 1978.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/#products">Our Products</FooterLink>
              <FooterLink href="/our-story">Our Heritage</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@mmseafoods.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li>123 Seafood Lane, New Brunswick, Canada</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p className="flex items-center justify-center gap-2">
            &copy; 2024 M&M Seafoods. All rights reserved. 
            <span className="flex items-center">
              Made in Canada with Acadian Love 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex text-blue-400 ml-1"
              >
                💙
              </motion.span>
            </span>
          </p>
        </div>
      </div>
      <BackgroundElements />
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      className="text-blue-200 hover:text-white transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-blue-200 hover:text-white transition-colors duration-300">
        {children}
      </Link>
    </li>
  )
}

function BackgroundElements() {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-0 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Shell className="w-64 h-64" />
      </motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Anchor className="w-64 h-64" />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
      </motion.div>
    </>
  )
}