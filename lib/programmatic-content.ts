import { ContentSection, FAQItem, QuickAnswer, slugToWords } from "@/lib/seo";
import { programmaticContentOverrides } from "@/data/programmatic-overrides";

type TopicType = "dog-probiotics" | "cat-health" | "health-condition";
type SchemaType = "local-business" | "article";

/**
 * PROGRAMMATIC SEO CONTENT ENGINE
 *
 * This file is the single source of structured SEO content for dynamic pages.
 * Later, you can replace hardcoded strings with CMS/CSV/JSON/database values.
 *
 * Quick edit map for beginners:
 * - Update tone/wording globally:
 *   - buildConditionKeywordVariations()
 *   - buildCommonConditionSections()
 *   - buildConditionFaqs()
 * - Update page-type specific content:
 *   - generateVetCityPageContent()
 *   - generateDogProbioticConditionContent()
 *   - generateCatHealthConditionContent()
 *   - generateHealthConditionContent()
 * - Update internal-link strategy:
 *   - buildDogConditionInternalLinks()
 *   - buildCatConditionInternalLinks()
 *   - buildPetConditionInternalLinks()
 */

export type InternalLink = {
  label: string;
  href: string;
};

export type SEOPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  quickAnswer: QuickAnswer;
  bulletPoints: string[];
  sections: ContentSection[];
  faqs: FAQItem[];
  keywordVariations: string[];
  internalLinks: InternalLink[];
  schemaType: SchemaType;
  // Backward-compat for existing template usage
  mainKeyword: string;
};

export type ContentOverride = Partial<
  Omit<SEOPageData, "slug" | "schemaType" | "mainKeyword">
> & {
  keywordVariations?: string[];
  internalLinks?: InternalLink[];
};

function normalizeCondition(conditionSlug: string) {
  const slug = conditionSlug.toLowerCase().trim();
  const label = slugToWords(slug);
  return { slug, label, lowerLabel: label.toLowerCase() };
}

function mergeOverride(base: SEOPageData, override?: ContentOverride): SEOPageData {
  if (!override) return base;
  return {
    ...base,
    ...override,
    quickAnswer: override.quickAnswer ?? base.quickAnswer,
    bulletPoints: override.bulletPoints ?? base.bulletPoints,
    sections: override.sections ?? base.sections,
    faqs: override.faqs ?? base.faqs,
    keywordVariations: override.keywordVariations ?? base.keywordVariations,
    internalLinks: override.internalLinks ?? base.internalLinks,
    mainKeyword: (override.keywordVariations ?? base.keywordVariations)[0] ?? base.mainKeyword,
  };
}

// Edit this function if you want to change your SEO keyword variation strategy.
function buildConditionKeywordVariations(
  condition: string,
  audience: "dogs" | "cats" | "pets"
): string[] {
  const baseAudience = audience === "pets" ? "dogs and cats" : audience;
  return [
    `${condition} in ${baseAudience}`,
    `how to help ${baseAudience} with ${condition}`,
    `best treatment support for ${condition} in ${baseAudience}`,
    `when to see a vet for ${condition} in ${baseAudience}`,
    `${condition} symptoms in ${baseAudience}`,
  ];
}

// Edit shared condition sections here (applies to dog/cat/general condition pages).
function buildCommonConditionSections(
  conditionLabel: string,
  audienceText: string
): ContentSection[] {
  const lower = conditionLabel.toLowerCase();
  return [
    {
      title: `What ${lower} means in ${audienceText}`,
      body: [
        `${conditionLabel} can range from mild and short-term to more serious cases. Early observation helps you act faster and support recovery.`,
        "Use this section as a content block you can later replace with vet-reviewed guidance from your CMS or database.",
      ],
    },
    {
      title: "Practical care steps",
      body: [
        "A simple home plan can reduce stress and help you monitor progress clearly.",
      ],
      bullets: [
        "Track appetite, stool quality, hydration, and energy level",
        "Avoid sudden food switches while symptoms are active",
        "Use only vet-approved probiotics and dosage guidance",
        "Book a vet visit when symptoms persist or worsen",
      ],
    },
    {
      title: "When to seek urgent veterinary care",
      body: [
        "Get immediate help if you see blood, repeated vomiting, severe lethargy, dehydration, or refusal to eat and drink.",
      ],
    },
  ];
}

// Edit shared FAQ logic here (applies across condition page types).
function buildConditionFaqs(conditionLabel: string, audienceText: string): FAQItem[] {
  const lower = conditionLabel.toLowerCase();
  return [
    {
      question: `What causes ${lower} in ${audienceText}?`,
      answer:
        "Common causes include diet changes, stress, infections, allergies, medication effects, and underlying health conditions.",
    },
    {
      question: `Can probiotics help with ${lower}?`,
      answer:
        "In many cases, probiotics can support gut balance and stool quality. Always use pet-specific strains and ask your veterinarian first.",
    },
    {
      question: "How long should I monitor symptoms before seeing a vet?",
      answer:
        "If symptoms are severe, or if mild symptoms continue beyond 24 to 48 hours, contact your veterinarian.",
    },
  ];
}

// Edit dog-page internal links here.
function buildDogConditionInternalLinks(slug: string): InternalLink[] {
  return [
    { label: "Dog probiotics guide", href: "/probiotics" },
    { label: "Dog health category", href: "/dogs" },
    { label: "Pet health conditions", href: "/health-conditions" },
    { label: "Related dog condition page", href: `/dogs/probiotics/${slug}` },
  ];
}

// Edit cat-page internal links here.
function buildCatConditionInternalLinks(slug: string): InternalLink[] {
  return [
    { label: "Cat health category", href: "/cats" },
    { label: "Probiotics overview", href: "/probiotics" },
    { label: "Pet health conditions", href: "/health-conditions" },
    { label: "Related cat condition page", href: `/cats/health/${slug}` },
  ];
}

// Edit general condition-page internal links here.
function buildPetConditionInternalLinks(slug: string): InternalLink[] {
  return [
    { label: "All health conditions", href: "/health-conditions" },
    { label: "Dog condition pages", href: "/dogs" },
    { label: "Cat condition pages", href: "/cats" },
    { label: "Related condition page", href: `/health-conditions/${slug}` },
  ];
}

type HealthConditionProfile = {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  quickQuestion: string;
  quickAnswer: string;
  causes: string[];
  symptoms: string[];
  supportiveCare: string[];
  prevention: string[];
  commonMistakes: string[];
  whenToCallVet: string[];
  keyTakeaways: string[];
  relevantDogProbioticSlug?: string;
  faqs: FAQItem[];
};

