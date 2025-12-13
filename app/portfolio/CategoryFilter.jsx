export default function CategoryFilter({
  categories,
  active,
  onChange,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-2 rounded-full border transition ${
            active === cat
              ? "bg-black text-white border-black"
              : "border-gray-300 hover:border-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
