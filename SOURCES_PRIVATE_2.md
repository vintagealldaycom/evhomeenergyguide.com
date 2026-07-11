# Private Source List — Stat Band (#4) & EV Camping (#6)

**For your internal verification only.** These citations are intentionally NOT shown
on the site (per your instruction). Every figure below maps to a value hardcoded in
`src/pages/index.astro`. Update the array there if you change a number.

Prices, rates, and specs drift — re-check the government sources before any big
publish, and treat all "~" figures as approximate.

---

## Stat band — "EV home energy, by the numbers"

| Displayed | Source | Link |
|---|---|---|
| **17.9¢ / kWh** avg U.S. residential electricity rate | U.S. EIA, Electric Power Monthly, Table 5.6.A (residential avg was ~17.6¢ Feb 2026; rounded up for 2026) | https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a |
| **~80%** of EV charging happens at home | U.S. DOE / Alternative Fuels Data Center (AFDC) — home charging is the primary method for most EV drivers | https://afdc.energy.gov/fuels/electricity-charging-home |
| **3–5¢ per mile** home charging cost | U.S. DOE eGallon / FuelEconomy.gov — EV "fuel" cost is roughly a third of gasoline per mile | https://www.fueleconomy.gov/feg/Find.do?action=bt2 |
| **~30 mi/hr** Level 2 vs **3–5 mi/hr** Level 1 | U.S. DOT Rural EV Toolkit — charging speeds; AFDC EV charging stations | https://www.transportation.gov/rural/ev/toolkit/ev-basics/charging-speeds · https://afdc.energy.gov/fuels/electricity-stations |
| **20 min** DC fast charge to 80% | U.S. DOT Rural EV Toolkit — DCFC reaches ~80% in 20 min–1 hr | https://www.transportation.gov/rural/ev/toolkit/ev-basics/charging-speeds |
| **37 miles/day** avg U.S. driving | U.S. DOT FHWA — National Household Travel Survey (~36–37 mi/day) | https://nhts.ornl.gov/ |
| **4–5 hrs/day** avg U.S. peak sun hours | NREL — PVWatts / NSRDB national solar resource (U.S. avg ~4–5 PSH) | https://pvwatts.nrel.gov/ |
| **9.6 kW** top EV onboard power output | Ford F-150 Lightning "Pro Power Onboard" spec (manufacturer — **not** a gov source) | https://www.ford.com/trucks/f150/f150-lightning/ |

---

## EV camping comparison — "Best EVs for camping (V2L power)"

Figures are **approximate** and vary by trim, model year, and pack. V2L = onboard
vehicle-to-load AC output; battery = usable pack; range = EPA-estimated. Best cross-
check per vehicle: manufacturer spec page + EPA range at fueleconomy.gov.

| Vehicle | V2L | Battery | Range | From | Notes / source |
|---|---|---|---|---|---|
| Ford F-150 Lightning | 9.6 kW | ~131 kWh | ~320 mi | ~$63k | Pro Power Onboard 9.6 kW (Ext. Range); Ford + EPA |
| Chevrolet Silverado EV | 7.2 kW | ~205 kWh | ~450 mi | ~$75k | PowerBase outlets (up to 10.2 kW w/ accessory); GM + EPA |
| Kia EV9 | 3.6 kW | ~99.8 kWh | ~304 mi | ~$56k | V2L 3.6 kW; Kia + EPA |
| Hyundai Ioniq 5 | 3.6 kW | ~84 kWh | ~318 mi | ~$43k | V2L 3.6 kW; Hyundai + EPA |
| Kia EV6 | 3.6 kW | ~84 kWh | ~319 mi | ~$43k | V2L 3.6 kW; Kia + EPA |
| Rivian R1T | 1.5 kW | ~141 kWh | ~420 mi | ~$70k | 120V outlets (~1.5 kW shared); Rivian + EPA |

Helpful roundups used to cross-check which models offer V2L (secondary, not gov):
- InsideEVs — EVs with AC outlets / V2L: https://insideevs.com/features/769422/evs-with-ac-outlets-v2l-vehicle-to-load/
- EPA range lookup (authoritative for range): https://www.fueleconomy.gov/

> When you publish the dedicated EV-camping article, drop its URL into the
> `evCamping` "read more" link in `index.astro` (currently `/blog/ev-camping-v2l-setup/`).
