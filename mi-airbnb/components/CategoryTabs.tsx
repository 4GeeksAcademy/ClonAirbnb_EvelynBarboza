import type { Category } from "@/types/accommodation";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="overflow-x-auto border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl min-w-max gap-3 px-4 py-3 md:px-8">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-200 text-zinc-600 hover:border-zinc-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
