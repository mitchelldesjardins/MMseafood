import { motion } from 'framer-motion'

interface HeritageProps {
  id: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function Heritage({ id, style, className }: HeritageProps) {
  return (
    <section id={id} style={style} className={className}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Our Heritage</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-blue-800">
              Founded in 1978, M&M Seafoods has been bringing the finest Atlantic Canadian seafood to tables worldwide. Our commitment to quality and sustainable fishing practices has made us a trusted name in the industry.
            </p>
            <p className="text-lg text-blue-800">
              Based in Cape Breton, Nova Scotia, we work directly with local fishermen to ensure the highest quality snow crab and lobster while supporting our coastal communities.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <motion.img
              src="/fishingboat.png"
              alt="M&M Seafoods Heritage"
              className="object-cover w-full h-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 