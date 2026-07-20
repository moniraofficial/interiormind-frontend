// src/components/Popular.tsx
import { Suspense } from 'react';
import { getCategories } from '@/lib/api';
import { Category } from '@/types';
import { CardSkeleton } from './Skeleton';
import Link from 'next/link'; // লিঙ্ক ইমপোর্ট করুন

const Popular = async () => {
  const categories: Category[] = await getCategories();
  const popularCategories = categories.slice(0, 4);

  return (
    <section className="py-10 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Popular Categories</h2>
      
      {/* সাসপেন্স দিয়ে স্কেলিটন লোডার ব্যবহার */}
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-4 gap-6">{[1,2,3,4].map(i => <CardSkeleton key={i}/>)}</div>}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {popularCategories.map((item) => (
            <div key={item._id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3 flex-grow">{item.description}</p>
                
                {/* Meta Info */}
                <div className="text-xs text-gray-500 mb-4 space-y-1">
                  <p>Price: $150/day</p>
                  <p>Rating: ⭐ 4.8</p>
                </div>
                

<Link href={`/categories/${item._id}`}>
  <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
    View Details
  </button>
</Link>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Popular;
