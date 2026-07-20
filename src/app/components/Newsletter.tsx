export default function Newsletter() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white rounded-[40px] p-8 lg:p-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-emerald-800 font-bold text-sm tracking-widest uppercase mb-4">
              STAY INSPIRED
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Get the latest design ideas & tips <br/> delivered to your inbox.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-800 transition"
              />
              <button className="px-8 py-4 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4 ml-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full max-w-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior design inspiration" 
                className="rounded-[40px] shadow-2xl object-cover h-[300px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}