"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

export default function ExplorePage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // States for features
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://interiormind-backend.vercel.app/api/categories")
      .then((res) => res.json())
      .then((res) => {
        setData(Array.isArray(res) ? res : []);
        setLoading(false);
      });
  }, []);

  // Categories for dropdown
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(data.map((item) => item.category).filter(Boolean)));
    return ["All", ...uniqueCats];
  }, [data]);

  // Filtering Logic
  const filteredData = data.filter((item) => {
    const matchesSearch = item?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || item?.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sorting Logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === "price") return (a.price || 0) - (b.price || 0);
    return 0;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Explore Designs</h1>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-8">
        <input type="text" placeholder="Search..." className="border p-2 rounded" onChange={(e) => setSearchTerm(e.target.value)} />
        <select onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded" value={category}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        <select onChange={(e) => setSort(e.target.value)} className="border p-2 rounded">
          <option value="default">Sort by</option>
          <option value="price">Price (Low-High)</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div key={item._id} className="border rounded-xl p-4 shadow-sm bg-white flex flex-col">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <p className="font-bold">Price: ${item.price || 0}</p>
            <p className="mb-4">Rating: ⭐ {item.rating || 0}</p>
            <Link href={`/categories/${item._id}`} className="mt-auto">
              <button className="w-full bg-[#0a4d3c] text-white py-2 rounded-lg font-bold">View Details</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex gap-2 justify-center">
        {Array.from({ length: Math.ceil(sortedData.length / itemsPerPage) }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)} className="px-4 py-2 border rounded">
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}


