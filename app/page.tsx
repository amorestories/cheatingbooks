import Link from 'next/link'
import { stories } from '@/data/stories'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
          Stories That Make You<br />
          <span className="text-red-600">Question Everything</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          Addictive serialized romance. Betrayal, revenge, and plot twists that hit like a truck. Start reading free.
        </p>
        <Link href="#stories" className="btn-cta inline-block">
          START READING FREE
        </Link>
      </section>

      {/* Stories */}
      <section id="stories" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trending Now</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Link key={story.id} href={`/story/${story.id}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`h-64 bg-gradient-to-br ${story.coverGradient} flex items-end p-6`}>
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1">{story.author}</p>
                    <h3 className="text-white text-xl font-bold leading-tight">{story.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 italic mb-3">&ldquo;{story.tagline}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{story.reads} reads</span>
                    <span className="text-red-600 font-semibold text-sm group-hover:underline">Read Now &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-lg mb-2">Read 3 Free Chapters</h3>
              <p className="text-gray-500">Get hooked on the story before you commit.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="font-bold text-lg mb-2">Unlock Full Access</h3>
              <p className="text-gray-500">Subscribe for $5.99/week to read everything.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="font-bold text-lg mb-2">New Chapters Weekly</h3>
              <p className="text-gray-500">Fresh drama drops every week. Never miss a twist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Hooked?</h2>
        <p className="text-gray-500 mb-8">Start with 3 free chapters. No credit card required.</p>
        <Link href="#stories" className="btn-cta inline-block">
          BROWSE STORIES
        </Link>
      </section>
    </div>
  )
}
