// Simulators & Calculators catalog — the "app store" of the site (the Sim-Lab).
// Listing page: /en/sim-lab/  ·  live tools each get /en/sim-lab/<slug>/
// 'live' tools have a dedicated page; 'soon' tools show a static "Coming soon" tag.
//
// Categories mirror the 5 site pillars exactly (see config/site.ts) so the
// Sim-Lab filter chips align 1:1 with the main nav / category hubs.

export type ToolStatus = 'live' | 'soon';

// Base path for the English Sim-Lab section (Spanish added later: /es/sim-lab/).
export const CALC_BASE = '/en/sim-lab';

export interface ToolEntry {
  id: string;
  name: string;
  description: string;
  group: 'EV Home Charging' | 'Smart Energy' | 'Solar & Battery' | 'Travel & Camping' | 'Tools & Workshop';
  status: ToolStatus;
  badge?: 'Popular' | 'New';
  inputs: string; // shown as spec line, e.g. "5 inputs"
  icon: string; // inline SVG path
  slug?: string; // dedicated page slug for live tools → /en/sim-lab/<slug>/
  anchor?: string; // legacy in-page anchor (kept for reference)
}

/** Canonical URL for a tool: dedicated page for live tools, else the listing. */
export function calculatorUrl(t: ToolEntry): string {
  return t.status === 'live' && t.slug ? `${CALC_BASE}/${t.slug}/` : `${CALC_BASE}/`;
}

const bolt = 'M13 2 3 14h7l-1 8 10-12h-7l1-8z';
const clock = 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm1-15h-2v6l5 3 1-1.7-4-2.3V7z';
const gauge = 'M12 2a10 10 0 0 0-7.1 17.1l1.4-1.4A8 8 0 1 1 20 12h2A10 10 0 0 0 12 2zm0 6a4 4 0 0 0-4 4h2a2 2 0 1 1 3.4 1.4l1.4 1.4A4 4 0 0 0 12 8z';
const home = 'M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z';
const battery = 'M16 4h-2V2h-4v2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-2 14h-4v-8h4v8z';
const sun = 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5h0l1 3h-2l1-3zm0 20-1-3h2l-1 3zM2 12l3-1v2l-3-1zm20 0-3 1v-2l3 1zM4.9 4.9l2.8 1.4-1.4 1.4L4.9 4.9zm14.2 14.2-2.8-1.4 1.4-1.4 1.4 2.8zM4.9 19.1l1.4-2.8 1.4 1.4-2.8 1.4zM19.1 4.9l-1.4 2.8-1.4-1.4 2.8-1.4z';
const map = 'M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2zm1 2.5 4 1.3v11.7l-4-1.3V5.5z';
const dollar = 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15v1.5h-2V17c-1.7-.3-3-1.3-3-3h2c0 .8 1 1.2 2 1.2s2-.4 2-1.2c0-.7-.7-1-2.3-1.4C10 12.2 8 11.7 8 9.8 8 8.3 9.3 7.3 11 7V5.5h2V7c1.7.3 3 1.3 3 2.8h-2c0-.7-1-1-2-1s-2 .3-2 1c0 .6.7.9 2.3 1.3 1.7.4 3.7 1 3.7 2.9 0 1.6-1.3 2.7-3 3z';
const plug = 'M16 7V3h-2v4h-4V3H8v4H6v6a5 5 0 0 0 4 4.9V22h4v-4.1A5 5 0 0 0 18 13V7h-2z';
const shield = 'M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3z';
const grid = 'M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z';
const flame = 'M12 2s5 4.5 5 9.5a5 5 0 0 1-10 0c0-1.2.3-2.3.8-3.4C8.6 9.4 10 10 10 10s-.5-4 2-8z';

