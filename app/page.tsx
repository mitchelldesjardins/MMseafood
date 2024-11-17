'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Shell, Waves, Anchor, Ship } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1])

  return (
    <div className="min-h-screen overflow-hidden" ref={targetRef}>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 left-10 transform -rotate-12"
            initial={{ rotate: -12, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Shell className="w-32 h-32 text-blue-800" />
          </motion.div>
          <motion.div 
            className="absolute bottom-10 right-10 transform rotate-12"
            initial={{ rotate: 12, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Anchor className="w-32 h-32 text-blue-800" />
          </motion.div>
        </div>

        {/* Fishing Boat Image */}
        <div className="absolute left-0 right-0 w-full md:w-3/4 h-full opacity-30 md:opacity-40 pointer-events-none md:translate-x-[-15%]">
          <div className="relative w-full h-full">
            <Image
              src="/fishingboat.png"
              alt="Fishing Boat"
              fill
              className="object-contain object-left-bottom md:object-center"
              priority
            />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Atlantic Canada's Finest Seafood
            </h1>
            <p className="text-xl text-blue-700 mb-8">
              Premium snow crab and lobster, sustainably harvested from the pristine waters of the North Atlantic since 1978.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                asChild
              >
                <a href="#products">Explore Products</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="h-24 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
      </div>

      {/* Product Showcase */}
      <motion.div
        id="products"
        style={{ opacity, scale }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Premium Snow Crab</h2>
                  <p className="text-blue-700 mb-6">
                    Harvested from the cold, clean waters of Atlantic Canada, our snow crab is processed and flash-frozen within hours of catch to preserve its sweet, delicate flavor.
                  </p>
                  <ul className="space-y-3 text-blue-700">
                    <motion.li 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Waves className="w-5 h-5" />
                      <span>Sustainably harvested</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Ship className="w-5 h-5" />
                      <span>Same-day processing</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Shell className="w-5 h-5" />
                      <span>Premium grade selection</span>
                    </motion.li>
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/crab.png"
                    alt="Fresh Canadian Snow Crab"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-24 bg-blue-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] md:order-1">
                  <Image
                    src="/lobster.png"
                    alt="Fresh Atlantic Lobster"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:order-2">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Atlantic Lobster</h2>
                  <p className="text-blue-700 mb-6">
                    Our Atlantic lobsters are carefully selected from the pristine waters off Nova Scotia's coast. Each lobster is hand-picked and prepared to ensure the highest quality and most succulent meat.
                  </p>
                  <ul className="space-y-3 text-blue-700">
                    <motion.li 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Waves className="w-5 h-5" />
                      <span>Wild-caught fresh</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Ship className="w-5 h-5" />
                      <span>Live shipping available</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Shell className="w-5 h-5" />
                      <span>Premium size selection</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Heritage Section */}
      <motion.div
        id="heritage"
        style={{ opacity, scale }}
        className="py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-xl text-blue-700 mb-12">
              For over four decades, M&M Seafoods has been bringing the finest Atlantic Canadian seafood to tables around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '1978',
                title: 'Our Beginning',
                description: 'Founded in Cape Breton with a commitment to quality'
              },
              {
                year: 'Today',
                title: 'Global Reach',
                description: 'Shipping premium seafood to customers worldwide'
              },
              {
                year: 'Future',
                title: 'Sustainable Growth',
                description: 'Committed to ocean stewardship and community'
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-lg p-8 shadow-lg focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 transition-all duration-300"
                tabIndex={0}
              >
                <div className="text-blue-600 font-bold text-xl mb-2">{item.year}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-blue-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        id="contact"
        style={{ opacity, scale }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="bg-blue-900 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shell className="w-64 h-64 text-white" />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Anchor className="w-64 h-64 text-white" />
              </motion.div>
            </div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Atlantic Excellence?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Connect with us to learn more about our premium seafood products and global shipping capabilities.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}