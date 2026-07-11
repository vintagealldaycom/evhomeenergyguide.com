---
title: "Your EV's Onboard Charger: Why It Limits Charging Speed"
description: "The real charger lives inside your car, and its size sets your home charging speed. Learn what the onboard charger does and why a bigger wall unit won't help."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, onboard-charger, charging-speed, home-charging]
draft: false
---

Here's a scenario that plays out in garages everywhere: someone buys the most powerful home charger they can find, expecting lightning-fast charging, and their car charges at exactly the same speed it always did. They assume the charger is broken. It isn't. They've just met the component that actually governs home charging speed — and it's not the thing they bought. It's the **onboard charger**, and it lives inside the car.

Understanding this one component answers a startling number of "why does my car charge like this?" questions, and it's the single best defense against overspending on equipment your car can't use.

## What the onboard charger is

As we cover in [what is an EVSE](/blog/what-is-an-evse/), your home's power arrives as AC, but your battery stores DC — and something must convert one to the other. That converter is the **onboard charger (OBC)**, built into your vehicle. When you charge at home (AC charging), the wall unit hands AC to the car, and the OBC does the real work: converting it to DC, managing the flow into the battery, and coordinating with the battery management system.

The critical fact: **the OBC has a maximum throughput, and it's often lower than you'd expect.** That maximum is your home charging ceiling, full stop. No wall unit, however powerful, can push a car's OBC past its rated limit.

## The numbers that decide your speed

Onboard chargers are rated in kW, and the range across real cars is wide:

<div class="art-viz">
  <span class="vz-title">Onboard charger size sets your home speed</span>
  <span class="vz-caption">Common OBC ratings and what they mean overnight</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">3.3–3.6 kW (early / some PHEVs)</span><span class="vz-track"><span class="vz-fill warn" style="width:30%"></span></span><span class="vz-val">~10–13 mi/hr</span></div>
    <div class="vz-row"><span class="vz-label">6.6–7.7 kW (very common)</span><span class="vz-track"><span class="vz-fill" style="width:63%"></span></span><span class="vz-val">~22–28 mi/hr</span></div>
    <div class="vz-row"><span class="vz-label">9.6–11.5 kW (many modern EVs)</span><span class="vz-track"><span class="vz-fill" style="width:100%"></span></span><span class="vz-val">~30–40 mi/hr</span></div>
    <div class="vz-row"><span class="vz-label">19–22 kW (rare, premium)</span><span class="vz-track"><span class="vz-fill info" style="width:100%"></span></span><span class="vz-val">needs a big circuit too</span></div>
  </div>
  <span class="vz-note">Find your car's number in the spec sheet under "onboard charger" or "AC charging" — and note it can vary by trim.</span>
</div>

Here's the rule that ties it together: **your actual charging speed is whichever is lower — what the wall unit can supply, or what the car's OBC can accept.** It's a bottleneck, and the narrower end wins.

<div class="art-viz">
  <span class="vz-title">The bottleneck rule in action</span>
  <table class="vz-table">
    <tr><th>Wall unit supplies</th><th>Car's OBC accepts</th><th>You actually get</th></tr>
    <tr><td>11.5 kW</td><td>7.7 kW</td><td><span class="vz-badge warn">7.7 kW — car is the limit</span></td></tr>
    <tr><td>7.7 kW</td><td>11.5 kW</td><td><span class="vz-badge warn">7.7 kW — wall unit is the limit</span></td></tr>
    <tr><td>11.5 kW</td><td>11.5 kW</td><td><span class="vz-badge ok">11.5 kW — matched</span></td></tr>
  </table>
</div>

That first row is the overspending trap: an 11.5 kW charger feeding a 7.7 kW car delivers 7.7 kW, and the extra capacity you paid for sits unused. The second row is the opposite mistake — a fast car throttled by an undersized wall unit. The goal is the third row: match the equipment to the car.

## Why "just buy DC fast charging for home" isn't a thing

