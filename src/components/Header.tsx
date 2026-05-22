import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-16 md:h-[72px] flex border-b border-black bg-white">
      {/* Logo (Kiri) */}
      <div className="flex items-center h-full px-6 md:px-8 border-r border-black flex-none">
        <Link href="/" className="font-sans font-medium text-xl lowercase">
          skøld.
        </Link>
      </div>

      {/* Navigation (Tengah - Desktop) */}
      <nav className="hidden md:flex flex-1 items-center justify-end gap-6 mr-6">
        <Link href="/projects" className="text-xs font-medium uppercase tracking-wide hover:underline underline-offset-4">
          Projects
        </Link>
        <Link href="/services" className="text-xs font-medium uppercase tracking-wide hover:underline underline-offset-4">
          Services
        </Link>
        <Link href="/about" className="text-xs font-medium uppercase tracking-wide hover:underline underline-offset-4">
          About Me
        </Link>
        <Link href="/blog" className="text-xs font-medium uppercase tracking-wide hover:underline underline-offset-4">
          Blog
        </Link>
        <Link href="/shop" className="text-xs font-medium uppercase tracking-wide hover:underline underline-offset-4">
          Shop
        </Link>
        <div className="text-xs font-medium uppercase tracking-wide cursor-pointer flex items-center gap-1 hover:underline underline-offset-4">
          Pages 
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* Spacer untuk Mobile agar Hamburger terdorong ke kanan */}
      <div className="flex-1 md:hidden"></div>

      {/* Cart (Kanan 1 - Desktop) */}
      <div className="hidden md:flex items-center h-full px-6 border-l border-black text-xs uppercase font-medium flex-none">
        Cart (0)
      </div>

      {/* Tombol (Kanan 2 - Desktop) */}
      <Link href="/contact" className="hidden md:flex items-center h-full px-8 bg-[#1a1a1a] text-white border-l border-black text-xs uppercase font-medium cursor-pointer hover:bg-gray-800 transition-colors flex-none">
        Get in touch
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <div className="flex md:hidden items-center h-full px-6 border-l border-black cursor-pointer flex-none">
        <div className="space-y-1.5">
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black"></div>
        </div>
      </div>
    </header>
  );
}
