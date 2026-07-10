---
title: "Do All EVs Charge at the Same Speed on One Charger?"
description: "Plug two different EVs into the same charger and they can charge at very different speeds. Why the car — not the charger — usually sets the pace."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, charging-speed, onboard-charger, home-charging]
draft: false
---

Here's a scenario that surprises people: two different EVs, the same home charger, the same outlet — and one charges noticeably faster than the other. If the charger is identical, how can the speed differ? The answer reveals one of the most useful truths in EV ownership: **the car usually sets the charging speed, not the charger.** Understanding this saves you from buying equipment that can't help.

## The charger offers; the car decides

A home charger doesn't *push* a fixed speed into every car. It *offers* up to its maximum, and each car takes what its own [onboard charger](/blog/onboard-charger-explained/) can accept. The actual speed is whichever is lower — the charger's offer or the car's acceptance.

<div class="art-viz">
  <span class="vz-title">Same charger, two cars, different speeds</span>
  <table class="vz-table">
    <tr><th>Charger offers</th><th>Car accepts</th><th>Actual speed</th></tr>
    <tr><td>11.5 kW</td><td>Car A: 7.7 kW</td><td><span class="vz-badge warn">7.7 kW</span></td></tr>
    <tr><td>11.5 kW</td><td>Car B: 11.5 kW</td><td><span class="vz-badge ok">11.5 kW</span></td></tr>
    <tr><td>11.5 kW</td><td>Car C: 3.6 kW</td><td><span class="vz-badge danger">3.6 kW</span></td></tr>
  </table>
</div>

Same charger, three completely different speeds — because the cars have different onboard chargers. Car C (perhaps an older EV or a PHEV) charges at a third of Car B's speed on the exact same equipment. The charger was never the variable.

## Why onboard chargers differ so much

Automakers size each car's onboard charger based on cost, weight, battery size, and expected use. The result is a wide spread across the market:

<div class="art-viz">
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">Some PHEVs / older EVs</span><span class="vz-track"><span class="vz-fill warn" style="width:30%"></span></span><span class="vz-val">3.3–3.6 kW</span></div>
    <div class="vz-row"><span class="vz-label">Many mainstream EVs</span><span class="vz-track"><span class="vz-fill" style="width:67%"></span></span><span class="vz-val">6.6–7.7 kW</span></div>
    <div class="vz-row"><span class="vz-label">Modern longer-range EVs</span><span class="vz-track"><span class="vz-fill" style="width:100%"></span></span><span class="vz-val">9.6–11.5 kW</span></div>
  </div>
</div>

A household with two EVs can genuinely have one that charges three times faster than the other on the same charger — and that's normal, not a fault.

## When the charger IS the limit

The car sets the pace *only when the charger can offer at least as much as the car accepts.* Flip it around and the charger becomes the bottleneck:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Fast car + small charger = charger limits</strong><span>An 11.5 kW car on a 7.7 kW charger gets 7.7 kW. Here the charger is the ceiling.</span></div></div>
    <div class="vz-step"><div><strong>Slow car + big charger = car limits</strong><span>A 3.6 kW car on an 11.5 kW charger gets 3.6 kW. Here the car is the ceiling.</span></div></div>
    <div class="vz-step"><div><strong>The rule: lower number wins</strong><span>Actual speed = the smaller of (charger offers, car accepts). Always.</span></div></div>
  </div>
</div>

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The practical takeaway:</strong> before blaming a "slow charger," check your car's onboard charger rating. If the car caps at 7.7 kW, it will charge at 7.7 kW on <em>any</em> home charger, and a bigger unit changes nothing. The fix for slow charging is only a bigger charger when the <em>charger</em> is the smaller number.</div></div>

## What this means when you buy

This is why the buying advice is always "check your car first." A charger's headline speed is a *maximum offer* — useful only to the extent your car can accept it. Match the charger to your car's acceptance (plus [circuit headroom for the future](/blog/how-to-choose-between-32a-40a-48a/)), and don't pay for offer capacity your car will decline.

It also explains the two-EV household puzzle: if you share one charger between a fast-accepting car and a slow one, the charger serves each at *its own* max — no conflict, they just charge at different rates. Only if you charge [both at once on one circuit](/blog/charging-two-evs-on-one-circuit/) does sharing math enter the picture.

## Other things that affect speed (besides the two limits)

The charger-vs-car ceiling is the main story, but a few other factors nudge real-world speed on any given day: [battery temperature](/blog/charge-rate-tapering/) (cold batteries accept less), state of charge (charging [slows near full](/blog/charge-rate-tapering/) regardless of equipment), and your home's actual voltage. These modulate the speed within the ceiling — they don't override the fundamental rule that the lower of charger-offer and car-acceptance sets your maximum.

So no, all EVs do not charge at the same speed on the same charger — and now you know why. The charger makes an offer; each car accepts according to its own onboard charger; and the smaller number wins. Learn your car's number, and you'll never again mistake a car's limit for a charger's fault.

## The household comparison test

If you want to *see* this principle in action, a two-EV household is a live demonstration. Plug both cars into the same charger on different nights and compare the charging power each reports — you'll often find a meaningful gap, with one car drawing significantly more than the other from identical equipment. That gap is the two cars' onboard chargers, plain as day. It's also a useful diagnostic instinct: if one of your cars suddenly charges slower than its usual self on a charger the other car uses at full speed, the problem is likely with that specific car (or the conditions that night), not the shared equipment — because you have a built-in control. Understanding that the car sets the pace turns "why is charging slow?" from a mystery into a two-part question: is it this car's normal limit, or a change worth investigating?

## Why this saves shopping mistakes

The practical payoff of knowing the car sets the speed is that it stops you from solving the wrong problem. When home charging feels slow, the instinct is to buy a faster charger — but if your car's onboard charger is the limit, a bigger charger changes nothing, and you've spent money for no benefit. The correct first step is always to check your car's maximum AC charging rate and confirm whether you're simply getting exactly what it accepts. Only if your charger is delivering *less* than your car could accept does a bigger or better-configured charger help. This one habit — check the car's number before blaming or upgrading the charger — prevents the single most common and expensive home-charging shopping mistake. The charger makes an offer; your car decides how much to take; and no amount of extra offer helps if the car's acceptance is the ceiling. Learn your car's number, and you'll never chase speed in the wrong place.

## Renting or borrowing a car?

This principle matters most the first time you drive an EV that isn't yours. A rental or borrowed EV on your home charger will charge at *its* onboard charger's pace, not your usual car's — so don't be alarmed when the loaner fills slower (or surprised when it fills faster). Same wall, different car, different speed, all normal. Check the unfamiliar car's screen for its charging rate and let the math reset your expectations for the week.

## Renting or borrowing a car?

This principle matters most the first time you drive an EV that isn't yours. A rental or borrowed EV on your home charger will charge at *its* onboard charger's pace, not your usual car's — so don't be alarmed when the loaner fills slower (or surprised when it fills faster). Same wall, different car, different speed, all normal. Check the unfamiliar car's screen for its charging rate and let the math reset your expectations for the week.

## Quick answers

**Do software updates ever change a car's acceptance rate?** Occasionally — manufacturers have adjusted charging behavior via updates. The hardware ceiling, though, is fixed.

**Why does the same car charge differently on two chargers?** Different configured amperage, circuit limits, or voltage — the car's ceiling is constant; the offer varies.

**Does battery size affect speed?** Not the rate — a bigger battery just takes longer to fill at the same kW.

*Educational content. Match charger to car in the [Sim-Lab](/en/sim-lab/).*
