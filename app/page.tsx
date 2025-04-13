import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-600 mb-4">
          Period Magic
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover traditional cultural practices for menstrual wellness
        </p>
        <Link href="/magic" className="btn">
          Explore Magic
        </Link>
      </section>

      {/* Featured Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Traditional Charms</h2>
          <p className="text-gray-600 mb-4">
            Explore ancient wisdom and cultural practices passed down through generations.
          </p>
          <Link href="/magic/traditional" className="text-primary-600 hover:text-primary-700">
            Learn more →
          </Link>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Modern Approaches</h2>
          <p className="text-gray-600 mb-4">
            Discover contemporary methods and scientific-backed practices.
          </p>
          <Link href="/magic/modern" className="text-primary-600 hover:text-primary-700">
            Learn more →
          </Link>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Community</h2>
          <p className="text-gray-600 mb-4">
            Join our growing community of women sharing experiences and support.
          </p>
          <Link href="/community" className="text-primary-600 hover:text-primary-700">
            Join now →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="text-center py-8 text-sm text-gray-500">
        <p>
          This website is for cultural and educational purposes only. 
          Always consult healthcare professionals for medical advice.
        </p>
      </section>
    </div>
  )
} 