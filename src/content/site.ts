import type { SiteContent } from "./types";

const MAP_URL = "https://maps.google.com/?cid=12265392396310715910";
const FACEBOOK_URL = "https://www.facebook.com/KittysCarWash";

export const site: SiteContent = {
  name: "Kitty's Car Wash",
  tagline: "We go beyond the surface",
  description:
    "Kitty's Car Wash is a family-run, woman-owned hand car wash and auto detailing shop at 10934 Lem Turner Rd on Jacksonville's Northside. Pull up for exterior hand washes, inside-and-out cleaning, hand wax and buff, upholstery and carpet shampooing, and full interior detailing with seat removal, while you relax in our air-conditioned waiting lobby. Open Tuesday–Sunday. Call (904) 300-1656 or (904) 800-9496.",
  opened: "2021",

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
  locationHint:
    "On Lem Turner Road on Jacksonville's Northside (about 5 miles from JAX Airport), with shaded carport wash bays and an air-conditioned inside waiting lobby.",

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
    "We're closed right now. We're open Tuesday–Wednesday 10 AM–4 PM, Thursday 9:30 AM–5 PM, Friday–Saturday 9:30 AM–6 PM, and Sunday 10 AM–4 PM. Closed Mondays.",

  hours: {
    timezone: "America/New_York",
    summary: "Tue–Wed & Sun 10 AM–4 PM · Thu 9:30 AM–5 PM · Fri–Sat 9:30 AM–6 PM · Closed Mon",
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

  priceRange: "$$",
  paymentNote: "Cash, cards, Cash App & Zelle",

  orderingLinks: [
    { label: "Call (904) 300-1656", href: "tel:+19043001656", kind: "phone" },
    { label: "Detail Line (904) 800-9496", href: "tel:+19048009496", kind: "phone" },
  ],

  socials: [
    { label: "Facebook", href: FACEBOOK_URL },
  ],

  rating: {
    value: 5.0,
    count: 137,
    source: "Google",
    sourceUrl: MAP_URL,
  },
  extraRatings: [
    {
      value: 5.0,
      count: 5,
      source: "Facebook",
      sourceUrl: `${FACEBOOK_URL}/reviews`,
    },
  ],

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
        "I dropped off a rental for a quick wash before returning it and I couldn't believe the level of detail that was put in cleaning the car. The guy who did the wash didn't leave a speck of dust or sand. I wasn't expecting that level of service for their prices. This will be the only car wash I go to when i'm in town",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote:
        "Had a great experience at this location! It was my first time ever using them, and the staff made the whole process easy, comfortable, and stress-free. They were friendly, professional, and took the time to explain everything.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote:
        "Just had my truck washed and cleaned inside and out. It is GLEAMING! I may never wash it again myself! Great courteous service. Will definitely be back",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote:
        "Even with 2 cars ahead of me, I got in and out pretty quickly. The staff was very professional and corrected anything I didnt like. I always come here to have both my trucks washed.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote:
        "I’ve been going to the same car wash for years. I came by and let Kitty’s clean my car. When I say my car was immaculate!! I’ve moved and I drive over 25 minutes so they can clean my car.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "The service was quick. Awesome job on both the interior and exterior. Loved the work. Great price.",
      rating: 5,
      sourceLabel: "Google",
      sourceUrl: MAP_URL,
    },
    {
      quote: "Wonderful customer service and excellent work",
      sourceLabel: "Facebook",
      sourceUrl: `${FACEBOOK_URL}/reviews`,
    },
  ],

  faq: [
    {
      question: "What are your hours?",
      answer:
        "Our listed Google hours are Tuesday and Wednesday 10 AM–4 PM, Thursday 9:30 AM–5 PM, Friday and Saturday 9:30 AM–6 PM, and Sunday 10 AM–4 PM (closed Mondays). Weather can affect outdoor wash hours, so give us a quick call at (904) 300-1656 before heading over.",
    },
    {
      question: "Do I need an appointment, or can I drive right up?",
      answer:
        "Drive-ups are welcome for hand washes and standard details—just pull into the lot at 10934 Lem Turner Rd. For a Deluxe Interior Detail or a Full Interior Detail with Seat Removal, call (904) 800-9496 or (904) 300-1656 to check availability and get a quote for your vehicle.",
    },
    {
      question: "Is there somewhere comfortable to wait while my car is cleaned?",
      answer:
        "Yes. We have an air-conditioned inside waiting lobby with seating, a TV, complimentary water, and snacks available for purchase while our team works on your vehicle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit and debit cards, Cash App ($kittyscarwash), and Zelle (Kittyscarwash@gmail.com).",
    },
    {
      question: "Do you wash trucks, large SUVs, and rental or Turo vehicles?",
      answer:
        "Yes. We hand-wash and detail everything from compact cars to midsize SUVs, full-size pickups, vans, and heavy-duty 2500/3500 trucks. We're also about 5 miles from JAX Airport and regularly handle quick turnarounds for rental cars, rideshare drivers, and Turo hosts.",
    },
  ],

  menuNote:
    "Prices shown are from our posted boards and may vary depending on vehicle size and condition. Call (904) 300-1656 or (904) 800-9496 for a quote on your vehicle.",

  menu: [
    {
      id: "wash-packages",
      name: "Hand Wash Packages",
      description: "100% hand car wash under shaded bays—gentle on paint, thorough on wheels, glass, and trim.",
      items: [
        {
          id: "outside-hand-wash",
          name: "Outside Hand Wash",
          description:
            "Exterior hand wash and dry, wheels and tires cleaned, and exterior windows. Heavy-duty 2500/3500 trucks start at $40 and up.",
          includes: ["Exterior hand wash & towel dry", "Wheels & tires cleaned", "Streak-free exterior glass"],
          sizes: [
            { label: "Cars (Compact)", price: 15 },
            { label: "Small SUV / Midsize", price: 20 },
            { label: "Large SUV / Pickup", price: 30 },
            { label: "Large Truck (2500+)", price: 40, priceFrom: true },
          ],
        },
        {
          id: "inside-and-out-wash",
          signature: true,
          badge: "Lot Favorite",
          name: "Inside & Out Basic Cleaning",
          description:
            "Exterior hand wash and dry plus interior vacuum, dash and console wipe-down, and inside & outside windows. Heavy-duty 2500/3500 trucks start at $50 and up.",
          includes: [
            "Exterior hand wash & dry",
            "Interior carpet & seat vacuum",
            "Dash & console wipe-down",
            "Inside & outside windows",
          ],
          sizes: [
            { label: "Cars (Compact)", price: 25 },
            { label: "Small SUV / Midsize", price: 30 },
            { label: "Large SUV / Pickup", price: 40 },
            { label: "Large Truck (2500+)", price: 50, priceFrom: true },
          ],
        },
        {
          id: "basic-standard-detail",
          signature: true,
          badge: "Most Popular",
          name: "Basic Standard Detail",
          description:
            "Complete inside-and-out hand wash and detail hitting the door jambs, cracks, and crevices other washes miss.",
          includes: [
            "Exterior hand wash & dry",
            "Bug & debris removal",
            "Windows cleaned inside & out",
            "Wheels & tires cleaned + tire dressing",
            "Interior wipe down & door jambs cleaned",
            "Cracks & crevices cleaned + full vacuum",
          ],
          sizes: [
            { label: "Compact / Small SUV", price: 30 },
            { label: "Midsize SUV / Truck", price: 35 },
            { label: "Large Truck / SUV / Van", price: 45 },
          ],
        },
      ],
    },
    {
      id: "detail-packages",
      name: "Full & Deep Detailing",
      description: "From hand wax and leather conditioning to full seat-out interior restoration.",
      items: [
        {
          id: "full-detail",
          signature: true,
          badge: "Showroom Shine",
          name: "Full Detail",
          description:
            "Includes everything in the Basic Standard Detail, plus hand wax and buff off, leather & vinyl cleaned and conditioned, interior protectant & cleaner applied, and optional fragrance.",
          includes: [
            "Everything in Basic Standard Detail",
            "Hand wax & buff off",
            "Leather & vinyl cleaned and conditioned",
            "Interior protectant & cleaner applied",
            "Optional cabin fragrance",
          ],
          sizes: [
            { label: "Compact / Small SUV", price: 55 },
            { label: "Midsize SUV / Truck", price: 65 },
            { label: "Large Truck / SUV / Van", price: 75 },
          ],
        },
        {
          id: "deluxe-interior-detail",
          signature: true,
          badge: "Deep Cabin Reset",
          name: "Deluxe Interior Detail",
          description:
            "Includes Basic Standard Detail & Full Detail, plus cloth seats shampooed, carpet shampooed, headliner cleaned, optional interior protectant applied, and optional fragrance.",
          includes: [
            "Includes Basic Standard & Full Detail",
            "Cloth seats shampooed",
            "Carpet shampooed",
            "Headliner cleaned",
            "Interior protectant & optional fragrance",
          ],
          price: 120,
          priceFrom: true,
        },
        {
          id: "seat-removal-detail",
          signature: true,
          badge: "Beyond the Surface",
          name: "Full Interior Detail with Seat Removal",
          description:
            "Yes, we remove the seats! Allows us to reach under the seats, around seat tracks, between tight spaces, and deep into the carpet—great for family, heavily used, and rental/rideshare vehicles. Call (904) 800-9496 for a quote.",
          includes: [
            "Seats removed for deep carpet & track access",
            "Removes hidden dirt, crumbs, hair & debris",
            "Embedded pet hair & trapped odor removal",
            "Complete interior restoration",
          ],
        },
      ],
    },
    {
      id: "add-ons-specialty",
      name: "Add-Ons & Specialty",
      description: "Targeted interior, exterior, and mobile services to keep your vehicle looking sharp.",
      items: [
        {
          id: "upholstery-shampoo",
          name: "Upholstery Shampoo",
          description: "Deep shampooing for cloth seats and upholstery to lift stains and refresh fabric.",
          price: 35,
          priceFrom: true,
        },
        {
          id: "carpet-shampoo",
          name: "Carpet & Floor Mat Shampoo",
          description: "Deep carpet and mat shampooing to remove ground-in dirt, sand, and odors.",
        },
        {
          id: "hand-wax-and-buff",
          name: "Hand Wax & Buffing",
          description: "Hand-applied wax and buff off for deep paint gloss and protection.",
        },
        {
          id: "leather-vinyl-conditioning",
          name: "Leather & Vinyl Cleaning & Conditioning",
          description: "Cleans, conditions, and protects leather seats, dashboards, and vinyl trim.",
        },
        {
          id: "pet-hair-odor-removal",
          name: "Pet Hair & Odor Removal",
          description: "Deep extraction of embedded pet hair and trapped interior odors, with optional fragrance.",
        },
        {
          id: "headlight-cleaning",
          name: "Headlight Cleaning & Buffing",
          description: "Buffs and cleans cloudy headlights for a clearer, brighter look.",
        },
        {
          id: "tire-inflation",
          name: "Tire Inflation & Tire Dressing",
          description: "Tire pressure check and inflation starting at $5; wheel cleaning and tire shine included with washes.",
          price: 5,
          priceFrom: true,
        },
        {
          id: "mobile-detailing",
          name: "Mobile Detailing & Rental / Turo Turnovers",
          description:
            "Mobile detailing unit available, plus fast, meticulous inside-and-out turnarounds for rental cars, Turo hosts, and rideshare vehicles just 5 miles from JAX Airport.",
        },
      ],
    },
  ],

  photos: [
    {
      src: "/images/hero-chrysler-pacifica-and-sign.webp",
      alt: "Freshly washed white Chrysler Pacifica and Mazda SUV on the lot in front of the Kitty's Carwash 904-300-1656 sign on Lem Turner Road",
      category: "storefront",
      credit: "owner",
      width: 1440,
      height: 1440,
      hero: true,
    },
    {
      src: "/images/full-detail-purple-bmw-x6.webp",
      alt: "Detailed purple BMW X6 M SUV gleaming in the sun on the gravel lot with the red-roofed wash bay behind it",
      category: "food",
      credit: "google-maps-ugc",
      width: 1050,
      height: 1400,
    },
    {
      src: "/images/basic-standard-detail-silver-camry.webp",
      alt: "Freshly washed silver Toyota Camry on the lot with the Kitty's Carwash roadside sign and wash canopy in the background",
      category: "food",
      credit: "owner",
      width: 1440,
      height: 1440,
    },
    {
      src: "/images/outside-hand-wash-ford-f150-bay.webp",
      alt: "Polished black Ford F-150 pickup truck parked under the red metal carport wash bay",
      category: "food",
      credit: "google-maps-ugc",
      width: 1200,
      height: 1600,
    },
    {
      src: "/images/inside-and-out-wash-vw-suv-bay.webp",
      alt: "Staff hand-cleaning the interior of a grey Volkswagen SUV under the metal wash canopy next to a black GMC pickup truck",
      category: "food",
      credit: "google-maps-ugc",
      width: 1200,
      height: 1600,
    },
    {
      src: "/images/inside-and-out-wash-vw-suv-front.webp",
      alt: "Clean metallic grey Volkswagen SUV parked under the gabled metal wash bay roof with doors open for detailing",
      category: "food",
      credit: "google-maps-ugc",
      width: 900,
      height: 1600,
    },
    {
      src: "/images/full-detail-vw-suv-hood-shine.webp",
      alt: "Close-up of the polished metallic grey hood and wheel of a Volkswagen SUV in front of the red-roofed wash bay",
      category: "food",
      credit: "google-maps-ugc",
      width: 900,
      height: 1600,
    },
    {
      src: "/images/deluxe-interior-detail-cloth-seat.webp",
      alt: "Freshly vacuumed and detailed two-tone cloth passenger seat and wiped-down interior door panel",
      category: "food",
      credit: "google-maps-ugc",
      width: 1000,
      height: 753,
    },
    {
      src: "/images/basic-standard-detail-chevy-trax.webp",
      alt: "Clean black Chevrolet Trax parked on the lot with the white carport bay and Kitty's trailer behind it",
      category: "food",
      credit: "google-maps-ugc",
      width: 1000,
      height: 1000,
    },
    {
      src: "/images/hand-wax-and-buff-three-cars-canopy.webp",
      alt: "Three freshly washed vehicles—a black Audi SUV, white Toyota Corolla, and black Chevrolet Trax—lined up in front of the white wash canopy",
      category: "food",
      credit: "google-maps-ugc",
      width: 609,
      height: 499,
    },
    {
      src: "/images/mobile-detailing-gmc-truck-rig.webp",
      alt: "Wrapped black GMC Sierra truck and trailer listing Interior, Pressure Washing, Mobile Detailing, Shampooing, Buffing & Waxing, and Headlights",
      category: "food",
      credit: "google-maps-ugc",
      width: 535,
      height: 514,
    },
    {
      src: "/images/mobile-detailing-custom-cuts-trailer.webp",
      alt: "Black dual-axle trailer with the pink Kitty's cat logo listing mobile detailing, pressure washing, and cleaning services",
      category: "food",
      credit: "owner",
      width: 1166,
      height: 1400,
    },
    {
      src: "/images/storefront-lot-and-red-office.webp",
      alt: "Kitty's Car Wash gravel lot on Lem Turner Road showing the red office building, white wash canopy, and red metal bay",
      category: "storefront",
      credit: "google-maps-ugc",
      width: 1200,
      height: 1600,
    },
    {
      src: "/images/interior-waiting-lobby-counter.webp",
      alt: "Inside air-conditioned waiting lobby with a wall-mounted TV, glass counter, refreshments, and framed Kitty's Carwash review poster",
      category: "interior",
      credit: "google-maps-ugc",
      width: 1200,
      height: 1600,
    },
    {
      src: "/images/menu-board-detail-packages.webp",
      alt: "Kitty's Carwash service and price board listing Basic Standard Detail, Full Detail, Deluxe Interior Detail, Upholstery Shampoo, and Tire Inflation",
      category: "menu-board",
      credit: "facebook-page",
      width: 1080,
      height: 1476,
    },
    {
      src: "/images/logo-kittys-carwash.webp",
      alt: "Kitty's Carwash circular logo with a car silhouette under a showerhead spray, 10934 Lem Turner Rd Jax FL 32218, and 904-300-1656",
      category: "logo",
      credit: "facebook-page",
      width: 517,
      height: 501,
    },
  ],
  heroImage: "/images/hero-chrysler-pacifica-and-sign.webp",

  palette: {
    ink: "#141115",
    brand: "#E61E8C",
    brandDeep: "#A80E63",
    accent: "#00B4D8",
    mustard: "#FFD100",
    cream: "#FFF7FB",
    paper: "#FFFFFF",
  },

  about: {
    heading: "Hand car wash & deep detailing on Lem Turner Road",
    paragraphs: [
      "Kitty's Car Wash is a family-run, woman-owned hand car wash and detailing shop at 10934 Lem Turner Rd on Jacksonville's Northside. Since opening our lot in December 2021, we've built a 5.0-star reputation on one simple promise: we don't cut corners, and we go beyond the surface.",
      "Every vehicle is washed by hand under shaded bays—from quick exterior washes and inside-and-out cleanings to hand wax and buff, leather conditioning, carpet and upholstery shampooing, and full interior details where we remove the seats to reach every track and crevice.",
      "Pull up for a wash on your compact car, SUV, van, or full-size pickup truck, or drop off a rental or Turo vehicle before returning it near JAX Airport. While our crew works on your ride, you can cool off inside our air-conditioned waiting lobby with a TV, complimentary water, and snacks.",
    ],
  },

  heroKicker: "Lem Turner Rd · Northside Jacksonville",

  servesCuisine: [
    "100% Hand Car Wash",
    "Inside & Out Cleaning",
    "Basic Standard Detail",
    "Full Vehicle Detail",
    "Deluxe Interior Detail",
    "Seat-Removal Deep Clean",
    "Hand Wax & Buff",
    "Upholstery & Carpet Shampoo",
    "Leather Conditioning",
    "Wheel & Tire Shine",
    "Trucks & Full-Size SUVs",
    "Cold AC Waiting Lobby",
  ],

  servicesOffered: [
    "100% Hand Car Wash",
    "Inside & Out Cleaning",
    "Basic Standard Detail",
    "Full Vehicle Detail",
    "Deluxe Interior Detail",
    "Seat-Removal Deep Clean",
    "Hand Wax & Buff",
    "Upholstery & Carpet Shampoo",
    "Leather Conditioning",
    "Wheel & Tire Shine",
    "Trucks & Full-Size SUVs",
    "Cold AC Waiting Lobby",
  ],

  seo: {
    title: "Kitty's Car Wash | Hand Car Wash & Auto Detailing on Lem Turner Rd, Jacksonville, FL",
    description:
      "5.0-star hand car wash and auto detailing at 10934 Lem Turner Rd in Northside Jacksonville, FL. Inside & out hand washes, hand wax, upholstery shampoo, and full interior detailing. Call (904) 300-1656.",
  },

  footerCredit: "Built by nicklopacki.com",
};
