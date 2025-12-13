import Link from "next/link";

export default function PortfolioGrid({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/portfolio/${item.slug}`}
          className="rounded-lg overflow-hidden shadow-lg border bg-white"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />

          <div className="p-4 bg-gray-50 border-t">
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-xs text-gray-500 mt-1">{item.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
