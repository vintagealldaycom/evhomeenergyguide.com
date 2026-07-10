---
title: "Why Your EV Charger's LED Is Flashing Red (and What Each Color Means)"
description: "A flashing red LED means your charger tripped a safety fault. Decode every color — green, blue, amber, solid red — and learn the fix for each state."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, led-codes, home-charging]
draft: false
---

That little light on your charger isn't decoration — it's the charger's entire vocabulary. Home charging stations constantly monitor voltage, current balance, ground integrity, and temperature, and the LED is how they report what they see. When it flashes red, the unit isn't broken; it's telling you, in the only language it has, that it caught something dangerous and shut itself down on purpose.

Brands differ in the details (blink counts, exact shades), but the color conventions are remarkably consistent across the industry. Here's the full decoder, and then what to actually do about the red ones.

<div class="art-viz">
  <span class="vz-title">LED color quick-reference</span>
  <table class="vz-table">
    <tr><th>LED state</th><th>What it means</th><th>What to do</th></tr>
    <tr><td><span class="vz-badge ok">Green</span></td><td>Ready, or charging complete</td><td>Nothing — all good</td></tr>
    <tr><td><span class="vz-badge info">Blue / pulsing</span></td><td>Charging, or negotiating with the car</td><td>Nothing — session in progress</td></tr>
    <tr><td><span class="vz-badge info">White</span></td><td>Standby / sleep / Wi-Fi setup done</td><td>Plug in to wake it</td></tr>
    <tr><td><span class="vz-badge warn">Amber / yellow</span></td><td>Derated power: heat, load sharing, or a soft limit</td><td>Still charging, just slower — find the limit</td></tr>
    <tr><td><span class="vz-badge danger">Solid red</span></td><td>Hard internal fault</td><td>Power-cycle at the breaker; if it returns, warranty call</td></tr>
    <tr><td><span class="vz-badge danger">Flashing red</span></td><td>Active safety trip — ground fault, overcurrent, or pilot error</td><td>Stop and diagnose — this article, below</td></tr>
  </table>
</div>

## What flashing red actually is

Inside every listed home charger is a safety watchdog: a sensor package that compares the current flowing out to the car against the current coming back. In a healthy circuit those two match perfectly. If they don't — even by a few thousandths of an amp — electricity is escaping somewhere it shouldn't: through moisture, damaged insulation, or in the worst case, a person. The charger opens its contactor in a fraction of a second and flashes red to tell you why nothing is happening.

The same red flash covers a few sibling faults — overcurrent, a pilot-signal failure between charger and car, or a grounding problem in the outlet — and most chargers encode which one via *blink patterns*.

## Count the blinks