const healthConditionProfiles: Record<string, HealthConditionProfile> = {
  diarrhea: {
    slug: "diarrhea",
    label: "Diarrhea in Dogs and Cats",
    metaTitle: "Pet Diarrhea Guide | Causes, Care, and Vet Red Flags",
    metaDescription:
      "Learn common causes of dog and cat diarrhea, what to monitor at home, supportive care options, and when symptoms need urgent veterinary care.",
    intro:
      "Diarrhea is one of the most common digestive concerns for pets. Most mild cases improve with fast hydration support and close monitoring, but persistent or severe symptoms need timely veterinary review.",
    quickQuestion: "What causes diarrhea in dogs and cats?",
    quickAnswer:
      "Common causes include sudden food changes, stress, parasites, infections, food intolerance, and medication effects. Many mild cases settle in 24 to 48 hours with supportive care, but blood, repeated vomiting, or low energy can signal higher risk.",
    causes: [
      "Sudden diet switch or rich treats",
      "Stress from travel, boarding, or routine change",
      "Parasites, bacterial imbalance, or viral illness",
      "Food intolerance or ingredient sensitivity",
    ],
    symptoms: [
      "Loose or watery stool",
      "Urgent bathroom frequency",
      "Low appetite or nausea",
      "Dehydration signs such as dry gums or tiredness",
    ],
    supportiveCare: [
      "Offer frequent access to fresh water",
      "Feed small, easy-to-digest meals",
      "Track stool pattern and appetite every few hours",
      "Use pet-safe probiotic support when recommended",
    ],
    prevention: [
      "Transition diet slowly over 5 to 7 days",
      "Keep treat choices consistent",
      "Use routine parasite prevention advised by your veterinarian",
      "Avoid table scraps and sudden food experiments",
    ],
    commonMistakes: [
      "Changing multiple foods at once during a flare",
      "Waiting too long when dehydration signs appear",
      "Using human medications without veterinary instruction",
    ],
    whenToCallVet: [
      "Blood in stool or black/tarry stool",
      "Vomiting plus diarrhea for more than one day",
      "Very low energy, weakness, or refusal to drink",
      "Puppy, senior, or chronic-condition pet with active symptoms",
    ],
    keyTakeaways: [
      "Fast hydration and tracking are the first priorities.",
      "Most mild cases can improve quickly with consistent care.",
      "Severe or persistent symptoms should not be delayed.",
    ],
    relevantDogProbioticSlug: "diarrhea",
    faqs: [
      {
        question: "What causes sudden dog diarrhea after a food change?",
        answer:
          "A rapid diet switch can upset gut balance, especially in sensitive dogs. The stomach and intestinal microbiome may need several days to adapt to new ingredients. If stool softens after a change, pause further changes and transition more gradually. Call your veterinarian if symptoms continue beyond 24 to 48 hours or worsen quickly.",
      },
      {
        question: "Is cat diarrhea always serious?",
        answer:
          "Not always, but it should be watched closely. A brief episode may resolve with hydration and gentle feeding, while persistent diarrhea can lead to dehydration and nutrient loss. Kittens, seniors, and cats with chronic disease are higher risk. If appetite drops or lethargy appears, seek veterinary advice promptly.",
      },
      {
        question: "Can I treat mild pet diarrhea at home first?",
        answer:
          "In some mild cases, yes, with hydration support, simple meals, and close monitoring. Keep portions smaller and avoid adding new treats or supplements all at once. If blood, vomiting, or weakness appears, skip home trial and contact your vet. Home care should be short-term and observation-focused.",
      },
      {
        question: "How long should I wait before seeing a veterinarian?",
        answer:
          "For otherwise stable adult pets, many mild cases are monitored for up to 24 to 48 hours. Seek care earlier for young, senior, or medically complex pets. Any red-flag signs such as dehydration, repeated vomiting, or blood mean immediate escalation. Early care usually leads to faster recovery.",
      },
      {
        question: "Do probiotics help with dog or cat diarrhea?",
        answer:
          "Probiotics can support gut balance in many mild digestive cases when used correctly. They are most useful alongside hydration, routine feeding, and symptom tracking. Use species-appropriate products and verify dosage with your veterinarian. Probiotics are supportive, not a substitute for urgent medical care.",
      },
      {
        question: "What should I monitor at home during recovery?",
        answer:
          "Track stool frequency, stool consistency, appetite, water intake, and energy level. Write down changes so you can spot improvement or decline quickly. This log also helps your veterinarian make faster decisions if a visit is needed. Consistent tracking is often more useful than memory alone.",
      },
    ],
  },
  allergies: {
    slug: "allergies",
    label: "Allergies in Dogs and Cats",
    metaTitle: "Pet Allergies Guide | Itch, Triggers, and Relief Steps",
    metaDescription:
      "Understand dog and cat allergy triggers, common signs, practical home support, and when persistent itching or ear issues should be evaluated by a vet.",
    intro:
      "Allergy signs in pets often appear as itchy skin, paw licking, recurring ear irritation, or digestive sensitivity. This guide helps you identify likely triggers and build a clearer support plan with your veterinarian.",
    quickQuestion: "What causes allergies in dogs and cats?",
    quickAnswer:
      "Pet allergies can be linked to food ingredients, environmental allergens, or flea sensitivity. Symptoms often cycle over time, so tracking flare patterns is key to finding what is driving irritation.",
    causes: [
      "Food ingredient sensitivity",
      "Environmental triggers such as pollen or dust",
      "Flea allergy dermatitis",
      "Secondary skin-barrier irritation from scratching",
    ],
    symptoms: [
      "Persistent itching or licking",
      "Red or irritated skin",
      "Recurring ear odor or wax",
      "Seasonal flare patterns or digestive discomfort",
    ],
    supportiveCare: [
      "Track trigger timing and flare severity",
      "Keep skin clean and dry after outdoor exposure",
      "Review diet history with your veterinarian",
      "Use vet-approved gut and skin support tools",
    ],
    prevention: [
      "Maintain regular flea prevention",
      "Avoid sudden diet rotations during active flares",
      "Wash bedding frequently during high-allergen seasons",
      "Monitor early signs before full flare progression",
    ],
    commonMistakes: [
      "Changing shampoo, food, and supplements together",
      "Stopping monitoring once symptoms look better",
      "Treating recurring ear irritation as a one-time issue",
    ],
    whenToCallVet: [
      "Open sores, bleeding, or skin infection signs",
      "Severe itching with sleep disturbance",
      "Frequent ear infections or strong odor recurrence",
      "Symptoms not improving after home support",
    ],
    keyTakeaways: [
      "Pattern tracking helps identify triggers faster.",
      "Allergy care usually needs both skin and gut support.",
      "Recurring flares deserve structured veterinary follow-up.",
    ],
    relevantDogProbioticSlug: "allergies",
    faqs: [
      {
        question: "How can I tell if my pet's itching is allergy-related?",
        answer:
          "Allergy-related itching often repeats in patterns, such as seasonal flare-ups or food-linked reactions after specific meals. You may also notice ear irritation, paw licking, or belly redness. Track timing, location of itch, and possible trigger exposure. This pattern log can help your vet narrow likely causes more quickly.",
      },
      {
        question: "Can food allergies cause both skin and stool changes?",
        answer:
          "Yes, in some pets food sensitivity can affect both skin and digestion. A dog may show itchy ears and soft stool, while a cat may show overgrooming with GI fluctuations. Because symptoms overlap with other conditions, structured elimination planning is important. Avoid self-testing multiple diets at once.",
      },
      {
        question: "Is allergy care possible at home without a vet?",
        answer:
          "Home support can help with trigger reduction, routine hygiene, and tracking, but long-term control usually needs veterinary guidance. Persistent itching can damage the skin barrier and increase infection risk. If symptoms keep returning, a deeper plan is needed. Early consultation often prevents chronic flare cycles.",
      },
      {
        question: "When is itchy skin an urgent vet visit?",
        answer:
          "Treat it as urgent when there are open lesions, bleeding, swelling, strong odor, or clear pain behavior. Pets can worsen quickly when secondary infection develops. If sleep disruption or nonstop scratching appears, do not delay. Rapid treatment can reduce long recovery windows.",
      },
      {
        question: "Do probiotics help with pet allergies?",
        answer:
          "Probiotics may support the gut-immune pathway in some pets as part of a broader care plan. They are not a stand-alone cure for severe allergy disease. Best results come when paired with trigger control and veterinary management. Use pet-specific products and monitor response over several weeks.",
      },
      {
        question: "How long does it take to see allergy improvement?",
        answer:
          "Mild improvement may appear in days to a few weeks, but full stabilization often takes longer. Skin and ear tissue may need time to recover even after trigger control starts. Keep logs and avoid frequent plan switching during this period. Consistency usually improves outcomes.",
      },
    ],
  },
  "itchy-skin": {
    slug: "itchy-skin",
    label: "Itchy Skin in Dogs and Cats",
    metaTitle: "Itchy Skin in Pets | Causes, Relief, and Vet Guidance",
    metaDescription:
      "Learn why dogs and cats get itchy skin, common symptom patterns, safe supportive care, and when persistent scratching needs veterinary treatment.",
    intro:
      "Itchy skin is a common quality-of-life issue for dogs and cats. This page helps you identify likely drivers, reduce flare triggers, and know when itching moves from mild irritation to a medical concern.",
    quickQuestion: "Why is my dog or cat suddenly itchy?",
    quickAnswer:
      "Sudden itching can come from allergies, fleas, dry skin, infection, or contact irritants. Look for pattern clues such as seasonal changes, ear involvement, and specific body areas that are repeatedly irritated.",
    causes: [
      "Environmental allergy exposure",
      "Flea bites or flea allergy response",
      "Skin yeast or bacterial overgrowth",
      "Diet-related sensitivity and skin-barrier stress",
    ],
    symptoms: [
      "Frequent scratching or chewing",
      "Paw licking or face rubbing",
      "Redness, hotspots, or scabs",
      "Ear irritation with odor or excess wax",
    ],
    supportiveCare: [
      "Keep nails trimmed to reduce self-trauma",
      "Use gentle, vet-appropriate skin hygiene",
      "Control fleas consistently",
      "Track flare timing and body areas involved",
    ],
    prevention: [
      "Use year-round parasite prevention",
      "Avoid known trigger products or surfaces",
      "Support skin barrier and hydration",
      "Address early itching before hotspots form",
    ],
    commonMistakes: [
      "Ignoring ear symptoms while treating skin only",
      "Using frequent harsh bathing that worsens dryness",
      "Stopping maintenance too soon after improvement",
    ],
    whenToCallVet: [
      "Open wounds, bleeding, or strong odor",
      "Nighttime rest disruption from constant itching",
      "Recurring hotspots or ear infections",
      "No improvement despite home support",
    ],
    keyTakeaways: [
      "Pattern + location tracking improves diagnosis.",
      "Skin and ear health are often linked in itch cases.",
      "Persistent itch needs a structured medical plan.",
    ],
    relevantDogProbioticSlug: "allergies",
    faqs: [
      {
        question: "What is the fastest safe way to calm itchy skin at home?",
        answer:
          "Start with trigger reduction, gentle skin care, and preventing self-trauma from scratching. Keep your pet cool, clean, and away from known irritants while you monitor progression. Rapid worsening, odor, or open skin requires veterinary treatment. Short-term support is helpful, but persistent itch needs a complete plan.",
      },
      {
        question: "Can itchy skin be from diet and not environment?",
        answer:
          "Yes, some pets react more to food components than seasonal allergens. Clues include year-round symptoms, ear issues, or digestive overlap. Diet-related investigation should be structured and consistent, not frequent random food changes. Your veterinarian can guide elimination or targeted feeding trials.",
      },
      {
        question: "Is excessive paw licking a skin allergy sign?",
        answer:
          "It can be. Paw licking often appears with environmental or contact triggers and may worsen after outdoor exposure. Check for redness between toes, odor, or swelling. If licking becomes repetitive or painful, veterinary review is recommended.",
      },
      {
        question: "When should itching be treated as urgent?",
        answer:
          "Urgent signs include bleeding, open sores, facial swelling, severe ear pain, or sudden behavior change from discomfort. Waiting can increase infection risk and recovery time. If your pet cannot settle or sleep because of itch, get care quickly. Early intervention reduces complication risk.",
      },
      {
        question: "Can probiotics help itchy dogs and cats?",
        answer:
          "Probiotics may help support gut-immune balance in some itch-prone pets. They are typically used alongside skin-focused treatment and trigger control. Choose species-appropriate products and monitor response over several weeks. They support the plan but do not replace direct skin or ear treatment.",
      },
      {
        question: "How do I prevent repeat itchy skin flares?",
        answer:
          "Use a maintenance plan that includes trigger awareness, parasite control, early skin care, and regular check-ins. Keep notes on flare timing, weather, and diet changes to detect patterns. Repeat flares usually need proactive management, not one-time treatment. Consistency is the biggest prevention tool.",
      },
    ],
  },
  "yeast-imbalance": {
    slug: "yeast-imbalance",
    label: "Yeast Imbalance in Dogs and Cats",
    metaTitle: "Pet Yeast Imbalance | Ear, Skin, and Gut Support Guide",
    metaDescription:
      "Understand signs of yeast imbalance in dogs and cats, common trigger patterns, practical home support, and when recurrent symptoms need a vet workup.",
    intro:
      "Yeast imbalance can affect skin, ears, and comfort in both dogs and cats. Recurrent odor, irritation, or greasy skin may point to a deeper pattern that needs consistent management.",
    quickQuestion: "What causes yeast imbalance in pets?",
    quickAnswer:
      "Yeast overgrowth often follows skin barrier stress, moisture buildup, allergy inflammation, or immune imbalance. Recurrent episodes usually mean underlying triggers still need to be addressed, not just surface symptoms.",
    causes: [
      "Moist skin folds or humid environments",
      "Allergy-related skin inflammation",
      "Recurring ear canal irritation",
      "Immune or microbiome imbalance patterns",
    ],
    symptoms: [
      "Musty or yeasty odor",
      "Greasy skin, redness, or thickened patches",
      "Ear debris, head shaking, or ear scratching",
      "Recurring flare cycles after short-term improvement",
    ],
    supportiveCare: [
      "Keep affected skin areas clean and dry",
      "Use veterinary skin/ear protocols consistently",
      "Track recurrence triggers and flare intervals",
      "Support gut routine and diet stability",
    ],
    prevention: [
      "Dry skin folds and paws after bathing/outdoor exposure",
      "Address allergies and ear inflammation early",
      "Avoid random product switching during flare control",
      "Follow maintenance schedule after symptom improvement",
    ],
    commonMistakes: [
      "Stopping treatment as soon as odor improves",
      "Using unsuitable cleansers that irritate skin further",
      "Ignoring repeated ear signs while treating skin only",
    ],
    whenToCallVet: [
      "Strong odor with pain or swelling",
      "Frequent recurrence despite home care",
      "Open skin lesions or discharge",
      "Behavior changes from discomfort",
    ],
    keyTakeaways: [
      "Recurring yeast signs usually indicate an underlying trigger.",
      "Skin and ear care plans must be consistent, not occasional.",
      "Long-term control is easier with early veterinary strategy.",
    ],
    faqs: [
      {
        question: "How can I tell if my pet has a yeast imbalance?",
        answer:
          "Common clues include a musty odor, greasy skin, redness, and repeated ear irritation. Symptoms often return soon after short-term improvement when root triggers are still active. Track where and when flares happen for better diagnosis. A veterinary exam confirms whether yeast is part of the problem.",
      },
      {
        question: "Is yeast imbalance only a skin issue?",
        answer:
          "Not always. While skin and ears are the most visible sites, yeast patterns can be linked to broader allergy or immune imbalance. Some pets show digestive sensitivity at the same time. A complete plan should look beyond surface signs. This is why recurrence deserves deeper review.",
      },
      {
        question: "Can I manage mild yeast flare-ups at home?",
        answer:
          "You can support mild cases with dryness control, gentle hygiene, and consistent routine while monitoring closely. But repeated flares usually need veterinary diagnostics and a structured treatment plan. Home care should support, not replace, that plan. Seek help quickly if discomfort escalates.",
      },
      {
        question: "Why does yeast keep coming back?",
        answer:
          "Recurrence often means a primary driver like allergy inflammation, moisture retention, or ear canal irritation is still unresolved. Treating odor alone may give short-term relief without long-term control. Pattern tracking and prevention habits improve outcomes. Your vet can help identify and target the root cause.",
      },
      {
        question: "When is yeast imbalance considered urgent?",
        answer:
          "Urgent signs include painful ears, swelling, bleeding, thick discharge, or severe discomfort. Delays can worsen inflammation and make treatment longer. If your pet is head-shaking constantly or avoiding touch, seek prompt care. Early intervention lowers complication risk.",
      },
      {
        question: "Can diet and probiotics help prevent recurrence?",
        answer:
          "In some pets, a steadier diet and probiotic support can help reduce flare frequency by supporting gut and immune balance. Results are typically gradual and best when paired with skin/ear maintenance. Use pet-specific products and avoid frequent formula switching. Prevention is usually multi-step, not one product.",
      },
    ],
  },
  "urinary-health": {
    slug: "urinary-health",
    label: "Urinary Health in Dogs and Cats",
    metaTitle: "Pet Urinary Health Guide | Signs, Support, and Vet Timing",
    metaDescription:
      "Learn urinary warning signs in dogs and cats, common causes, hydration-focused support, and when bathroom changes require urgent veterinary care.",
    intro:
      "Urinary issues can become serious quickly if they are missed early. This page explains what to watch in litter box or bathroom behavior, what can help at home, and when immediate vet care is essential.",
    quickQuestion: "What are early urinary health warning signs in pets?",
    quickAnswer:
      "Frequent attempts to urinate, discomfort, accidents, blood-tinged urine, or reduced urine output can all be warning signs. Inability to pass urine is an emergency and needs immediate care.",
    causes: [
      "Urinary tract inflammation or infection",
      "Low hydration and concentrated urine",
      "Crystals or stone formation risk",
      "Stress-related urinary behavior changes",
    ],
    symptoms: [
      "Frequent urination attempts",
      "Straining or discomfort while urinating",
      "Accidents outside normal bathroom areas",
      "Blood in urine or strong urine odor",
    ],
    supportiveCare: [
      "Encourage hydration with fresh water access",
      "Monitor urine frequency and volume",
      "Reduce stress and keep bathroom spaces clean",
      "Follow veterinary testing and treatment plans promptly",
    ],
    prevention: [
      "Maintain routine hydration support",
      "Keep litter and bathroom routines predictable",
      "Address stress and inactivity patterns",
      "Follow preventive urine checks when recommended",
    ],
    commonMistakes: [
      "Assuming accidents are only behavioral",
      "Delaying care during repeated straining",
      "Underestimating hydration needs in warm seasons",
    ],
    whenToCallVet: [
      "No urine output or very minimal output",
      "Visible pain or repeated straining episodes",
      "Blood in urine",
      "Lethargy, vomiting, or sudden decline",
    ],
    keyTakeaways: [
      "Urinary changes are often time-sensitive.",
      "Hydration and observation can support early care.",
      "No-urine situations should be treated as emergencies.",
    ],
    faqs: [
      {
        question: "How do I know if urinary changes are serious?",
        answer:
          "Frequency changes alone can be mild, but straining, pain, blood, or low output increase urgency quickly. Pets that cannot pass urine need immediate emergency care. Track timing and amount to help your veterinarian act faster. Early response is safer than waiting for progression.",
      },
      {
        question: "Can stress cause urinary problems in pets?",
        answer:
          "Yes, stress can affect bathroom behavior, especially in sensitive pets. Environmental changes, conflict, or routine disruption may trigger signs that mimic medical issues. Because symptom overlap is common, persistent changes should still be checked medically. Stress support and medical care often work together.",
      },
      {
        question: "Should I try home remedies first for urinary symptoms?",
        answer:
          "Hydration support and monitoring can help while arranging care, but they should not replace evaluation when warning signs are present. Urinary issues can escalate fast, particularly when output drops. If your pet strains repeatedly or seems painful, seek care the same day. Waiting can raise complication risk.",
      },
      {
        question: "Are cats at higher risk for urgent urinary blockage?",
        answer:
          "Some cats, especially males, can be at significant risk for obstruction. Repeated litter box trips with little output is a serious warning pattern. Immediate treatment can be lifesaving in these cases. Do not delay if this pattern appears.",
      },
      {
        question: "What should I track before a vet visit?",
        answer:
          "Track urine frequency, output amount, accidents, visible discomfort, and water intake changes. Note when symptoms started and whether they are worsening. These details improve diagnostic speed and treatment accuracy. A simple timeline is very helpful.",
      },
      {
        question: "Can diet changes support urinary health prevention?",
        answer:
          "In some pets, diet adjustments can support urinary balance and hydration behavior. These plans should be guided by veterinary findings, especially if stones or crystals are suspected. Avoid random diet changes during active symptoms. Prevention works best when matched to the specific urinary pattern.",
      },
    ],
  },
  "bad-breath": {
    slug: "bad-breath",
    label: "Bad Breath in Dogs and Cats",
    metaTitle: "Pet Bad Breath Guide | Dental and Gut Health Clues",
    metaDescription:
      "Learn what causes bad breath in dogs and cats, signs of dental disease, practical home care steps, and when odor suggests a deeper health issue.",
    intro:
      "Bad breath is not always a minor cosmetic issue. In many pets, odor can signal dental buildup, gum inflammation, digestion changes, or other medical concerns that benefit from early care.",
    quickQuestion: "Why does my dog or cat have bad breath?",
    quickAnswer:
      "Bad breath often comes from dental plaque and gum inflammation, but persistent odor can also reflect digestive imbalance or underlying disease. Monitoring alongside oral checks helps identify when it needs professional treatment.",
    causes: [
      "Plaque and tartar accumulation",
      "Gum inflammation or oral infection",
      "Diet quality and chewing habits",
      "Digestive imbalance or systemic disease signals",
    ],
    symptoms: [
      "Persistent unpleasant mouth odor",
      "Yellow/brown dental buildup",
      "Red gums or mouth sensitivity",
      "Drooling, pawing at mouth, or reduced chewing",
    ],
    supportiveCare: [
      "Begin gentle oral hygiene routine",
      "Use vet-approved dental support products",
      "Monitor appetite and chewing comfort",
      "Review gut and diet consistency when odor persists",
    ],
    prevention: [
      "Regular dental cleaning habits",
      "Routine oral checkups during vet visits",
      "Balanced diet and hydration support",
      "Address mild gum signs early",
    ],
    commonMistakes: [
      "Masking odor without checking gum health",
      "Ignoring reduced chewing behavior",
      "Waiting for severe dental pain before evaluation",
    ],
    whenToCallVet: [
      "Bleeding gums or visible oral pain",
      "Foul odor with appetite drop",
      "Broken teeth or swelling around mouth",
      "Odor with lethargy or vomiting",
    ],
    keyTakeaways: [
      "Bad breath can be an early dental warning sign.",
      "Odor plus behavior change deserves prompt review.",
      "Dental and digestive support often work together.",
    ],
    relevantDogProbioticSlug: "digestion",
    faqs: [
      {
        question: "Is bad breath in pets always a dental problem?",
        answer:
          "Dental causes are very common, but not the only possibility. Odor can also be influenced by diet, gut imbalance, or broader medical issues. If odor returns quickly after basic hygiene, deeper evaluation is worth doing. Pattern context helps identify the real driver.",
      },
      {
        question: "Can I improve bad breath at home?",
        answer:
          "You can often improve mild odor with consistent oral hygiene and diet routine support. Start with gentle, pet-safe methods and monitor for gum irritation or pain signs. If odor persists despite routine care, veterinary dental review is recommended. Home support is useful but not always sufficient.",
      },
      {
        question: "When does bad breath become urgent?",
        answer:
          "Urgent signs include bleeding gums, mouth pain, facial swelling, refusal to eat, or sudden foul odor with lethargy. These can signal infection or painful oral disease. Prompt treatment reduces suffering and limits progression. Do not delay if your pet shows clear discomfort.",
      },
      {
        question: "Can digestive issues cause bad breath too?",
        answer:
          "Yes, in some cases digestive imbalance can contribute to breath changes. This is more likely when odor appears with stool or appetite changes. Addressing gut routine and hydration may help in supportive plans. Persistent combined symptoms should be reviewed medically.",
      },
      {
        question: "How often should my pet get a dental check?",
        answer:
          "Most pets benefit from oral checks during regular wellness visits, with frequency adjusted by age and dental history. Pets with recurring tartar or gum issues may need closer follow-up. Early monitoring prevents advanced pain and costly treatment later. Ask your veterinarian for an individualized schedule.",
      },
      {
        question: "What should I track before a dental appointment?",
        answer:
          "Track odor duration, appetite changes, chewing behavior, drooling, and visible gum changes. This gives your veterinarian useful context and can speed diagnosis. Mention any recent diet or medication changes. Better notes often lead to faster, more precise care decisions.",
      },
    ],
  },
  "weight-management": {
    slug: "weight-management",
    label: "Weight Management in Dogs and Cats",
    metaTitle: "Pet Weight Management | Safe Loss and Maintenance Guide",
    metaDescription:
      "Use this practical guide to improve dog and cat weight management with safer feeding habits, activity planning, and clear veterinary escalation points.",
    intro:
      "Healthy weight supports mobility, digestion, and long-term disease prevention in pets. This guide helps pet parents use realistic feeding and activity changes without extreme or unsafe adjustments.",
    quickQuestion: "What causes unhealthy weight gain in pets?",
    quickAnswer:
      "Weight gain usually comes from small daily calorie surplus, low activity, and inconsistent portion control. Even extra treats can accumulate over time, especially in indoor or lower-activity pets.",
    causes: [
      "Unmeasured portions and calorie-dense treats",
      "Low activity or mobility limitation",
      "Life-stage changes affecting metabolism",
      "Feeding inconsistency across caregivers",
    ],
    symptoms: [
      "Reduced waist definition",
      "Lower stamina during walks or play",
      "Difficulty grooming or jumping",
      "Gradual weight gain on monthly checks",
    ],
    supportiveCare: [
      "Measure portions with consistency",
      "Set realistic activity targets by pet ability",
      "Use low-calorie reward alternatives",
      "Track weight and body condition monthly",
    ],
    prevention: [
      "Review portions whenever lifestyle changes",
      "Keep treat calories visible and limited",
      "Use regular weight checkpoints",
      "Adjust feeding plans with veterinarian input",
    ],
    commonMistakes: [
      "Reducing calories too aggressively",
      "Ignoring treats and table extras in totals",
      "Expecting visible change in only a few days",
    ],
    whenToCallVet: [
      "Rapid unexplained weight gain or loss",
      "Exercise intolerance or breathing changes",
      "Appetite change with low energy",
      "No progress despite consistent plan",
    ],
    keyTakeaways: [
      "Small consistent adjustments outperform drastic changes.",
      "Measured portions are the core weight tool.",
      "Veterinary oversight improves safety and success.",
    ],
    faqs: [
      {
        question: "How fast should a pet lose weight safely?",
        answer:
          "Safe weight change is usually gradual, not rapid. Fast loss can stress metabolism and may increase health risk in some pets. Most plans aim for steady, monitored progress over weeks to months. Your veterinarian can set a safer target for your specific pet.",
      },
      {
        question: "Can I rely on visual body shape alone?",
        answer:
          "Visual checks help, but they are more accurate when combined with scale data and body condition scoring. Small changes are easy to miss by eye, especially in long-haired breeds. Track both shape and numbers monthly. This gives better early warning when plans need adjustment.",
      },
      {
        question: "What is the biggest feeding mistake in weight management?",
        answer:
          "The most common mistake is untracked extras, including treats, topper foods, and table scraps. These calories can quietly offset your entire feeding plan. Measure all intake sources, not just main meals. Consistency across everyone in the home is essential.",
      },
      {
        question: "Should I increase exercise before changing food?",
        answer:
          "Usually both feeding and activity need coordination for best results. Exercise alone may not offset large calorie surplus, and food cuts alone can reduce energy if too aggressive. A balanced, progressive plan works better than one-sided changes. Tailor activity to your pet's mobility level.",
      },
      {
        question: "When should I ask a vet for help with weight?",
        answer:
          "Ask for help if weight keeps increasing, progress stalls for weeks, or your pet shows fatigue and behavior changes. Also seek review when you suspect hormone or chronic disease factors. A medical check can identify hidden barriers. Early support improves long-term outcomes.",
      },
      {
        question: "Can tools help with daily planning?",
        answer:
          "Yes, calculators and logs help standardize starting estimates and keep routine consistent. They work best when paired with real weight trend data and body condition checks. Use tools to guide decisions, then personalize with veterinary advice. Data-driven plans are easier to sustain.",
      },
    ],
  },
  "anxiety-stress": {
    slug: "anxiety-stress",
    label: "Anxiety and Stress in Dogs and Cats",
    metaTitle: "Pet Anxiety and Stress Guide | Signs, Triggers, and Support",
    metaDescription:
      "Learn how stress affects dogs and cats, common behavior and gut signs, practical calming routines, and when anxiety symptoms need veterinary help.",
    intro:
      "Stress can affect both behavior and physical health in pets, including digestion, sleep, and appetite. This page helps you identify trigger patterns and build a calmer daily routine with clear escalation points.",
    quickQuestion: "How does stress show up in dogs and cats?",
    quickAnswer:
      "Stress can appear as pacing, vocalizing, hiding, appetite changes, soft stool, or overgrooming depending on species and personality. Persistent symptoms usually improve when triggers are reduced and routines become predictable.",
    causes: [
      "Routine disruption and separation stress",
      "Noise sensitivity or environmental overstimulation",
      "Social conflict with people or other pets",
      "Unmet enrichment and exercise needs",
    ],
    symptoms: [
      "Restlessness, pacing, or excessive vocalization",
      "Hiding, clinginess, or reactivity changes",
      "Appetite fluctuation and digestive upset",
      "Overgrooming or stress-related repetitive behavior",
    ],
    supportiveCare: [
      "Stabilize daily routine and feeding schedule",
      "Use gradual exposure for known stress triggers",
      "Create safe quiet spaces for recovery",
      "Pair behavioral support with gut routine consistency",
    ],
    prevention: [
      "Keep predictable sleep, feeding, and activity cycles",
      "Use enrichment appropriate to species and age",
      "Prepare pets ahead of travel or schedule changes",
      "Address mild behavior shifts before escalation",
    ],
    commonMistakes: [
      "Punishing stress behaviors instead of reducing triggers",
      "Changing multiple routines in one week",
      "Ignoring digestive symptoms that appear with anxiety",
    ],
    whenToCallVet: [
      "Self-injury or severe panic behavior",
      "Persistent appetite drop or weight loss",
      "GI symptoms recurring with stress episodes",
      "No improvement after structured routine changes",
    ],
    keyTakeaways: [
      "Stress management is both behavioral and physical care.",
      "Predictable routines reduce many anxiety flare patterns.",
      "Severe or persistent symptoms need professional guidance.",
    ],
    faqs: [
      {
        question: "Can stress really cause digestive problems in pets?",
        answer:
          "Yes. Stress can affect gut motility, appetite, and stool quality in both dogs and cats. Some pets show soft stool, vomiting tendency, or refusal to eat during high-anxiety periods. Tracking behavior and digestion together helps identify this pattern. Combined care often works best.",
      },
      {
        question: "How can I reduce separation-related stress at home?",
        answer:
          "Start with short predictable departures, calm return routines, and enrichment before alone time. Keep feeding and walk schedules consistent so your pet has structure. Avoid dramatic exits that increase anticipation stress. Progress gradually over days to weeks.",
      },
      {
        question: "Is hiding in cats always a stress sign?",
        answer:
          "Hiding can be normal in short periods, but persistent hiding with appetite or litter changes deserves attention. It may indicate stress, pain, or illness. Observe context, duration, and additional signs. If the pattern continues, seek veterinary guidance.",
      },
      {
        question: "When should anxiety be treated as urgent?",
        answer:
          "Urgent signs include self-injury, nonstop panic behaviors, severe appetite decline, or major behavior change with physical symptoms. These cases should not be managed by routine changes alone. Prompt medical and behavioral support is safer. Early action reduces long-term stress conditioning.",
      },
      {
        question: "Can probiotics help stress-sensitive pets?",
        answer:
          "Some pets with stress-linked digestive symptoms may benefit from gut-support strategies including probiotics. This is typically part of a broader calming routine, not a stand-alone fix. Use species-specific products and monitor trends. Discuss product choice with your veterinarian.",
      },
      {
        question: "What should I track to discuss with my vet?",
        answer:
          "Track trigger events, behavior changes, appetite, stool quality, sleep pattern, and recovery time after episodes. A simple log makes consultation more productive and tailored. It also shows whether interventions are helping. Pattern data often shortens the trial-and-error phase.",
      },
    ],
  },
  "urinary-blockage-cats": {
    slug: "urinary-blockage-cats",
    label: "Urinary Blockage in Cats",
    metaTitle: "Urinary Blockage in Cats | Emergency Signs and Fast Action",
    metaDescription:
      "Learn urgent signs of urinary blockage in cats, why it is serious, and what pet parents should do immediately.",
    intro:
      "Urinary blockage in cats is a high-risk emergency. A blocked cat may try to urinate but produce little or no urine. Fast treatment is critical for safety.",
    quickQuestion: "Is urinary blockage in cats an emergency?",
    quickAnswer:
      "Yes. Urinary blockage can become life-threatening quickly. If your cat strains, cries in the litter box, or cannot pass urine, seek emergency veterinary care now.",
    causes: [
      "Urinary crystals or stones",
      "Urethral plugs and inflammation",
      "Severe bladder irritation",
      "Stress-linked lower urinary tract flare patterns",
    ],
    symptoms: [
      "Repeated litter box visits with little output",
      "Straining or vocalizing while trying to urinate",
      "Blood-tinged urine",
      "Lethargy, vomiting, or collapse signs",
    ],
    supportiveCare: [
      "Treat as urgent and seek immediate veterinary care",
      "Keep the cat calm during transport",
      "Do not delay with extended home experiments",
      "Share timeline of urine behavior with the vet team",
    ],
    prevention: [
      "Maintain hydration-focused routines",
      "Use vet-guided urinary nutrition plans where needed",
      "Reduce stress in litter and home environment",
      "Follow recheck plans after any urinary event",
    ],
    commonMistakes: [
      "Assuming repeated straining is only constipation",
      "Waiting overnight when urine output drops",
      "Treating severe signs as minor behavior issues",
    ],
    whenToCallVet: [
      "No urine output or very tiny output",
      "Repeated straining with pain signs",
      "Vomiting, weakness, or collapse behavior",
      "Any sudden urinary decline in male cats",
    ],
    keyTakeaways: [
      "Urinary blockage in cats is an emergency, not a watch-and-wait condition.",
      "No or minimal urine output is a critical warning sign.",
      "Fast veterinary treatment can save life and reduce complications.",
    ],
    faqs: [
      {
        question: "How do I know if my cat has a urinary blockage?",
        answer:
          "Common warning signs include frequent litter box trips, straining, crying, and very little urine output. Some cats also hide, vomit, or become very weak. These signs can worsen quickly. Seek emergency veterinary care immediately if you suspect blockage.",
      },
      {
        question: "Is urinary blockage more common in male cats?",
        answer:
          "Yes, male cats are generally at higher risk because of a narrower urethra. Even partial blockage can progress quickly. Any sudden change in urine output should be treated as urgent. Early intervention is safer than waiting.",
      },
      {
        question: "Can I treat a blocked cat at home first?",
        answer:
          "No. A true blockage is an emergency and cannot be safely managed at home. Delays increase risk of severe illness and death. Transport your cat to emergency care as soon as possible. Home remedies are not enough in this situation.",
      },
      {
        question: "What causes urinary blockage in cats?",
        answer:
          "Causes can include crystals, stones, urethral plugs, and inflammation in the lower urinary tract. Stress and hydration patterns may contribute in some cats. Because causes vary, veterinary diagnostics are important. Treatment plans must be individualized.",
      },
      {
        question: "Can blockage happen again after treatment?",
        answer:
          "Yes, recurrence can happen in some cats without preventive follow-up. Long-term management may include diet planning, hydration support, stress reduction, and routine rechecks. Follow your vet's plan closely. Prevention is ongoing, not one-time.",
      },
      {
        question: "When should I go to emergency care?",
        answer:
          "Go immediately if your cat cannot pass urine, strains repeatedly, seems painful, vomits, or becomes weak. Do not wait for symptoms to improve on their own. This is a time-sensitive emergency. Early care saves lives.",
      },
    ],
  },
  "kidney-failure-cats": {
    slug: "kidney-failure-cats",
    label: "Kidney Failure in Cats",
    metaTitle: "Kidney Failure in Cats | Signs, Stages, and Vet Guidance",
    metaDescription:
      "Understand kidney failure signs in cats, when symptoms are serious, and how veterinary care supports quality of life.",
    intro:
      "Kidney failure in cats can be acute or chronic. Early signs may look mild at first, like extra thirst or appetite change. Prompt veterinary evaluation helps with safer long-term planning.",
    quickQuestion: "What are early signs of kidney failure in cats?",
    quickAnswer:
      "Early signs can include increased thirst, more urination, appetite drop, weight loss, and lower energy. These signs should be checked early because kidney disease can progress quietly.",
    causes: [
      "Age-related chronic kidney disease",
      "Acute kidney injury from toxins or severe illness",
      "Infections or inflammatory conditions",
      "Underlying metabolic and blood pressure factors",
    ],
    symptoms: [
      "Increased drinking and urination",
      "Weight loss and reduced appetite",
      "Low energy and poor coat quality",
      "Vomiting, bad breath, or dehydration in later stages",
    ],
    supportiveCare: [
      "Seek veterinary diagnostics and staging",
      "Use prescribed kidney-support nutrition plans",
      "Support hydration and monitor intake",
      "Follow recheck blood and urine plans",
    ],
    prevention: [
      "Routine wellness labs for senior cats",
      "Fast response to appetite and hydration changes",
      "Avoid toxin exposure in the home",
      "Use structured long-term monitoring with your vet",
    ],
    commonMistakes: [
      "Assuming increased thirst is always normal aging",
      "Delaying bloodwork when weight drops",
      "Stopping renal support plans too early",
    ],
    whenToCallVet: [
      "Refusal to eat or drink",
      "Repeated vomiting or severe lethargy",
      "Sudden weakness or collapse signs",
      "Rapid decline in urination or hydration status",
    ],
    keyTakeaways: [
      "Kidney failure signs can be subtle in early stages.",
      "Early lab testing and staging improve treatment planning.",
      "Consistent follow-up can support comfort and quality of life.",
    ],
    faqs: [
      {
        question: "How can I tell if my cat may have kidney failure?",
        answer:
          "Common signs include increased thirst, frequent urination, appetite decline, and weight loss. Some cats also become less active and groom less. These changes can progress slowly, so they are easy to miss. A veterinary exam with blood and urine tests is needed for diagnosis.",
      },
      {
        question: "Is kidney failure in cats always fatal right away?",
        answer:
          "Not always. Outcomes depend on whether the issue is acute or chronic and how early treatment starts. Many cats can be managed for meaningful periods with proper veterinary care. Fast evaluation gives the best chance for stability. Delayed care reduces options.",
      },
      {
        question: "Can diet really help cats with kidney disease?",
        answer:
          "Yes, renal-focused nutrition is a key part of many care plans. Diet changes can support metabolic balance and reduce kidney workload in many cats. Plans should be customized by your veterinarian. Avoid random food changes without guidance.",
      },
      {
        question: "What should I monitor at home?",
        answer:
          "Track drinking, urination, appetite, body weight, energy, and vomiting pattern. These trends help your vet adjust treatment earlier. Keep notes weekly so changes are easy to compare. Monitoring improves care quality.",
      },
      {
        question: "When should kidney symptoms be treated as urgent?",
        answer:
          "Urgent signs include refusal to eat or drink, repeated vomiting, severe weakness, collapse, or sudden major behavior change. These can signal dangerous progression. Seek veterinary care quickly. Do not wait for spontaneous improvement.",
      },
      {
        question: "Can chronic kidney disease be managed long-term?",
        answer:
          "In many cats, yes, with regular veterinary follow-up and consistent home care. Management may include diet, hydration support, and staged monitoring. Progress varies by cat and disease severity. Early and steady care usually improves comfort.",
      },
    ],
  },
};

