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

  return (
    <section className="border-y border-gray-100 bg-white py-14">
      <div className="mx-auto w-full max-w-4xl px-4">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-gray-900">
            Estimate Your Dog&apos;s Probiotic Needs
          </h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">
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
              <label htmlFor="weight" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
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
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
              {!!weightError && <p className="mt-2 text-xs text-rose-700">{weightError}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="age-group"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Age Group
                </label>
                <select
                  id="age-group"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="puppy">Puppy</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label htmlFor="concern" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Main Concern
                </label>
                <select
                  id="concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value as Concern)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
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
              className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
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
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-brand-200 hover:text-brand-700"
            >
              Reset
            </button>
          </form>

          <div className="my-6 border-t border-gray-100" />

          {!result ? null : (
            <article
              ref={resultRef}
              className="animate-pulse [animation-duration:500ms] [animation-iteration-count:1] rounded-2xl border border-gray-100 bg-white p-5"
            >
              <h3 className="font-serif text-2xl font-semibold text-gray-900">Your Guidance</h3>
              <div
                className={`mt-4 rounded-2xl border p-4 ${
                  result.status.tone === "amber"
                    ? "border-amber-200 bg-amber-50"
                    : result.status.tone === "red"
                      ? "border-rose-200 bg-rose-50"
                      : "border-emerald-200 bg-emerald-50"
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
                    result.status.tone === "amber"
                      ? "text-amber-800"
                      : result.status.tone === "red"
                        ? "text-rose-800"
                        : "text-emerald-800"
                  }`}
                >
                  {result.status.tone === "amber"
                    ? "Digestive Caution Focus"
                    : result.status.tone === "red"
                      ? "Veterinary Review Recommended"
                      : "Digestive Wellness Focus"}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Typical product range:{" "}
                  <span className="font-semibold capitalize">{result.supportRange}</span>
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{result.guidance}</p>
                <p className="mt-3 rounded-xl bg-white/80 px-3 py-2 text-sm font-medium text-gray-900">
                  Key recommendation: {result.keyRecommendation}
                </p>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
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
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  Next step
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Link
                    href="/blog/do-dogs-need-probiotics"
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                  >
                    Read related guide
                  </Link>
                  <Link
                    href="/vets/houston-tx"
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                  >
                    Find a vet
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
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
