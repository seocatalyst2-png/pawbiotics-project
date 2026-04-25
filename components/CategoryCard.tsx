import Link from "next/link";

export default function CategoryCard({
  href,
  title,
  description,
  icon,
  cardClassName,
  iconClassName,
}: {
  href: string;
  title: string;
  description: string;
  icon?: string;
  cardClassName?: string;
  iconClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={`group block cursor-pointer rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${
        cardClassName ?? "border-gray-100 bg-white hover:border-brand-200"
      }`}
      aria-label={`Open ${title} guide`}
    >
      {icon && (
        <div
          className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${
            iconClassName ?? "bg-brand-50"
          }`}
        >
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-brand-700">
        Open guide &rarr;
      </span>
    </Link>
  );
}