export function generateVetCityPageContent(citySlug: string): SEOPageData {
  // Edit city page wording here (great place to inject city-specific CMS data later).
  const slug = citySlug.toLowerCase().trim();
  const cityName = slugToWords(slug);
  const cityLower = cityName.toLowerCase();
  const keywordVariations = [
    `vets in ${cityLower}`,
    `best veterinary clinics in ${cityLower}`,
    `cheap veterinary doctor near ${cityLower}`,
    `24 hour vet in ${cityLower}`,
    `emergency vet in ${cityLower}`,
  ];

  const base: SEOPageData = {
    slug,
    title: `Best Vets in ${cityName}`,
    metaTitle: `Vets in ${cityName} | Best Veterinary Clinics & Pet Care`,
    metaDescription: `Find trusted vets in ${cityName}. Compare veterinary clinics, emergency options, pricing tips, and pet care services near you.`,
    h1: `Best Vets in ${cityName}`,
    intro: `Looking for trusted vets in ${cityName}? This local guide helps pet parents compare veterinary clinics, emergency care access, and everyday wellness services in one place.`,
    quickAnswer: {
      title: `Quick answer: finding a vet in ${cityName}`,
      answer:
        "Start with licensed clinics that have recent positive reviews, clear pricing, and emergency support. Call two to three clinics to compare wait time and care options.",
      bullets: [
        "Check credentials and latest reviews",
        "Compare exam fees and package pricing",
        "Confirm same-day and after-hours options",
      ],
    },
    bulletPoints: [
      "Compare local clinics by services and ratings",
      "Ask about preventive plans and vaccination bundles",
      "Save an emergency clinic contact before you need it",
    ],
    sections: [
      {
        title: `How to choose the right vet clinic in ${cityName}`,
        body: [
          "Use this section as a local SEO template. Replace these paragraphs later with real clinic records from CSV, JSON, CMS, or database sources.",
        ],
        bullets: [
          "Clinic license and veterinarian experience",
          "Distance, hours, and appointment availability",
          "Transparent pricing and payment options",
          "Diagnostics, dental, surgery, and preventive services",
        ],
      },
      {
        title: "Affordable care tips for pet parents",
        body: [
          "Many clinics offer wellness bundles and package pricing. Ask for complete quotes including follow-up visit costs.",
        ],
      },
      {
        title: "Emergency and urgent care planning",
        body: [
          "Keep one general clinic and one emergency clinic saved in your phone so you can act quickly during urgent situations.",
        ],
      },
    ],
    faqs: [
      {
        question: `How much does a vet visit cost in ${cityName}?`,
        answer:
          "Costs vary by clinic and service. Call local clinics for updated exam fees and package pricing.",
      },
      {
        question: `How do I find an affordable veterinarian in ${cityName}?`,
        answer:
          "Compare multiple clinics, ask about wellness plans, and check local rescue groups for low-cost recommendations.",
      },
      {
        question: "Should I choose a general clinic or emergency vet?",
        answer:
          "Use a general clinic for routine care. For severe symptoms or after-hours emergencies, choose an emergency veterinary hospital.",
      },
    ],
    keywordVariations,
    internalLinks: [
      { label: "Dog health guides", href: "/dogs" },
      { label: "Cat health guides", href: "/cats" },
      { label: "Pet health conditions", href: "/health-conditions" },
      { label: `Vets in ${cityName}`, href: `/vets/${slug}` },
    ],
    schemaType: "local-business",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.vets[slug]);
}

