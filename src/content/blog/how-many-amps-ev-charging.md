---
title: "How Many Amps Does Your EV Actually Pull When Charging?"
description: "Amps, breaker size, and the 80% rule explained simply. Learn how many amps your EV really draws and how to match a charger to your circuit safely."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, amps, electrical, home-charging]
draft: false
---

"How many amps does it pull?" is the question your electrician will ask first, and the number that determines what your home charging setup needs to look like. It's also a number surrounded by small confusions — between what the charger *can* pull, what your car *will* accept, and what your breaker must be *rated* for. Let's make all three clear, because getting them right is the difference between a safe install and a chronically tripping one.

## Amps, in one breath

Electrical current is measured in **amps**. If you picture electricity as water in a pipe (as we do in the [kW vs kWh guide](/blog/kw-vs-kwh-explained/)), amps are how much water flows. More amps means more power delivered, which means faster charging — up to your car's limit.

The power your charger delivers is simply **volts × amps**. Home Level 2 charging runs at about 240 volts, so:

<div class="art-viz">
  <span class="vz-title">Amps → power → charging speed</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">16 amps × 240V</span><span class="vz-track"><span class="vz-fill warn" style="width:33%"></span></span><span class="vz-val">≈ 3.8 kW</span></div>
    <div class="vz-row"><span class="vz-label">32 amps × 240V</span><span class="vz-track"><span class="vz-fill" style="width:67%"></span></span><span class="vz-val">≈ 7.7 kW</span></div>
    <div class="vz-row"><span class="vz-label">40 amps × 240V</span><span class="vz-track"><span class="vz-fill" style="width:83%"></span></span><span class="vz-val">≈ 9.6 kW</span></div>
    <div class="vz-row"><span class="vz-label">48 amps × 240V</span><span class="vz-track"><span class="vz-fill" style="width:100%"></span></span><span class="vz-val">≈ 11.5 kW</span></div>
  </div>
</div>

## The three amp numbers you need to keep straight

Here's where confusion creeps in. "How many amps" actually has three answers, and they're related but different:

<div class="art-viz">
  <table class="vz-table">
    <tr><th>The number</th><th>What it is</th><th>Example</th></tr>
    <tr><td><strong>Charger's max output</strong></td><td>The most the EVSE can supply</td><td>A "48A charger" can offer up to 48A</td></tr>
    <tr><td><strong>Car's max acceptance</strong></td><td>The most the car's onboard charger will take</td><td>A 7.7 kW car pulls ~32A max</td></tr>
    <tr><td><strong>Actual draw</strong></td><td>The lower of the two</td><td>48A charger + 32A car = 32A pulled</td></tr>
  </table>
</div>

The **actual draw is always the lower of the charger's output and the car's acceptance** — the bottleneck rule from our [onboard charger guide](/blog/onboard-charger-explained/). This is why a 32A car pulls 32A even from a 48A charger, and why buying more charger amps than your car can accept just leaves capacity idle.

## The number your breaker cares about: the 80% rule

Now the safety-critical part. Because EV charging is a *continuous* load (hours at a time), electrical code requires the circuit's breaker to be rated at **125% of the charger's continuous draw** — equivalently, the charger may pull only **80% of the breaker's rating.**

<div class="art-viz">
  <span class="vz-title">Charger amps → required breaker</span>
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Want 32A of charging?</strong><span>Needs a 40A breaker (32 ÷ 0.8 = 40).</span></div></div>
    <div class="vz-step"><div><strong>Want 40A of charging?</strong><span>Needs a 50A breaker (40 ÷ 0.8 = 50).</span></div></div>
    <div class="vz-step"><div><strong>Want 48A of charging?</strong><span>Needs a 60A breaker (48 ÷ 0.8 = 60).</span></div></div>
  </div>
</div>

Get this backwards — put a 40A charger on a 40A breaker — and the circuit runs at 100% continuously, heats up, and heat-trips the breaker (or worse). It's the single most common sizing mistake, and it's behind a lot of the [breaker-tripping](/blog/charger-keeps-tripping-breaker/) troubleshooting on this site.

