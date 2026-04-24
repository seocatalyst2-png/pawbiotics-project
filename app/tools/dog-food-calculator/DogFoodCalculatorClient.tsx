"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type AgeGroup = "puppy" | "adult" | "senior";
type ActivityLevel = "low" | "normal" | "high";
type FoodType = "dry-kibble" | "wet-food" | "fresh-food" | "homemade-food";
type BodyCondition = "underweight" | "ideal" | "overweight";

function getWeightBand(weight: number) {
  if (weight <= 0) return "unknown";
  if (weight <= 20) return "small";
  if (weight <= 60) return "medium";
  return "large";
}

function getPortionDirection(
  ageGroup: AgeGroup,
  activity: ActivityLevel,
  condition: BodyCondition
) {
  let score = 0;
  if (ageGroup === "puppy") score += 1;
  if (ageGroup === "senior") score -= 1;
  if (activity === "high") score += 1;
  if (activity === "low") score -= 1;
  if (condition === "underweight") score += 1;
  if (condition === "overweight") score -= 1;

  if (score >= 2) return "upper-label";
  if (score <= -2) return "lower-label";
  return "mid-label";
}

function getStatus(condition: BodyCondition, activity: ActivityLevel, ageGroup: AgeGroup) {
  if (condition === "underweight" && ageGroup !== "puppy") {
    return { label: "Vet review recommended", tone: "red" as const };
  }
  if (condition === "overweight" || activity === "low") {
    return { label: "Monitor portions closely", tone: "amber" as const };
  }
  return { label: "General starting point", tone: "green" as const };
}

function getFrequency(ageGroup: AgeGroup) {
  if (ageGroup === "puppy") {
    return "Most puppies do best with 3 to 4 smaller meals per day.";
  }
  if (ageGroup === "senior") {
    return "Many seniors do well with 2 smaller meals per day and routine monitoring.";
  }
  return "Most adult dogs do well with 2 meals per day.";
}

function getFoodTypeNote(foodType: FoodType) {
  if (foodType === "dry-kibble") {
    return "Kibble calories vary by brand and recipe density. Use cup guidance only as a starting point.";
  }
  if (foodType === "wet-food") {
    return "Wet foods often differ in calories per can or tray, so check label calories per container.";
  }
  if (foodType === "fresh-food") {
    return "Fresh food portions can vary widely. Follow brand feeding charts and adjust with your vet.";
  }
  return "Homemade meals need careful nutrient balance and calorie awareness, ideally with veterinary guidance.";
}

export default function DogFoodCalculatorClient() {
  const [weightLbs, setWeightLbs] = useState("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("adult");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("normal");
  const [foodType, setFoodType] = useState<FoodType>("dry-kibble");
  const [bodyCondition, setBodyCondition] = useState<BodyCondition>("ideal");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [weightError, setWeightError] = useState("");
  const resultRef = useRef<HTMLElement | null>(null);

  const parsedWeight = Number(weightLbs);

  const result = useMemo(() => {
    if (!hasCalculated || !Number.isFinite(parsedWeight) || parsedWeight <= 0) return null;

    const weightBand = getWeightBand(parsedWeight);
    const portionDirection = getPortionDirection(ageGroup, activityLevel, bodyCondition);
    const status = getStatus(bodyCondition, activityLevel, ageGroup);
    const frequency = getFrequency(ageGroup);
    const foodNote = getFoodTypeNote(foodType);

    const weightText =
      weightBand === "small"
        ? "small dogs (up to 20 lbs)"
        : weightBand === "medium"
          ? "medium dogs (21 to 60 lbs)"
          : "large dogs (61+ lbs)";

    const rangeText =
      portionDirection === "lower-label"
        ? "lower side of the label range"
        : portionDirection === "upper-label"
          ? "upper side of the label range"
          : "middle of the label range";

    return {
      status,
      intro:
        `For ${weightText}, a practical starting point is the ${rangeText} based on your dog's current profile.`,
      dailyGuidance:
        "Use this as an estimated range only. Calories vary by brand, recipe, moisture level, and ingredient density.",
      frequency,
      ageNote:
        ageGroup === "puppy"
          ? "Puppies grow quickly, so reassess portions often and compare with puppy feeding chart guidance."
          : ageGroup === "senior"
            ? "Seniors may need closer weight and appetite monitoring as metabolism and activity change."
            : "Adults often benefit from consistent meal timing and routine body condition checks.",
      foodNote,
      approach: [
        "Start with label guidance for your dog's current weight",
        "Track body condition and stool quality weekly",
        "Adjust gradually, not abruptly",
        "Ask your veterinarian before major feeding changes",
      ],
    };
  }, [activityLevel, ageGroup, bodyCondition, foodType, hasCalculated, parsedWeight]);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto w-full max-w-4xl px-4">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-gray-900">Feeding Calculator</h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            Estimate a daily feeding starting point using weight, age, activity, food type, and body
            condition. Always confirm with your food label and veterinarian.
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
              <label
                htmlFor="weight"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Dog weight (lbs)
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                min="1"
                step="0.1"
                value={weightLbs}
                onChange={(event) => {
                  setWeightLbs(event.target.value);
                  if (weightError) setWeightError("");
                }}
                placeholder="Example: 38"
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
                  Age group
                </label>
                <select
                  id="age-group"
                  value={ageGroup}
                  onChange={(event) => setAgeGroup(event.target.value as AgeGroup)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="puppy">Puppy</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="activity-level"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Activity level
                </label>
                <select
                  id="activity-level"
                  value={activityLevel}
                  onChange={(event) => setActivityLevel(event.target.value as ActivityLevel)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="food-type"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Food type
                </label>
                <select
                  id="food-type"
                  value={foodType}
                  onChange={(event) => setFoodType(event.target.value as FoodType)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="dry-kibble">Dry kibble</option>
                  <option value="wet-food">Wet food</option>
                  <option value="fresh-food">Fresh food</option>
                  <option value="homemade-food">Homemade food</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="body-condition"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Body condition
                </label>
                <select
                  id="body-condition"
                  value={bodyCondition}
                  onChange={(event) => setBodyCondition(event.target.value as BodyCondition)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="underweight">Underweight</option>
                  <option value="ideal">Ideal</option>
                  <option value="overweight">Overweight</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Calculate Feeding Guidance
            </button>
          </form>

          {!result ? null : (
            <article
              ref={resultRef}
              className="mt-8 animate-pulse [animation-duration:500ms] [animation-iteration-count:1] rounded-2xl border border-gray-100 bg-white p-5"
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
                <p className="mt-3 text-sm leading-7 text-gray-700">{result.intro}</p>
                <p className="mt-3 rounded-xl bg-white/80 px-3 py-2 text-sm text-gray-700">
                  {result.dailyGuidance}
                </p>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Suggested feeding frequency
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{result.frequency}</p>
                </div>
                <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Age and food notes
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{result.ageNote}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{result.foodNote}</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {result.approach.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <p className="font-semibold">When to ask a vet</p>
                <p className="mt-1">
                  Ask your veterinarian before major feeding changes, and seek care if appetite drops,
                  weight changes rapidly, vomiting/diarrhea continues, or your dog seems unwell.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/dogs"
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                >
                  Dog health guides
                </Link>
                <Link
                  href="/tools/probiotic-calculator"
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                >
                  Probiotic calculator
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                >
                  Contact support
                </Link>
              </div>
            </article>
          )}
        </article>
      </div>
    </section>
  );
}
