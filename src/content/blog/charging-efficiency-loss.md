---
title: "Charging Efficiency Loss: Why You're Never Billed 1:1"
description: "Put 50 kWh in the meter, get ~45 in the battery — the rest is charging loss. Where the energy goes, why it's normal, and how much it adds to your bill."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, efficiency, cost, home-charging]
draft: false
---

Here's a fact that surprises new EV owners looking closely at their bills: the energy your meter records is *more* than the energy that ends up in your battery. Pull 50 kWh from the wall and maybe 44–46 kWh actually reaches the cells. That gap is **charging efficiency loss**, it's completely normal, and understanding it explains why your real-world charging costs run a bit higher than the simple battery math suggests.

## Where the missing energy goes

Charging isn't 100% efficient because moving and converting electrical energy always sheds a little as heat. Between your meter and your battery cells, energy is lost at several steps:

<div class="art-viz">
  <span class="vz-title">Where charging energy goes</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">Into the battery (useful)</span><span class="vz-track"><span class="vz-fill" style="width:88%"></span></span><span class="vz-val">~85–90%</span></div>
    <div class="vz-row"><span class="vz-label">AC→DC conversion loss</span><span class="vz-track"><span class="vz-fill warn" style="width:6%"></span></span><span class="vz-val">heat in the onboard charger</span></div>
    <div class="vz-row"><span class="vz-label">Battery &amp; thermal management</span><span class="vz-track"><span class="vz-fill warn" style="width:6%"></span></span><span class="vz-val">cooling/heating, cell resistance</span></div>
  </div>
  <span class="vz-note">Typical home Level 2 charging is roughly 85–90% efficient — so you're billed for ~10–15% more than lands in the battery.</span>
</div>

The biggest chunk is the [AC-to-DC conversion](/blog/onboard-charger-explained/) your car's onboard charger performs — that conversion generates heat, and heat is lost energy. The rest goes to running the car's systems during charging (the battery management, pumps, and fans that keep cells at a safe temperature).

## Why it's worse in some conditions

Efficiency isn't a fixed number — it drops in predictable situations, which is why your winter charging costs more per battery-mile:

<div class="art-viz">
  <div class="vz-tiles">
    <div class="vz-tile"><span class="vz-ico warn">❄</span><strong>Cold weather</strong><span>The car spends energy heating the battery to charge safely — a big efficiency hit in winter.</span></div>
    <div class="vz-tile"><span class="vz-ico warn">🐌</span><strong>Very slow charging</strong><span>Level 1 is less efficient — the car's "overhead" systems run longer relative to energy delivered.</span></div>
    <div class="vz-tile"><span class="vz-ico info">🌡</span><strong>Extreme heat</strong><span>Active cooling during charging draws extra energy.</span></div>
    <div class="vz-tile"><span class="vz-ico ok">🌤</span><strong>Mild conditions, Level 2</strong><span>Best efficiency — minimal heating/cooling overhead, quick delivery.</span></div>
  </div>
</div>

That slow-charging detail is counterintuitive but real: Level 1 trickle charging is often *less* efficient than Level 2, because the car's baseline overhead (management systems running) is a bigger share of the small energy flow. So a bit of the "slow but steady" appeal of Level 1 is offset by slightly worse efficiency.

## What it costs you

The practical impact is modest but worth knowing for accurate budgeting:

<div class="art-viz">
  <div class="vz-gauge">
    <div class="vz-ring info" style="--p:88"><span>~88%</span></div>
    <div class="vz-gauge-text"><strong>Budget for the loss</strong>If you need 50 kWh in the battery at ~88% efficiency, you'll actually buy about 57 kWh from the utility. At $0.18/kWh, that's ~$10.20 rather than the ~$9.00 the naive battery-only math suggests — about 13% more. Real, but not dramatic.</div>
  </div>
</div>

