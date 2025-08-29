// components/Header.tsx
'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Judson } from 'next/font/google'
const judson = Judson({ subsets: ['latin'], weight: '400' }) // Add this line
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'Projects', 'Skills', 'Blog']

// ...existing code...
  return (
    <header className=" relative h-[72px] flex items-center"
     style={{ backgroundColor: "var(--navbar-bg-color)" }}>
      <div className="max-w-[1138px] mx-auto flex items-center justify-between w-full">
        {/* Logo with image behind */}
        <div className="relative flex items-center justify-center mr-8">
          {/* <img
            src="/portfolio-logo.png"
            alt="Portfolio Logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[135.7px] h-[80.84px] opacity-100 pointer-events-none"
            style={{ zIndex: 0 }}
          /> */}
          <span className={`font-bold text-[24px] relative z-10 ${judson.className}`}>
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-[37px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-pink-100 text-[21px] transition-colors font-medium duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-pink-400 md:hidden">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-pink-100 transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
// ...existing code...
}

export default Navbar;