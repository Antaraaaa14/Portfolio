function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold tracking-wide">
          Antara's Portfolio<span className="text-purple-400">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-purple-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-purple-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-400 duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;