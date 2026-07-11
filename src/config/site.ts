// Single Source of Truth — update once, changes everywhere.

export const site = {
  name: 'EV Home Energy Guide',
  shortName: 'EVHEG',
  url: 'https://evhomeenergyguide.com', // TODO confirm domain
  description:
    'Welcome to your command center for all things electric. We help you simplify the complex world of home energy by connecting your EV, solar, and battery storage into one efficient system.',
  tagline: 'Real EV & Home Energy Guidance',
  // Legal entity behind the site (used in footer copyright + legal pages).
  company: 'Vintage Allday LLC',
  contactEmail: 'Vintageallday.com@gmail.com',
  // Current site build version (see CHANGELOG.md).
  version: '4.12.0',
  // Google Apps Script Web App endpoint (Combined_form_backend.gs).
  // Deploy the script as a Web App (Execute as Me / Anyone) and paste the /exec URL here:
  formEndpoint: 'PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE',
};

export const author = {
  name: 'Louis F.',
  title: 'Electric Vehicle & Home Efficiency Specialist',
  bio: 'A developer and digital creator dedicated to simplifying the intersection of electric vehicle ownership and home energy management.',
  url: `${site.url}/about`,
  avatar: '/Logo.png',
  sameAs: [
    // 'https://linkedin.com/in/yourprofile',
  ],
};

export const disclaimer =
  'EV Home Energy Guide is not a company and does not provide professional, legal, electrical, or financial advice. All content is general information for educational purposes only. We cannot answer personal questions or give individual recommendations — always consult a licensed professional before making decisions.';

// Featured hero article (update4 #5). Points at the live WordPress article for
// now since the Astro site isn't deployed yet. When this guide is migrated into
// Astro, change `url` to the internal path and set `external: false`.
export const heroArticle = {
  eyebrow: 'Featured guide · EV Home Charging',
  title: 'Level 1 vs Level 2 Home Charging: The 2026 Comparison Guide',
  blurb:
    'Which home charger actually fits your driving? Compare real charging speeds, install cost, and cost-per-mile side by side — the clear way to settle the Level 1 vs Level 2 question.',
  url: 'https://www.evhomeenergyguide.com/level-1-vs-level-2-home-charging/',
  external: true,
};

// 5 Content Pillars → main navigation
export const pillars = [
  {
    slug: 'ev-home-charging',
    title: 'EV Home Charging',
    color: 'var(--green)',
    description: 'Wall boxes, charging basics, rate optimization, and troubleshooting.',
    subcategories: ['Home Charging', 'Charging Basics', 'Charging Costs & Efficiency', 'Troubleshooting'],
  },
  {
    slug: 'smart-home-energy',
    title: 'Smart Energy',
    color: 'var(--blue)',
    description: 'Smart panels, load management, automation, and TOU rates.',
    subcategories: ['Smart Panels & Load Management', 'Save Energy'],
  },
  {
    slug: 'solar-battery-backup',
    title: 'Solar & Battery',
    color: 'var(--amber)',
    description: 'Rooftop solar, whole-home backup batteries, and portable power stations.',
    subcategories: ['Backup Power', 'Solar', 'Portable Power Stations'],
  },
  {
    slug: 'ev-travel-camping',
    title: 'Travel & Camping',
    color: 'var(--purple)',
    description: 'V2L camping setups, towing, and long-distance route planning.',
    subcategories: ['EV Camping', 'EV Road Trips & Routes'],
  },
  {
    slug: 'cordless-tools-workshop',
    title: 'Tools & Workshop',
    color: 'var(--orange)',
    description: 'Workshop battery tools, outdoor equipment, and heavy-duty gear.',
    subcategories: ['Cordless Power Tools', 'Battery Outdoor Tools', 'Workshop Gear & Cords'],
  },
] as const;

export type PillarSlug = (typeof pillars)[number]['slug'];
