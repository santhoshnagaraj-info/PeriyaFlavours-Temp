export default function Footer() {
  return (
    <footer className="bg-black pt-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-zinc-950 font-bold text-2xl">🍛</div>
              <span className="heading-font text-3xl tracking-tighter font-bold">PeriyaFlavours</span>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm">
              A celebration of Periyakulam's rich culinary heritage.<br />
              Pure discovery. No orders. Just good food vibes.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12 text-sm">
            <div>
              <p className="uppercase text-xs tracking-widest mb-6 text-zinc-400">Quick Links</p>
              <div className="space-y-3">
                <p>Featured Dishes</p>
                <p>Restaurants</p>
                <p>Tamil Nadu Classics</p>
              </div>
            </div>
            <div>
              <p className="uppercase text-xs tracking-widest mb-6 text-zinc-400">Discover</p>
              <div className="space-y-3">
                <p>Biryani Trail</p>
                <p>Parotta Places</p>
                <p>Breakfast Spots</p>
              </div>
            </div>
            <div>
              <p className="uppercase text-xs tracking-widest mb-6 text-zinc-400">Connect</p>
              <div className="flex gap-6 text-2xl">
                <a href="#" className="hover:text-emerald-400">IG</a>
                <a href="#" className="hover:text-emerald-400">𝕏</a>
                <a href="#" className="hover:text-emerald-400">YT</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 py-6 border-t border-zinc-900 text-xs text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 PeriyaFlavours • Made with love for Tamil Nadu food</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span className="text-emerald-400">Not an ordering platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}