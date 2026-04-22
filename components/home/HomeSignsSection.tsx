import { signs } from "@/data/home-content";

export default function HomeSignsSection() {
  return (
    <section id="signs" className="bg-[#f2ece2] py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
            Common Warning Signs
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#2c1f0e]">
            6 Signs Your Pet Needs Gut Support
          </h2>
          <p className="mt-4 text-[#5a4535]">
            These symptoms can suggest microbiome imbalance and may improve with
            the right probiotic support plan.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign, index) => (
            <article key={sign.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-semibold text-[#8a7060]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className="text-2xl">{sign.icon}</span>
              <h3 className="mt-3 font-semibold text-[#2c1f0e]">{sign.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#8a7060]">{sign.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