export function generateDogProbioticConditionContent(
  conditionSlug: string
): SEOPageData {
  // Edit dog probiotic condition wording here.
  const { slug, label, lowerLabel } = normalizeCondition(conditionSlug);
  const keywordVariations = [
    `probiotics for ${lowerLabel} in dogs`,
    ...buildConditionKeywordVariations(lowerLabel, "dogs"),
    `dog gut health support for ${lowerLabel}`,
  ];

  const base: SEOPageData = {
    slug,
    title: `${label} Support for Dogs`,
    metaTitle: `Dog Probiotics for ${label} | Gut Health Support Guide`,
    metaDescription: `Learn how probiotics may support dogs with ${lowerLabel}. Understand symptoms, care steps, and when to contact your veterinarian.`,
    h1: `${label} Support for Dogs`,
    intro: `This guide explains ${lowerLabel} in dogs in simple language. You will learn practical care steps, probiotic support options, and warning signs that need veterinary attention.`,
    quickAnswer: {
      title: `Quick answer: probiotics for dogs with ${lowerLabel}`,
      answer:
        "Probiotics can support gut balance and stool quality in many dogs. They work best with hydration, consistent feeding, and veterinary guidance.",
      bullets: [
        "Use dog-specific probiotic strains",
        "Track changes in stool and appetite",
        "Contact your vet for persistent symptoms",
      ],
    },
    bulletPoints: [
      "Simple symptom checklist for dog owners",
      "Beginner-friendly probiotic guidance",
      "Clear thresholds for when to call a vet",
    ],
    sections: buildCommonConditionSections(label, "dogs"),
    faqs: buildConditionFaqs(label, "dogs"),
    keywordVariations,
    internalLinks: buildDogConditionInternalLinks(slug),
    schemaType: "article",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.dogProbiotics[slug]);
}

