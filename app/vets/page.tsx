import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
} from "@/components/seo/Schema";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { getSupportedCitySlugs } from "@/lib/programmatic-content";
import { getVetCityLabel } from "@/lib/vet-city";
import type { FAQItem } from "@/lib/seo";

const SITE_URL = "https://pawbiotics.us";

export const metadata: Metadata = {
  title: "Find a Veterinarian Near You | Local Animal Hospital Directory | Pawbiotics",
  description:
    "Search Pawbiotics' verified directory of veterinary clinics and 24/7 emergency animal hospitals across 100 U.S. cities. Compare clinic types, costs, and emergency protocols.",
  alternates: {
    canonical: `${SITE_URL}/vets`,
  },
  openGraph: {
    title: "Find a Veterinarian Near You | Local Animal Hospital Directory",
    description:
      "Search Pawbiotics' verified directory of veterinary clinics and 24/7 emergency animal hospitals across 100 U.S. cities. Compare clinic types, costs, and emergency protocols.",
    url: `${SITE_URL}/vets`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/vets/vet-dog-exam.png`,
        width: 1200,
        height: 900,
        alt: "Veterinarian examining a golden retriever in a clean animal clinic",
      },
    ],
  },
};

type CityItem = {
  slug: string;
  label: string;
  state: string;
};

const stateNames: Record<string, string> = {
  AK: "Alaska",
  AL: "Alabama",
  AR: "Arkansas",
  AZ: "Arizona",
  CA: "California",
  CO: "Colorado",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  IA: "Iowa",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  MA: "Massachusetts",
  MD: "Maryland",
  MI: "Michigan",
  MN: "Minnesota",
  MO: "Missouri",
  NC: "North Carolina",
  NE: "Nebraska",
  NJ: "New Jersey",
  NM: "New Mexico",
  NV: "Nevada",
  NY: "New York",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  TN: "Tennessee",
  TX: "Texas",
  VA: "Virginia",
  WA: "Washington",
  WI: "Wisconsin",
};

const featuredCitySlugs = [
  "houston-tx",
  "dallas-tx",
  "austin-tx",
  "los-angeles-ca",
  "san-diego-ca",
  "chicago-il",
  "miami-fl",
  "new-york-ny",
  "phoenix-az",
  "seattle-wa",
  "atlanta-ga",
  "denver-co",
];

const vetFaqs: FAQItem[] = [
  {
    question: "How do I choose the best veterinarian near me?",
    answer:
      "Look for four core standards: 1) Distance (within 15-20 minutes for low-stress travel), 2) Clear emergency protocol (does the clinic handle after-hours or partner with a nearby 24/7 trauma hospital?), 3) High clinical standards such as AAHA accreditation or Fear Free certification, and 4) Transparent itemized pricing for exams, diagnostics, and routine procedures.",
  },
  {
    question: "What is the difference between a regular vet clinic and an emergency hospital?",
    answer:
      "A General Practice (GP) veterinary clinic handles routine wellness, scheduled vaccines, dental cleanings, minor sickness, and planned surgeries during regular weekday business hours. A 24/7 Emergency Animal Hospital operates around the clock without appointments, equipped with intensive care units (ICU), oxygen cages, blood transfusions, advanced imaging (CT/Ultrasound), and emergency trauma surgery teams.",
  },
  {
    question: "How much does an average vet visit cost in the United States?",
    answer:
      "A standard routine wellness exam typically ranges from $50 to $100. Core annual vaccines cost between $25 and $50 each. If your pet requires diagnostics, blood panels cost $100 to $250, and digital X-rays range from $150 to $350. Emergency clinic triage exam fees generally start between $120 and $250 before diagnostics or treatments.",
  },
  {
    question: "When is a pet health issue an emergency that cannot wait?",
    answer:
      "Go immediately to a 24/7 emergency hospital if your pet exhibits: unproductive dry heaving/retching with a swollen abdomen (Bloat/GDV in dogs), male cats straining painfully with zero urine output (urinary blockage), sudden collapse, pale white or blue gums, continuous seizures lasting longer than 3 minutes, deep wounds with heavy bleeding, or known ingestion of lethal toxins (lilies, chocolate, rat poison, antifreeze).",
  },
  {
    question: "What is AAHA accreditation, and why does it matter?",
    answer:
      "The American Animal Hospital Association (AAHA) evaluates veterinary clinics on over 900 rigorous clinical standards covering surgery, anesthesia, pain management, pharmacy protocols, and cleanliness. Unlike human hospitals, veterinary clinics are not legally required to be accredited—only about 12% to 15% of clinics in North America achieve AAHA accreditation.",
  },
  {
    question: "What is Fear Free veterinary certification?",
    answer:
      "Fear Free certified veterinary professionals and clinics use specialized techniques to reduce fear, anxiety, and stress (FAS) in pets. This includes non-slip exam mats, species-specific pheromones (Feliway for cats, Adaptil for dogs), quiet waiting areas, gentle handling without heavy restraint, and tasty treats during exams.",
  },
  {
    question: "How do I transfer medical records to a new veterinary clinic?",
    answer:
      "Simply call your previous veterinary hospital and request your pet's complete medical history, vaccine certificates, and recent diagnostic lab reports to be emailed to your new clinic. Most clinics transfer digital records within 24 to 48 hours free of charge.",
  },
  {
    question: "What should I bring to my pet's first veterinary appointment?",
    answer:
      "Bring your pet's complete vaccine and medical records, a list of current medications and supplements (including brand and dosage), the exact name of their daily pet food, a fresh fecal sample (under 4 hours old for parasite screening), and a secure harness/leash for dogs or a sturdy, blanket-lined carrier for cats.",
  },
];

function buildCityItems(): CityItem[] {
  return getSupportedCitySlugs()
    .map((slug) => {
      const label = getVetCityLabel(slug) ?? slug.replace(/-/g, " ");
      const state = label.split(",").at(-1)?.trim() ?? "";
      return { slug, label, state };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

function groupCitiesByState(cities: CityItem[]): Array<[string, CityItem[]]> {
  const groups = new Map<string, CityItem[]>();
  cities.forEach((city) => {
    const key = city.state || "Other";
    groups.set(key, [...(groups.get(key) ?? []), city]);
  });

  return Array.from(groups.entries()).sort(([stateA], [stateB]) => {
    const nameA = stateNames[stateA] ?? stateA;
    const nameB = stateNames[stateB] ?? stateB;
    return nameA.localeCompare(nameB);
  });
}

export default function VetsHubPage() {
  const cities = buildCityItems();
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((city) => city.slug === slug))
    .filter((city): city is CityItem => Boolean(city));
  const groupedCities = groupCitiesByState(cities);
  const breadcrumbs = [
    { label: "Home", href: `${SITE_URL}/` },
    { label: "Find a Vet", href: `${SITE_URL}/vets` },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Pawbiotics Veterinary Hospital & Clinic Directory",
    description:
      "Comprehensive directory of verified veterinary clinics, urgent care centers, and 24/7 animal emergency hospitals across 100 U.S. cities.",
    url: `${SITE_URL}/vets`,
    about: [
      {
        "@type": "MedicalBusiness",
        name: "Veterinary Medicine",
      },
      {
        "@type": "EmergencyService",
        name: "24/7 Emergency Animal Hospital Care",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Pawbiotics",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <WebPageSchema
        title="Find a Veterinarian Near You | Local Animal Hospital Directory"
        description="Search Pawbiotics' verified directory of veterinary clinics and 24/7 emergency animal hospitals across 100 U.S. cities."
        pageUrl={`${SITE_URL}/vets`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={vetFaqs} />

      {/* Hero Header */}
      <section className="border-b border-[#2c1f0e]/10 bg-gradient-to-b from-brand-50/60 to-white py-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700 font-medium">Find a Vet</li>
            </ol>
          </nav>

          <span className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm">
            Verified Local Directory • 100 U.S. Metro Areas
          </span>
          <h1 className="mt-4 max-w-4xl font-serif text-3xl font-bold tracking-tight text-[#2c1f0e] sm:text-5xl">
            Find Top-Rated Veterinarians & Emergency Animal Hospitals Near You
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5a4535] sm:text-lg">
            Finding reliable, compassionate healthcare for your pet shouldn&apos;t be stressful.
            Browse our city-by-city veterinary directory to compare general practice clinics,
            urgent care facilities, and 24/7 trauma centers. Learn what questions to ask,
            how to estimate costs, and how to prepare for sudden emergencies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-gray-700 sm:text-sm">
            <span className="flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-xs">
              <span className="text-brand-600 font-bold">✓</span> 100 City Vet Directories
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-xs">
              <span className="text-brand-600 font-bold">✓</span> 24/7 Emergency Triage Guides
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-xs">
              <span className="text-brand-600 font-bold">✓</span> Cost & Fee Comparison Tables
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-xs">
              <span className="text-brand-600 font-bold">✓</span> Fear-Free & AAHA Standards
            </span>
          </div>
        </Container>
      </section>

      {/* Google AI Overview / SGE Quick Answer Box */}
      <section className="py-8 bg-[#faf6f0]">
        <Container>
          <div className="rounded-3xl border border-brand-200 bg-gradient-to-br from-white to-brand-50/40 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-lg">
                ⚡
              </span>
              <div>
                <h2 className="font-serif text-xl font-bold text-gray-900 sm:text-2xl">
                  Quick Answer: How to Choose the Right Vet for Your Pet
                </h2>
                <p className="text-xs text-gray-500">Veterinary Triage & Selection Summary</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xs">
                <p className="text-xs font-bold uppercase text-brand-700">1. Proximity & Travel</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">Within 15–20 Minutes</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Minimizes transit anxiety for pets and ensures fast access during unexpected sick visits.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xs">
                <p className="text-xs font-bold uppercase text-brand-700">2. Emergency Network</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">24/7 ER Partnership</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Always confirm where your regular clinic sends patients after closing hours for trauma or overnight care.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xs">
                <p className="text-xs font-bold uppercase text-brand-700">3. Care Standards</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">AAHA & Fear Free</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Look for AAHA accredited hospitals and Fear Free certified staff for low-stress handling.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xs">
                <p className="text-xs font-bold uppercase text-brand-700">4. Transparent Pricing</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">Itemized Estimates</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Reputable clinics provide written fee estimates prior to conducting diagnostics, labs, or surgeries.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1: Canine Veterinary Care (IMAGE ON LEFT, CONTENT ON RIGHT) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Side Image */}
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-3xl border border-brand-100 bg-[#faf6f0] p-2.5 shadow-md">
                <Image
                  src="/images/vets/vet-dog-exam.png"
                  alt="Veterinarian examining a healthy golden retriever on a clinic examination table"
                  width={640}
                  height={480}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
                <figcaption className="px-3 py-2.5 text-center text-xs leading-5 text-[#5a4535]">
                  Comprehensive canine wellness: A thorough nose-to-tail physical exam detects dental disease, heart murmurs, and joint stiffness before symptoms escalate.
                </figcaption>
              </figure>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-900">
                Canine Health Standards
              </span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Comprehensive Dog Veterinary Care: Preventive Wellness & Emergency Preparedness
              </h2>
              <p className="text-sm leading-7 text-gray-600">
                Dogs require regular veterinary oversight tailored to their breed size, lifestyle, and life stage.
                A routine annual canine wellness visit is much more than vaccinations—it is a comprehensive head-to-tail
                clinical assessment that evaluates cardiac rhythm, respiratory sounds, abdominal palpation, joint mobility,
                and dental hygiene.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-teal-100 bg-teal-50/50 p-4">
                  <h3 className="text-sm font-bold text-gray-900">Core Dog Preventive Protocols</h3>
                  <ul className="mt-2 space-y-1.5 text-xs leading-5 text-gray-600">
                    <li>• <strong>Core Vaccines:</strong> Rabies, DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza).</li>
                    <li>• <strong>Lifestyle Vaccines:</strong> Bordetella (kennel cough), Leptospirosis, Lyme disease.</li>
                    <li>• <strong>Year-Round Parasite Control:</strong> Heartworm prevention and flea/tick oral tablets.</li>
                    <li>• <strong>Annual Diagnostics:</strong> Fecal egg floatation and 4DX blood screening.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
                  <h3 className="text-sm font-bold text-gray-900">Canine Emergency Red Flags</h3>
                  <ul className="mt-2 space-y-1.5 text-xs leading-5 text-gray-600">
                    <li>• <strong>Unproductive Retching / Bloat:</strong> Hard, distended abdomen (GDV medical emergency).</li>
                    <li>• <strong>Severe Ingestion:</strong> Chocolate, xylitol gum, grapes, human NSAIDs.</li>
                    <li>• <strong>Respiratory Distress:</strong> Blue/purple tongue, open-mouth gasping.</li>
                    <li>• <strong>Sudden Collapse:</strong> Inability to bear weight or walk.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: Feline Veterinary Care (CONTENT ON LEFT, IMAGE ON RIGHT) */}
      <section className="py-14 bg-[#faf6f0] border-b border-gray-100">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Side Content */}
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <span className="inline-block rounded-full bg-violet-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-900">
                Feline-Friendly Practices
              </span>
              <h2 className="font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Cat-Friendly Veterinary Medicine: Low-Stress Care & Early Diagnostics
              </h2>
              <p className="text-sm leading-7 text-gray-600">
                Cats are notorious for hiding illness until disease processes are advanced. Because trips to the veterinary
                clinic can induce acute feline stress, choosing a <strong>Cat-Friendly Practice (CFP)</strong> or Fear Free
                certified facility ensures your cat receives gentle, low-stress care in a quiet, dog-free environment with
                pheromone diffusers and soft handling techniques.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-violet-100 bg-white p-4 shadow-xs">
                  <h3 className="text-sm font-bold text-gray-900">Essential Feline Care Focus</h3>
                  <ul className="mt-2 space-y-1.5 text-xs leading-5 text-gray-600">
                    <li>• <strong>Core Vaccines:</strong> Rabies, FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia).</li>
                    <li>• <strong>Kidney & Renal Health:</strong> Baseline SDMA and creatinine blood screening from age 7.</li>
                    <li>• <strong>Hydration & Nutrition:</strong> Moisture-dense diets to prevent chronic kidney disease.</li>
                    <li>• <strong>Dental Scaling:</strong> Preventing painful feline tooth resorption lesions (FORLs).</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-rose-100 bg-white p-4 shadow-xs">
                  <h3 className="text-sm font-bold text-gray-900">Critical Feline Emergencies</h3>
                  <ul className="mt-2 space-y-1.5 text-xs leading-5 text-gray-600">
                    <li>• <strong>Male Cat Straining:</strong> Zero urine output indicates fatal urethral obstruction.</li>
                    <li>• <strong>Toxic Plant Ingestion:</strong> Any contact with Lilies (pollen, petals, or vase water).</li>
                    <li>• <strong>Open-Mouth Breathing:</strong> Acute asthma or congestive heart failure.</li>
                    <li>• <strong>Hind Leg Paralysis:</strong> Cold paws indicating aortic thromboembolism (saddle thrombus).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <figure className="overflow-hidden rounded-3xl border border-violet-100 bg-white p-2.5 shadow-md">
                <Image
                  src="/images/vets/vet-cat-exam.png"
                  alt="Veterinarian performing a gentle physical exam on a calm domestic cat in a feline clinic room"
                  width={640}
                  height={480}
                  className="h-auto w-full rounded-2xl object-cover"
                />
                <figcaption className="px-3 py-2.5 text-center text-xs leading-5 text-[#5a4535]">
                  Low-stress feline exams: Cat-friendly veterinary clinics utilize soft padded exam mats, quiet rooms, and soothing Feliway pheromones to ensure a gentle examination.
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* Clinical Comparison Table: Types of Veterinary Facilities */}
      <section className="py-14 bg-white border-b border-gray-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Clinical Decision Guide
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
              Comparing Veterinary Care Levels: GP Clinic vs. Urgent Care vs. 24/7 ER
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Understanding which facility to visit based on your pet&apos;s symptoms saves critical time and prevents
              unexpected medical expenses:
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 bg-white text-left text-sm">
                <thead className="bg-gray-50 text-xs font-bold uppercase text-gray-700">
                  <tr>
                    <th className="px-4 py-3.5">Facility Type</th>
                    <th className="px-4 py-3.5">Primary Scope of Care</th>
                    <th className="px-4 py-3.5">Operating Hours</th>
                    <th className="px-4 py-3.5">Average Wait Time</th>
                    <th className="px-4 py-3.5">Base Exam Fee</th>
                    <th className="px-4 py-3.5">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-gray-50/60">
                    <td className="px-4 py-4 font-bold text-gray-900">
                      General Practice (GP) Clinic
                    </td>
                    <td className="px-4 py-4 leading-6">
                      Routine wellness, vaccines, spay/neuter, dental scaling, minor ear/skin infections.
                    </td>
                    <td className="px-4 py-4">Mon–Fri 8am–6pm (Some Sat)</td>
                    <td className="px-4 py-4">By Appointment (0–15 min)</td>
                    <td className="px-4 py-4 font-semibold text-emerald-700">$50 – $95</td>
                    <td className="px-4 py-4 leading-6">
                      Scheduled preventive care, annual checkups, chronic medication management.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/60 bg-amber-50/20">
                    <td className="px-4 py-4 font-bold text-gray-900">
                      Veterinary Urgent Care
                    </td>
                    <td className="px-4 py-4 leading-6">
                      Mild/moderate vomiting, minor lacerations, ear infections, limping, UTI symptoms.
                    </td>
                    <td className="px-4 py-4">Evenings & Weekends (10am–10pm)</td>
                    <td className="px-4 py-4">Walk-in / Triage (30–90 min)</td>
                    <td className="px-4 py-4 font-semibold text-amber-700">$85 – $140</td>
                    <td className="px-4 py-4 leading-6">
                      Non-life-threatening sick visits when your regular vet is fully booked or closed.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/60 bg-rose-50/20">
                    <td className="px-4 py-4 font-bold text-gray-900">
                      24/7 Emergency Hospital (ER)
                    </td>
                    <td className="px-4 py-4 leading-6">
                      Severe trauma, bloat surgery, urinary blockages, oxygen therapy, toxin antidote, ICUs.
                    </td>
                    <td className="px-4 py-4 font-semibold text-rose-700">Open 24/7 / 365 Days</td>
                    <td className="px-4 py-4">Medical Triage (Immediate to 3+ hrs)</td>
                    <td className="px-4 py-4 font-semibold text-rose-700">$130 – $275</td>
                    <td className="px-4 py-4 leading-6">
                      Life-threatening emergencies, overnight hospitalization, advanced surgical needs.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/60">
                    <td className="px-4 py-4 font-bold text-gray-900">
                      Mobile / House-Call Vet
                    </td>
                    <td className="px-4 py-4 leading-6">
                      In-home exams, vaccines, hospice care, peaceful in-home euthanasia, nervous pets.
                    </td>
                    <td className="px-4 py-4">Flexible Weekday Hours</td>
                    <td className="px-4 py-4">Scheduled Home Window</td>
                    <td className="px-4 py-4 font-semibold text-teal-700">$100 – $200+</td>
                    <td className="px-4 py-4 leading-6">
                      Anxious or aggressive pets, multi-pet households, elderly pets with limited mobility.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Cities Section */}
      <section className="py-14 bg-[#faf6f0] border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Major Metro Directories
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
                Featured Veterinary Guides by City
              </h2>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                Direct access to top veterinary clinics, emergency animal hospitals, and booking checklists in major metropolitan hubs.
              </p>
            </div>
            <Link
              href="#state-directory"
              className="text-sm font-semibold text-brand-700 hover:text-brand-800 underline underline-offset-4"
            >
              View All 100 Cities ↓
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/vets/${city.slug}`}
                className="group rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                    {stateNames[city.state] ?? city.state}
                  </span>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-brand-600 transition-colors">
                    Explore →
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-brand-800 transition-colors">
                  Vets in {city.label}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-600">
                  Compare clinic hours, Google reviews, emergency hospital contacts, and booking fees.
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Checklist: 6 Questions to Ask Before Booking a Vet */}
      <section className="py-14 bg-white border-b border-gray-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Pet Parent Checklist
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
              6 Questions to Ask Before Booking with a New Vet
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Use this veterinary interview checklist when calling a clinic for the first time:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "After-Hours Emergency Protocol",
                desc: "Do you have doctors on-call overnight, or which specific 24/7 emergency hospital do you refer critical patients to?",
              },
              {
                num: "02",
                title: "In-House Diagnostic Capabilities",
                desc: "Can you run urgent blood work, digital X-rays, and ultrasounds on-site with same-day results?",
              },
              {
                num: "03",
                title: "Itemized Pricing Transparency",
                desc: "What is your standard exam fee, and do you provide written cost estimates before performing treatments?",
              },
              {
                num: "04",
                title: "Fear-Free & Feline Handling",
                desc: "Do you have separate waiting areas for dogs and cats, or Fear Free certified veterinary technicians?",
              },
              {
                num: "05",
                title: "Surgical & Anesthesia Monitoring",
                desc: "Is a dedicated licensed veterinary technician (LVT/CVT) monitoring vital signs (ECG, SpO2, blood pressure) during surgery?",
              },
              {
                num: "06",
                title: "Prescription & Pharmacy Policy",
                desc: "Can prescriptions be filled through accredited online pet pharmacies, or do you require in-house purchasing?",
              },
            ].map((q) => (
              <div
                key={q.num}
                className="rounded-2xl border border-gray-100 bg-[#faf6f0]/50 p-5 shadow-xs"
              >
                <span className="text-xl font-bold text-brand-700">{q.num}</span>
                <h3 className="mt-2 text-base font-bold text-gray-900">{q.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-600">{q.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full State-by-State Directory (All 100 Cities) */}
      <section id="state-directory" className="py-16 bg-[#faf6f0]">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Complete Nationwide Index
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-4xl">
              Browse Local Vet Directories by State
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Select your state below to find dedicated city veterinary guides, clinic comparisons, and local animal hospital emergency contacts.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {groupedCities.map(([state, stateCities]) => (
              <div
                key={state}
                className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 font-bold text-brand-800 text-sm">
                      {state}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-gray-900">
                      {stateNames[state] ?? state}
                    </h3>
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {stateCities.length} {stateCities.length === 1 ? "City Directory" : "City Directories"}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {stateCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/vets/${city.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-gray-100 bg-[#faf6f0]/60 px-4 py-3 text-sm font-medium text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white hover:text-brand-700 hover:shadow-sm"
                    >
                      <span>Vets in {city.label}</span>
                      <span className="text-xs text-gray-400 group-hover:text-brand-600 transition-colors">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-gray-100 bg-white py-16">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Common Pet Parent Questions
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
              Frequently Asked Questions About Choosing a Vet
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Clear, practical answers regarding clinic comparisons, veterinary fees, and emergency planning.
            </p>
          </div>

          <FaqAccordion items={vetFaqs} />

          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/40 p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Don&apos;t see your city listed in our directory?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
              We are constantly expanding our veterinary guides. Send us a message with your city and state, and our editorial team will prioritize creating a local guide for your area.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#2c1f0e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Request a City Guide →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
