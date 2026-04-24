"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type AgeGroup = "puppy" | "adult" | "senior";
type Concern =
  | "general-gut-health"
  | "diarrhea-support"
  | "gas-and-bloating"
  | "allergy-skin-support"
  | "post-antibiotic-support";

function getWeightBand(weightLbs: number) {
  if (weightLbs <= 0) return "unknown";
  if (weightLbs <= 20) return "small";
  if (weightLbs <= 60) return "medium";
  return "large";
}

function getTypicalSupportRange(weightBand: string) {
  if (weightBand === "small") return "typical label range for small dogs";
  if (weightBand === "medium") return "typical label range for medium dogs";
  if (weightBand === "large") return "typical label range for large dogs";
  return "a label-based range matched to your dog's size";
}

function getStatus(concern: Concern, ageGroup: AgeGroup) {
  if (
    concern === "diarrhea-support" ||
    (concern === "post-antibiotic-support" && (ageGroup === "puppy" || ageGroup === "senior"))
  ) {
    return { label: "Monitor closely", tone: "amber" as const };
  }
  if (concern === "allergy-skin-support" && ageGroup === "senior") {
    return { label: "Consult vet if persistent", tone: "red" as const };
  }
  if (ageGroup === "puppy" || ageGroup === "senior") {
    return { label: "Mild support", tone: "green" as const };
  }
  return { label: "Mild support", tone: "green" as const };
}

