import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b1614] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 bg-emerald-700 rounded-md flex items-center justify-center font-bold">AI</div>
              <span className="text-xl font-bold tracking-tight">InteriorMind<br/>AI</span>
            </div>
            <p className="text-sm text-gray-400 mb-3">AI Interior Design Platform</p>
            <p className="text-sm font-normal text-gray-300">Design beautifully. Live beautifully.</p>
          </div>

          {/* Links Sections */}
          {[
            { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
            { title: 'Explore', links: ['All Designs', 'Popular Styles', 'Inspiration', 'Room Ideas'] },
            { title: 'Services', links: ['AI Design Generator', 'Room Analysis', 'Smart Recommendations', 'AI Chat Assistant'] },
            { title: 'Resources', links: ['Help Center', 'Design Guide', 'Pricing', 'FAQs'] },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-6">{section.title}</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                {section.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:text-emerald-400 transition">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-4">Subscribe to our newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">Get the latest design ideas and tips.</p>
            <input type="email" placeholder="Enter your email" className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2.5 text-sm mb-3 focus:outline-none focus:border-emerald-500" />
            <button className="w-full bg-emerald-800 text-white text-sm font-bold py-2.5 rounded-lg hover:bg-emerald-900 transition">Subscribe</button>
            
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaPinterestP, FaYoutube].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2024 InteriorMind AI. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}