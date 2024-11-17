'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProductShowcaseProps {
  id?: string
  className?: string
  style?: React.CSSProperties
}

export default function ProductShowcase({ id, className, style }: ProductShowcaseProps) {
  const products = [
    {
      name: 'Snow Crab',
      description: 'Premium snow crab from the North Atlantic',
      image: '/snowcrab.jpg'
    },
    {
      name: 'Lobster',
      description: 'Fresh Atlantic lobster',
      image: '/lobster.jpg'
    }
  ]

  return (
    <section id={id} className={className} style={style}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Our Premium Products
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.name}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-blue-700">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}