People sometimes ask why home charging can't be as fast as a road-trip fast charger. The answer is the OBC again. **DC fast charging bypasses the onboard charger entirely** — the giant roadside machine does the AC-to-DC conversion itself and sends DC straight to the battery. That's why it can deliver 150+ kW. Building that capability into a home unit is impossible in a normal sense: it would need industrial-grade power your house doesn't have, and the conversion hardware that makes a fast charger the size of a refrigerator. Home charging works *through* the OBC by design, so the OBC's limit always applies. More on this split in [AC vs DC charging](/blog/ac-vs-dc-charging/).

<div class="callout info"><span class="co-icon">ⓘ</span><div><strong>Why onboard chargers are "small":</strong> automakers size the OBC to balance cost, weight, and heat against realistic overnight needs. A 7.7 kW OBC fully charges most cars overnight — so a bigger, heavier, pricier converter would add cost for speed you'd rarely use at home. It's a sensible trade, not a defect.</div></div>

## How to use this knowledge

**When buying a charger:** look up your car's OBC rating first, then buy an EVSE that meets — not wildly exceeds — it, within what your electrical panel supports. A 7.7 kW car pairs perfectly with a 40-amp (9.6 kW) circuit, which leaves a little headroom without waste. Our [32A/40A/48A guide](/blog/how-to-choose-between-32a-40a-48a/) walks the sizing.

**When your charging seems slow:** before suspecting a fault, confirm your car's OBC rating and check whether you're simply getting exactly what it accepts. "Slow" that matches your OBC spec isn't slow — it's correct. Genuine unexpected slowdowns are a different diagnosis, covered in [charging speed suddenly dropped](/blog/charging-speed-suddenly-dropped/).

**When comparing cars:** the OBC rating is a real spec worth weighing if home charging speed matters to you — two otherwise-similar EVs can differ by 2× in how fast they charge overnight.

**One future-proofing nuance:** if you're wiring a new circuit, it's often worth installing for a bit more capacity than your *current* car needs, since your next car may have a bigger OBC. The wiring is the expensive, disruptive part; sizing the circuit generously now is cheap insurance even if today's car can't use all of it. That's the one case where "bigger" is genuinely smart — you're future-proofing the *circuit*, not overbuying the charger for today's car.

The onboard charger is the quiet decision-maker in your garage. It's why speeds differ between cars, why bigger wall units hit a wall, and why the smart move is always to check the car's number first. Learn that one spec about your vehicle, and home charging stops being mysterious.

## Two cars, one lesson

Nothing illustrates the onboard charger's role like a two-EV household. Park a modern long-range EV and an older commuter EV in the same garage, plug both into identical chargers, and watch them fill at completely different speeds — the modern car might accept 11.5 kW while the commuter tops out at 3.6 kW. Neither charger is faster or slower; the *cars* are different. New owners of the slower car sometimes spend money on a bigger charger trying to "fix" this, never realizing the ceiling is bolted inside their vehicle. The onboard charger is why "which charger should I buy?" always starts with "what car do you have?" — the car's spec sheet, not the charger's box, holds the answer.

## The spec that outlives the car

One reason to learn your onboard charger rating: it's a permanent fact about your specific vehicle that never changes, unlike the variable factors (weather, battery level) that also affect speed. Once you know your car accepts, say, 7.7 kW, you know its home-charging ceiling for as long as you own it — no charger will exceed it, no app setting will unlock more, and any "slowness" at or below that number is simply the car being itself. That single number turns a lot of charging anxiety into settled knowledge. When shopping for your *next* EV, it's also a spec worth comparing if overnight speed matters to you: two cars with similar range can charge at very different home speeds purely because of their onboard chargers, and that difference is invisible on the window sticker but obvious in your garage every night.

## The spec-sheet shortcut

When comparing cars, you don't need to memorize kW figures — just ask one question at the dealership or in the listing: "what's the maximum AC charging rate?" If the answer is vague, the spec sheet's "onboard charger" line settles it. Two minutes of checking prevents the most common post-purchase surprise in home charging: discovering your new car fills the garage hours slower than the old one because nobody mentioned the smaller onboard charger. It's an unglamorous spec that quietly shapes every night of ownership.


*Educational content, not professional electrical advice. Match your circuit to your car with help from the [Sim-Lab](/en/sim-lab/).*
