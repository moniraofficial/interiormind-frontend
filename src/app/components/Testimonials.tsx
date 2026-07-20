import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "InteriorMind AI completely changed how I design my home. The suggestions are spot on and so easy to implement!",
    image: "https://i.pravatar.cc/100?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    text: "As an interior designer, this tool helps me present ideas faster and impress my clients every time.",
    image: "https://i.pravatar.cc/100?u=michael"
  },
  {
    name: "Emily Davis",
    role: "Homeowner",
    text: "I uploaded my empty room photo and got stunning designs in minutes. Highly recommend!",
    image: "https://i.pravatar.cc/100?u=emily"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-emerald-800 font-bold text-sm tracking-widest uppercase mb-12">
          WHAT OUR USERS SAY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-[32px] text-left hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-orange-600 mb-6" />
              <p className="text-gray-600 mb-8 leading-relaxed">{item.text}</p>
              
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              
              <div className="flex text-orange-400 mt-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 rounded-full bg-emerald-800" />
          <div className="w-3 h-3 rounded-full bg-gray-200" />
          <div className="w-3 h-3 rounded-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
}