export const tools: ToolEntry[] = [
  {
    id: 'charging-cost',
    name: 'EV Home Charging Cost',
    description: 'Estimate your full-charge cost, monthly bill, and cost per mile from your real kWh rate and driving.',
    group: 'EV Home Charging',
    status: 'live',
    badge: 'Popular',
    inputs: '5 inputs · instant',
    icon: bolt,
    slug: 'charging-cost',
    anchor: 'charging-cost-tool',
  },
  {
    id: 'solar-battery-sizer',
    name: 'Solar & Battery Backup Sizer',
    description: 'Size a solar array and battery bank to cover your home usage and outage backup goals.',
    group: 'Solar & Battery',
    status: 'live',
    badge: 'Popular',
    inputs: '4 inputs · instant',
    icon: sun,
    slug: 'solar-battery-sizer',
    anchor: 'solar-sizer-tool',
  },
  {
    id: 'ev-vs-gas',
    name: 'EV vs Gas Full Cost Comparison',
    description: '5-year total ownership cost: fuel, maintenance, insurance, and depreciation, side by side.',
    group: 'EV Home Charging',
    status: 'soon',
    inputs: '8 inputs',
    icon: dollar,
  },
  {
    id: 'charging-time',
    name: 'Charging Time Calculator',
    description: 'How long a charge takes from any state of charge on Level 1, Level 2, or DC fast charging.',
    group: 'EV Home Charging',
    status: 'soon',
    badge: 'New',
    inputs: '4 inputs',
    icon: clock,
  },
  {
    id: 'range-anxiety',
    name: 'Range Anxiety Simulator',
    description: 'Plot a route and visualize when, where, and how often you would actually need to stop and charge.',
    group: 'EV Home Charging',
    status: 'soon',
    inputs: 'Route-based',
    icon: gauge,
  },
  {
    id: 'l1-vs-l2-roi',
    name: 'Level 1 vs Level 2 ROI',
    description: 'Is a Level 2 charger worth the install cost? Payback time based on your charging habits.',
    group: 'EV Home Charging',
    status: 'soon',
    inputs: '6 inputs',
    icon: plug,
  },
  {
    id: 'energy-bill',
    name: 'Home Energy Bill Estimator',
    description: 'Project your monthly electricity bill from appliance use, HVAC, and EV charging — per device.',
    group: 'Smart Energy',
    status: 'soon',
    badge: 'Popular',
    inputs: 'Device-based',
    icon: home,
  },
  {
    id: 'tou-savings',
    name: 'Time-of-Use Savings Simulator',
    description: 'See how much switching to a TOU electricity plan would save based on your hourly usage pattern.',
    group: 'Smart Energy',
    status: 'soon',
    inputs: 'Plan + usage',
    icon: grid,
  },
  {
    id: 'hvac-load',
    name: 'HVAC Load Sizing Tool',
    description: 'The right BTU / heat-pump size for your home based on climate zone, square footage, and insulation.',
    group: 'Smart Energy',
    status: 'soon',
    inputs: '7 inputs',
    icon: flame,
  },
  {
    id: 'battery-runtime',
    name: 'Battery Runtime Estimator',
    description: 'Enter a power station\u2019s Wh and your devices — get accurate runtime predictions per combo.',
    group: 'Solar & Battery',
    status: 'soon',
    inputs: 'Multi-device',
    icon: battery,
  },
  {
    id: 'backup-days',
    name: 'Backup Power Days Calculator',
    description: 'How many days can your battery run the fridge and lights during an outage? Get a survival timeline.',
    group: 'Solar & Battery',
    status: 'soon',
    badge: 'New',
    inputs: '5 inputs',
    icon: shield,
  },
  {
    id: 'road-trip-planner',
    name: 'EV Road Trip Planner',
    description: 'Multi-stop road trips with charging stops, weather adjustments, and realistic mile-per-charge math.',
    group: 'Travel & Camping',
    status: 'soon',
    inputs: 'Route-based',
    icon: map,
  },
];

export const toolGroups = ['All Tools', 'EV Home Charging', 'Smart Energy', 'Solar & Battery', 'Travel & Camping', 'Tools & Workshop'] as const;