Grab the manual (or the manufacturer's app, which usually spells the fault out in plain text). Blink-count conventions vary by brand, but a typical scheme looks like:

<div class="art-viz">
  <span class="vz-title">Typical blink-pattern scheme</span>
  <span class="vz-caption">Always confirm against your model's manual — brands differ</span>
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Steady rapid flash</strong><span>Ground fault (current leaking to ground). The most common red state.</span></div></div>
    <div class="vz-step"><div><strong>Groups of 2–3 blinks</strong><span>Pilot or communication error — car and charger stopped talking mid-handshake.</span></div></div>
    <div class="vz-step"><div><strong>Groups of 4–5 blinks</strong><span>Over/under-voltage or overcurrent on the supply side.</span></div></div>
    <div class="vz-step"><div><strong>Alternating red/amber</strong><span>Internal temperature fault — the unit derated, then gave up.</span></div></div>
  </div>
</div>

## The fix sequence for a ground-fault flash

Ground faults are the big one, and the cause is usually *outside* the charger. Work through this:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Unplug and inspect the connector</strong><span>Look inside the handle and the car's port for moisture, corrosion (green/white crust), or bent pins. Water in the handle after rain is the single most common trigger.</span></div></div>
    <div class="vz-step"><div><strong>Walk the cable</strong><span>Run the full length through your hands. Cuts, crush marks from a car tire, or a chewed section (rodents love cable jacket) can leak current to ground.</span></div></div>
    <div class="vz-step"><div><strong>Dry everything, then retry</strong><span>If the port or handle was wet, let it dry fully. Many "faulty charger" service calls are just a damp connector.</span></div></div>
    <div class="vz-step"><div><strong>Reset properly</strong><span>Breaker to full OFF, wait 60 seconds, back ON. This clears the latched fault. Plug in and watch.</span></div></div>
    <div class="vz-step"><div><strong>If it flashes red again immediately</strong><span>The fault is real and persistent: damaged cable, failing outlet ground, or a fault inside the car's charging system. Time for the isolation test below.</span></div></div>
  </div>
</div>

<div class="callout danger"><span class="co-icon">⚠</span><div><strong>Never bypass a red flash.</strong> No adapter tricks, no taping the connector, no "it still works if I jiggle it." The charger is refusing to energize a circuit it believes is leaking current. It is protecting you from exactly the scenario GFCI hardware was invented for.</div></div>

## Is it the charger, the cable, or the car?

A persistent red flash needs one question answered: which side of the connector owns the fault?

**Test the car elsewhere.** Charge at a public Level 2 station. If the car charges cleanly there, your car is innocent and the fault lives in your charger, cable, or home circuit. If the *public* charger also faults out, your car's charge port or onboard charger is leaking — that's a dealer visit, and no home fix will help.

**Test the circuit.** If the car passes in public, have an electrician verify the outlet's ground connection and the circuit's insulation. A deteriorated ground at a worn 14-50 receptacle produces exactly this symptom and is a cheap fix.

**Then the charger.** Car passes, circuit passes, still flashing? The charger's internal sensing hardware has likely failed or drifted — a documented case like this ("faults on a verified-good circuit with a verified-good vehicle") is a strong warranty claim.

## The amber light deserves a word

Amber isn't an error — it's your charger telling you it deliberately slowed down. Three common reasons: it's sharing a circuit with another charger (load management), its internal temperature climbed on a hot day in a closed garage, or a current limit was set in the app. If your charging suddenly got slow but never stops, amber plus our guide on [charging speed drops](/blog/charging-speed-suddenly-dropped/) will find it.

## Brand quirks worth knowing

The color conventions hold industry-wide, but a few behaviors differ enough to cause false alarms. Some chargers dim or fully sleep their LEDs after a period of inactivity to reduce light pollution in a garage — a dark unit isn't necessarily a dead one, so check the app before checking the panel. Others use their light bar as a *progress meter* during charging, filling gradually, which new owners sometimes read as a stuck or partial fault. And several brands express Wi-Fi problems on the same LED as electrical status — a slow amber or white blink after a router change is usually the charger sulking about lost connectivity, not a power issue. When in doubt, the app's plain-text status outranks your interpretation of the light, and the manual's LED table outranks both.

## Keep the light green: prevention

Most red-flash incidents trace back to the connector's life outdoors, and a few habits eliminate the bulk of them:

- **Holster the handle.** Use the charger's dock or holster every time rather than draping the handle over a hook or letting it rest on the ground. Nearly all moisture and pin-damage faults start with an exposed connector face.
- **Point the face down** if you have no holster, so rain and condensation drain out instead of pooling on the pins.
- **Walk the cable seasonally.** A two-minute hand-over-hand check each season catches jacket damage while it's still cosmetic — before a nick lets water reach the conductors and wakes up the ground-fault detector.
- **Keep firmware current.** Several manufacturers have shipped updates that reduced false ground-fault trips; a charger flashing red for a bug that was fixed a year ago is a genuinely avoidable annoyance.
- **Reset with the 60-second rule.** Whenever you do clear a fault, give the unit a full minute of dead power. Short off-on flicks can leave fault latches set and make you chase a problem that's already gone.

## When red means "call now"

Most red flashes are a damp connector or a settled fault that clears with one proper reset. But pair a red LED with **any** physical symptom — heat at the plug, buzzing, a burning smell, discoloration — and you're no longer troubleshooting; you're in [emergency territory](/blog/burning-smell-near-ev-charger/). Breaker off, hands off, electrician on the phone.

For everything else: count the blinks, check the connector, walk the cable, reset once properly. The light is on your side — it's the one part of the system whose whole job is telling you the truth.

*Educational content, not professional electrical advice. Curious what a healthy charging session should cost? Run it in the [Sim-Lab](/en/sim-lab/).*
