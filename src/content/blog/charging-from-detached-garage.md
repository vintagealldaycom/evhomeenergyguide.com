---
title: "Charging From a Detached Garage: What Changes"
description: "A detached garage adds an underground run, its own code rules, and sometimes a subpanel to the charger install. What changes, what it costs, what to plan."
pubDate: 2026-07-09
category: ev-home-charging
subcategory: "Home Charging"
tags: [home-charging, detached-garage, underground, subpanel]
draft: false
---

Everything about home charging works the same in a detached garage — the charger, the car, the daily routine. What changes is the journey the electricity takes to get there: instead of a wire run through the walls of one building, power must cross open ground between two, and that crossing brings its own code rules, cost drivers, and design decisions. Here's what actually changes, and how to plan the crossing well.

## The crossing: how power reaches a detached structure

Power reaches a detached garage one of two ways, and one of them is almost always the answer for new work. **Underground** — conductors in buried conduit (or direct-burial-rated cable) trenched from the house to the garage — is the modern default: protected, invisible, permanent. **Overhead** — a spanned cable between buildings — still exists on older properties but is rarely chosen new; it has its own clearance rules and weather exposure, and most retrofits replace rather than extend it.

The underground run is governed by specific code requirements that shape the project: **burial depth** (which varies by wiring method — conduit type changes how deep the trench must be), **conduit and conductor ratings** for wet locations (underground conduit is legally a wet location even in a desert — the conductors must be rated for it), and **protected transitions** where the run emerges at each building. None of this is exotic; all of it is precisely the kind of thing [DIY ambition should respect](/blog/install-home-charger-yourself/) — underground electrical is squarely licensed territory in most jurisdictions.

<div class="art-viz">
  <span class="vz-title">Where detached-garage costs come from</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">Trenching (distance × terrain)</span><span class="vz-track"><span class="vz-fill warn" style="width:85%"></span></span><span class="vz-val">usually the biggest line</span></div>
    <div class="vz-row"><span class="vz-label">Conductor (length × gauge)</span><span class="vz-track"><span class="vz-fill" style="width:60%"></span></span><span class="vz-val">scales with the run</span></div>
    <div class="vz-row"><span class="vz-label">Conduit, fittings, transitions</span><span class="vz-track"><span class="vz-fill" style="width:35%"></span></span><span class="vz-val">moderate</span></div>
    <div class="vz-row"><span class="vz-label">Subpanel (if chosen)</span><span class="vz-track"><span class="vz-fill info" style="width:30%"></span></span><span class="vz-val">optional but often wise</span></div>
  </div>
  <span class="vz-note">Lawn trenches are cheap per foot; established hardscape, mature roots, and long distances are where quotes climb.</span>
</div>

Trenching cost is the honest variable: a forty-foot run across open lawn is a modest add to a normal install, while a hundred-plus feet crossing a paved driveway is a genuine project. What's *under* the path matters as much as its length — cutting and restoring concrete or pavers often costs more than the electrical work it exposes. If a landscaping or driveway project is anywhere on your horizon, coordinating the trench with it is real money saved.

## Distance math, doubled

Detached runs are usually the longest in the house, which activates the [distance and voltage-drop considerations](/blog/charger-distance-from-panel/) at full strength: expect the conductor gauge to be driven by the run length as much as the amperage, expect aluminum feeder to be a legitimate cost-saving option worth asking about on long runs, and expect the [amperage-tier decision](/blog/how-to-choose-between-32a-40a-48a/) to matter more than usual — stepping from 48A to 40A on a 120-foot run saves meaningful copper, and overnight charging rarely misses the difference.

## The subpanel question

Here's the design decision specific to detached structures: run a single branch circuit for the charger alone, or run a **feeder to a subpanel** in the garage and branch locally from there?

