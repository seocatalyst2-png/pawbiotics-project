import Link from "next/link";

export default function CategoryCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <Link
      href={href}
      className="group block cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
      aria-label={`Open ${title} guide`}
    >
      {icon && (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-2xl">
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
