// components/Header.tsx
'use client'
import Link from "next/link";

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Judson } from 'next/font/google'

const judson = Judson({ subsets: ['latin'], weight: '400' })

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'Projects', 'Design', 'Blog']

  // Function to get the correct href for each nav item
  const getNavHref = (item: string) => {
    if (item === 'Home') {
      return '/'
    }
    return `/${item.toLowerCase()}`
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center shadow-2xs"
     style={{ backgroundColor: "var(--navbar-bg-color)" }}>
      <div className="max-w-[1138px] mx-auto flex items-center justify-between w-full ">
        {/* Logo with image behind */}
        <div className="relative flex items-center justify-center mr-8">
          <span className={`font-bold text-[28px] relative z-10 px-4 md:px-0 ${judson.className}`}>
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-[37px] ">
          {navItems.map((item) => (
            <a
              key={item}
              href={getNavHref(item)}
              className="hover:text-pink-100 text-[21px] transition-colors font-medium duration-300"
              
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-4"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden shadow-lg z-50"
            style={{
              background: "var(--background)"
            }}>
            <nav className="flex flex-col border border-gray-200 rounded-b-lg overflow-hidden">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={getNavHref(item)}
                  className={`
                    text-black hover:text-gray-700 hover:bg-gray-50
                    transition-all duration-200 font-medium px-4 py-3
                    border-b-[1px] border-[var(--navbar-bg-color)]/50
                    active:bg-gray-100 focus:outline-none focus:bg-gray-50
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar