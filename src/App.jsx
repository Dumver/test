import React, { useEffect } from "react";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Your tshirt",
    price: "$69.69 USD",
    img: "/images/FRONT.jpg",
  },
  {
    id: 2,
    title: "Your tshirt",
    price: "$69.69 USD",
    img: "/images/BACK.jpg",
  },
];

export default function CleanStore() {
  useEffect(() => {
    document.title = "clean";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;600&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              aria-label="search"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700"><circle cx="11" cy="11" r="6"></circle><path d="M21 21l-4.35-4.35"></path></svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center pointer-events-none">
            {/* centered logo */}
            <div className="pointer-events-auto text-center">
              <img src="/images/TUFFISION.jpg" alt="TUFFISION logo" className="mx-auto h-14 w-auto object-contain" />
              <nav className="mt-3 text-sm tracking-wide text-gray-700 font-medium">
                <a href="#" className="px-3 hover:underline">Home</a>
                <a href="#shop" className="px-3 hover:underline">Shop All</a>
                <a href="#contact" className="px-3 hover:underline">Contact</a>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="account" className="p-2 rounded-full hover:bg-gray-100 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700"><path d="M20 21v-2a4 4 0 0 0-3-3.87"></path><path d="M4 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            <button aria-label="cart" className="p-2 rounded-full hover:bg-gray-100 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700"><path d="M6 6h15l-1.5 9h-13z"></path><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-[16/10] bg-gray-100 overflow-hidden rounded-sm shadow-sm">
              <img
                src="/images/TUFFISION.jpg"
                alt="TUFFISION"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="pr-6 md:pr-12">
            <h1 className="font-serif text-5xl md:text-6xl leading-tight text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Exclusive Drops To Come this
              <br />
              Summer
            </h1>

            <p className="mt-8 text-gray-600 max-w-xl">
              Be the first to know about new collections and exclusive offers. DONT NUT.
            </p>

            <div className="mt-10 flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-200 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="ml-2 px-5 py-3 border border-gray-200 rounded-r-md hover:bg-gray-50 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </section>

        {/* Product grid */}
        <section id="shop" className="mt-20">
          <h2 className="text-4xl text-center font-serif mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>New Releases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SAMPLE_PRODUCTS.map((p) => (
              <article key={p.id} className="group">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-sm uppercase tracking-wider text-gray-600">{p.title}</h3>
                  <p className="mt-4 text-gray-800 font-medium">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-lg">Any questions? Email us at <a href="mailto:test@yourwebsite.com" className="underline">test@yourwebsite.com</a></p>
              <form className="mt-6 flex max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded-l-md text-black" />
                <button className="px-5 py-3 bg-white text-black rounded-r-md">→</button>
              </form>
            </div>

            <div className="flex items-center justify-end gap-6 opacity-80">
              <a href="#" aria-label="instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="3"></circle></svg>
              </a>
              <a href="#" aria-label="tiktok">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><path d="M9 2v11a3 3 0 1 0 3 3 7 7 0 0 0 7-7V6h-2"></path></svg>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-sm text-white/80 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Nutted On · Privacy policy · Refund policy · Contact</div>
            <div className="flex items-center gap-3">
              <img src="https://via.placeholder.com/48x16?text=AMEX" alt="pay" />
              <img src="https://via.placeholder.com/48x16?text=VISA" alt="pay" />
              <img src="https://via.placeholder.com/48x16?text=PP" alt="pay" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
