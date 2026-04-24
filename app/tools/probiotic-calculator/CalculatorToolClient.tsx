"use client";

import { useMemo, useState } from "react";
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
  if (weightLbs <= 15) return "small";
  if (weightLbs <= 45) return "medium";
  if (weightLbs <= 80) return "large";
  return "x-large";
}

function getTypicalSupportRange(weightBand: string) {
  if (weightBand === "small") return "typically a low-label range for small dogs";
  if (weightBand === "medium") return "typically a moderate-label range for medium dogs";
  if (weightBand === "large") return "typically a moderate-to-higher label range for large dogs";
  if (weightBand === "x-large") return "typically a higher label range for very large dogs";
  return "a label-based range matched to your dog's size";
}

function getStatus(concern: Concern, ageGroup: AgeGroup) {
  if (concern === "diarrhea-support" || concern === "post-antibiotic-support") {
    return { label: "Closer monitoring recommended", tone: "amber" as const };
  }
  if (ageGroup === "puppy" || ageGroup === "senior") {
    return { label: "Go extra slowly", tone: "blue" as const };
  }
  return { label: "General support planning", tone: "green" as const };
}

export default function CalculatorToolClient() {
  const [weightLbs, setWeightLbs] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("adult");
  const [concern, setConcern] = useState<Concern>("general-gut-health");
  const [hasCalculated, setHasCalculated] = useState(false);

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
      guidance:
        `For a ${ageLabelMap[ageGroup]} dog focused on ${concernLabelMap[concern]}, a safe starting point is ${supportRange}.`,
      bullets: [
        "Start low and follow product instructions exactly",
        "Introduce one new supplement at a time",
        "Monitor stool quality, appetite, and comfort daily",
        "If symptoms continue, ask your veterinarian for personalized guidance",
      ],
    };
  }, [ageGroup, concern, hasCalculated, parsedWeight]);

  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[#2c1f0e]">Calculator</h2>
            <p className="mt-2 text-sm leading-6 text-[#5a4535]">
              This tool gives general guidance only. Product instructions vary, and veterinary
              advice should always guide final decisions.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setHasCalculated(true);
              }}
            >
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-[#2c1f0e]">
                  Dog weight (lbs)
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  min="1"
                  step="0.1"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(e.target.value)}
                  placeholder="Example: 32"
                  className="mt-1 w-full rounded-xl border border-[#2c1f0e]/15 px-4 py-2.5 text-sm text-[#2c1f0e] outline-none transition focus:border-[#e8734a]/50 focus:ring-2 focus:ring-[#e8734a]/20"
                />
              </div>

              <div>
                <label htmlFor="age-group" className="block text-sm font-medium text-[#2c1f0e]">
                  Dog age group
                </label>
                <select
                  id="age-group"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                  className="mt-1 w-full rounded-xl border border-[#2c1f0e]/15 bg-white px-4 py-2.5 text-sm text-[#2c1f0e] outline-none transition focus:border-[#e8734a]/50 focus:ring-2 focus:ring-[#e8734a]/20"
                >
                  <option value="puppy">Puppy</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label htmlFor="concern" className="block text-sm font-medium text-[#2c1f0e]">
                  Main concern
                </label>
                <select
                  id="concern"
                  value={concern}
                  onChange={(e) => setConcern(e.target.value as Concern)}
                  className="mt-1 w-full rounded-xl border border-[#2c1f0e]/15 bg-white px-4 py-2.5 text-sm text-[#2c1f0e] outline-none transition focus:border-[#e8734a]/50 focus:ring-2 focus:ring-[#e8734a]/20"
                >
                  <option value="general-gut-health">General gut health</option>
                  <option value="diarrhea-support">Diarrhea support</option>
                  <option value="gas-and-bloating">Gas and bloating</option>
                  <option value="allergy-skin-support">Allergy / skin support</option>
                  <option value="post-antibiotic-support">Post-antibiotic support</option>
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-[#e8734a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d6633b]"
              >
                Get general guidance
              </button>
            </form>
          </article>

          <article className="rounded-3xl border border-[#2c1f0e]/10 bg-[#faf6f0] p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#2c1f0e]">Your result</h3>

            {!result ? (
              <p className="mt-3 text-sm leading-6 text-[#5a4535]">
                Enter your dog&apos;s details and click <strong>Get general guidance</strong> to view
                a typical support approach.
              </p>
            ) : (
              <>
                <p
                  className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    result.status.tone === "amber"
                      ? "bg-amber-100 text-amber-800"
                      : result.status.tone === "blue"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {result.status.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5a4535]">{result.guidance}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5a4535]">
                  {result.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-semibold">When to call a vet</p>
              <p className="mt-1">
                Seek veterinary care quickly for blood in stool, repeated vomiting, refusal to eat,
                severe lethargy, dehydration, or symptoms lasting beyond 24-48 hours.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/dogs/probiotics/diarrhea"
                className="rounded-full border border-[#2c1f0e]/15 bg-white px-3 py-1.5 text-xs font-medium text-[#5a4535] hover:text-[#e8734a]"
              >
                Dog diarrhea support
              </Link>
              <Link
                href="/blog/do-dogs-need-probiotics"
                className="rounded-full border border-[#2c1f0e]/15 bg-white px-3 py-1.5 text-xs font-medium text-[#5a4535] hover:text-[#e8734a]"
              >
                Do dogs need probiotics?
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#2c1f0e]/15 bg-white px-3 py-1.5 text-xs font-medium text-[#5a4535] hover:text-[#e8734a]"
              >
                Ask our team
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