export default function CalculatorToolClient() {
  const [weightLbs, setWeightLbs] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("adult");
  const [concern, setConcern] = useState<Concern>("general-gut-health");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [weightError, setWeightError] = useState<string>("");
  const resultRef = useRef<HTMLElement | null>(null);

  const parsedWeight = Number(weightLbs);

  const result = useMemo(() => {
    if (!hasCalculated || !Number.isFinite(parsedWeight) || parsedWeight <= 0) return null;

    const weightBand = getWeightBand(parsedWeight);
    const supportRange = getTypicalSupportRange(weightBand);
    const status = getStatus(concern, ageGroup);

    const concernLabelMap: Record<Concern, string> = {
      "general-gut-health": "general gut health",
      "diarrhea-support": "diarrhea support",
      "gas-and-bloating": "gas and bloating",
      "allergy-skin-support": "allergy and skin support",
      "post-antibiotic-support": "post-antibiotic support",
    };

    const ageLabelMap: Record<AgeGroup, string> = {
      puppy: "puppy",
      adult: "adult",
      senior: "senior",
    };

    return {
      status,
      weightBand,
      supportRange,
      guidance:
        `For a ${ageLabelMap[ageGroup]} dog focused on ${concernLabelMap[concern]}, a safe starting point is ${supportRange}.`,
      keyRecommendation:
        "Use label-based guidance, start low, and adjust only with veterinary input if symptoms continue.",
      bullets: [
        "Start low and follow product instructions exactly",
        "Introduce one new supplement at a time",
        "Monitor stool quality, appetite, and comfort daily",
        "If symptoms continue, ask your veterinarian for personalized guidance",
      ],
    };
  }, [ageGroup, concern, hasCalculated, parsedWeight]);

  useEffect(() => {
    if (!result || !resultRef.current) return;
    resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [result]);

  const isConcernCoral =
    concern === "diarrhea-support" || concern === "post-antibiotic-support";

  return (
    <section className="border-y border-[#2c1f0e]/10 bg-[#faf6f0] py-14">
      <div className="mx-auto w-full max-w-4xl px-4">
        <article className="rounded-2xl border border-[#2c1f0e]/10 bg-white p-6 shadow-[0_8px_30px_rgba(44,31,14,0.08)] sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-[#2c1f0e]">
            Estimate Your Dog&apos;s Probiotic Needs
          </h2>
          <p className="mt-2 text-sm leading-7 text-[#5a4535]">
            Use this dashboard-style tool to get general guidance based on your dog&apos;s weight,
            age group, and digestive concern. Educational only.
          </p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              if (!Number.isFinite(parsedWeight) || parsedWeight <= 0) {
                setWeightError("Please enter a valid weight above 0 lbs.");
                setHasCalculated(false);
                return;
              }
              setWeightError("");
              setHasCalculated(true);
            }}
          >
            <div>
              <label htmlFor="weight" className="block text-xs font-semibold uppercase tracking-wider text-[#8a7060]">
                Dog Weight (lbs)
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                min="1"
                step="0.1"
                value={weightLbs}
                onChange={(e) => {
                  setWeightLbs(e.target.value);
                  if (weightError) setWeightError("");
                }}
                placeholder="Example: 32"
                className="mt-2 w-full rounded-xl border border-[#2c1f0e]/15 bg-white px-4 py-2.5 text-sm text-[#2c1f0e] outline-none transition focus:border-[#e8734a]/50 focus:ring-2 focus:ring-[#e8734a]/20"
              />
              {!!weightError && <p className="mt-2 text-xs text-rose-700">{weightError}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="age-group"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#8a7060]"
                >
                  Age Group
                </label>
                <select
                  id="age-group"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                  className="mt-2 w-full rounded-xl border border-[#2c1f0e]/15 bg-white px-4 py-2.5 text-sm text-[#2c1f0e] outline-none transition focus:border-[#e8734a]/50 focus:ring-2 focus:ring-[#e8734a]/20"
                >
                  <option value="puppy">Puppy</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label htmlFor="concern" className="block text-xs font-semibold uppercase tracking-wider text-[#8a7060]">
                  Main Concern
                </label>
                <select
                  id="concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value as Concern)}
                  className="mt-2 w-full rounded-xl border border-[#2c1f0e]/15 bg-white px-4 py-2.5 text-sm text-[#2c1f0e] outline-none transition focus:border-[#e8734a]/50 focus:ring-2 focus:ring-[#e8734a]/20"
                >
                  <option value="general-gut-health">General gut health</option>
                  <option value="diarrhea-support">Diarrhea support</option>
                  <option value="gas-and-bloating">Gas and bloating</option>
                  <option value="allergy-skin-support">Allergy / skin support</option>
                  <option value="post-antibiotic-support">Post-antibiotic support</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#e8734a] to-[#d6633b] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Get My Dog&apos;s Guidance &rarr;
            </button>
            <button
              type="button"
              onClick={() => {
                setWeightLbs("");
                setAgeGroup("adult");
                setConcern("general-gut-health");
                setHasCalculated(false);
              }}
              className="w-full rounded-xl border border-[#2c1f0e]/15 bg-white px-5 py-3 text-sm font-semibold text-[#5a4535] transition hover:border-[#e8734a]/30 hover:text-[#e8734a]"
            >
              Reset
            </button>
          </form>

          <div className="my-6 border-t border-[#2c1f0e]/10" />

          {!result ? null : (
            <article
              ref={resultRef}
              className="animate-pulse [animation-duration:500ms] [animation-iteration-count:1] rounded-2xl border border-[#2c1f0e]/10 bg-[#fffdfb] p-5"
            >
              <h3 className="font-serif text-2xl font-semibold text-[#2c1f0e]">Your Guidance</h3>
              <div
                className={`mt-4 rounded-2xl border p-4 ${
                  isConcernCoral
                    ? "border-[#f2b59b] bg-[#fff2ec]"
                    : "border-[#9dcfd6] bg-[#eef9fb]"
                }`}
              >
                <p
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    result.status.tone === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : result.status.tone === "red"
                        ? "bg-rose-100 text-rose-800"
                        : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {result.status.label}
                </p>
                <p
                  className={`mt-3 text-sm font-semibold ${
                    isConcernCoral ? "text-[#d6633b]" : "text-[#1f6f78]"
                  }`}
                >
                  {isConcernCoral ? "🧡 Digestive Caution Focus" : "🩵 Digestive Wellness Focus"}
                </p>
                <p className="mt-2 text-sm text-[#5a4535]">
                  Typical product range:{" "}
                  <span className="font-semibold capitalize">{result.supportRange}</span>
                </p>
                <p className="mt-3 text-sm leading-7 text-[#5a4535]">{result.guidance}</p>
                <p className="mt-3 rounded-xl bg-white/80 px-3 py-2 text-sm font-medium text-[#2c1f0e]">
                  Key recommendation: {result.keyRecommendation}
                </p>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5a4535]">
                {result.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <p className="font-semibold">When to call a vet</p>
                <p className="mt-1">
                  Seek veterinary care quickly for blood in stool, repeated vomiting, refusal to
                  eat, severe lethargy, dehydration, or symptoms lasting beyond 24-48 hours.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7060]">
                  Next step
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Link
                    href="/blog/do-dogs-need-probiotics"
                    className="rounded-full border border-[#2c1f0e]/15 bg-[#faf6f0] px-3 py-1.5 text-xs font-medium text-[#5a4535] hover:text-[#e8734a]"
                  >
                    Read related guide
                  </Link>
                  <Link
                    href="/vets/houston-tx"
                    className="rounded-full border border-[#2c1f0e]/15 bg-[#faf6f0] px-3 py-1.5 text-xs font-medium text-[#5a4535] hover:text-[#e8734a]"
                  >
                    Find a vet
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#2c1f0e]/15 bg-[#faf6f0] px-3 py-1.5 text-xs font-medium text-[#5a4535] hover:text-[#e8734a]"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </article>
          )}
        </article>
      </div>
    </section>
  );
}
