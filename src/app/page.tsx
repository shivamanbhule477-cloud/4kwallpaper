'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Search, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-canvas">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-canvas border-b border-hairline-soft shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">📸 4K</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <input
              type="text"
              placeholder="Search for ideas..."
              className="w-96 px-4 py-2 rounded-full bg-surface-card text-body focus:bg-canvas focus:outline-none focus:ring-2 focus:ring-focus-outer"
            />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2 rounded-md text-body hover:text-primary transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 rounded-md bg-primary text-canvas font-button-md hover:bg-primary-pressed transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-surface-card rounded-md"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-canvas border-b border-hairline-soft p-4 space-y-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full bg-surface-card text-body focus:bg-canvas focus:outline-none"
            />
            <button className="w-full px-4 py-2 text-body hover:text-primary">Log in</button>
            <button className="w-full px-4 py-2 bg-primary text-canvas rounded-md font-button-md">
              Sign up
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-display-xl mb-6 text-ink">
          Create the life you love on 4K
        </h1>
        <p className="text-body-md text-body mb-8 max-w-2xl mx-auto">
          Discover millions of high-quality wallpapers and images organized in an elegant masonry grid.
        </p>
        <button className="px-8 py-3 bg-primary text-canvas rounded-md font-button-md hover:bg-primary-pressed transition-colors">
          Explore Now
        </button>
      </section>

      {/* Pin Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="pin-grid">
            {/* Sample pins */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="pin-card">
                <div className="w-full aspect-square bg-surface-card animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-canvas border-t border-hairline mt-section py-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-body-strong mb-4">About</h3>
              <ul className="space-y-2 text-body-sm text-mute">
                <li><a href="#" className="hover:text-ink">About Us</a></li>
                <li><a href="#" className="hover:text-ink">Privacy</a></li>
                <li><a href="#" className="hover:text-ink">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-body-strong mb-4">Help</h3>
              <ul className="space-y-2 text-body-sm text-mute">
                <li><a href="#" className="hover:text-ink">Help Center</a></li>
                <li><a href="#" className="hover:text-ink">Contact</a></li>
                <li><a href="#" className="hover:text-ink">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-body-strong mb-4">Discover</h3>
              <ul className="space-y-2 text-body-sm text-mute">
                <li><a href="#" className="hover:text-ink">Trending</a></li>
                <li><a href="#" className="hover:text-ink">Popular</a></li>
                <li><a href="#" className="hover:text-ink">Collections</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-body-strong mb-4">Business</h3>
              <ul className="space-y-2 text-body-sm text-mute">
                <li><a href="#" className="hover:text-ink">Advertise</a></li>
                <li><a href="#" className="hover:text-ink">Creators</a></li>
                <li><a href="#" className="hover:text-ink">API</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-hairline pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-caption-sm text-mute">© 2026 4K Wallpaper. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-caption-sm text-mute hover:text-ink">Twitter</a>
              <a href="#" className="text-caption-sm text-mute hover:text-ink">Instagram</a>
              <a href="#" className="text-caption-sm text-mute hover:text-ink">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}