export const SITE = {
  name: "K&K Transportation",
  tagline: "Delivering Your Cargo, Anywhere in the United States",
  description:
    "Precision-driven logistics that keeps your goods moving — no delays, no guesswork.",
  footerDescription:
    "Delivering freight with consistency, care, and full visibility —\nevery mile, every shipment.",
  email: "claims@kktransusa.com",
  phone: "+1 (224) 561-1000",
  address: "2450 S Ashland Ave, Chicago, IL 60608",
  hours: "Mon – Sun · 24/7 Dispatch",
  footerAddress: "2100 Manchester RD\nSte A Ste 433\nWheaton, IL 60187",
  phones: {
    main: "+1 (224) 561-1000",
    sales: "+1 (224) 561-1000",
    support: "+1 (224) 561-1000",
  },
  emails: {
    drivers: "applications@kktransusa.com",
    sales: "dispatch@kktransusa.com",
    support: "claims@kktransusa.com",
  },
  businessHours: {
    weekdays: "Monday–Friday: 8 AM – 6 PM CST",
    saturday: "Saturday: 9 AM – 2 PM CST",
    emergency: "24/7 Emergency Support Available",
  },
};

export const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Drivers", href: "/drivers" },
  { label: "Terms", href: "/terms" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Drivers", href: "/drivers" },
  { label: "Terms", href: "/terms" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const ANNOUNCEMENTS = [
  "24/7 Dispatch safety support",
  "Refer a friend and earn $500",
  "Now hiring OTR company drivers",
  "New trucks arriving monthly",
  "Industry-leading pay per mile",
  "Direct deposit every Friday",
] as const;

export const STATS = [
  { value: "6+", label: "Years Experience" },
  { value: "240+", label: "Active Drivers" },
  { value: "48", label: "States Covered" },
  { value: "99.2%", label: "On-Time Delivery" },
] as const;

export const VALUE_PROPS = [
  {
    title: "On-Time Delivery",
    description:
      "Route optimization and proactive dispatch keep your freight on schedule — every lane, every load.",
    icon: "Clock",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Live GPS visibility and milestone updates from pickup to delivery, directly in your dashboard.",
    icon: "MapPin",
  },
  {
    title: "Safe Handling",
    description:
      "Modern fleet, certified drivers, and rigorous safety protocols protect your cargo end-to-end.",
    icon: "ShieldCheck",
  },
  {
    title: "Dedicated Support",
    description:
      "A 24/7 dispatch team that answers when it matters — not a call center, a real partner.",
    icon: "Headphones",
  },
] as const;

export const SERVICES = [
  {
    title: "OTR Trucking",
    description:
      "Long-haul freight across all 48 contiguous states with dry van and reefer capacity.",
    icon: "Truck",
  },
  {
    title: "24/7 Dispatch",
    description:
      "Always-on dispatch team coordinating loads, routes, and exceptions around the clock.",
    icon: "Radio",
  },
  {
    title: "Live Tracking",
    description:
      "GPS-enabled fleet with shipment-level visibility and ETA alerts for every stakeholder.",
    icon: "Satellite",
  },
  {
    title: "Safety & Compliance",
    description:
      "DOT-compliant operations, pre-trip inspections, and continuous driver training.",
    icon: "ShieldCheck",
  },
  {
    title: "Refrigerated Freight",
    description:
      "Temperature-controlled transport for perishable and sensitive goods nationwide.",
    icon: "Thermometer",
  },
  {
    title: "Expedited Shipping",
    description:
      "Team driver service for time-critical freight with guaranteed delivery windows.",
    icon: "Zap",
  },
] as const;

export const DRIVER_BENEFITS = [
  {
    title: "Consistent Earnings",
    description:
      "Access steady freight opportunities with reliable pay, helping you maintain a stable and predictable income",
    icon: "DollarSign",
  },
  {
    title: "Regular Loads",
    description:
      "Stay on the road with a constant flow of shipments, minimizing downtime and maximizing your driving time",
    icon: "Truck",
  },
  {
    title: "On-Time Payments",
    description:
      "Get paid without delays. We ensure fast and dependable payment for every completed load",
    icon: "Wallet",
  },
  {
    title: "Dedicated Support",
    description:
      "Our team is available to assist you at every step — from dispatch to delivery — so you're never on your own",
    icon: "Headphones",
  },
] as const;

export const DRIVER_REQUIREMENTS = [
  "Valid Class A CDL license",
  "Minimum 1 year of verifiable OTR experience",
  "Clean driving record (no major violations)",
  "Pass DOT physical and drug screening",
  "23 years of age or older",
  "Ability to operate manual transmission",
];

export const DRIVER_COMPENSATION = [
  "Starting pay: $95,000+ annually",
  "Performance and safety bonuses",
  "Paid orientation and training",
  "Referral bonuses up to $500",
  "Fuel card and maintenance covered",
  "Per diem and layover pay",
];

export const DRIVER_TESTIMONIALS = [
  {
    name: "Mr William",
    username: "@williamk",
    text: "Weekly direct deposit every Friday, no exceptions. After twelve years on the road, I can tell you that kind of reliability is rare.",
    color: "#1481F8",
    image: "/images/drivers/JamesDavid.png",
  },
  {
    name: "Mr Irankunda",
    username: "@irankunda",
    text: "Dispatch answers on the second ring — not a call center, an actual person who knows my truck and my lanes.",
    color: "#F59E0B",
    image: "/images/drivers/AdamMccall.png",
  },
  {
    name: "Mr Guido",
    username: "@guidof",
    text: "Loads are steady, paperwork is clean, and the equipment is newer than anywhere I've worked. Nothing to complain about.",
    color: "#10B981",
    image: "/images/drivers/AlbertJuan.png",
  },
  {
    name: "Mr Chris",
    username: "@chrism",
    text: "Home time gets respected here. If I say I'm off, I'm off — no last-minute calls begging me to take one more load.",
    color: "#8B5CF6",
    image: "/images/drivers/WarrenDaniel.png",
  },
  {
    name: "Mr Deseri",
    username: "@deserim",
    text: "Fuel card, maintenance handled, layover pay — the stuff that usually eats into your check is all covered.",
    color: "#EF4444",
    image: "/images/drivers/Abbas.png",
  },
  {
    name: "Mr Guido",
    username: "@guidos",
    text: "Joined after a referral, stayed for the culture. Safety team actually acts on driver feedback — that almost never happens.",
    color: "#EC4899",
    image: "/images/drivers/AlbertJuan.png",
  },
  {
    name: "Mr Molina",
    username: "@molinaj",
    text: "Modern Cascadias, APUs that work, tires you can trust. When equipment is right, everything else gets easier.",
    color: "#F97316",
    image: "/images/drivers/RonaldLara.png",
  },
  {
    name: "Ms Jasmine",
    username: "@jasminek",
    text: "Orientation was paid, thorough, and not the usual hurry-up-and-wait. Told me everything I needed before my first load.",
    color: "#06B6D4",
    image: "/images/drivers/JanaDunlap.png",
  },
  {
    name: "Mr Gerald",
    username: "@geraldt",
    text: "Recruiter followed up within an hour, honest about the gig from day one. No surprises on the pay side.",
    color: "#14B8A6",
    image: "/images/drivers/Henry.png",
  },
  {
    name: "Mr Sirbutski",
    username: "@sirbutski",
    text: "Dispatch treats me like a partner, not a number. They know my preferred lanes and actually route me there when loads are available.",
    color: "#6366F1",
    image: "/images/drivers/LouisMason.png",
  },
  {
    name: "Mr Supa",
    username: "@supak",
    text: "Benefits kicked in faster than any other carrier I've worked for. Medical, dental, 401k — the whole package and it's not buried in fine print.",
    color: "#DB2777",
    image: "/images/drivers/HuzaifaAnas.png",
  },
  {
    name: "Mr Anderson",
    username: "@andersonr",
    text: "Trucks are serviced on schedule, not when something breaks. In two years I haven't had a single roadside that wasn't weather-related.",
    color: "#0EA5E9",
    image: "/images/drivers/AryanRoy.png",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What types of freight do you handle?",
    answer:
      "We handle a wide range of freight, including commercial goods, packaged cargo, and bulk shipments, ensuring safe and efficient transportation.",
  },
  {
    question: "Do you offer real-time tracking?",
    answer:
      "Yes. Our fleet is GPS-enabled, so you can monitor your shipment from pickup to delivery with live location updates and ETA alerts.",
  },
  {
    question: "How do you ensure on-time delivery?",
    answer:
      "Route optimization, proactive dispatch, and a 24/7 operations team keep your freight on schedule — with backup plans ready for any disruption.",
  },
  {
    question: "Is my cargo insured during transportation?",
    answer:
      "Yes. K&K Transportation carries $1,000,000 auto liability and $100,000 cargo insurance on every load, meeting or exceeding industry standards.",
  },
  {
    question: "Can I request a custom quote?",
    answer:
      "Absolutely. Share your lane, equipment, and timing via our contact form or call dispatch — most quotes are returned within one business hour.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We operate across all 48 contiguous United States, with primary lanes through the Midwest, Southeast, and West Coast.",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Drivers", href: "/drivers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/terms#privacy" },
  ],
};