export function generateCatHealthConditionContent(conditionSlug: string): SEOPageData {
  // Edit cat health condition wording here.
  const { slug, label, lowerLabel } = normalizeCondition(conditionSlug);
  const keywordVariations = [
    `cat health guide for ${lowerLabel}`,
    ...buildConditionKeywordVariations(lowerLabel, "cats"),
    `cat gut health support for ${lowerLabel}`,
  ];

  const base: SEOPageData = {
    slug,
    title: `${label} Support for Cats`,
    metaTitle: `Cat Health for ${label} | Gut and Wellness Guide`,
    metaDescription: `Understand ${lowerLabel} in cats with practical care guidance, symptom tracking tips, and cat-safe probiotic support information.`,
    h1: `${label} Support for Cats`,
    intro: `This cat health page explains ${lowerLabel} in a clear and practical way. Use it to understand symptoms, support gut health, and decide when to contact your vet.`,
    quickAnswer: {
      title: `Quick answer: cat health support for ${lowerLabel}`,
      answer:
        "Cats can benefit from calm feeding routines, hydration support, and vet-approved probiotics when digestive symptoms appear.",
      bullets: [
        "Keep diet changes gradual and predictable",
        "Monitor litter box patterns daily",
        "Use feline-safe probiotic products only",
      ],
    },
    bulletPoints: [
      "Cat-focused symptom and behavior signals",
      "Clear daily monitoring checklist",
      "Practical support before and after vet visits",
    ],
    sections: buildCommonConditionSections(label, "cats"),
    faqs: buildConditionFaqs(label, "cats"),
    keywordVariations,
    internalLinks: buildCatConditionInternalLinks(slug),
    schemaType: "article",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.catHealth[slug]);
}

