// export default function TrustedBrands() {
//   const brands = [
//     { name: "West Elm", url: "https://cdn.worldvectorlogo.com/logos/west-elm.svg" },
//     { name: "IKEA", url: "https://cdn.worldvectorlogo.com/logos/ikea.svg" },
//     { name: "Wayfair", url: "https://cdn.worldvectorlogo.com/logos/wayfair.svg" },
//     { name: "Amazon", url: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg" },
//     { name: "Ashley", url: "https://cdn.worldvectorlogo.com/logos/ashley-furniture-industries.svg" },
//     { name: "La-Z-Boy", url: "https://cdn.worldvectorlogo.com/logos/la-z-boy.svg" },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto px-6">
//         <p className="text-center text-xs font-semibold text-gray-400 mb-10 tracking-widest uppercase">
//           Trusted by top brands
//         </p>

//         <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20 opacity-70">
//           {brands.map((brand) => (
//             <div key={brand.name} className="h-8 md:h-10 flex items-center">
//               <img 
//                 src={brand.url} 
//                 alt={brand.name} 
//                 className="h-full w-auto object-contain" 
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }