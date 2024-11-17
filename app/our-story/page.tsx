'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shell, Anchor, Ship, Fish, Award, Users } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Story</h1>
        </motion.div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/fishingboatbackground.png"
              alt="Fishing Boat on Atlantic Waters"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Our Heritage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto"
            >
              A legacy of quality seafood from Atlantic Canada since 1978
            </motion.p>
          </div>
        </div>

        {/* Our Beginning */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-blue-900">Our Beginning</h2>
                <div className="space-y-4 text-blue-800/90">
                  <p className="text-lg leading-relaxed">
                    M&M Seafoods was founded in 1978 by the Brun family in the picturesque coastal town of Cape Breton, Nova Scotia. What started as a small family operation has grown into a leading supplier of premium Atlantic Canadian seafood.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our commitment to quality and sustainable fishing practices has been at the heart of our business from day one, allowing us to build strong relationships with local fishermen and customers around the world.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, while we've grown to become a leading supplier of premium snow crab and lobster, our core values remain unchanged: exceptional quality, sustainable practices, and a deep respect for the ocean that has given us so much.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/fishingboat.png"
                  alt="M&M Seafoods fishing vessel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Fish className="w-12 h-12 mb-4 text-blue-600" />, title: "Quality", description: "We're committed to delivering the freshest, highest quality seafood to our customers." },
              { icon: <Ship className="w-12 h-12 mb-4 text-blue-600" />, title: "Sustainability", description: "We practice responsible fishing to ensure the long-term health of our oceans." },
              { icon: <Users className="w-12 h-12 mb-4 text-blue-600" />, title: "Community", description: "We support our local fishing communities and their traditional way of life." },
              { icon: <Award className="w-12 h-12 mb-4 text-blue-600" />, title: "Excellence", description: "We strive for excellence in every aspect of our operations." },
              { icon: <Anchor className="w-12 h-12 mb-4 text-blue-600" />, title: "Heritage", description: "We honor the rich maritime heritage of Atlantic Canada in everything we do." },
              { icon: <Shell className="w-12 h-12 mb-4 text-blue-600" />, title: "Innovation", description: "We continuously innovate to improve our products and processes." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-blue-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-blue-800 text-lg mb-4">
              At M&M Seafoods, our mission is to bring the unparalleled taste of Atlantic Canadian seafood to tables around the world while preserving the health of our oceans and supporting our local communities.
            </p>
            <p className="text-blue-800 text-lg">
              We are dedicated to maintaining the highest standards of quality, sustainability, and innovation in every step of our process, from ocean to plate.
            </p>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "1978", event: "M&M Seafoods founded in Cape Breton, Nova Scotia" },
              { year: "1985", event: "Expanded operations to include lobster processing" },
              { year: "1992", event: "Began exporting to international markets" },
              { year: "2000", event: "Implemented sustainable fishing practices" },
              { year: "2010", event: "Opened state-of-the-art processing facility" },
              { year: "2020", event: "Launched direct-to-consumer online sales" },
              { year: "Today", event: "Continuing to innovate and expand our global reach" },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center"
              >
                <div className="w-24 text-right mr-4">
                  <span className="text-blue-600 font-bold">{item.year}</span>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                  <p className="text-blue-800">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Shell className="w-64 h-64 text-blue-900" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 opacity-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Anchor className="w-64 h-64 text-blue-900" />
        </motion.div>
      </div>
    </div>
  )
}