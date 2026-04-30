'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { stories } from '@/data/stories'

export default function StoryPage() {
  const params = useParams()
  const story = stories.find((s) => s.id === params.id)

  if (!story) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Story not found</h1>
        <Link href="/" className="text-red-600 mt-4 inline-block">Back to home</Link>
      </div>
    )
  }

  const freeChapters = story.chapters.slice(0, 3)
  const lockedPreview = story.chapters[3]
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#'

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Story Header */}
      <div className={`rounded-2xl bg-gradient-to-br ${story.coverGradient} p-8 mb-10`}>
        <p className="text-white/70 text-sm font-medium mb-2">{story.author}</p>
        <h1 className="text-3xl font-black text-white leading-tight mb-3">{story.title}</h1>
        <p className="text-white/80 italic">&ldquo;{story.tagline}&rdquo;</p>
        <p className="text-white/50 text-sm mt-4">{story.reads} reads &middot; {story.chapters.length} chapters</p>
      </div>

      {/* Free Chapters */}
      {freeChapters.map((chapter) => (
        <div key={chapter.number} className="mb-12">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">
            Chapter {chapter.number}
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{chapter.title}</h3>
          <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {chapter.content}
          </div>
          <hr className="my-8 border-gray-200" />
        </div>
      ))}

      {/* Locked Chapter Preview */}
      {lockedPreview && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">
            Chapter {lockedPreview.number}
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{lockedPreview.title}</h3>
          <div className="fade-overlay">
            <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {lockedPreview.content.substring(0, 600)}...
            </div>
          </div>
        </div>
      )}

      {/* Paywall CTA */}
      <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="text-5xl mb-4">LOCKED</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Keep Reading</h3>
        <p className="text-gray-500 mb-6">
          Unlock all chapters for <span className="font-bold text-gray-900">$5.99/week</span>
        </p>
        <a
          href={paymentLink}
          className="btn-cta inline-block"
        >
          CONTINUE READING
        </a>
        <p className="text-xs text-gray-400 mt-4">Cancel anytime. Instant access.</p>
      </div>
    </div>
  )
}
