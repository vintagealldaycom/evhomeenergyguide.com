---
title: "How Far Can Your Charger Be From the Electrical Panel?"
description: "There's no hard distance limit for EV charger circuits — but distance drives wire size, voltage drop, and cost. How far is practical, and what long runs need."
pubDate: 2026-07-09
category: ev-home-charging
subcategory: "Home Charging"
tags: [home-charging, wire-run, voltage-drop, installation]
draft: false
---

Your electrical panel is in the basement's far corner; the car parks on the opposite side of the house. Is that too far for a charger circuit? The reassuring headline: **there is no code-imposed maximum distance** — circuits can run as far as they need to. The honest follow-up: distance is never free. Every foot adds cost, and past certain lengths the wire itself must grow thicker to stay efficient and safe. Here's how distance really works, so you can evaluate your own layout — and your electrician's quote — with clear eyes.

## What distance actually does: voltage drop

Wire has resistance, and current flowing through resistance loses a little voltage along the way — a phenomenon called **voltage drop**. Over a short run it's negligible. Over a long run at high current, it adds up: the charger at the far end receives measurably less than the panel sent, which means slightly slower charging, a bit of energy [lost as heat in the walls](/blog/charging-efficiency-loss/), and — in extreme cases — equipment operating below its design voltage.

<div class="art-viz">
  <span class="vz-title">Voltage drop: distance × current = loss</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">25 ft run @ 40A, standard gauge</span><span class="vz-track"><span class="vz-fill" style="width:15%"></span></span><span class="vz-val">~0.5% drop — trivial</span></div>
    <div class="vz-row"><span class="vz-label">75 ft run @ 40A, same gauge</span><span class="vz-track"><span class="vz-fill" style="width:45%"></span></span><span class="vz-val">~1.5–2% — fine</span></div>
    <div class="vz-row"><span class="vz-label">150 ft run @ 40A, same gauge</span><span class="vz-track"><span class="vz-fill warn" style="width:90%"></span></span><span class="vz-val">~3–4% — upsize the wire</span></div>
  </div>
  <span class="vz-note">Illustrative magnitudes. The standard design target keeps total drop around 3% or less — and the fix for a long run is simply thicker wire.</span>
</div>

The industry convention targets roughly **3% or less** voltage drop on a branch circuit. Within that budget, distance is a non-issue. Beyond it, the electrician doesn't refuse the job — they **upsize the wire gauge**, whose lower resistance brings the drop back inside the target. That's the entire technical story: distance doesn't create a wall, it creates a wire-sizing decision.

## What that means in practice

For typical charger circuits, the practical breakpoints look like this: runs up to roughly 50–75 feet generally use the standard gauge the amperage alone would dictate — distance costs you only the wire's footage price. Somewhere beyond that (the exact point depends on amperage — [higher-amp circuits](/blog/how-to-choose-between-32a-40a-48a/) hit the threshold sooner), the calculation tips and the run wants the next gauge up. Very long runs — a charger at a [detached garage](/blog/charging-from-detached-garage/) 150+ feet away — may go up two sizes, and thick copper over long distances is where quotes climb noticeably.

<div class="art-viz">
  <div class="vz-gauge">
    <div class="vz-ring info" style="--p:62"><span>$/ft</span></div>
    <div class="vz-gauge-text"><strong>Distance is a cost curve, not a limit</strong>The same 48A charger might need modest wire at 30 feet and substantially heavier conductor at 120 feet — with the materials cost scaling on both dimensions at once (thicker × longer). This is why two neighbors with identical chargers can see very different install quotes: the panel-to-parking distance is often the biggest variable in the whole job.</div>
  </div>
</div>

Two cost notes worth knowing before quotes arrive. First, **routing distance beats straight-line distance** — wire travels along walls, through joists, around obstacles, and the honest run length can be half again the tape-measure distance. Second, for very long or high-amp runs, electricians sometimes quote **aluminum conductor** as a cost-saving alternative to copper; properly sized and terminated, modern aluminum feeder cable is legitimate for this use and can cut material costs meaningfully on big runs — a reasonable question to ask on any quote north of 100 feet.

