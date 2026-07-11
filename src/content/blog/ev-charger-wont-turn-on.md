---
title: "EV Charger Won't Turn On — What It Means and What to Check First"
description: "A completely dark EV charger almost always means no power is reaching it. Trace the path — breaker, outlet, wiring, unit — in the order that finds it fast."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, home-charging, power]
draft: false
---

A charger that won't charge might have a dozen causes. A charger that won't even *turn on* — no lights, no click, no app connection — has basically one: power isn't reaching its electronics. That actually makes your job easier, because instead of guessing at software, you're tracing a physical path, and the path only has a few stops.

Electricity reaches your charger like this: utility → main panel → dedicated breaker → branch wiring → outlet or hardwire connection → charger. A dead unit means the chain is broken at one of those links, and you can test them from cheapest to most expensive.

<div class="art-viz">
  <span class="vz-title">The power path — and where it breaks</span>
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Main panel</strong><span>Whole-house or partial outage. Rare, obvious — is anything else in the house dead?</span></div></div>
    <div class="vz-step"><div><strong>Dedicated breaker</strong><span>The #1 culprit. Trips can look "on" while being off.</span></div></div>
    <div class="vz-step"><div><strong>Branch wiring</strong><span>Loose panel or junction connections. Uncommon, electrician territory.</span></div></div>
    <div class="vz-step"><div><strong>Outlet or hardwire lugs</strong><span>Worn 14-50 outlets are frequent offenders on plug-in installs.</span></div></div>
    <div class="vz-step"><div><strong>The charger itself</strong><span>Internal power supply failure. Rarest — check everything above first.</span></div></div>
  </div>
</div>

## First: confirm it's actually dead

Some chargers look off when they're asleep. Before touching the panel, check the app (does the charger still report status?), tap or wake the unit if it has a display, and plug the car in once — some models only light up on connection. If the app shows the charger online, you don't have a power problem; head to the [not-charging checklist](/blog/ev-charger-not-charging-checklist/) instead.

Dead in the app, dark in person, no response to plugging in? Keep going.

## Step 1: Look for the bigger outage

Quickly rule out the obvious: do lights elsewhere in the house work? Any tripped GFCIs in the garage feeding other things? During regional outages some homes lose one of two supply legs ("single-phasing") — half your house works, and 240V appliances like your charger don't. If anything else 240V (dryer, range) is also dead, call your utility before blaming the charger.

## Step 2: The breaker — properly

Your charger lives on a dedicated double-pole breaker in the panel, typically 40–60A. Two things trip homeowners up here:

**Tripped doesn't look tripped.** When a breaker trips, its handle springs to a middle position that can appear identical to ON from a few feet away. Grab it and feel: a tripped handle is loose and spongy.

**Reset is a two-step motion.** Push the handle firmly to full **OFF** — you'll feel a click as the mechanism re-latches — then back to **ON**. Skipping the off-click is the most common "I already reset it" mistake.

<div class="callout danger"><span class="co-icon">⚠</span><div><strong>Instant re-trip with a loud snap?</strong> Do not reset it again. That's the breaker interrupting a short circuit — repeated forcing risks arc damage inside your panel. This is where you stop and call an electrician, and it's covered in depth in the <a href="/blog/charger-keeps-tripping-breaker/">breaker-tripping walkthrough</a>.</div></div>

If the breaker resets cleanly and the charger lights up: done. But note *why* it tripped matters — a one-time trip after a storm is forgivable; regular trips are a warning.

## Why breaker sizing matters here

EV charging is a *continuous load* — hours at full current, unlike almost anything else in your house. Electrical code requires the circuit to be sized so the charger only ever uses 80% of the breaker's rating. If a previous owner or a DIY install got this wrong, chronic heat-tripping and eventually a dead circuit are the result.

<div class="art-viz">
  <span class="vz-title">Continuous load vs. breaker size (the 80% rule)</span>
  <span class="vz-caption">Each charger current needs headroom above it</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">32A charger</span><span class="vz-track"><span class="vz-fill" style="width:80%"></span></span><span class="vz-val">needs a 40A breaker</span></div>
    <div class="vz-row"><span class="vz-label">40A charger</span><span class="vz-track"><span class="vz-fill" style="width:80%"></span></span><span class="vz-val">needs a 50A breaker</span></div>
    <div class="vz-row"><span class="vz-label">48A charger</span><span class="vz-track"><span class="vz-fill" style="width:80%"></span></span><span class="vz-val">needs a 60A breaker</span></div>
  </div>
  <span class="vz-note">Every bar sits at the 80% ceiling. A 40A charger on a 40A breaker is over the line — and will cook itself off eventually.</span>
