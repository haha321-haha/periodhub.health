import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const charms = [
  {
    id: 1,
    title: 'Boyfriend Transfer Charm',
    description: 'A traditional charm for transferring period pain to your boyfriend',
    image: '/images/charm1.jpg',
    category: 'traditional'
  },
  {
    id: 2,
    title: '7080 Number Charm',
    description: 'A powerful numerical charm for period pain relief',
    image: '/images/charm2.jpg',
    category: 'numerical'
  },
  {
    id: 3,
    title: 'Manjusri One-Word Charm',
    description: 'The sacred "Om Chi Jian" charm from Buddhist tradition',
    image: '/images/charm3.jpg',
    category: 'buddhist'
  },
  {
    id: 4,
    title: 'Regular Period Charm',
    description: 'A charm to help regulate menstrual cycles',
    image: '/images/charm4.jpg',
    category: 'traditional'
  },
  {
    id: 5,
    title: 'Warm Palace Charm',
    description: 'A traditional warming charm for uterine health',
    image: '/images/charm5.jpg',
    category: 'traditional'
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Traditional Charms Collection",
  "description": "Explore traditional cultural practices and charms for menstrual wellness",
  "url": "https://periodmagic.vercel.app/magic",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": charms.map((charm, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "name": charm.title,
        "description": charm.description,
        "url": `https://periodmagic.vercel.app/magic/${charm.id}`
      }
    }))
  }
}

export default function MagicPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary-600 mb-8">
          Traditional Charms
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {charms.map((charm) => (
            <div key={charm.id} className="card">
              <div className="relative h-48">
                <Image
                  src={charm.image}
                  alt={`${charm.title} - Traditional cultural healing practice`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{charm.title}</h2>
                <p className="text-gray-600 mb-4">{charm.description}</p>
                <Link 
                  href={`/magic/${charm.id}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            These charms are presented for cultural and educational purposes only.
            They are not medical treatments and should not replace professional healthcare advice.
          </p>
        </div>
      </div>
    </>
  )
} 