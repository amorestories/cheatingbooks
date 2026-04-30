import Link from 'next/link'

export default function SubscribePage() {
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#'

  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-black text-gray-900 mb-4">Unlock Every Story</h1>
      <p className="text-gray-500 mb-10">One subscription. Unlimited drama.</p>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Weekly Pass</div>
        <div className="text-5xl font-black text-gray-900 mb-1">$5.99</div>
        <div className="text-gray-400 mb-6">per week</div>

        <ul className="text-left space-y-3 mb-8">
          <li className="flex items-center gap-3">
            <span className="text-green-500">✓</span>
            <span className="text-gray-700">All chapters, all stories</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✓</span>
            <span className="text-gray-700">New chapters every week</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✓</span>
            <span className="text-gray-700">Cancel anytime</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✓</span>
            <span className="text-gray-700">Read on any device</span>
          </li>
        </ul>

        <a href={paymentLink} className="btn-cta inline-block w-full text-center">
          SUBSCRIBE NOW
        </a>
      </div>

      <Link href="/" className="text-gray-400 text-sm mt-8 inline-block hover:text-gray-600">
        &larr; Back to stories
      </Link>
    </div>
  )
}