</div>

## Step 3: The outlet (plug-in installs)

If your charger plugs into a NEMA 14-50 or 6-50 receptacle, that outlet is a prime suspect — especially if it's a budget model originally intended for a dryer or range that sees an hour of load a week, not eight hours a night.

Kill the breaker, then unplug the charger and inspect:

- **Plug blades:** any bronzing, pitting, or discoloration means heat damage — replace the outlet.
- **Faceplate:** browning or warping around the slots is the same verdict.
- **Grip:** plug it back in (breaker still off). If the plug slides in loosely with little friction, the internal contacts are worn out and no longer gripping — that's high resistance waiting to become heat.

With the breaker back on, a $15 multimeter across the outlet's hot slots should read roughly 240V. Reading near 120V means one leg is dead (breaker or wiring issue); reading zero with a good breaker means a wiring fault between panel and outlet — electrician time.

<div class="callout warn"><span class="co-icon">⚠</span><div>If the outlet shows <strong>any</strong> heat damage, don't just swap in another cheap receptacle. Ask specifically for an <strong>EV-rated / industrial-grade</strong> outlet — the few extra dollars buy contacts designed for continuous load. Our guide on <a href="/blog/melted-or-discolored-plug/">melted and discolored plugs</a> shows what failure looks like.</div></div>

## Step 4: Hardwired units

Hardwired chargers skip the outlet but add two other checkpoints: the wiring lugs inside the unit and, on many installs, a small service disconnect box near the charger. Check whether that disconnect has been switched off — landscapers and curious kids find these. Anything beyond flipping the disconnect (opening the charger's wiring compartment, tightening lugs) is electrician work; those terminals can remain energized in ways that aren't obvious.

## Step 5: Judging the charger itself

If the breaker is good, the outlet delivers 240V, and the unit is still stone dead, you've isolated it: the charger's internal power supply has failed. Before writing it off:

1. Leave it completely unpowered for five minutes, then re-energize — a full drain clears some latched fault states.
2. Check the manufacturer's app or site for a known recovery procedure (a few models ship a hardware reset button behind a grommet).
3. Then call the manufacturer's support line with your findings: "breaker good, 240V confirmed at the receptacle, unit unresponsive." That sentence usually skips you past two tiers of scripted support.

Most quality chargers carry a 2–3 year warranty; a documented dead unit with power confirmed at the plug is a clean warranty claim.

## The storm-and-surge special

A charger that died the same week as a thunderstorm, utility work, or a neighborhood outage earns its own paragraph, because power *returning* is often harder on electronics than power leaving. Restoration surges and the voltage wobble of a grid coming back up are a classic killer of the switching power supplies inside wall-mounted electronics — and your charger's supply is energized 24/7, so it catches every event. If your timeline fits, do the full five-minute power drain before anything else; latched fault states from a voltage event are the most recoverable kind of "dead." If the unit stays dark, mention the storm in your warranty call (manufacturers know this failure mode well), and going forward consider a **whole-panel surge protective device** — a modest electrician add-on that stands guard over the charger and everything else you own with a circuit board. There's a full restart walkthrough for post-outage weirdness in [charging stopped after a power outage](/blog/charging-stopped-after-power-outage/).

## The five-minute version

<div class="art-viz">
  <span class="vz-title">Dead charger: the short path</span>
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Anything else in the house dead?</strong><span>Yes → utility/panel problem, not the charger.</span></div></div>
    <div class="vz-step"><div><strong>Breaker: full OFF, click, then ON</strong><span>Lights up → done. Re-trips instantly → electrician.</span></div></div>
    <div class="vz-step"><div><strong>Inspect the plug &amp; outlet</strong><span>Any browning → replace with an EV-rated outlet.</span></div></div>
    <div class="vz-step"><div><strong>Meter says 240V, unit still dark</strong><span>Charger is dead → 5-minute power drain, then warranty call.</span></div></div>
  </div>
</div>

Everything here that involves your hands — flipping breakers, unplugging, looking — is homeowner-safe. Everything that involves a screwdriver near 240V is not. Know which side of that line you're on, and this is a fault you can usually pin down before dinner.

*Educational content, not professional electrical advice. For sizing a new circuit or charger, run the numbers first in the [Sim-Lab](/en/sim-lab/).*
