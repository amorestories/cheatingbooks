import Link from 'next/link'
import { stories } from '@/data/stories'

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-4xl font-black text-gray-900 mb-4">You&apos;re In!</h1>
      <p className="text-xl text-gray-500 mb-10">All chapters are now unlocked. Dive in.</p>

      <div className="space-y-4">
        {stories.map((story) => (
          <Link
            key={story.id}
            href={\`/read/\${story.id}/1\`}
            className="block bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-6 text-left transition-shadow"
          >
            <h3 className="font-bold text-gray-900 mb-1">{story.title}</h3>
            <p className="text-sm text-gray-400">{story.chapters.length} chapters &middot; {story.author}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
