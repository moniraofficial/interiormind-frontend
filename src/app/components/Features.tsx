import { PencilRuler, LayoutDashboard, Sofa, MessageSquare } from 'lucide-react';

const features = [
  {
    title: "AI Design Generator",
    description: "Generate beautiful room designs based on your style and preferences.",
    icon: PencilRuler,
    color: "text-orange-400",
    bg: "bg-orange-50"
  },
  {
    title: "Room Analysis",
    description: "Upload your room photo and get AI analysis and improvement tips.",
    icon: LayoutDashboard,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Smart Recommendations",
    description: "Get personalized furniture and decor recommendations that fit your space.",
    icon: Sofa,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "AI Chat Assistant",
    description: "Chat with our AI interior designer for expert advice anytime.",
    icon: MessageSquare,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <p className="text-emerald-800 font-bold text-sm tracking-widest uppercase mb-3">
          OUR AI FEATURES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          AI-Powered Tools for <br/> Stunning Interiors
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-[32px] hover:shadow-xl transition-shadow duration-300 text-left bg-white">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}