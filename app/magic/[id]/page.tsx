import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const charms = {
  1: {
    title: 'Boyfriend Transfer Charm',
    description: 'A traditional charm for transferring period pain to your boyfriend',
    image: '/images/charm1.jpg',
    category: 'traditional',
    content: `
      This traditional charm is believed to help transfer period pain to your boyfriend.
      It is often used during the first day of menstruation when pain is most severe.
      
      How to use:
      1. Write your boyfriend's name on a piece of red paper
      2. Fold the paper into a small square
      3. Place it under your pillow while sleeping
      4. Visualize the pain transferring to him
      
      Note: This is a cultural practice and should be used with mutual consent.
    `
  },
  2: {
    title: '7080 Number Charm',
    description: 'A powerful numerical charm for period pain relief',
    image: '/images/charm2.jpg',
    category: 'numerical',
    content: `
      The numbers 7080 are believed to have special healing properties for menstrual pain.
      This numerical charm can be used in various ways:
      
      Methods:
      1. Write 7080 on your palm with red ink
      2. Repeat the numbers 7080 silently 7 times
      3. Draw the numbers in the air with your finger
      
      The power of these numbers is said to increase during the full moon.
    `
  },
  3: {
    title: 'Manjusri One-Word Charm',
    description: 'The sacred "Om Chi Jian" charm from Buddhist tradition',
    image: '/images/charm3.jpg',
    category: 'buddhist',
    content: `
      The Manjusri One-Word Charm "Om Chi Jian" is a powerful Buddhist mantra for healing.
      This sacred sound is believed to have the power to alleviate physical pain.
      
      Practice:
      1. Sit in a comfortable position
      2. Take three deep breaths
      3. Chant "Om Chi Jian" 108 times
      4. Focus on your lower abdomen while chanting
      
      This practice is most effective when done during sunrise or sunset.
    `
  },
  4: {
    title: 'Regular Period Charm',
    description: 'A charm to help regulate menstrual cycles',
    image: '/images/charm4.jpg',
    category: 'traditional',
    content: `
      This traditional charm is designed to help regulate irregular menstrual cycles.
      It combines elements of traditional Chinese medicine with folk practices.
      
      Usage:
      1. Create a small pouch with red fabric
      2. Add specific herbs (consult a traditional medicine practitioner)
      3. Wear the pouch close to your body
      4. Replace the herbs monthly
      
      The charm should be used consistently for at least three cycles.
    `
  },
  5: {
    title: 'Warm Palace Charm',
    description: 'A traditional warming charm for uterine health',
    image: '/images/charm5.jpg',
    category: 'traditional',
    content: `
      The Warm Palace Charm is designed to promote uterine warmth and health.
      It combines the principles of traditional Chinese medicine with energy healing.
      
      Application:
      1. Place a warm stone on your lower abdomen
      2. Draw the charm symbol on your skin with warm oil
      3. Practice gentle abdominal massage
      4. Use during the first three days of your period
      
      This charm is particularly effective when combined with proper rest and warm foods.
    `
  }
}

export default function CharmPage({ params }: { params: { id: string } }) {
  const charm = charms[params.id as keyof typeof charms]

  if (!charm) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          Charm Not Found
        </h1>
        <Link href="/magic" className="text-primary-600 hover:text-primary-700">
          ← Back to Charms
        </Link>
      </div>
    )
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": charm.title,
    "description": charm.description,
    "image": `https://periodmagic.vercel.app${charm.image}`,
    "author": {
      "@type": "Organization",
      "name": "Period Magic"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Period Magic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://periodmagic.vercel.app/logo.png"
      }
    },
    "datePublished": "2024-04-10",
    "dateModified": "2024-04-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://periodmagic.vercel.app/magic/${params.id}`
    }
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Link href="/magic" className="text-primary-600 hover:text-primary-700 mb-8 inline-block">
          ← Back to Charms
        </Link>
        
        <div className="card mt-8">
          <div className="relative h-64 md:h-96">
            <Image
              src={charm.image}
              alt={`${charm.title} - Traditional cultural healing practice`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{charm.title}</h1>
            <p className="text-gray-600 mb-6">{charm.description}</p>
            
            <div className="prose max-w-none">
              {charm.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            This charm is presented for cultural and educational purposes only.
            It is not a medical treatment and should not replace professional healthcare advice.
            Always consult with healthcare professionals for medical concerns.
          </p>
        </div>
      </div>
    </>
  )
} 