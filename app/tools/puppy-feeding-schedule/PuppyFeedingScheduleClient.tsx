"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type PuppyAge = "8-12-weeks" | "3-4-months" | "5-6-months" | "7-12-months";
type BreedSize = "toy-small" | "medium" | "large" | "giant";
type ActivityLevel = "low" | "normal" | "high";
type FoodType = "dry-puppy-food" | "wet-puppy-food" | "fresh-puppy-food" | "mixed-feeding";

function getBaseMeals(age: PuppyAge) {
  if (age === "8-12-weeks") return 4;
  if (age === "3-4-months") return 3;
  if (age === "5-6-months") return 3;
  return 2;
}

function getExampleTimes(meals: number) {
  if (meals >= 4) return ["7:00 AM", "11:00 AM", "3:00 PM", "7:00 PM"];
  if (meals === 3) return ["7:00 AM", "1:00 PM", "7:00 PM"];
  return ["8:00 AM", "6:00 PM"];
}

function getFoodTypeNote(foodType: FoodType) {
  if (foodType === "dry-puppy-food") {
    return "Dry puppy food calories vary by cup and brand. Use package feeding charts as your first reference.";
  }
  if (foodType === "wet-puppy-food") {
    return "Wet puppy foods vary by calories per can or tray. Confirm feeding amounts on the product label.";
  }
  if (foodType === "fresh-puppy-food") {
    return "Fresh puppy foods can differ in calorie density. Follow brand-specific guidance and adjust gradually.";
  }
  return "Mixed feeding can change total calories quickly, so combine portions carefully and re-check totals daily.";
}

function getAgeNote(age: PuppyAge) {
  if (age === "8-12-weeks") {
    return "Young puppies often do best with frequent, smaller meals to support growth and digestive comfort.";
  }
  if (age === "3-4-months") {
    return "At this stage, many puppies still do well with three meals daily while growth remains active.";
  }
  if (age === "5-6-months") {
    return "Many puppies begin transitioning toward more structured portions and fewer daily meals around this age.";
  }
  return "Older puppies often move toward adult-style meal timing, but growth needs still vary by breed and activity.";
}

function getBreedNote(size: BreedSize) {
  if (size === "toy-small") {
    return "Toy and small breeds may benefit from steady meal timing to avoid long fasting gaps.";
  }
  if (size === "medium") {
    return "Medium breeds usually do well with a stable routine and regular body condition checks.";
  }
  if (size === "large") {
    return "Large breeds need careful growth management to avoid overfeeding during rapid growth phases.";
  }
  return "Giant breeds often need very careful portion control and close veterinary guidance during growth.";
}

export default function PuppyFeedingScheduleClient() {
  const [age, setAge] = useState<PuppyAge>("8-12-weeks");
  const [breedSize, setBreedSize] = useState<BreedSize>("medium");
  const [activity, setActivity] = useState<ActivityLevel>("normal");
  const [foodType, setFoodType] = useState<FoodType>("dry-puppy-food");
  const [hasBuilt, setHasBuilt] = useState(false);
  const resultRef = useRef<HTMLElement | null>(null);

  const result = useMemo(() => {
    if (!hasBuilt) return null;

    let meals = getBaseMeals(age);
    if (activity === "high" && meals < 4) meals += 1;
    if (activity === "low" && meals > 2) meals -= 1;
    if (breedSize === "toy-small" && meals < 4) meals += 1;
    if (breedSize === "giant" && meals > 2) meals -= 1;
    meals = Math.min(4, Math.max(2, meals));

    const status =
      meals >= 4
        ? { label: "Early growth schedule", tone: "green" as const }
        : meals === 3
          ? { label: "Transition schedule", tone: "amber" as const }
          : { label: "Approaching adult routine", tone: "red" as const };

    const scheduleLabel =
      meals >= 4
        ? "Frequent small meals plan"
        : meals === 3
          ? "Balanced puppy meal rhythm"
          : "Twice-daily transition rhythm";

    return {
      status,
      scheduleLabel,
      mealsPerDay: meals,
      times: getExampleTimes(meals),
      ageNote: getAgeNote(age),
      breedNote: getBreedNote(breedSize),
      foodNote: getFoodTypeNote(foodType),
      tips: [
        "Use this as a general starting point, not a fixed rule",
        "Check your puppy food label and calories per serving",
        "Adjust portions slowly based on growth and body condition",
        "Ask your veterinarian before major feeding changes",
      ],
    };
  }, [age, breedSize, activity, foodType, hasBuilt]);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto w-full max-w-4xl px-4">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-3xl font-semibold text-gray-900">Puppy Schedule Builder</h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            Build a general starting schedule based on your puppy&apos;s age, size, activity, and food
            type. Growth needs vary, so always cross-check with label guidance and your veterinarian.
          </p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              setHasBuilt(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="puppy-age"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Puppy age
                </label>
                <select
                  id="puppy-age"
                  value={age}
                  onChange={(event) => setAge(event.target.value as PuppyAge)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="8-12-weeks">8-12 weeks</option>
                  <option value="3-4-months">3-4 months</option>
                  <option value="5-6-months">5-6 months</option>
                  <option value="7-12-months">7-12 months</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="breed-size"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Breed size
                </label>
                <select
                  id="breed-size"
                  value={breedSize}
                  onChange={(event) => setBreedSize(event.target.value as BreedSize)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="toy-small">Toy/small breed</option>
                  <option value="medium">Medium breed</option>
                  <option value="large">Large breed</option>
                  <option value="giant">Giant breed</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="activity-level"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-500"
                >
                  Activity level
                </label>
                <select
                  id="activity-level"
                  value={activity}
                  onChange={(event) => setActivity(event.target.value as ActivityLevel)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>

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
                  <option value="dry-puppy-food">Dry puppy food</option>
                  <option value="wet-puppy-food">Wet puppy food</option>
                  <option value="fresh-puppy-food">Fresh puppy food</option>
                  <option value="mixed-feeding">Mixed feeding</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Build My Puppy Schedule
            </button>
          </form>

          {!result ? null : (
            <article
              ref={resultRef}
              className="mt-8 animate-pulse [animation-duration:500ms] [animation-iteration-count:1] rounded-2xl border border-gray-100 bg-white p-5"
            >
              <h3 className="font-serif text-2xl font-semibold text-gray-900">Your Puppy Schedule</h3>

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
                <p className="mt-3 text-sm font-semibold text-gray-800">{result.scheduleLabel}</p>
                <p className="mt-2 text-sm text-gray-700">
                  Many puppies do well with{" "}
                  <span className="font-semibold">{result.mealsPerDay} meals per day</span> as a
                  general starting point.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Example meal timing
                </p>
                <p className="mt-2 text-sm text-gray-700">{result.times.join(" • ")}</p>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Puppy age note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{result.ageNote}</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Breed and food notes
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{result.breedNote}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{result.foodNote}</p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {result.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <p className="font-semibold">Safety warning</p>
                <p className="mt-1">
                  This schedule is educational only. Always follow your puppy food label and ask your
                  veterinarian for personalized feeding advice, especially during fast growth changes.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  href="/tools/dog-food-calculator"
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700"
                >
                  Dog food calculator
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
