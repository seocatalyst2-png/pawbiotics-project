import { intentItems } from "@/data/home-content";

export default function HomeIntentStrip() {
  return (
    <section className="bg-[#2c1f0e] py-5">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 px-4 text-center">
        {intentItems.map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#faf6f0]/80">{item}</span>
            {index < intentItems.length - 1 && (
              <span className="hidden h-5 w-px bg-[#faf6f0]/20 md:inline-block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