## How to figure out your car's number

To right-size your setup, find your car's maximum AC charging rate — it's in the spec sheet under "onboard charger" or "AC charging," listed in kW. Divide by 240 to get amps: a 7.7 kW car pulls about 32A; an 11.5 kW car pulls about 48A. That's the most your car will ever draw at home, and there's no point in a charger or circuit sized far beyond it *for that car* — though see the future-proofing note below.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The matching logic:</strong> find your car's max AC amps → pick a charger that meets it → put it on a breaker rated 125% of that (the 80% rule). Car needs 32A → 32A-capable charger → 40A breaker. Clean, safe, no waste.</div></div>

## Should you size up anyway?

One worthwhile exception to "don't exceed your car's number": the *wiring and circuit*. If you're already paying an electrician to run a new circuit, installing a 48A/60A-breaker circuit even for a car that only needs 32A is often smart — because your *next* car may pull more, and re-running the wire later is far more expensive than sizing it generously now. In that case, you'd run a bigger circuit but set the charger to deliver only what today's car needs (many chargers let you dial down the amperage). You future-proof the expensive part while staying safe today. Our [32A/40A/48A guide](/blog/how-to-choose-between-32a-40a-48a/) walks that decision in detail.

## A word on Level 1

Everything above is Level 2 (240V). If you charge from a standard 120V wall outlet (Level 1), you're pulling around 12 amps and getting roughly 1.4 kW — much slower, but on an ordinary household circuit. For low-mileage drivers that can genuinely be [enough](/blog/trickle-charging-level-1/), and it needs no special amperage planning at all.

The amps question isn't complicated once you separate the three numbers: what the charger offers, what the car accepts, and what the breaker must be rated for. Find your car's acceptance, match a charger to it, and size the breaker 25% above with the 80% rule. That's a safe, efficient home charging setup — and a conversation your electrician will be happy to have with someone who already knows their numbers.

## Reading your car's spec sheet

Finding your car's amp draw is easier than it sounds once you know where to look. The spec you want is the maximum AC charging power (in kW) or the maximum AC charging current (in amps) — listed under headings like "onboard charger," "AC charging," or "charging" in the owner's manual or the manufacturer's spec page. If it's given in kW, divide by 240 to get amps (7.7 kW ÷ 240 ≈ 32A). If it's given directly in amps, you're done. Watch for one trap: some spec sheets list the *DC fast-charging* number (which is far higher and irrelevant to home charging) alongside the AC number — make sure you're reading the AC/onboard-charger figure, not the fast-charging one. The AC number is your home ceiling; the DC number only matters at highway fast chargers.

## Why the 80% rule feels conservative but isn't

Some owners chafe at the 80% rule — why buy a 60A circuit to run a 48A charger? The answer is that continuous load is genuinely different from brief load. A circuit that carries 48A for ten minutes barely warms up; the same circuit carrying 48A for eight hours straight reaches a steady, elevated temperature that, at 100% of the breaker's rating, would sit right at the edge of the breaker's trip threshold and the wire's thermal limit. The 20% headroom keeps everything comfortably below that edge for the long haul. It's not conservatism for its own sake — it's the specific engineering margin that lets a circuit run near-maximum for hours, night after night, for years, without the slow heat damage that kills under-built circuits. The rule looks cautious on paper and proves essential in practice.

## Quick answers

**Does my car always pull its maximum amps?** No — that's a ceiling. It pulls less when [tapering near full](/blog/charge-rate-tapering/), when cold, or when a setting limits it.

**Do amps affect my bill?** No — you're billed for total energy (kWh), not the rate you drew it at.

**Can I check what's actually being drawn?** Your charger's app or the car's charging screen shows live kW — divide by 240 for the amps flowing right now.

*Educational content, not professional electrical advice. Breaker and wire sizing are licensed-electrician work. Plan your amps in the [Sim-Lab](/en/sim-lab/).*