This is why the honest way to [estimate charging cost](/blog/how-to-estimate-cost-per-mile/) uses metered energy (what you're billed for), not battery capacity — the meter already includes the loss. If you calculate costs from battery size alone, you'll underestimate by that 10–15%.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The takeaway:</strong> home charging is roughly 85–90% efficient, so you're billed for about 10–15% more energy than reaches your battery. It's normal (heat from conversion and running the car's systems), worse in cold and on Level 1, and best in mild weather on Level 2. Budget from metered kWh, not battery capacity, and the gap won't surprise you.</div></div>

## Should you try to reduce it?

Mostly, no — the losses are inherent and small, and chasing them isn't worth much effort. But a few habits naturally improve efficiency as a side benefit of other good practices: charging on Level 2 rather than Level 1 (faster *and* more efficient), charging in milder conditions or a temperate garage when possible (less heating/cooling overhead), and — the big one for cold climates — [preconditioning](/blog/charge-rate-tapering/) the battery while still plugged in, so trip energy heats the pack rather than your next charge fighting the cold. None of these are worth obsessing over; they're just pleasant efficiency bonuses of habits you might adopt anyway.

## The bigger picture

Even with 10–15% loss, home EV charging remains dramatically cheaper per mile than gasoline — the efficiency loss is a small asterisk on a large savings story, not a reason for concern. It's simply the honest accounting: some energy becomes heat on the way to the battery, as it does in every electrical system, and your meter faithfully records the total. Knowing the gap exists just makes your cost estimates accurate and your winter bills unsurprising. The energy isn't wasted so much as spent on the conversion and care that safe, fast charging requires.

## Why the meter is the honest number

The practical upshot of efficiency loss is a rule for accurate cost estimates: always calculate from *metered* energy (what your utility bills), never from battery capacity. Your meter records every kilowatt-hour that entered the charging process, including the 10–15% that became heat rather than stored charge — so the meter already accounts for the loss automatically. Estimate your monthly charging cost by looking at the kWh your utility attributes to charging (or your charger's own energy log, which measures the same thing) times your rate, and you'll get the true number. Estimate it instead from "my battery is 60 kWh, I charged it twice" and you'll underestimate by the efficiency gap every time, because that math ignores the energy lost on the way in. The [cost-per-mile guide](/blog/how-to-estimate-cost-per-mile/) uses metered energy for exactly this reason — it's the only figure that tells the financial truth.

## Efficiency in the bigger cost picture

It's worth keeping efficiency loss in proportion: even at 85% efficiency, home EV charging remains dramatically cheaper per mile than gasoline. The 10–15% loss adds a modest amount to your charging cost, but that cost was so low to begin with that the loss barely dents the enormous advantage over gas. So while it's important to *account* for efficiency loss in accurate estimates (so your budget matches reality and your winter bills don't surprise you), it's not worth *worrying* about or contorting your habits to minimize. The losses are inherent to converting and storing energy, they're small, and chasing them yields little. Adopt the habits that happen to improve efficiency because they're good for other reasons — [Level 2 over Level 1](/blog/trickle-charging-level-1/), preconditioning in the cold — and otherwise let the loss be the small, honest asterisk it is on a large savings story. The energy that becomes heat is simply the modest toll for safe, managed charging, and it's a toll worth paying many times over versus the pump.

## Measuring your own losses

Curious about your actual efficiency? You can measure it loosely with numbers you already have: compare the energy your charger reports delivering (wall-side kWh) against the energy your car reports adding (battery-side kWh) for the same session. The gap between them is your loss, and watching it across seasons makes the abstract percentages concrete — you'll see the winter number worsen as the battery heater takes its cut, and the mild-weather number settle near the optimistic end. It's not precision instrumentation, but it turns efficiency loss from a footnote into something you've observed in your own garage, which makes budgeting intuitive.

## Measuring your own losses

Curious about your actual efficiency? You can measure it loosely with numbers you already have: compare the energy your charger reports delivering (wall-side kWh) against the energy your car reports adding (battery-side kWh) for the same session. The gap between them is your loss, and watching it across seasons makes the abstract percentages concrete — you'll see the winter number worsen as the battery heater takes its cut, and the mild-weather number settle near the optimistic end. It's not precision instrumentation, but it turns efficiency loss from a footnote into something you've observed in your own garage, which makes budgeting intuitive.

## Quick answers

**Is DC fast charging more efficient?** The car-side conversion is skipped, but the station has its own losses and cooling — and its price premium dwarfs efficiency differences.

**Do all EVs lose the same amount?** Roughly similar ranges, with variation by model, charger, and conditions — cold is the biggest swing factor for everyone.

**Can a failing charger waste energy?** A failing *connection* can — heat at a [warm plug](/blog/charger-plug-or-outlet-feels-hot/) is literally your energy leaking as danger. Another reason the palm check matters.

*Educational content. Estimate your real, loss-inclusive charging costs in the [Sim-Lab](/en/sim-lab/).*
