// src/components/Skeleton.tsx
export const CardSkeleton = () => {
  return (
    <div className="border border-gray-100 p-4 rounded-xl shadow-sm animate-pulse bg-white">
      {/* ইমেজের জন্য স্কেলেটন */}
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
      
      {/* টাইটেলের জন্য স্কেলেটন */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
      
      {/* ডেসক্রিপশনের জন্য স্কেলেটন */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      
      {/* মেটা ইনফো এবং বাটনের জন্য স্কেলেটন */}
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
    </div>
  );
};