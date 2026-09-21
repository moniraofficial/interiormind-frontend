import { Briefcase, Users, Zap, Star } from 'lucide-react';

const stats = [
  { label: "Projects Completed", value: "25K+", icon: Briefcase, color: "text-emerald-800", bg: "bg-amber-50" },
  { label: "Happy Users", value: "18K+", icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "AI Designs Generated", value: "120K+", icon: Zap, color: "text-emerald-800", bg: "bg-orange-50" },
  { label: "Average Rating", value: "4.9/5", icon: Star, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <p className="text-center text-emerald-800 font-bold text-sm tracking-widest uppercase mb-12">
          BY THE NUMBERS
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`p-8 rounded-[32px] border border-gray-100 flex items-center gap-4 ${stat.bg}`}>
              <div className={`p-3 rounded-2xl bg-white/50 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}