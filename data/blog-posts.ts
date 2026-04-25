import type { FAQItem } from "@/lib/seo";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogInternalLink = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Dogs" | "Cats" | "Gut Health" | "Health Conditions" | "Local Vets";
  publishedDate: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  faqs: FAQItem[];
  internalLinks: BlogInternalLink[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-a-vet-in-houston",
    title: "How to Choose a Vet in Houston",
    metaTitle: "How to Choose a Vet in Houston | Pawbiotics Blog",
    metaDescription:
      "Learn how to compare veterinary clinics in Houston with a simple checklist for quality, pricing, and emergency support.",
    category: "Local Vets",
    publishedDate: "2026-04-20",
    readingTime: "6 min read",
    intro:
      "Houston has many veterinary options, so it helps to compare clinics in a structured way. This guide gives you simple, practical steps to choose a trusted long-term vet.",
    sections: [
      {
        heading: "Start with the basics",
        paragraphs: [
          "Begin by shortlisting clinics near your home or work. Travel time matters more than most pet parents expect, especially during urgent situations.",
          "Look for consistent recent reviews and clear communication style when you call.",
        ],
        bullets: [
          "Confirm license and veterinarian availability",
          "Ask about routine exam and follow-up pricing",
          "Check same-day and after-hours emergency process",
        ],
      },
      {
        heading: "Compare full visit value, not just exam fee",
        paragraphs: [
          "A low exam fee can still lead to a costly visit if diagnostics and rechecks are unclear. Ask for complete pricing ranges before your first appointment.",
        ],
      },
      {
        heading: "Build an emergency plan now",
        paragraphs: [
          "Save one general clinic and one emergency hospital in your phone. This small step can reduce panic during high-stress moments.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I ask on my first call to a Houston vet?",
        answer:
          "Ask about appointment wait times, exam fees, emergency referrals, and how follow-up care is handled.",
      },
      {
        question: "Is the closest clinic always the best choice?",
        answer:
          "Not always. Choose a clinic that balances convenience, communication quality, and care capability.",
      },
    ],
    internalLinks: [
      { label: "Vets in Houston page", href: "/vets/houston-tx" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Cat health guides", href: "/cats" },
    ],
  },
  {
    slug: "do-dogs-need-probiotics",
    title: "Do Dogs Need Probiotics?",
    metaTitle: "Do Dogs Need Probiotics? A Beginner Guide | Pawbiotics Blog",
    metaDescription:
      "Understand when probiotics may help dogs, what signs to watch for, and how to use pet-safe products with vet guidance.",
    category: "Dogs",
    publishedDate: "2026-04-18",
    readingTime: "5 min read",
    intro:
      "Not every dog needs a daily probiotic, but many can benefit during digestive stress, after antibiotics, or with recurring stool issues. This guide explains when probiotics are useful.",
    sections: [
      {
        heading: "When probiotics can help",
        paragraphs: [
          "Probiotics may support gut balance, stool consistency, and immune function in many dogs.",
        ],
        bullets: [
          "Loose stool or sensitive digestion",
          "Recovery after antibiotics",
          "Stress-related digestive changes",
        ],
      },
      {
        heading: "How to choose a product safely",
        paragraphs: [
          "Pick dog-specific products with clearly listed strains and dosage instructions. Avoid generic supplements with unclear labels.",
        ],
      },
      {
        heading: "Track progress week by week",
        paragraphs: [
          "Look for appetite stability, improved stool, and reduced gas over 1 to 2 weeks. Contact your veterinarian if symptoms continue.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I give human probiotics to my dog?",
        answer:
          "It is better to use dog-specific products because strain selection and dosing are designed for canine needs.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Many dogs show digestive improvement within one to two weeks of consistent use.",
      },
    ],
    internalLinks: [
      { label: "Dog probiotics page", href: "/probiotics" },
      { label: "Dog diarrhea support", href: "/dogs/probiotics/diarrhea" },
      { label: "Pet health conditions", href: "/health-conditions" },
    ],
  },
  {
    slug: "cat-gut-health-guide",
    title: "Cat Gut Health Guide",
    metaTitle: "Cat Gut Health Guide for Pet Parents | Pawbiotics Blog",
    metaDescription:
      "A practical cat gut health guide covering signs of imbalance, daily care habits, and when to ask your vet for help.",
    category: "Cats",
    publishedDate: "2026-04-16",
    readingTime: "7 min read",
    intro:
      "Cats often hide discomfort, so early gut health signs can be easy to miss. This guide helps you track common digestive signals and build healthy daily routines.",
    sections: [
      {
        heading: "Common signs of gut imbalance in cats",
        paragraphs: [
          "Watch for changes in appetite, vomiting frequency, stool pattern, and litter box behavior.",
        ],
        bullets: [
          "Frequent hairball-like vomiting",
          "Soft stool or constipation cycles",
          "Reduced appetite or sudden pickiness",
        ],
      },
      {
        heading: "Daily habits that support feline digestion",
        paragraphs: [
          "Cats do best with stable feeding schedules, gradual diet transitions, and steady hydration support.",
        ],
      },
      {
        heading: "When to involve your veterinarian",
        paragraphs: [
          "If digestive symptoms persist beyond a couple of days or include weight loss, seek veterinary evaluation early.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do indoor cats also get gut issues?",
        answer:
          "Yes. Indoor cats can still have gut imbalance from stress, diet changes, medication, or food sensitivity.",
      },
      {
        question: "Can probiotics help cats with sensitive digestion?",
        answer:
          "Many cats benefit from feline-safe probiotics, especially when used consistently with veterinary guidance.",
      },
    ],
    internalLinks: [
      { label: "Cat health category", href: "/cats" },
      { label: "Cat gut health condition page", href: "/cats/health/gut-health" },
      { label: "General probiotics guide", href: "/probiotics" },
    ],
  },
  {
    slug: "dog-probiotics-for-diarrhea",
    title: "Dog Probiotics for Diarrhea",
    metaTitle: "Dog Probiotics for Diarrhea: What Helps | Pawbiotics Blog",
    metaDescription:
      "Learn practical steps for mild dog diarrhea and how probiotics may support recovery, plus warning signs that need urgent vet care.",
    category: "Gut Health",
    publishedDate: "2026-04-14",
    readingTime: "6 min read",
    intro:
      "Mild diarrhea in dogs can improve quickly with hydration, feeding consistency, and gut support. This post explains what to do first and when to escalate.",
    sections: [
      {
        heading: "First steps at home",
        paragraphs: [
          "Focus on hydration and simple feeding. Avoid sudden food changes while symptoms are active.",
        ],
        bullets: [
          "Offer fresh water frequently",
          "Track stool frequency and consistency",
          "Use dog-specific probiotics only",
        ],
      },
      {
        heading: "What probiotics can and cannot do",
        paragraphs: [
          "Probiotics can support gut balance, but they are not a replacement for urgent care when severe symptoms appear.",
        ],
      },
      {
        heading: "Red flags to treat as urgent",
        paragraphs: [
          "Seek prompt veterinary care for blood in stool, repeated vomiting, severe lethargy, or signs of dehydration.",
        ],
      },
    ],
    faqs: [
      {
        question: "How soon should dog diarrhea improve?",
        answer:
          "Mild cases often improve within 24 to 48 hours. If not, contact your veterinarian.",
      },
      {
        question: "Can stress cause diarrhea in dogs?",
        answer:
          "Yes. Stress can affect gut balance and trigger temporary stool changes in some dogs.",
      },
    ],
    internalLinks: [
      { label: "Dog diarrhea support page", href: "/dogs/probiotics/diarrhea" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Pet diarrhea guide", href: "/health-conditions/diarrhea" },
    ],
  },
  {
    slug: "pet-immunity-and-gut-health",
    title: "Pet Immunity and Gut Health",
    metaTitle: "Pet Immunity and Gut Health: What to Know | Pawbiotics Blog",
    metaDescription:
      "Discover how gut health supports immunity in dogs and cats, with simple habits that improve long-term wellness.",
    category: "Health Conditions",
    publishedDate: "2026-04-12",
    readingTime: "6 min read",
    intro:
      "A large part of immune function is connected to gut health. This guide explains how daily nutrition, digestion, and probiotics can support stronger resilience in pets.",
    sections: [
      {
        heading: "Why the gut-immune link matters",
        paragraphs: [
          "The gut microbiome helps regulate immune signals. When balance is off, pets may be more sensitive to inflammation and recurring issues.",
        ],
      },
      {
        heading: "Simple daily habits for stronger immunity",
        paragraphs: [
          "Long-term consistency matters more than short-term supplements. Focus on hydration, stable meals, and preventive veterinary care.",
        ],
        bullets: [
          "Keep meal timing and quality consistent",
          "Use species-appropriate probiotics when needed",
          "Follow your vet's vaccine and preventive schedule",
        ],
      },
      {
        heading: "When to seek medical review",
        paragraphs: [
          "If your pet has frequent infections, prolonged digestive symptoms, or low energy, ask your veterinarian for a full evaluation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do probiotics boost immunity directly?",
        answer:
          "They support gut balance, which can help overall immune function as part of a complete care plan.",
      },
      {
        question: "Can both dogs and cats follow the same immunity routine?",
        answer:
          "The core principles are similar, but products and dosing should always be species-specific.",
      },
    ],
    internalLinks: [
      { label: "Pet immunity guide", href: "/health-conditions/immunity" },
      { label: "Probiotics overview", href: "/probiotics" },
      { label: "Cat gut health support", href: "/cats/health/gut-health" },
    ],
  },
  {
    slug: "can-cats-eat-banana",
    title: "Can Cats Eat Banana?",
    metaTitle: "Can Cats Eat Banana? Safety, Amount, and Risks | Pawbiotics",
    metaDescription:
      "Can cats eat banana safely? Learn if banana is safe for cats, possible benefits, risks, and how much is okay in simple terms.",
    category: "Cats",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Some cats can nibble a tiny piece of banana, but many cats do not need fruit in their diet. This guide explains safety, portion size, and when to avoid it.",
    sections: [
      {
        heading: "Quick answer: can cats eat banana?",
        paragraphs: [
          "Yes, a very small amount can be safe for many healthy cats. Banana should be an occasional treat, not a meal replacement. If your cat has health issues, ask your vet first.",
        ],
      },
      {
        heading: "Is it safe?",
        paragraphs: [
          "A tiny bite is often tolerated, but every cat is different. Start very small and watch stool, appetite, and behavior.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Banana has fiber and potassium, but cats are obligate carnivores. Most nutrition should still come from complete cat food.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "Too much banana can upset digestion. Extra sugar from fruit is not ideal for regular feeding.",
        ],
        bullets: [
          "Soft stool or mild stomach upset",
          "Extra calories with little protein value",
          "Possible refusal of normal cat food",
        ],
      },
      {
        heading: "How much is safe?",
        paragraphs: [
          "Think pea-sized taste, not full slices. Offer rarely and only if your cat tolerates it well.",
        ],
      },
      {
        heading: "When to avoid",
        paragraphs: [
          "Avoid if your cat has diabetes, chronic digestive issues, or recent vomiting. Ask your veterinarian before introducing new treats.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can kittens eat banana?",
        answer:
          "It is better to avoid fruit treats in very young kittens unless your vet says otherwise. Kittens need balanced growth nutrition first. If you test any treat, use a tiny amount and monitor closely.",
      },
      {
        question: "What if my cat vomits after banana?",
        answer:
          "Stop giving banana right away and monitor your cat. If symptoms continue, contact your veterinarian. Keep notes on timing and amount to help your vet.",
      },
      {
        question: "Can I give banana every day?",
        answer:
          "Daily banana is not recommended for most cats. Use it only as an occasional tiny treat. A complete cat diet should remain the priority.",
      },
    ],
    internalLinks: [
      { label: "Cat health guides", href: "/cats" },
      { label: "Cat gut health page", href: "/cats/health/gut-health" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "can-dogs-eat-seaweed",
    title: "Can Dogs Eat Seaweed?",
    metaTitle: "Can Dogs Eat Seaweed? Safety, Risks, and Serving Tips | Pawbiotics",
    metaDescription:
      "Can dogs eat seaweed safely? Learn which types may be okay, possible risks, and how much is safe in simple language.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Seaweed can appear in some dog supplements and foods, but not all seaweed is safe. This guide explains what is okay and what to avoid.",
    sections: [
      {
        heading: "Quick answer: can dogs eat seaweed?",
        paragraphs: [
          "Some plain, pet-safe seaweed ingredients can be used in small amounts. Wild beach seaweed should be avoided. Always check product source and sodium level.",
        ],
      },
      {
        heading: "Is it safe?",
        paragraphs: [
          "Safety depends on type and source. Packaged pet-formulated products are safer than unknown raw seaweed from outdoors.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Seaweed may offer trace minerals in some diets. It should be a small part of intake, not a major food source.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "Salt, contamination, and unknown plant material are major concerns with non-pet seaweed sources.",
        ],
        bullets: [
          "High sodium exposure",
          "Digestive upset",
          "Contaminants in unregulated sources",
        ],
      },
      {
        heading: "How much is safe?",
        paragraphs: [
          "Use only label-guided portions from dog-safe products. Start low and watch response.",
        ],
      },
      {
        heading: "When to avoid",
        paragraphs: [
          "Avoid seaweed if your dog has thyroid concerns, salt-sensitive conditions, or ongoing GI symptoms unless your vet approves use.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can dogs eat seaweed from the beach?",
        answer:
          "No, beach seaweed is risky. It may contain salt, sand, toxins, or contaminants. Stick to controlled, dog-safe products if your vet agrees.",
      },
      {
        question: "Is dried seaweed snack safe for dogs?",
        answer:
          "Many human seaweed snacks are too salty or seasoned. That can upset your dog's stomach or increase sodium load. Use dog-specific options only.",
      },
      {
        question: "Can seaweed help dog digestion?",
        answer:
          "Some products may support diet variety, but seaweed is not a cure for digestive disease. If your dog has gut symptoms, see your vet and review a full plan.",
      },
    ],
    internalLinks: [
      { label: "Dog health guides", href: "/dogs" },
      { label: "Dog digestion support", href: "/dogs/probiotics/digestion" },
      { label: "Dog food calculator", href: "/tools/dog-food-calculator" },
    ],
  },
  {
    slug: "can-cats-have-coconut-oil",
    title: "Can Cats Have Coconut Oil?",
    metaTitle: "Can Cats Have Coconut Oil? Safety and Practical Use | Pawbiotics",
    metaDescription:
      "Can cats have coconut oil? Learn if it is safe, possible benefits, risks, and when to avoid it in simple language.",
    category: "Cats",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Some cat owners ask about coconut oil for skin, stool, or hairball support. This guide explains what is known, what can go wrong, and safer usage habits.",
    sections: [
      {
        heading: "Quick answer: can cats have coconut oil?",
        paragraphs: [
          "A tiny amount may be tolerated by some cats, but it is not essential for most cats. Too much can upset digestion.",
        ],
      },
      {
        heading: "Is it safe?",
        paragraphs: [
          "Small amounts may be tolerated, but not all cats respond well. Introduce only if your vet agrees and monitor closely.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Some owners use it for coat feel or mild stool lubrication. Evidence is limited, so use with caution.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "Coconut oil is high in fat. Too much can cause loose stool, vomiting, or unwanted calorie gain.",
        ],
      },
      {
        heading: "How much is safe?",
        paragraphs: [
          "Use only very small, occasional amounts if advised. Avoid daily use unless your veterinarian specifically recommends it.",
        ],
      },
      {
        heading: "When to avoid",
        paragraphs: [
          "Avoid in cats with pancreatitis history, chronic GI issues, or obesity risk unless your vet says otherwise.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can coconut oil help hairballs?",
        answer:
          "Some owners report mild help, but response varies. It is not a guaranteed solution. Grooming, hydration, and vet-guided hairball strategies are still important.",
      },
      {
        question: "Can I put coconut oil on my cat's skin?",
        answer:
          "Topical use may be tolerated by some cats, but many cats lick it off quickly. If skin symptoms continue, your vet should evaluate underlying causes like allergies or infection.",
      },
      {
        question: "What if my cat gets diarrhea after coconut oil?",
        answer:
          "Stop use immediately and monitor hydration and appetite. If symptoms continue, contact your veterinarian. Bring timing notes and amount used.",
      },
    ],
    internalLinks: [
      { label: "Cat health guides", href: "/cats" },
      { label: "Pet allergies guide", href: "/health-conditions/allergies" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "why-is-my-dog-coughing",
    title: "Why Is My Dog Coughing?",
    metaTitle: "Why Is My Dog Coughing? Causes, Signs, and What To Do",
    metaDescription:
      "Why is your dog coughing? Learn common causes, warning signs, and simple steps to help your dog safely.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "7 min read",
    intro:
      "Dog coughing can be mild or serious. This guide helps you understand likely causes, what signs to watch, and when to call your vet.",
    sections: [
      { heading: "Quick answer: why is my dog coughing?", paragraphs: ["Dogs may cough from throat irritation, infection, airway issues, or heart and lung concerns. If coughing keeps happening or your dog looks unwell, seek veterinary advice."] },
      { heading: "Common causes", paragraphs: ["Short cough episodes can come from irritation, but repeat cough may suggest a medical issue."], bullets: ["Airway irritation or inflammation", "Infectious cough patterns", "Environmental triggers", "Heart or lung disease signals"] },
      { heading: "Symptoms to watch", paragraphs: ["Pattern and associated signs matter more than one cough."], bullets: ["Cough frequency and sound changes", "Low energy or breathing changes", "Reduced appetite", "Nasal discharge or fever signs"] },
      { heading: "When serious", paragraphs: ["Trouble breathing, blue gums, weakness, or nonstop coughing are urgent signs."] },
      { heading: "What to do now", paragraphs: ["Keep your dog calm, avoid smoke or irritants, and record timing. Contact your vet if coughing continues."] },
      { heading: "Prevention and monitoring", paragraphs: ["Use routine preventive care and reduce known irritants at home."] },
    ],
    faqs: [
      { question: "Can kennel cough cause repeated cough at home?", answer: "Yes, some dogs keep coughing for days even with mild energy changes. The sound may seem dry or honking. Your vet can guide isolation, monitoring, and treatment steps." },
      { question: "Is one cough always a problem?", answer: "Not always. A single cough can happen with mild throat irritation. Repeated cough, breathing effort, or weakness is different and should be reviewed." },
      { question: "When should I go to emergency care?", answer: "Go urgently if breathing becomes hard, gums look pale or blue, or cough is constant with collapse signs. These can be high-risk patterns." },
    ],
    internalLinks: [
      { label: "Pet health conditions", href: "/health-conditions" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Contact Pawbiotics", href: "/contact" },
      { label: "Talk to Houston vets", href: "/vets/houston-tx" },
    ],
  },
  {
    slug: "why-is-my-cat-breathing-heavy",
    title: "Why Is My Cat Breathing Heavy?",
    metaTitle: "Why Is My Cat Breathing Heavy? Signs and Next Steps",
    metaDescription:
      "Learn why a cat may breathe heavily, what signs are urgent, and what to do next in simple language.",
    category: "Cats",
    publishedDate: "2026-04-26",
    readingTime: "7 min read",
    intro:
      "Heavy breathing in cats should be taken seriously. This guide explains common causes, warning signs, and safe first steps while seeking care.",
    sections: [
      { heading: "Quick answer: why is my cat breathing heavy?", paragraphs: ["Heavy breathing can come from stress, heat, pain, airway disease, or heart-lung problems. If breathing looks hard or fast at rest, contact a vet quickly."] },
      { heading: "Common causes", paragraphs: ["Not all causes are urgent, but breathing changes should never be ignored."], bullets: ["Heat stress or anxiety spikes", "Airway irritation or infection", "Pain or fever", "Heart or lung disease"] },
      { heading: "Symptoms to watch", paragraphs: ["Watch breathing effort at rest, not only during play."], bullets: ["Open-mouth breathing", "Fast breathing rate", "Weakness or hiding", "Blue/pale gums"] },
      { heading: "When serious", paragraphs: ["Open-mouth breathing, collapse, or gum color change needs emergency attention."] },
      { heading: "What to do", paragraphs: ["Keep your cat calm in a cool, quiet room. Do not delay professional evaluation if breathing stays heavy."] },
      { heading: "Aftercare and follow-up", paragraphs: ["Your vet may recommend monitoring logs, rechecks, and home-environment adjustments."] },
    ],
    faqs: [
      { question: "Is heavy breathing after play normal?", answer: "Brief faster breathing can happen after active play, but it should settle quickly. If heavy breathing continues at rest, call your veterinarian." },
      { question: "Can stress cause heavy breathing in cats?", answer: "Yes, stress can raise breathing rate. But because serious disease can look similar, persistent heavy breathing should be checked medically." },
      { question: "When should I treat this as an emergency?", answer: "Treat it as urgent if your cat breathes with open mouth, looks weak, collapses, or has gum color changes. Seek emergency care immediately." },
    ],
    internalLinks: [
      { label: "Cat health guides", href: "/cats" },
      { label: "Pet health conditions", href: "/health-conditions" },
      { label: "Local vet support", href: "/vets/houston-tx" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "dog-wont-stop-sneezing",
    title: "Dog Won't Stop Sneezing",
    metaTitle: "Dog Won't Stop Sneezing? Causes and What To Do Next",
    metaDescription:
      "If your dog won't stop sneezing, learn common causes, warning signs, and when to seek veterinary care.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Some sneezing is mild. But if your dog keeps sneezing for long periods, it may need medical review. This page gives simple next steps.",
    sections: [
      { heading: "Quick answer: dog won't stop sneezing", paragraphs: ["Repeated sneezing can come from dust, allergies, nasal irritation, or infection. If symptoms continue or your dog seems unwell, contact your veterinarian."] },
      { heading: "Common causes", paragraphs: ["Triggers can be environmental or medical."], bullets: ["Dust, pollen, strong scents", "Nasal irritation", "Upper airway infection", "Allergy inflammation"] },
      { heading: "Symptoms to watch", paragraphs: ["Add these signs to your tracking notes."], bullets: ["Nasal discharge", "Eye irritation", "Low appetite", "Nose bleeding"] },
      { heading: "When serious", paragraphs: ["Blood from nose, facial pain, or breathing effort should be treated urgently."] },
      { heading: "What to do at home", paragraphs: ["Reduce irritants, keep your dog calm, and monitor pattern. Seek care if no improvement."] },
    ],
    faqs: [
      { question: "Can allergies make dogs sneeze all day?", answer: "Yes, allergy patterns can trigger repeated sneezing. Track environment changes and discuss long-term control with your vet." },
      { question: "Is reverse sneezing the same as normal sneezing?", answer: "No. Reverse sneezing is a different breathing pattern. Your vet can help distinguish normal sneezing, reverse sneezing, and other airway signs." },
      { question: "When should I book a vet visit?", answer: "Book early if sneezing is constant, discharge appears, or your dog seems tired and uncomfortable." },
    ],
    internalLinks: [
      { label: "Allergies condition guide", href: "/health-conditions/allergies" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "hair-falling-out-dog",
    title: "Hair Falling Out Dog: What It Can Mean",
    metaTitle: "Hair Falling Out Dog? Common Causes and Next Steps",
    metaDescription:
      "Hair falling out in dogs can happen for many reasons. Learn common causes, warning signs, and what to do next.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "7 min read",
    intro:
      "Hair loss in dogs can be patchy or wide-spread. Some causes are mild, while others need treatment. This guide helps you assess what to do.",
    sections: [
      { heading: "Quick answer: hair falling out dog", paragraphs: ["Hair loss can come from allergies, parasites, infections, hormonal issues, or overgrooming. If patches spread or skin becomes red and sore, see your vet."] },
      { heading: "Common causes", paragraphs: ["Many cases need skin and history review."], bullets: ["Allergy irritation", "Fleas or mites", "Skin infection", "Hormonal imbalance"] },
      { heading: "Symptoms to watch", paragraphs: ["Look at skin quality, itch level, and spread speed."], bullets: ["Patchy or symmetrical hair loss", "Red skin or odor", "Excess scratching", "Scabs or thickened skin"] },
      { heading: "When serious", paragraphs: ["Open sores, infection smell, and rapid spread need quick veterinary care."] },
      { heading: "What to do", paragraphs: ["Do not self-medicate with human creams. Book vet care and track changes with photos and dates."] },
    ],
    faqs: [
      { question: "Can stress cause dog hair loss?", answer: "Stress can contribute in some dogs, but many medical causes are also possible. A vet check helps avoid missing treatable conditions." },
      { question: "Should I change food immediately?", answer: "Do not make frequent random diet switches. Structured food trials should be vet-guided to avoid confusion." },
      { question: "When is skin hair loss urgent?", answer: "Urgent signs include bleeding skin, severe pain, rapid spread, and strong odor. Seek care quickly." },
    ],
    internalLinks: [
      { label: "Itchy skin condition guide", href: "/health-conditions/itchy-skin" },
      { label: "Allergies condition guide", href: "/health-conditions/allergies" },
      { label: "Local vet help", href: "/vets/houston-tx" },
    ],
  },
  {
    slug: "dog-losing-hair",
    title: "Dog Losing Hair: Causes and What To Do",
    metaTitle: "Dog Losing Hair? Signs, Causes, and Vet Guidance",
    metaDescription:
      "If your dog is losing hair, learn likely causes, when to worry, and how to support skin health safely.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "7 min read",
    intro:
      "Dog losing hair can look mild at first, then worsen quickly. This guide helps you understand pattern, triggers, and when to get veterinary support.",
    sections: [
      { heading: "Quick answer: dog losing hair", paragraphs: ["Common causes include allergy flares, parasites, infection, and hormonal imbalance. Persistent hair loss should be evaluated by a veterinarian."] },
      { heading: "Common causes", paragraphs: ["Hair loss is a symptom, not one diagnosis."], bullets: ["Seasonal and environmental allergies", "Parasites and flea reactions", "Skin infections", "Endocrine and metabolic causes"] },
      { heading: "Symptoms to watch", paragraphs: ["Use photos to compare changes weekly."], bullets: ["Patch shape and spread", "Itch intensity", "Skin redness, flakes, or odor", "Energy or appetite changes"] },
      { heading: "When serious", paragraphs: ["If skin is painful, bleeding, or infected, get same-day care."] },
      { heading: "What to do now", paragraphs: ["Avoid harsh shampoos and unverified home remedies. Schedule a vet exam and bring a timeline of changes."] },
    ],
    faqs: [
      { question: "Is shedding the same as hair loss?", answer: "Not always. Normal shedding is more even and seasonal. Patchy bald spots or inflamed skin are different and need evaluation." },
      { question: "Can parasites cause sudden hair loss?", answer: "Yes. Fleas and mites can trigger intense itch and fast coat damage in some dogs. Parasite control is important." },
      { question: "How fast should I seek help?", answer: "Seek help early if symptoms persist or worsen over days, especially with redness, odor, or discomfort." },
    ],
    internalLinks: [
      { label: "Itchy skin condition guide", href: "/health-conditions/itchy-skin" },
      { label: "Dog food calculator", href: "/tools/dog-food-calculator" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "can-dogs-lose-their-voice",
    title: "Can Dogs Lose Their Voice?",
    metaTitle: "Can Dogs Lose Their Voice? Causes and Care Tips",
    metaDescription:
      "Can dogs lose their voice? Learn common reasons for hoarse barking, warning signs, and when veterinary care is needed.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Yes, dogs can lose their voice or sound hoarse. It can happen after heavy barking, throat irritation, or illness. This page explains when to monitor and when to call a vet.",
    sections: [
      { heading: "Quick answer: can dogs lose their voice?", paragraphs: ["Yes. Temporary hoarseness can happen after overuse, but persistent voice change may signal throat or airway issues that need medical review."] },
      { heading: "Common causes", paragraphs: ["Voice change has many possible triggers."], bullets: ["Heavy barking", "Throat irritation", "Respiratory infection", "Airway inflammation"] },
      { heading: "Symptoms to watch", paragraphs: ["Notice sound quality and breathing effort."], bullets: ["Hoarse or weak bark", "Dry cough", "Swallowing discomfort", "Breathing noise"] },
      { heading: "When serious", paragraphs: ["Breathing difficulty, severe cough, or persistent voice loss should be checked quickly."] },
      { heading: "What to do", paragraphs: ["Reduce barking triggers, keep hydration steady, and contact your vet if symptoms continue."] },
    ],
    faqs: [
      { question: "Can barking too much cause hoarseness?", answer: "Yes. Overuse can irritate the larynx and temporarily change voice. If it does not improve, medical review is needed." },
      { question: "How long should voice loss last?", answer: "Mild voice strain may improve in a day or two. Longer duration or added symptoms should be evaluated by your veterinarian." },
      { question: "When should I seek urgent care?", answer: "Urgent care is needed if breathing is hard, cough is severe, or your dog seems weak and distressed." },
    ],
    internalLinks: [
      { label: "Why is my dog coughing?", href: "/blog/why-is-my-dog-coughing" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Local vet support", href: "/vets/houston-tx" },
    ],
  },
  {
    slug: "when-do-cats-reach-full-size",
    title: "When Do Cats Reach Full Size?",
    metaTitle: "When Do Cats Reach Full Size? Growth Timeline Guide",
    metaDescription:
      "Learn when cats reach full size, what affects growth speed, and how to support healthy development.",
    category: "Cats",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Most cats reach near full size by around 12 months, but growth can continue longer in some breeds. This guide explains simple growth expectations.",
    sections: [
      { heading: "Quick answer: when do cats reach full size?", paragraphs: ["Many cats are close to adult size by 12 months. Some larger breeds continue filling out until 18 to 24 months."] },
      { heading: "Typical growth timeline", paragraphs: ["Growth speed changes by age stage."], bullets: ["Fast growth in first months", "Steadier growth in mid-kitten stage", "Final fill-out in young adult stage"] },
      { heading: "What affects cat growth?", paragraphs: ["Breed, nutrition, health history, and activity all play a role."] },
      { heading: "How to support healthy growth", paragraphs: ["Feed complete kitten nutrition, use regular vet checks, and track weight trend month by month."] },
      { heading: "When to ask a vet", paragraphs: ["If growth seems delayed, very rapid, or linked with low appetite and low energy, consult your veterinarian."] },
    ],
    faqs: [
      { question: "Do male cats grow longer than female cats?", answer: "Often males are larger on average, but individual variation is normal. Breed and nutrition matter more than sex alone." },
      { question: "Can indoor cats grow differently?", answer: "Indoor cats can still grow normally. Activity level and diet quality should be managed carefully." },
      { question: "When should I stop kitten food?", answer: "Many cats transition around one year, but timing can differ by breed and health status. Ask your vet for the best plan." },
    ],
    internalLinks: [
      { label: "What age does a cat stop growing?", href: "/blog/what-age-does-a-cat-stop-growing" },
      { label: "Cat health guides", href: "/cats" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "what-age-does-a-cat-stop-growing",
    title: "What Age Does a Cat Stop Growing?",
    metaTitle: "What Age Does a Cat Stop Growing? Simple Growth Guide",
    metaDescription:
      "Discover what age cats stop growing, how breed affects growth, and when to discuss growth concerns with your vet.",
    category: "Cats",
    publishedDate: "2026-04-26",
    readingTime: "6 min read",
    intro:
      "Cats usually slow major growth by about one year, but complete maturity may take longer. This page explains easy growth milestones for pet parents.",
    sections: [
      { heading: "Quick answer: what age does a cat stop growing?", paragraphs: ["Many cats stop rapid growth around 10 to 12 months. Larger breeds may continue growth and body fill longer."] },
      { heading: "Growth stages by age", paragraphs: ["Use stages to understand normal range."], bullets: ["0-6 months: rapid change", "6-12 months: steady growth", "12+ months: maturity phase"] },
      { heading: "Breed differences", paragraphs: ["Larger or slower-maturing breeds may continue developing after one year."] },
      { heading: "Nutrition and growth quality", paragraphs: ["Balanced kitten food and routine vet checks support strong development."] },
      { heading: "When growth needs review", paragraphs: ["If your cat appears underdeveloped, overweight too quickly, or unwell, ask your vet for a growth assessment."] },
    ],
    faqs: [
      { question: "Can cats still gain weight after they stop growing?", answer: "Yes. Weight can increase after growth ends, especially with inactivity or high-calorie feeding." },
      { question: "Does neutering change growth timing?", answer: "Neutering can influence metabolism and body composition. Routine weight tracking is helpful after neutering." },
      { question: "How often should I track my cat's weight?", answer: "Monthly checks are useful during growth and transition phases. Regular tracking catches trends early." },
    ],
    internalLinks: [
      { label: "When do cats reach full size?", href: "/blog/when-do-cats-reach-full-size" },
      { label: "Cat health guides", href: "/cats" },
      { label: "Local vet support", href: "/vets/houston-tx" },
    ],
  },
  {
    slug: "how-many-weeks-are-cats-pregnant",
    title: "How Many Weeks Are Cats Pregnant?",
    metaTitle: "How Many Weeks Are Cats Pregnant? Timeline and Care",
    metaDescription:
      "Learn how many weeks cats are pregnant, what to expect by stage, and when to involve your veterinarian.",
    category: "Cats",
    publishedDate: "2026-04-26",
    readingTime: "7 min read",
    intro:
      "Cat pregnancy usually lasts around 9 weeks. This guide explains each stage and simple care points for safety and planning.",
    sections: [
      { heading: "Quick answer: how many weeks are cats pregnant?", paragraphs: ["Most cat pregnancies last about 63 to 65 days, roughly 9 weeks. Timing can vary slightly by individual cat."] },
      { heading: "Pregnancy timeline by stage", paragraphs: ["Each stage has different care needs."], bullets: ["Early stage: appetite and behavior changes", "Mid stage: visible body changes", "Late stage: nesting behavior and close monitoring"] },
      { heading: "Signs your cat may be pregnant", paragraphs: ["Nipple changes, appetite shifts, weight gain, and behavior changes can appear."] },
      { heading: "Care during pregnancy", paragraphs: ["Use vet-guided nutrition, low-stress environment, and scheduled checkups."] },
      { heading: "When to call a vet", paragraphs: ["Call quickly for discharge concerns, severe lethargy, appetite refusal, or labor complications."] },
    ],
    faqs: [
      { question: "Can cat pregnancy be shorter than 9 weeks?", answer: "Some variation happens, but major early delivery concerns should be reviewed by a veterinarian." },
      { question: "How do I prepare for birth?", answer: "Prepare a quiet nesting area, keep supplies ready, and have your vet contact available ahead of time." },
      { question: "Should I change food during pregnancy?", answer: "Diet support is important and should be discussed with your vet to ensure safe energy and nutrient intake." },
    ],
    internalLinks: [
      { label: "Cat health guides", href: "/cats" },
      { label: "Talk to local vets", href: "/vets/houston-tx" },
      { label: "Contact Pawbiotics", href: "/contact" },
    ],
  },
  {
    slug: "how-long-do-goldendoodles-live",
    title: "How Long Do Goldendoodles Live?",
    metaTitle: "How Long Do Goldendoodles Live? Lifespan and Care Tips",
    metaDescription:
      "Learn average Goldendoodle lifespan, what affects longevity, and daily habits that support long-term health.",
    category: "Dogs",
    publishedDate: "2026-04-26",
    readingTime: "7 min read",
    intro:
      "Goldendoodle lifespan can vary by size, genetics, and care routine. This guide explains average ranges and practical habits that support longer healthy years.",
    sections: [
      { heading: "Quick answer: how long do Goldendoodles live?", paragraphs: ["Many Goldendoodles live around 10 to 15 years, with variation by size and health history."] },
      { heading: "What affects lifespan?", paragraphs: ["No single factor decides lifespan."], bullets: ["Genetics and breeding quality", "Body weight and fitness", "Preventive veterinary care", "Nutrition and gut health routine"] },
      { heading: "Size and lifespan pattern", paragraphs: ["Smaller doodle lines often live longer than larger lines on average."] },
      { heading: "Daily habits that help", paragraphs: ["Consistent exercise, healthy weight, dental care, and regular checkups all matter."] },
      { heading: "When to ask your vet", paragraphs: ["Ask your vet early about breed-related risks and preventive screening plans by age stage."] },
    ],
    faqs: [
      { question: "Do mini Goldendoodles live longer?", answer: "On average, smaller dogs can have longer lifespans. Individual health and care quality still matter most." },
      { question: "Can weight shorten lifespan?", answer: "Yes. Chronic excess weight can increase risk for joint, heart, and metabolic problems over time." },
      { question: "What is the best prevention plan?", answer: "Use regular vet visits, dental care, exercise, balanced diet, and routine monitoring from early adulthood onward." },
    ],
    internalLinks: [
      { label: "Dog food calculator", href: "/tools/dog-food-calculator" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Local vet support", href: "/vets/houston-tx" },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.toLowerCase().trim();
  return blogPosts.find((post) => post.slug === normalized);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
