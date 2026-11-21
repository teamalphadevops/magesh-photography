// ─────────────────────────────────────────────────────────────
//  SITE CONTENT — edit text here. Photos go in /public (see CONTENT-GUIDE.md)
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Magesh Photography",
  owner: "Magesh",
  tagline: "Stories told in light.",
  // Caption under the featured photo on the home page (photo = first image in /public/hero/)
  featuredLabel: "Baby shoot",
  // Years of experience — shown on the home page banner and About section
  experienceYears: 10,
  intro:
    "Wedding, candid, couple and baby photography & films — crafted with patience, honesty and an eye for the moments in between. Serving all over Chennai.",
  location: "All over Chennai",
  address: "Arani, Chennai",
  email: "magesh7410@gmail.com",
  phone: "7708181718",
  phoneDisplay: "+91 77081 81718",
  whatsapp: "917708181718",
  // Add your social links (leave "" to hide)
  instagram: "https://www.instagram.com/magesh_1992/",
  youtube: "",
  facebook: "",
};

export const about = {
  heading: "Hi, I'm Magesh.",
  paragraphs: [
    "I photograph people — their laughter, their nerves, the glance across the room nobody else noticed. Every wedding, every first smile of a newborn, every quiet walk of a couple is a story only told once.",
    "With more than 10 years behind the camera, my approach is still simple: blend in, observe, and capture what's real. You enjoy your day; I'll make sure you can relive it for a lifetime — in photographs and films that feel exactly like it did.",
  ],
};

export const services = [
  {
    title: "Wedding & Events",
    text: "Full-day coverage of weddings, receptions, engagements and family functions — every ritual, every emotion.",
  },
  {
    title: "Candid Photography",
    text: "Unposed, natural frames that capture real expressions and in-between moments as they happen.",
  },
  {
    title: "Candid Video",
    text: "Cinematic wedding films and highlight reels, edited with music to tell your story beautifully.",
  },
  {
    title: "Couple Shoot",
    text: "Pre-wedding, post-wedding and anniversary sessions at handpicked locations across Chennai.",
  },
  {
    title: "Baby Shoot",
    text: "Newborn, toddler and maternity sessions — gentle, safe and full of tiny details.",
  },
  {
    title: "Photography",
    text: "Portraits, family sessions, birthdays and corporate events with clean, professional results.",
  },
  {
    title: "Videography",
    text: "Event coverage, traditional videography and short films with crisp audio and smooth visuals.",
  },
];

export const process = [
  { title: "Say hello", text: "Call, WhatsApp or send the form. Tell us your date, venue and what you have in mind." },
  { title: "Plan together", text: "We discuss the schedule, must-have shots, locations and pick the right package." },
  { title: "The shoot", text: "We arrive early, stay unobtrusive and capture everything — so you can just enjoy." },
  { title: "Delivery", text: "Hand-edited photos, films and albums, delivered with care and on time." },
];

// Gallery categories → each maps to a folder in /public/gallery/<folder>
export const galleryCategories = [
  { label: "Wedding", folder: "wedding" },
  { label: "Baby", folder: "baby" },
  { label: "Candid", folder: "candid" },
  { label: "Couple", folder: "couple" },
  { label: "Events", folder: "events" },
];
