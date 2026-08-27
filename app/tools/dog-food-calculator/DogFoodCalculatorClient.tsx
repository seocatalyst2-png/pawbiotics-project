"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Unit = "lbs" | "kg";
type LifeStage =
  | "puppy-young" // 2-4 months
  | "puppy-older" // 4-12 months
  | "adult-neutered"
  | "adult-intact"
  | "senior"
  | "working-active"
  | "weight-loss"
  | "weight-gain";

type ActivityLevel = "low" | "moderate" | "high" | "working";
type FoodType = "dry-kibble" | "wet-food" | "fresh-food" | "raw-food" | "homemade-food";
type BodyCondition = "underweight" | "ideal" | "overweight";

// Calorie densities (defaults)
const DEFAULT_CALORIES: Record<FoodType, number> = {
  "dry-kibble": 375, // kcal per cup
  "wet-food": 350, // kcal per standard 13.2 oz can
  "fresh-food": 45, // kcal per oz
  "raw-food": 50, // kcal per oz
  "homemade-food": 40, // kcal per oz
};

export default function DogFoodCalculatorClient() {
  const [unit, setUnit] = useState<Unit>("lbs");
  const [dogName, setDogName] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [lifeStage, setLifeStage] = useState<LifeStage>("adult-neutered");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [bodyCondition, setBodyCondition] = useState<BodyCondition>("ideal");
  const [foodType, setFoodType] = useState<FoodType>("dry-kibble");
  const [customCalories, setCustomCalories] = useState<string>("");
  const [useCustomCalories, setUseCustomCalories] = useState(false);
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);

  const [hasCalculated, setHasCalculated] = useState(false);
  const [weightError, setWeightError] = useState("");
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLElement | null>(null);

  const parsedWeight = Number(weightInput);

  // Convert to kg for standard veterinary calculations
  const weightKg = useMemo(() => {
    if (!Number.isFinite(parsedWeight) || parsedWeight <= 0) return 0;
    return unit === "lbs" ? parsedWeight * 0.45359237 : parsedWeight;
  }, [parsedWeight, unit]);

  const weightLbs = useMemo(() => {
    if (!Number.isFinite(parsedWeight) || parsedWeight <= 0) return 0;
    return unit === "kg" ? parsedWeight * 2.20462 : parsedWeight;
  }, [parsedWeight, unit]);

  // Calorie calculation based on WSAVA / NRC Veterinary Standards
  const calculation = useMemo(() => {
    if (!hasCalculated || weightKg <= 0) return null;

    // Resting Energy Requirement (RER) = 70 * (weight in kg)^0.75
    const rer = Math.round(70 * Math.pow(weightKg, 0.75));

    // Life Stage / Activity Multiplier (MER)
    let multiplier = 1.6; // default neutered adult
    if (lifeStage === "puppy-young") multiplier = 3.0;
    else if (lifeStage === "puppy-older") multiplier = 2.0;
    else if (lifeStage === "adult-neutered") multiplier = 1.6;
    else if (lifeStage === "adult-intact") multiplier = 1.8;
    else if (lifeStage === "senior") multiplier = 1.2;
    else if (lifeStage === "working-active") multiplier = 2.5;
    else if (lifeStage === "weight-loss") multiplier = 1.0;
    else if (lifeStage === "weight-gain") multiplier = 1.8;

    // Adjust slightly for activity level modifier
    if (activityLevel === "low" && lifeStage !== "weight-loss" && lifeStage !== "senior") {
      multiplier *= 0.9;
    } else if (activityLevel === "high" && lifeStage !== "working-active") {
      multiplier *= 1.15;
    } else if (activityLevel === "working") {
      multiplier *= 1.3;
    }

    // Body condition adjustment
    if (bodyCondition === "overweight" && lifeStage !== "weight-loss") {
      multiplier *= 0.85;
    } else if (bodyCondition === "underweight" && lifeStage !== "weight-gain") {
      multiplier *= 1.15;
    }

    const totalKcal = Math.round(rer * multiplier);
    const treatKcalBudget = Math.round(totalKcal * 0.1); // 10% rule
    const foodKcalBudget = totalKcal - treatKcalBudget;

    // Food density (kcal per unit)
    const calPerUnit =
      useCustomCalories && Number(customCalories) > 0
        ? Number(customCalories)
        : DEFAULT_CALORIES[foodType];

    let dailyPortionNumber = 0;
    let unitName = "cups";
    let gramEquivalent = 0;

    if (foodType === "dry-kibble") {
      dailyPortionNumber = totalKcal / calPerUnit;
      unitName = "cups";
      // standard kibble is approx ~100-115g per cup
      gramEquivalent = Math.round(dailyPortionNumber * 105);
    } else if (foodType === "wet-food") {
      dailyPortionNumber = totalKcal / calPerUnit;
      unitName = "cans (13.2 oz)";
      gramEquivalent = Math.round(dailyPortionNumber * 374);
    } else {
      // fresh, raw, homemade measured in oz
      dailyPortionNumber = totalKcal / calPerUnit;
      unitName = "oz";
      gramEquivalent = Math.round(dailyPortionNumber * 28.35);
    }

    const portionPerMeal = dailyPortionNumber / mealsPerDay;
    const gramsPerMeal = Math.round(gramEquivalent / mealsPerDay);

    // Water requirement: ~50-60 ml per kg of body weight
    const waterMl = Math.round(weightKg * 55);
    const waterCups = (waterMl / 236.6).toFixed(1);

    // Weight band
    const weightBand =
      weightLbs <= 12
        ? "Toy"
        : weightLbs <= 25
          ? "Small"
          : weightLbs <= 55
            ? "Medium"
            : weightLbs <= 90
              ? "Large"
              : "Giant";

    // AI / Veterinary Suggestions tailored to specific parameters
    const suggestions: string[] = [];

    if (lifeStage === "puppy-young" || lifeStage === "puppy-older") {
      suggestions.push(
        "Puppies need precise Calcium-to-Phosphorus balance (1.2:1 to 1.4:1) for proper skeletal development. Always feed an AAFCO puppy-growth certified formula."
      );
      suggestions.push(
        "Re-weigh your puppy every 1-2 weeks; caloric needs shift dynamically during rapid growth phases."
      );
    }

    if (lifeStage === "senior" || ageGroupFromLifeStage(lifeStage) === "senior") {
      suggestions.push(
        "Senior dogs have a 10-20% slower resting metabolic rate. Consider high-quality lean proteins to preserve muscle mass without excess calories."
      );
      suggestions.push(
        "Consider pairing daily nutrition with omega-3 fatty acids (EPA/DHA) and glucosamine to support aging joints and cognitive vitality."
      );
    }

    if (bodyCondition === "overweight" || lifeStage === "weight-loss") {
      suggestions.push(
        "Safe weight loss rate is 1% to 2% of body weight per week. Never starve or drop calories below RER without strict veterinary supervision."
      );
      suggestions.push(
        "Pro-Tip: Add steamed green beans or plain canned pumpkin (1-2 tablespoons) to increase meal volume and satiety without spiking calories."
      );
    }

    if (bodyCondition === "underweight" || lifeStage === "weight-gain") {
      suggestions.push(
        "Increase portions by 10-15% gradually. If weight does not improve within 3 weeks, consult a vet to rule out malabsorption, parasites, or thyroid conditions."
      );
    }

    if (foodType === "dry-kibble") {
      suggestions.push(
        "Measuring tip: Standard kitchen measuring cups can be inaccurate by up to 20%. For optimal precision and weight stability, use an inexpensive digital kitchen scale in grams."
      );
    } else if (foodType === "homemade-food" || foodType === "raw-food") {
      suggestions.push(
        "Homemade & raw diets must be formulated by a board-certified veterinary nutritionist (ACVN) to prevent severe micronutrient deficiencies (zinc, iodine, calcium, vitamin D)."
      );
    }

    // Gut health & microbiome suggestion
    suggestions.push(
      "Microbiome Balance: If transitioning foods or dealing with sensitive digestion/loose stools, introduce a species-specific probiotic blend over 7-10 days to protect beneficial gut flora."
    );

    return {
      dogDisplayName: dogName.trim() ? dogName.trim() : "Your Dog",
      rer,
      totalKcal,
      treatKcalBudget,
      foodKcalBudget,
      dailyPortion: dailyPortionNumber,
      unitName,
      gramEquivalent,
      portionPerMeal,
      gramsPerMeal,
      waterMl,
      waterCups,
      weightBand,
      suggestions,
    };
  }, [
    activityLevel,
    bodyCondition,
    customCalories,
    dogName,
    foodType,
    hasCalculated,
    lifeStage,
    mealsPerDay,
    useCustomCalories,
    weightKg,
    weightLbs,
  ]);

  useEffect(() => {
    if (calculation && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [calculation]);

  const handleCopy = () => {
    if (!calculation) return;
    const text = `🐾 Pawbiotics Dog Feeding Plan for ${calculation.dogDisplayName}
• Weight: ${parsedWeight} ${unit} (${calculation.weightBand} breed class)
• Daily Caloric Need: ${calculation.totalKcal} kcal/day (RER: ${calculation.rer} kcal)
• Daily Food Portion: ${calculation.dailyPortion.toFixed(2)} ${calculation.unitName} (~${calculation.gramEquivalent}g)
• Portion Per Meal (${mealsPerDay} meals/day): ${calculation.portionPerMeal.toFixed(2)} ${calculation.unitName} (~${calculation.gramsPerMeal}g)
• Treat Allowance (10% rule): Max ${calculation.treatKcalBudget} kcal/day
• Hydration Target: ~${calculation.waterCups} cups (${calculation.waterMl} ml) water/day
Calculated with Pawbiotics (https://pawbiotics.us/tools/dog-food-calculator)`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <article className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                Veterinary RER/MER Standard
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Canine Nutrition &amp; Portion Calculator
              </h2>
            </div>
            {/* Unit Switcher */}
            <div className="inline-flex rounded-xl bg-gray-100 p-1 text-xs font-semibold text-gray-600">
              <button
                type="button"
                onClick={() => setUnit("lbs")}
                className={`rounded-lg px-4 py-1.5 transition ${
                  unit === "lbs"
                    ? "bg-white text-brand-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Pounds (lbs)
              </button>
              <button
                type="button"
                onClick={() => setUnit("kg")}
                className={`rounded-lg px-4 py-1.5 transition ${
                  unit === "kg"
                    ? "bg-white text-brand-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Kilograms (kg)
              </button>
            </div>
          </div>

          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!Number.isFinite(parsedWeight) || parsedWeight <= 0) {
                setWeightError(`Please enter a valid weight above 0 ${unit}.`);
                setHasCalculated(false);
                return;
              }
              setWeightError("");
              setHasCalculated(true);
            }}
          >
            {/* Row 1: Dog Name (Optional) & Weight */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="dog-name"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Dog&apos;s Name <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="dog-name"
                  type="text"
                  value={dogName}
                  onChange={(e) => setDogName(e.target.value)}
                  placeholder="e.g. Milo, Luna, Buster"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label
                  htmlFor="dog-weight"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Current Body Weight ({unit}) <span className="text-rose-500">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    id="dog-weight"
                    type="number"
                    min="0.5"
                    step="0.1"
                    value={weightInput}
                    onChange={(e) => {
                      setWeightInput(e.target.value);
                      if (weightError) setWeightError("");
                    }}
                    placeholder={`e.g. ${unit === "lbs" ? "45" : "20"}`}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                  <span className="absolute right-3.5 top-3 text-xs font-semibold text-gray-400">
                    {unit}
                  </span>
                </div>
                {weightError && <p className="mt-1.5 text-xs text-rose-600 font-medium">{weightError}</p>}
              </div>
            </div>

            {/* Row 2: Life Stage & Activity Level */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="life-stage"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Life Stage &amp; Status
                </label>
                <select
                  id="life-stage"
                  value={lifeStage}
                  onChange={(e) => setLifeStage(e.target.value as LifeStage)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="adult-neutered">Adult (Spayed / Neutered)</option>
                  <option value="adult-intact">Adult (Intact / Not Neutered)</option>
                  <option value="puppy-young">Puppy (2 - 4 Months Old - Rapid Growth)</option>
                  <option value="puppy-older">Puppy (4 - 12 Months Old)</option>
                  <option value="senior">Senior Dog (7+ Years Old)</option>
                  <option value="working-active">Working / Agility / High Performance</option>
                  <option value="weight-loss">Weight Loss Program (Under Vet Guidance)</option>
                  <option value="weight-gain">Weight Gain Target (Lean/Recovering)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="activity-level"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Daily Activity Level
                </label>
                <select
                  id="activity-level"
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="low">Low (Couch potato, &lt;30 min easy walking)</option>
                  <option value="moderate">Moderate (30-60 min brisk walking/play)</option>
                  <option value="high">High (1-2 hours running, hiking, fetch)</option>
                  <option value="working">Intense (Working, hunting, sledding, agility)</option>
                </select>
              </div>
            </div>

            {/* Row 3: Body Condition & Feeding Frequency */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="body-condition"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Current Body Condition
                </label>
                <select
                  id="body-condition"
                  value={bodyCondition}
                  onChange={(e) => setBodyCondition(e.target.value as BodyCondition)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="ideal">Ideal Weight (Ribs easily felt, clear waist tuck)</option>
                  <option value="overweight">Overweight / Obese (Hard to feel ribs, no waist)</option>
                  <option value="underweight">Underweight (Prominent ribs, hipbones visible)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="meals-per-day"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Daily Feeding Schedule
                </label>
                <select
                  id="meals-per-day"
                  value={mealsPerDay}
                  onChange={(e) => setMealsPerDay(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value={1}>1 Meal / Day (Adult dogs only)</option>
                  <option value={2}>2 Meals / Day (Recommended standard)</option>
                  <option value={3}>3 Meals / Day (Puppies &amp; small breeds)</option>
                  <option value={4}>4 Meals / Day (Young puppies &amp; medical care)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Food Type & Calorie Density Customizer */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="food-type"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Primary Food Type
                  </label>
                  <select
                    id="food-type"
                    value={foodType}
                    onChange={(e) => setFoodType(e.target.value as FoodType)}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="dry-kibble">Dry Kibble (Avg ~375 kcal/cup)</option>
                    <option value="wet-food">Wet / Canned Food (Avg ~350 kcal/can)</option>
                    <option value="fresh-food">Fresh / Cooked Commercial (Avg ~45 kcal/oz)</option>
                    <option value="raw-food">Raw / BARF Diet (Avg ~50 kcal/oz)</option>
                    <option value="homemade-food">Homemade Recipe (Avg ~40 kcal/oz)</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="custom-calories"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Exact Bag Calories
                    </label>
                    <button
                      type="button"
                      onClick={() => setUseCustomCalories(!useCustomCalories)}
                      className="text-xs font-semibold text-brand-700 hover:underline"
                    >
                      {useCustomCalories ? "Reset to Standard" : "Enter from Food Bag"}
                    </button>
                  </div>
                  {useCustomCalories ? (
                    <div className="relative mt-2">
                      <input
                        id="custom-calories"
                        type="number"
                        min="50"
                        max="2000"
                        value={customCalories}
                        onChange={(e) => setCustomCalories(e.target.value)}
                        placeholder={
                          foodType === "dry-kibble"
                            ? "e.g. 385 (kcal/cup)"
                            : foodType === "wet-food"
                              ? "e.g. 340 (kcal/can)"
                              : "e.g. 45 (kcal/oz)"
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  ) : (
                    <p className="mt-3 text-xs leading-5 text-gray-500">
                      Using standard industry average ({DEFAULT_CALORIES[foodType]} kcal/
                      {foodType === "dry-kibble"
                        ? "cup"
                        : foodType === "wet-food"
                          ? "can"
                          : "oz"}
                      ). Click above to customize with your bag&apos;s exact Guaranteed Analysis.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-700 hover:shadow active:scale-[0.99]"
            >
              Calculate Daily Nutrition Plan →
            </button>
          </form>

          {/* Results Dashboard */}
          {calculation && (
            <article
              ref={resultRef}
              className="mt-10 rounded-3xl border border-brand-200 bg-gradient-to-b from-brand-50/40 to-white p-6 shadow-sm md:p-8"
            >
              {/* Header result row */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-100/80 pb-6">
                <div>
                  <span className="rounded-full bg-brand-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {calculation.weightBand} Breed Class
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                    Daily Feeding Plan for {calculation.dogDisplayName}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Scientific veterinary estimate based on WSAVA resting &amp; maintenance energy formulas.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                >
                  {copied ? (
                    <span className="text-emerald-600 font-semibold">✓ Copied to Clipboard</span>
                  ) : (
                    <span>📋 Copy Plan Summary</span>
                  )}
                </button>
              </div>

              {/* Key Metric Cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Daily Calories */}
                <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    Total Daily Energy
                  </p>
                  <p className="mt-2 font-serif text-3xl font-extrabold text-gray-900">
                    {calculation.totalKcal}{" "}
                    <span className="text-sm font-semibold text-gray-500">kcal/day</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Resting RER: {calculation.rer} kcal
                  </p>
                </div>

                {/* Portion Per Meal */}
                <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    Per Meal ({mealsPerDay}x daily)
                  </p>
                  <p className="mt-2 font-serif text-3xl font-extrabold text-brand-700">
                    {calculation.portionPerMeal.toFixed(2)}{" "}
                    <span className="text-sm font-semibold text-gray-600">
                      {calculation.unitName === "cups" ? "cups" : calculation.unitName}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    ~{calculation.gramsPerMeal}g per serving
                  </p>
                </div>

                {/* Total Daily Food */}
                <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    Total Daily Food
                  </p>
                  <p className="mt-2 font-serif text-3xl font-extrabold text-gray-900">
                    {calculation.dailyPortion.toFixed(2)}{" "}
                    <span className="text-sm font-semibold text-gray-500">
                      {calculation.unitName === "cups" ? "cups/day" : calculation.unitName}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    ~{calculation.gramEquivalent}g total weight
                  </p>
                </div>

                {/* Water & Treats */}
                <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    Hydration &amp; Treats
                  </p>
                  <p className="mt-2 font-serif text-2xl font-bold text-gray-900">
                    ~{calculation.waterCups}{" "}
                    <span className="text-sm font-semibold text-gray-500">cups water</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Treat budget: Max {calculation.treatKcalBudget} kcal/day
                  </p>
                </div>
              </div>

              {/* 10% Treat Rule Callout */}
              <div className="mt-5 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 text-xs leading-6 text-amber-900 sm:text-sm">
                <span className="font-bold">⚠️ The 10% Healthy Treat Rule:</span> Treats, table
                scraps, and chew snacks should never exceed{" "}
                <span className="font-bold">{calculation.treatKcalBudget} kcal per day</span> (10%
                of total caloric budget). Excess treats dilute essential vitamins and cause rapid
                weight gain.
              </div>

              {/* AI & Veterinary Insights Box */}
              <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50/80 p-5 md:p-6">
                <div className="flex items-center gap-2 text-brand-900">
                  <span className="text-lg">💡</span>
                  <h4 className="font-serif text-lg font-bold">
                    Smart Veterinary Insights for {calculation.dogDisplayName}
                  </h4>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-gray-700">
                  {calculation.suggestions.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-brand-600 font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons & Next Steps */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <Link
                    href="/tools/probiotic-calculator"
                    className="rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-brand-800 shadow-sm transition hover:bg-brand-50"
                  >
                    🐾 Probiotic Dosage Calculator →
                  </Link>
                  <Link
                    href="/tools/puppy-feeding-schedule"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition hover:bg-gray-50"
                  >
                    🐶 Puppy Feeding Schedule →
                  </Link>
                  <Link
                    href="/vets"
                    className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition hover:bg-gray-50"
                  >
                    🏥 Find a Local Vet →
                  </Link>
                </div>
                <p className="text-xs text-gray-400">
                  Updated for 2026 Veterinary Guidelines
                </p>
              </div>
            </article>
          )}
        </article>
      </div>
    </section>
  );
}

function ageGroupFromLifeStage(lifeStage: LifeStage): "puppy" | "adult" | "senior" {
  if (lifeStage === "puppy-young" || lifeStage === "puppy-older") return "puppy";
  if (lifeStage === "senior") return "senior";
  return "adult";
}