## The strategic responses to a long run

If your layout puts the car far from the panel, you have more options than paying for copper by the yard. **Reconsider the charger's position:** the charger needs to reach the *car's charge port*, not the car's centroid — sometimes shifting the mounting point twenty feet (or choosing a [longer-cable charger model](/blog/charger-cable-length-driveway/)) shortens the wire run dramatically. **Right-size the amperage:** a [32A charger on a 40A circuit](/blog/charger-amperage-setting/) needs thinner wire than a 48A on a 60A — on a long run, stepping down an amperage tier you didn't really need can pay for itself in copper, especially since overnight charging rarely needs maximum speed. **A subpanel for big projects:** if the far side of the house will eventually host more loads (workshop, second charger, ADU), running one feeder to a subpanel there — then short branch circuits from it — often beats multiple long home-runs. That's a bigger conversation for the [electrician visit](/blog/questions-for-electrician-ev-charger/), but worth raising if the long run is part of a larger pattern.

## How this shows up in your quote — and your checklist

A good installer handles all of this automatically; your job is just to recognize it in the paperwork. A quote for a longer run should show the run length, the wire size chosen, and (if asked) the voltage-drop reasoning. A quote that specifies the same wire gauge for your 130-foot run that the amperage chart alone suggests is worth a question — not an accusation, a question, since the answer may be a legitimate calculation you're not seeing. After installation, one simple verification closes the loop: with the car charging at full rate, the charger's app (or the car's screen) shows the delivered voltage — comfortably above 230V under load on a nominal-240V service means the run was sized right. Meaningfully lower under load is worth a callback conversation.

## A worked example to make it concrete

Put numbers on a realistic case: panel in the basement's southeast corner, charger location on the garage's northwest wall — 38 feet as the crow flies, but the wire's actual path (up, across the joists, around the stairwell, down the garage wall) measures 61 feet. At [40 amps](/blog/how-to-choose-between-32a-40a-48a/), 61 feet sits comfortably inside the standard-gauge zone: voltage drop lands near 1.5%, the quote carries no distance premium beyond footage, and the whole topic stays invisible. Stretch the same house — charger on a detached pad 130 routing-feet away — and the math tips: standard gauge would approach 3.5% drop at full draw, so the electrician steps up a gauge (or quotes aluminum feeder), the materials line grows accordingly, and dropping the charger to 32A becomes a legitimate cost lever worth discussing. Same house, same charger, two different projects — with routing distance as the only variable that changed. That's the whole lesson in one lot.

## Quick answers

**Is there any distance where it's just impossible?** Practically, no — with appropriately sized conductors, even several-hundred-foot runs (think detached shops) are routine. Cost, not physics, is the limiter.

**Does a long run affect my electricity bill?** Marginally — voltage drop is energy [lost as heat in the wire](/blog/charging-efficiency-loss/), but at a well-designed ≤3%, it's a rounding error on the charging line.

**Can I extend an existing short circuit to reach farther?** Extending a circuit changes its voltage-drop math and must be re-evaluated (and permitted) — it's not just splicing more wire on. Electrician territory.

**Does conduit type matter for distance?** Not for the drop math, but underground portions have their own [burial and conduit rules](/blog/charging-from-detached-garage/) that interact with the routing choice.

## The bottom line

Distance from the panel is a budgeting variable, not a barrier: no code maximum exists, voltage drop is the only physics in play, and thicker wire solves it at a price that scales with the feet. Measure the honest routing distance, consider whether charger placement or a lower amperage tier can shorten or slim the run, and let the quote show its wire-sizing work. The car can park wherever your life needs it to — the panel will reach.

*Educational content, not professional electrical advice — wire sizing and voltage-drop calculations are your electrician's to certify. Budget the whole install in the [Sim-Lab](/en/sim-lab/).*
