'use client'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in">
              Explore a World of Endless Stories
            </h1>
            <p className="text-lg mb-8 opacity-90 animate-slide-up">
              Discover the latest articles on technology, innovation, and more. Begin your journey now!
            </p>
            <Link 
              href="/components/blog" 
              className="bg-yellow-400 text-gray-900 py-3 px-10 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 hover:bg-yellow-300 hover:scale-105 animate-bounce">
              Discover Latest Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-20 px-6 text-center bg-slate-300">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-indigo-400">
            <h3 className="font-bold text-2xl mb-3 text-gray-700">Tools for Visualizing Machine Learning Models</h3>
            <p className="text-gray-600 mb-4">By Iván Palomares Carrascosa on December 18, 2024 in Resources 0
 Post Share</p>
            <Link href="/components/blog1" className="text-indigo-600 font-semibold hover:underline">Read More</Link>
          </div>
          {/* Post 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-indigo-400">
            <h3 className="font-bold text-2xl mb-3 text-gray-700">Machine Learning Salaries and Job Market Analysis for 2024 and Beyond</h3>
            <p className="text-gray-600 mb-4">Market Overview of Jobs</p>
            <Link href="/components/blog2" className="text-indigo-600 font-semibold hover:underline">Read More</Link>
          </div>
          {/* Post 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-indigo-400">
            <h3 className="font-bold text-2xl mb-3 text-gray-700">5 of the Most Influential Machine Learning Papers of 2024</h3>
            <p className="text-gray-600 mb-4">Vision Transformers Need Registers</p>
            <Link href="/components/blog3" className="text-indigo-600 font-semibold hover:underline">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
