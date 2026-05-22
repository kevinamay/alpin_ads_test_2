import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-[63px] flex border-b border-black bg-white text-[#242424] text-[13px] leading-[1.4] font-mono uppercase font-normal">
      {/* Logo (Paling Kiri) */}
      <div className="flex items-center h-full px-8 border-r border-black flex-none">
        <Link href="/" className="font-sans font-medium text-xl lowercase normal-case">
          skøld.
        </Link>
      </div>

      {/* Navigasi (Tengah - Desktop) */}
      <nav className="hidden lg:flex flex-1 items-center gap-[32px] px-8">
        <Link href="/projects" className="hover:underline underline-offset-4">
          PROJECTS
        </Link>
        <Link href="/services" className="hover:underline underline-offset-4">
          SERVICES
        </Link>
        <Link href="/about" className="hover:underline underline-offset-4">
          ABOUT ME
        </Link>
        <Link href="/blog" className="hover:underline underline-offset-4">
          BLOG
        </Link>
        <Link href="/shop" className="hover:underline underline-offset-4">
          SHOP
        </Link>
        <div className="cursor-pointer flex items-center gap-1 hover:underline underline-offset-4">
          PAGES 
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </nav>

      {/* Spacer untuk Mobile agar Hamburger terdorong ke kanan */}
      <div className="flex-1 lg:hidden"></div>

      {/* Cart (Kanan 1 - Desktop) */}
      <div className="hidden lg:flex items-center justify-center h-full w-[127px] border-l border-black flex-none">
        CART (0)
      </div>

      {/* Button (Paling Kanan - Desktop) */}
      <Link href="/contact" className="hidden lg:flex items-center justify-center h-full w-[158px] bg-[#242424] text-[#FFFFFF] border-l border-black cursor-pointer hover:bg-black transition-colors flex-none">
        GET IN TOUCH
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <div className="flex lg:hidden items-center justify-center h-full w-[63px] border-l border-black cursor-pointer flex-none">
        <div className="space-y-1.5">
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black"></div>
        </div>
      </div>
    </header>
  );
}

