import type { SiteContent } from "./types";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Kitty%27s+Car+Wash+10934+Lem+Turner+Rd+Jacksonville+FL+32218";

export const site: SiteContent = {
  name: "Kitty's Car Wash",
  tagline: "Hand Car Wash & Auto Detailing on Lem Turner Road",
  description:
    "Kitty's Car Wash is a hand car wash and auto detailing shop at 10934 Lem Turner Rd in Northside Jacksonville, FL. Pull up for exterior hand washes, wax and shine, tire shine, vacuuming, and thorough interior and full vehicle detailing for cars, trucks, and SUVs. Call (904) 300-1656.",
  opened: "",

  address: {
    street: "10934 Lem Turner Rd",
    suite: "",
    neighborhood: "Northside",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32218",
    country: "US",
    full: "10934 Lem Turner Rd, Jacksonville, FL 32218",
  },
  locationHint: "On Lem Turner Road in Northside Jacksonville — pull right up to the wash bay.",

  geo: {
    latitude: 30.434611,
    longitude: -81.6963205,
  },
  mapUrl: MAP_URL,

  phone: {
    display: "(904) 300-1656",
    tel: "tel:+19043001656",
    e164: "+19043001656",
  },

  closedNotice:
    "We're closed right now. Open Tue–Wed 10 AM–4 PM, Thu 9:30 AM–5 PM, Fri–Sat 9:30 AM–6 PM, and Sun 10 AM–4 PM. Closed Mondays.",

  hours: {
    timezone: "America/New_York",
    summary: "Tue–Wed 10 AM–4 PM · Thu 9:30 AM–5 PM · Fri–Sat 9:30 AM–6 PM · Sun 10 AM–4 PM · Closed Mon",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: null, closeTime: null, closed: true },
      tue: { openTime: "10:00", closeTime: "16:00" },
      wed: { openTime: "10:00", closeTime: "16:00" },
      thu: { openTime: "09:30", closeTime: "17:00" },
      fri: { openTime: "09:30", closeTime: "18:00" },
      sat: { openTime: "09:30", closeTime: "18:00" },
      sun: { openTime: "10:00", closeTime: "16:00" },
    },
  },

  priceRange: "",
  paymentNote: "",

  orderingLinks: [],

  socials: [],

  rating: {
    value: 5.0,
    count: 137,
    source: "Google",
    sourceUrl: MAP_URL,
  },

  testimonials: [
    {
      quote:
        "I've been coming to this car wash now for over a year and have never left disappointed. They do an amazing job cleaning my vehicle, they take pride in their work, they don't cut corners, everyone is friendly and polite, customer service is 💯 and the prices are incredibly reasonable.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote:
        "Had a great experience at this location! It was my first time ever using them, and the staff made the whole process easy, comfortable, and stress-free. They were friendly, professional, and took the time to explain everything. I definitely recommend this place if you're looking for a smooth and hassle-free experience.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "Great customer service and cleaning and my car smelled so good!",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "My experience was good they are very friendly easy going and job well done.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "Very excellent service and prices!!",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
  ],

  faq: [
    {
      question: "Where is Kitty's Car Wash located?",
      answer: "We are located at 10934 Lem Turner Rd, Jacksonville, FL 32218 on the Northside.",
    },
    {
      question: "What are your hours of operation?",
      answer:
        "We are open Tuesday & Wednesday 10:00 AM–4:00 PM, Thursday 9:30 AM–5:00 PM, Friday & Saturday 9:30 AM–6:00 PM, and Sunday 10:00 AM–4:00 PM. Closed Mondays.",
    },
    {
      question: "Do you wash trucks and SUVs as well as sedans?",
      answer:
        "Yes! We hand wash and detail sedans, coupes, SUVs, pickups, and trucks. Call (904) 300-1656 or pull up to the bay for vehicle pricing.",
    },
    {
      question: "Do I need an appointment or can I pull right up?",
      answer:
        "You can pull right up during open hours or give us a call at (904) 300-1656 to check current bay availability and detail options.",
    },
  ],

  menuNote: "Pricing depends on vehicle size and condition. Call (904) 300-1656 or pull up to the wash bay for a quote.",

  menu: [
    {
      id: "hand-wash-exterior",
      name: "Hand Wash & Exterior",
      description:
        "Careful hand washing that never cuts corners — safe for daily drivers, trucks, and weekend rides.",
      items: [
        {
          id: "exterior-hand-wash",
          signature: true,
          badge: "Local Favorite",
          name: "Exterior Hand Wash",
          description: "Suds bath by hand, gentle mitt wash, wheel & rim cleaning, spot-free rinse, and hand towel dry.",
          includes: ["Rich foam hand wash", "Wheel & rim scrub", "Spot-free rinse & microfiber dry"],
        },
        {
          id: "wash-and-tire-shine",
          signature: true,
          name: "Hand Wash & Tire Shine",
          description: "Complete exterior hand wash plus deep gloss tire dressing and exterior glass wipe-down.",
          includes: ["Exterior hand wash", "Tire & rim dressing", "Streak-free exterior windows"],
        },
        {
          id: "truck-suv-hand-wash",
          name: "Truck & SUV Hand Wash",
          description: "Full exterior hand wash tailored for pickups, full-size SUVs, and lifted trucks.",
          includes: ["High-clearance hand wash", "Wheel wells & running boards", "Hand dry & tire shine"],
        },
        {
          id: "wax-and-shine",
          name: "Hand Wax & Paint Shine",
          description: "Protective wax application for deep mirror gloss and water-beading protection.",
          includes: ["Exterior hand wash prep", "Hand wax coat", "Glossy microfiber buff"],
        },
      ],
    },
    {
      id: "interior-full-detail",
      name: "Interior & Full Detailing",
      description:
        "Thorough inside-and-out vehicle detailing that leaves your cabin fresh, spotless, and smelling great.",
      items: [
        {
          id: "inside-and-out-combo",
          signature: true,
          badge: "Most Popular",
          name: "Inside & Out Wash + Vacuum",
          description: "Exterior hand wash paired with interior vacuuming, dash & console wipe-down, and interior glass.",
          includes: ["Full exterior hand wash & dry", "Carpet & seat vacuum", "Dash, doors & console wipe-down", "Fresh cabin scent"],
        },
        {
          id: "interior-detail",
          name: "Deep Interior Detail",
          description: "Thorough cabin cleaning for seats, carpets, mats, vents, cupholders, door jambs, and trim.",
          includes: ["Deep vacuum & crevice detail", "Upholstery & mat care", "Trim, dash & panel conditioning", "Inside & out glass"],
        },
        {
          id: "full-vehicle-detail",
          signature: true,
          badge: "Showroom Shine",
          name: "Full Vehicle Detail",
          description: "Complete bumper-to-bumper hand wash, wax protection, and deep interior detailing.",
          includes: ["Hand wash, wax & tire shine", "Deep interior detail & vacuum", "Door jambs, rims & trim dressed", "Signature fresh scent"],
        },
      ],
    },
    {
      id: "finishing-touches",
      name: "Add-Ons & Finishing",
      description: "Extra care for tires, trim, carpets, and cabin freshness.",
      items: [
        {
          id: "vacuum-service",
          name: "Interior Vacuum & Wipe-Down",
          description: "Thorough vacuum of floors, seats, and trunk plus dashboard and console wipe-down.",
        },
        {
          id: "tire-rim-shine",
          name: "Tire & Rim Shine",
          description: "Brake-dust scrub on rims and deep-gloss tire shine dressing.",
        },
        {
          id: "cabin-fresh-scent",
          name: "Cabin Freshener & Deodorizing",
          description: "Leaves your car interior smelling clean and fresh.",
        },
      ],
    },
  ],

  photos: [],

  palette: {
    ink: "#0B192C",
    brand: "#0077B6",
    brandDeep: "#023E8A",
    accent: "#00B4D8",
    mustard: "#FFD100",
    cream: "#F0F9FF",
    paper: "#FFFFFF",
  },

  about: {
    heading: "Real Hand Car Wash & Detailing on Lem Turner",
    paragraphs: [
      "Located at 10934 Lem Turner Rd on Jacksonville's Northside, Kitty's Car Wash is a neighborhood hand wash and detailing spot where the crew takes real pride in every vehicle that pulls into the bay.",
      "Instead of rushing your ride through harsh automated tracks that miss the corners, our team washes by hand, scrubs the wheels, vacuums thoroughly, and details your interior until your vehicle looks and smells brand new.",
      "Pull up during open hours for a smooth, friendly, hassle-free wash or give us a call at (904) 300-1656.",
    ],
  },

  heroKicker: "Lem Turner Rd · Northside Jacksonville",

  servesCuisine: [
    "Hand Wash",
    "Wax & Shine",
    "Interior Detail",
    "Tire Shine",
    "Vacuum",
    "Full Detail",
    "Spot-Free Rinse",
    "Lem Turner Local Favorite",
  ],

  seo: {
    title: "Kitty's Car Wash | Hand Car Wash & Auto Detailing on Lem Turner Rd, Jacksonville, FL",
    description:
      "Hand car wash, wax & shine, tire shine, vacuum, and full auto detailing at 10934 Lem Turner Rd in Northside Jacksonville, FL. 5.0★ on Google. Call (904) 300-1656.",
  },

  footerCredit: "Built by nicklopacki.com",
};