export function generateHealthConditionContent(conditionSlug: string): SEOPageData {
  const { slug, label, lowerLabel } = normalizeCondition(conditionSlug);
  const profile = healthConditionProfiles[slug];

  const keywordVariations = profile
    ? [
        `${profile.slug.replace(/-/g, " ")} in dogs and cats`,
        `dog ${profile.slug.replace(/-/g, " ")}`,
        `cat ${profile.slug.replace(/-/g, " ")}`,
        ...buildConditionKeywordVariations(profile.slug.replace(/-/g, " "), "pets"),
      ]
    : [
        `pet health condition ${lowerLabel}`,
        ...buildConditionKeywordVariations(lowerLabel, "pets"),
        `${lowerLabel} in dogs and cats`,
      ];

  const defaultSections = buildCommonConditionSections(label, "dogs and cats");
  const sections = profile
    ? [
        {
          title: `What is ${profile.slug.replace(/-/g, " ")} in pets?`,
          body: [profile.intro],
        },
        {
          title: "Common causes",
          body: [
            "Most cases are multi-factor and can involve routine shifts, diet changes, environmental stress, or underlying health issues.",
          ],
          bullets: profile.causes,
        },
        {
          title: "Symptoms to watch",
          body: [
            "Early recognition helps you decide whether home support is reasonable or whether same-day veterinary evaluation is safer.",
          ],
          bullets: profile.symptoms,
        },
        {
          title: "When to see a vet",
          body: [
            "If symptoms are persistent, escalating, or affecting energy and appetite, veterinary review should not be delayed.",
          ],
          bullets: profile.whenToCallVet,
        },
        {
          title: "Supportive care options",
          body: [
            "Supportive steps can improve comfort while you monitor trend and follow veterinary guidance.",
          ],
          bullets: profile.supportiveCare,
        },
        {
          title: "Prevention tips",
          body: [
            "Prevention works best when small daily habits are consistent and adjusted early when signs begin to return.",
          ],
          bullets: profile.prevention,
        },
        {
          title: "Common mistakes",
          body: [
            "Many setbacks happen when early warning signs are minimized or too many variables are changed at the same time.",
          ],
          bullets: profile.commonMistakes,
        },
        {
          title: "When to call a vet",
          body: [
            "If these red flags appear, prioritize professional care over extended home experimentation.",
          ],
          bullets: profile.whenToCallVet,
        },
        {
          title: "Talk to a local vet",
          body: [
            "If you want in-person help, use local resources in Houston, Dallas, Austin, and Miami listed in related pages below.",
          ],
        },
      ]
    : defaultSections;

  const internalLinks = profile
    ? [
        { label: "Main health conditions hub", href: "/health-conditions" },
        ...(profile.relevantDogProbioticSlug
          ? [
              {
                label: `Dog ${profile.relevantDogProbioticSlug.replace(/-/g, " ")} support`,
                href: `/dogs/probiotics/${profile.relevantDogProbioticSlug}`,
              },
            ]
          : []),
        { label: "Probiotic dosage calculator", href: "/tools/probiotic-calculator" },
        { label: "Dog food calculator", href: "/tools/dog-food-calculator" },
        { label: "Talk to a vet in Houston", href: "/vets/houston-tx" },
        { label: "Talk to a vet in Dallas", href: "/vets/dallas-tx" },
        { label: "Talk to a vet in Austin", href: "/vets/austin-tx" },
        { label: "Talk to a vet in Miami", href: "/vets/miami-fl" },
        { label: "Contact Pawbiotics", href: "/contact" },
        { label: `This ${profile.slug.replace(/-/g, " ")} page`, href: `/health-conditions/${slug}` },
      ]
    : buildPetConditionInternalLinks(slug);

  const base: SEOPageData = {
    slug,
    title: profile?.label ?? `${label} in Dogs and Cats`,
    metaTitle: profile?.metaTitle ?? `${label} in Pets | Dog and Cat Health Guide`,
    metaDescription:
      profile?.metaDescription ??
      `Understand ${lowerLabel} in dogs and cats. Learn common signs, supportive care steps, and when to seek veterinary help.`,
    h1: profile?.label ?? `${label} in Dogs and Cats`,
    intro:
      profile?.intro ??
      `This health condition guide covers ${lowerLabel} in both dogs and cats. It gives practical steps for pet parents and clear advice on when to involve a veterinarian.`,
    quickAnswer: {
      title: profile ? profile.quickQuestion : `Quick answer: ${label} in pets`,
      answer:
        profile?.quickAnswer ??
        "Most cases improve with early monitoring and supportive care, but persistent or severe symptoms need veterinary evaluation.",
      bullets: [
        "Track symptoms and duration",
        "Use consistent feeding and hydration routines",
        "Escalate quickly when symptoms worsen",
      ],
    },
    bulletPoints:
      profile?.keyTakeaways ?? [
        "Shared signs across dogs and cats",
        "Simple first-step care guidance",
        "Clear escalation rules for urgent symptoms",
      ],
    sections,
    faqs: profile?.faqs ?? buildConditionFaqs(label, "dogs and cats"),
    keywordVariations,
    internalLinks,
    schemaType: "article",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.healthConditions[slug]);
}

