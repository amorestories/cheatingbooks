'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { stories } from '@/data/stories'

export default function ReadChapterPage() {
  const params = useParams()
  const story = stories.find((s) => s.id === params.id)
  const chapterNum = parseInt(params.chapter as string, 10)

  if (!story) {
    return (
      <div className=\"max-w-2xl mx-auto px-4 py-20 text-center\">
        <h1 className=\"text-2xl font-bold text-gray-900\">Story not found</h1>
        <Link href=\"/\" className=\"text-red-600 mt-4 inline-block\">Back to home</Link>
      </div>
    )
  }

  const chapter = story.chapters.find((c) => c.number === chapterNum)

  if (!chapter) {
    return (
      <div className=\"max-w-2xl mx-auto px-4 py-20 text-center\">
        <h1 className=\"text-2xl font-bold text-gray-900\">Chapter not found</h1>
        <Link href={\`/read/\${story.id}/1\`} className=\"text-red-600 mt-4 inline-block\">Start from Chapter 1</Link>
      </div>
    )
  }

  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null
  const nextChapter = chapterNum < story.chapters.length ? chapterNum + 1 : null

  return (
    <div className=\"max-w-2xl mx-auto px-4 py-10\">
      <Link href={\`/story/\${story.id}\`} className=\"text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block\">
        &larr; {story.title}
      </Link>

      <h2 className=\"text-sm font-bold text-red-600 uppercase tracking-wider mb-1\">
        Chapter {chapter.number}
      </h2>
      <h1 className=\"text-3xl font-bold text-gray-900 mb-8\">{chapter.title}</h1>

      <div className=\"prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line mb-12\">
        {chapter.content}
      </div>

      <div className=\"flex items-center justify-between border-t border-gray-200 pt-6\">
        {prevChapter ? (
          <Link
            href={\`/read/\${story.id}/\${prevChapter}\`}
            className=\"text-red-600 font-semibold hover:underline\"
          >
            &larr; Previous Chapter
          </Link>
        ) : <span />}
        {nextChapter ? (
          <Link
            href={\`/read/\${story.id}/\${nextChapter}\`}
            className=\"text-red-600 font-semibold hover:underline\"
          >
            Next Chapter &rarr;
          </Link>
        ) : (
          <span className=\"text-gray-400 italic\">End of story</span>
        )}
      </div>
    </div>
  )
}
