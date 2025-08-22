import React from 'react'

const Header = () => {
  return (
   <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
  {/* Logo / Title */}
  <h1 className="text-xl font-bold">Welcome to de Aurum</h1>

  {/* Navigation */}
  <nav className="flex space-x-6">
    <a href="#" className="hover:text-yellow-400 transition">Home</a>
    <a href="#" className="hover:text-yellow-400 transition">About</a>
    <a href="#" className="hover:text-yellow-400 transition">Contact</a>
  </nav>
</header>

  )
}

export default Header