<div class="art-viz">
  <div class="vz-versus">
    <div class="vz-side"><h4>Single circuit</h4><ul><li>Cheapest version of the crossing</li><li>Right when the garage will only ever charge</li><li>One shot — future loads mean future trenches</li></ul></div>
    <span class="vz-vs">VS</span>
    <div class="vz-side win"><h4>Feeder + subpanel</h4><ul><li>One crossing serves everything, forever</li><li>Charger, lights, openers, workshop, <a href="/blog/charging-two-evs-on-one-circuit/">second charger</a> — all local branches</li><li>Moderately more now, dramatically less later</li></ul></div>
  </div>
</div>

The rule of thumb electricians reach for: **if the garage has, or might ever have, more than one significant electrical want, the subpanel wins** — because the expensive, disruptive part is the trench and the crossing, and you only want to do it once. A subpanel sized generously turns every future garage-electrical idea into a short local branch circuit instead of a new excavation. Detached structures also carry their own **grounding requirements** (a structure with a subpanel needs its own grounding electrode system), which your electrician handles as routine — worth knowing only so its line on the quote makes sense.

## Daily life: almost nothing changes

Once the crossing exists, detached charging is just charging. Two small practical notes: **connectivity** — a [smart charger's Wi-Fi](/blog/charger-wont-connect-wifi-app/) has to reach the detached structure, and a garage at the property's far corner may need a Wi-Fi extender or a charger that tolerates offline operation gracefully (schedules that [persist without the network](/blog/what-makes-a-charger-smart/) are the feature to check); and **the walk** — households in snowy climates learn to appreciate holstering the connector properly and keeping the path shoveled, since the detached garage's convenience is only as good as the trip to it. Neither is a real problem; both are the kind of thing better known before the first January.

## The walkthrough questions for this specific project

Adapting the [electrician interview](/blog/questions-for-electrician-ev-charger/) to the detached case, the additions that matter: "Can the existing conduit or feed to the garage be reused or re-pulled with larger conductors?" (the single question that occasionally saves the entire trench); "What burial depth does your chosen wiring method require, and will the underground portion be inspected before backfill?" (schedules the dig around the inspection, not the reverse); "Circuit or subpanel — and what would the subpanel add to this quote?" (forces the strategic decision into the open with real numbers); and "Where will the run cross the driveway/patio, and who restores the surface?" (the restoration exclusion is the classic detached-project quote surprise). Fifteen minutes of these at the walkthrough converts the detached garage from the intimidating version of the project into merely the longer one.

And a sequencing note that saves real money: if the detached garage is part of any larger property plan — a future ADU, a workshop buildout, landscape renovation — surface those plans at the walkthrough even if they're years off. A conduit sized for the future, a subpanel with spare slots, a trench that anticipates the irrigation project: each costs little as a modification to work already happening and a full project as an afterthought. The trench is the once-per-decade event; make it carry everything it plausibly can.

## Quick answers

**Can I use an existing old circuit already running to the garage?** Have it evaluated — old garage feeds are typically sized for lights and an opener, far below charger loads. Sometimes the existing *conduit* can host new, bigger conductors, which salvages the crossing without re-trenching: the best question to ask at the walkthrough.

**How deep is the trench?** Depends on the wiring method — different conduit and cable types carry different required depths. Your electrician picks the combination; the depth follows.

**Does a detached run need its own permit scrutiny?** It's part of the same [permit and inspection](/blog/ev-charger-installation-permit/), with the underground portions specifically inspected — usually *before* the trench is backfilled, which is why scheduling matters.

**Is overhead ever the right answer?** Occasionally, where trenching is truly impractical — but it's the exception, with its own clearance and support rules. Let the electrician make that case rather than defaulting to it.

## The bottom line

A detached garage changes the middle of the project, not the ends: same charger, same car, same overnight routine — with an underground crossing in between whose cost tracks distance and terrain, and whose design deserves one strategic decision (circuit vs. subpanel) made with the garage's whole future in mind. Trench once, size generously, coordinate with any digging you were going to do anyway, and the detached garage charges exactly like an attached one — plus the walk.

*Educational content, not professional electrical advice — underground runs, subpanels, and grounding are licensed work. Budget the full project in the [Sim-Lab](/en/sim-lab/).*