// Backward-compatible wrappers used by existing routes/components.
export function buildConditionPageData(
  conditionSlug: string,
  topicType: TopicType
): SEOPageData {
  if (topicType === "dog-probiotics") {
    return generateDogProbioticConditionContent(conditionSlug);
  }
  if (topicType === "cat-health") {
    return generateCatHealthConditionContent(conditionSlug);
  }
  return generateHealthConditionContent(conditionSlug);
}

export function buildVetCityPageData(citySlug: string): SEOPageData {
  return generateVetCityPageContent(citySlug);
}

export const sampleCitySlugs = [
  "houston-tx",
  "dallas-tx",
  "austin-tx",
  "miami-fl",
  "phoenix-az",
];
export const sampleConditionSlugs = [
  "diarrhea",
  "gut-health",
  "immunity",
  "itchy-skin",
  "food-allergy",
  "bad-breath",
];

/**
 * Supported slug helpers for crawl safety.
 * These are used by dynamic route pages to return 404 for invalid slugs.
 */
const supportedCitySlugSet = new Set([
  ...sampleCitySlugs,
  ...Object.keys(programmaticContentOverrides.vets),
]);
const supportedDogConditionSlugSet = new Set([
  ...sampleConditionSlugs,
  ...Object.keys(programmaticContentOverrides.dogProbiotics),
]);
const supportedCatConditionSlugSet = new Set([
  ...sampleConditionSlugs,
  ...Object.keys(programmaticContentOverrides.catHealth),
]);
const supportedHealthConditionSlugSet = new Set([
  ...sampleConditionSlugs,
  ...Object.keys(healthConditionProfiles),
  ...Object.keys(programmaticContentOverrides.healthConditions),
]);

export function isSupportedCitySlug(slug: string): boolean {
  return supportedCitySlugSet.has(slug.toLowerCase().trim());
}

export function isSupportedDogConditionSlug(slug: string): boolean {
  return supportedDogConditionSlugSet.has(slug.toLowerCase().trim());
}

export function isSupportedCatConditionSlug(slug: string): boolean {
  return supportedCatConditionSlugSet.has(slug.toLowerCase().trim());
}

export function isSupportedHealthConditionSlug(slug: string): boolean {
  return supportedHealthConditionSlugSet.has(slug.toLowerCase().trim());
}

export function getSupportedCitySlugs(): string[] {
  return Array.from(supportedCitySlugSet);
}

export function getSupportedDogConditionSlugs(): string[] {
  return Array.from(supportedDogConditionSlugSet);
}

export function getSupportedCatConditionSlugs(): string[] {
  return Array.from(supportedCatConditionSlugSet);
}

export function getSupportedHealthConditionSlugs(): string[] {
  return Array.from(supportedHealthConditionSlugSet);
}
