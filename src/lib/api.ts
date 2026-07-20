// export async function getCategories() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
//       cache: 'no-store'
//     });
//     if (!res.ok) throw new Error('Data fetch failed');
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

// src/lib/api.ts
// export async function getCategories() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
//       cache: 'no-store'
//     });
//     if (!res.ok) throw new Error('Data fetch failed');
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

// // নতুন ফাংশন: একটি নির্দিষ্ট ডাটা আনার জন্য
// export async function getCategoryById(id: string) {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
//       cache: 'no-store'
//     });
//     if (!res.ok) return null;
//     return await res.json();
//   } catch (error) {
//     console.error(`Error fetching category ${id}:`, error);
//     return null;
//   }
// }

export async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Data fetch failed');
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getCategoryById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching category details:", error);
    return null;
  }
}