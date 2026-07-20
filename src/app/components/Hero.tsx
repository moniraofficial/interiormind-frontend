export default function Hero() {
  // ইন্টেরিয়র ডিজাইনের কিছু র্যান্ডম হাই-কোয়ালিটি ছবি
  const mainImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200";
  const thumbnails = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=300",
    "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=300"
  ];

  return (
    <section className="container mx-auto px-6 py-12 md:py-10 flex flex-col md:flex-row items-center gap-12">
      
      {/* বাম পাশ: টেক্সট কনটেন্ট */}
      <div className="flex-1 space-y-6">

        
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 leading-tight">
          Design Your Dream Space with <span className="text-emerald-700">AI Magic</span>
        </h1>
        
        <p className="text-gray-600 text-lg max-w-lg">
          Upload a photo of your room and let our AI interior designer transform it into a beautiful, personalized space you'll love.
        </p>

        <div className="flex gap-4">
          <button className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition">
            Start Designing
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
            Explore Inspiration
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100 mt-8">
          <p className="text-sm text-gray-500 mb-3">Trusted by 25K+ homeowners and designers</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full w-fit">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="font-bold text-gray-800">4.9</span>
              <span className="text-gray-500 text-sm">(2.1K Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ডান পাশ: ইমেজ গ্যালারি */}
      <div className="flex-1 w-full">
        <div className="bg-white p-4 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50">
          <div className="relative h-[450px] w-full bg-gray-200 rounded-[24px] mb-4 overflow-hidden">
             <img src={mainImage} alt="Main Design" className="w-full h-full object-cover" />
             {/* <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-xl shadow-lg text-sm font-medium text-gray-800">
               AI Generated
             </div> */}
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {thumbnails.map((img, i) => (
              <div key={i} className="h-24 rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-300 transition cursor-pointer">
                <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}