import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
      <Container className="text-center">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-700">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
