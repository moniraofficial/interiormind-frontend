// // src/app/categories/[id]/page.tsx
// import { getCategoryById } from '@/lib/api';

// export default async function CategoryDetails({ params }: { params: { id: string } }) {
//   const design = await getCategoryById(params.id);

//   if (!design) return <div>Design not found!</div>;

//   return (
//     <main className="container mx-auto p-6">
//       {/* ১. ইমেজ গ্যালারি সেকশন */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <img src={design.imageUrl} alt={design.title} className="w-full h-96 object-cover rounded-xl" />
//         <div>
//           <h1 className="text-4xl font-bold">{design.title}</h1>
//           <p className="text-2xl text-green-600 mt-4">${design.price}</p>
//           {/* এখানে বাটন ও অন্যান্য মেটা ইনফো বসান */}
//         </div>
//       </section>

//       {/* ২. ট্যাব সেকশন (Overview, Materials, Reviews) */}
//       <section className="mt-10">
//         <div className="flex space-x-6 border-b pb-2">
//           <span>Overview</span>
//           <span>Furniture & Decor</span>
//           <span>Reviews (32)</span>
//         </div>
//         <div className="py-6">
//           <h2 className="text-2xl font-semibold">About This Design</h2>
//           <p className="text-gray-600 mt-2">{design.description}</p>
//         </div>
//       </section>

//       {/* ৩. রিলেটেড ডিজাইন (যদি থাকে) */}
//       <section className="mt-10">
//         <h2 className="text-2xl font-bold">Related Designs</h2>
//         {/* এখানে Popular কার্ডগুলো আবার কল করতে পারেন */}
//       </section>
//     </main>
//   );
// }

// src/app/categories/[id]/page.tsx
// import { getCategoryById } from '@/lib/api';

// export default async function CategoryDetails({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = await params;
//   const design = await getCategoryById(id);

//   if (!design) return <div className="p-20 text-center">Design not found!</div>;

//   return (
//     <main className="container mx-auto p-6 max-w-6xl">
//       {/* টপ সেকশন: ইমেজ এবং ইনফো কার্ড */}
//       <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* মেইন ইমেজ */}
//         <div className="lg:col-span-2">
//           <img src={design.imageUrl} alt={design.title} className="w-full h-96 object-cover rounded-2xl" />
//         </div>

//         {/* ডানদিকের ইনফো কার্ড */}
//         <div className="border p-6 rounded-2xl shadow-sm bg-white">
//           <h1 className="text-3xl font-bold">{design.title}</h1>
//           <p className="text-green-700 text-3xl font-bold mt-4">${design.price || "2,450"}</p>
//           <p className="text-gray-500 mb-6">Estimated Budget</p>
          
//           <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
//             <p>✔ Living Room</p>
//             <p>✔ 2400 sq ft</p>
//             <p>✔ 3D Render</p>
//           </div>
          
//           <button className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold hover:bg-green-800">
//             Contact Designer
//           </button>
//         </div>
//       </section>

//       {/* মিডেল সেকশন: ট্যাব এবং ডিজাইন সামারি */}
//       <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="flex space-x-6 border-b pb-2 mb-6 text-gray-500">
//             <span className="text-green-900 border-b-2 border-green-900 pb-2 font-semibold">Overview</span>
//             <span>Furniture & Decor</span>
//             <span>Materials</span>
//             <span>Reviews</span>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">About This Design</h2>
//           <p className="text-gray-600">{design.description}</p>
//         </div>

//         {/* ডিজাইন সামারি বক্স */}
//         <div className="bg-gray-50 p-6 rounded-2xl">
//           <h3 className="font-bold text-xl mb-4">Design Summary</h3>
//           <div className="space-y-3 text-sm">
//             <p className="flex justify-between"><span>Style</span> <span className="font-semibold">Modern</span></p>
//             <p className="flex justify-between"><span>Room Type</span> <span className="font-semibold">Living Room</span></p>
//             <p className="flex justify-between"><span>Budget</span> <span className="font-semibold">$2,000 - $3,000</span></p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import { getCategoryById, getCategories } from '@/lib/api';
import Link from 'next/link';

export default async function CategoryDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const design = await getCategoryById(id);
  const allDesigns = await getCategories();

  if (!design) return <div className="p-20 text-center">Design not found!</div>;

  return (
    <main className="container mx-auto p-6 max-w-7xl">
      {/* ১. ইমেজ গ্যালারি ও ইনফো কার্ড */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img src={design.imageUrl} alt={design.title} className="w-full h-[450px] object-cover rounded-2xl shadow-md" />
        </div>
        
        {/* ইনফো কার্ড - মার্ক করা অংশসহ */}
        <div className="border border-gray-200 p-6 rounded-2xl shadow-sm bg-white self-start">
          <h1 className="text-2xl font-bold">{design.title}</h1>
          <div className="flex items-center gap-1 text-sm text-yellow-500 mt-2">
             <span>★★★★★</span> <span className="text-gray-500">(4.8)</span>
          </div>
          
          <div className="flex gap-2 mt-4 text-xs">
            <span className="border p-2 rounded">Living Room</span>
            <span className="border p-2 rounded">2400 sq ft</span>
            <span className="border p-2 rounded">3D Render</span>
          </div>

          <p className="text-3xl font-bold text-green-900 mt-6">${design.price || "2,450"}</p>
          <p className="text-gray-500 mb-6 text-sm">Estimated Budget</p>

          <button className="w-full bg-[#004d40] text-white py-3 rounded-lg font-semibold hover:bg-[#00332e] mb-6">
            Contact Designer
          </button>

          {/* ৩ কলামের ফিচার এরিয়া */}
          <div className="grid grid-cols-3 gap-2 text-center border-t pt-4 text-xs">
            <div><p className="text-gray-500">Area</p><p className="font-bold">3200 sq ft</p></div>
            <div><p className="text-gray-500">Timeline</p><p className="font-bold">3 Weeks</p></div>
            <div><p className="text-gray-500">Complexity</p><p className="font-bold">Moderate</p></div>
          </div>
        </div>
      </section>

      {/* ২. ট্যাব ও ডিজাইন সামারি */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        <div className="lg:col-span-2">
          <div className="flex gap-8 border-b text-gray-600 font-medium mb-6">
            <span className="border-b-2 border-green-900 text-green-900 pb-3">Overview</span>
            <span className="pb-3 hover:text-green-900 cursor-pointer">Furniture & Decor</span>
            <span className="pb-3 hover:text-green-900 cursor-pointer">Reviews</span>
          </div>
          <h2 className="text-xl font-bold mb-4">About This Design</h2>
          <p className="text-gray-600 leading-relaxed">{design.description}</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl self-start">
          <h3 className="font-bold text-lg mb-4">Design Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span>Style</span> <span className="font-semibold">Modern</span></div>
            <div className="flex justify-between"><span>Room Type</span> <span className="font-semibold">Living Room</span></div>
            <div className="flex justify-between"><span>Designer</span> <span className="font-semibold">Alex Morgan</span></div>
          </div>
        </div>
      </section>

      {/* ৩. রিলেটেড ডিজাইনস */}
      <section className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Designs</h2>
          <Link href="/" className="text-[#004d40] font-semibold border px-4 py-2 rounded-lg hover:bg-gray-50">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {allDesigns.slice(0, 4).map((item: any) => (
            <div key={item._id} className="border rounded-xl overflow-hidden hover:shadow-lg transition">
              <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold truncate">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">${item.price || "1,500"}</p>
                <Link href={`/categories/${item._id}`} className="block text-center bg-[#004d40] text-white py-2 rounded-lg text-sm">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}