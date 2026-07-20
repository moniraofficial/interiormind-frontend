'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Services', href: '/services' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'AI Tools', href: '/ai-tools' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="h-9 w-9 bg-emerald-800 rounded-lg flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
              <path d="M12 7l-2 2h4l-2-2z" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-bold text-emerald-900 tracking-tight">INTERIORMIND AI</span>
        </Link>

        {/* Menu Section */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                className={`relative font-medium transition-colors ${
                  isActive ? 'text-emerald-800' : 'text-gray-600 hover:text-emerald-800'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[29px] left-0 w-full h-[2px] bg-emerald-800" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-emerald-900 font-medium hover:text-emerald-800 transition">
            Login
          </Link>
          <Link href="/signup" className="rounded-full bg-emerald-800 px-6 py-2 text-white hover:bg-emerald-900 transition-all">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}