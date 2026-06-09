export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Header skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-navy-mid rounded-lg" />
              <div className="w-24 h-5 bg-navy-mid rounded" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <div className="w-16 h-4 bg-navy-mid rounded" />
              <div className="w-20 h-4 bg-navy-mid rounded" />
              <div className="w-14 h-4 bg-navy-mid rounded" />
            </div>
            <div className="w-28 h-10 bg-navy-mid rounded-lg" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="w-40 h-4 bg-navy-mid rounded mb-4" />
              <div className="w-full h-12 bg-navy-mid rounded mb-3" />
              <div className="w-3/4 h-12 bg-navy-mid rounded mb-6" />
              <div className="w-full h-6 bg-navy-mid rounded mb-2" />
              <div className="w-2/3 h-6 bg-navy-mid rounded mb-8" />
              <div className="flex gap-4">
                <div className="w-40 h-12 bg-navy-mid rounded-lg" />
                <div className="w-36 h-12 bg-navy-mid rounded-lg" />
              </div>
            </div>
            <div className="w-full h-80 bg-navy-mid rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Features skeleton */}
      <div className="py-24 px-6 bg-navy-dark">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-md mb-12">
            <div className="w-64 h-8 bg-navy-mid rounded mb-4" />
            <div className="w-80 h-5 bg-navy-mid rounded" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-6 bg-background/50 rounded-xl">
                <div className="w-12 h-12 bg-navy-mid rounded-lg mb-4" />
                <div className="w-32 h-5 bg-navy-mid rounded mb-2" />
                <div className="w-full h-4 bg-navy-mid rounded mb-1" />
                <div className="w-3/4 h-4 bg-navy-mid rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
