---
title: "Charger Runs Fine for Weeks, Then Suddenly Fails — What Changed"
description: "A charger that works perfectly for weeks and then quits isn't random — it's a slow process crossing a threshold. Learn the four decay patterns behind it."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, diagnostics, home-charging]
draft: false
---

"It was working fine, and then one day it just stopped." Every electrician and every support line hears this daily, and here's the uncomfortable truth behind it: equipment almost never *just stops*. What actually happens is that a slow process — loosening, corroding, fatiguing, drifting — runs quietly for weeks or months below the threshold where anything visibly fails, and then one session crosses the line. The failure was sudden; the *failing* wasn't.

This matters practically, not philosophically: sudden-looking failures with slow causes leave evidence trails, and the trail tells you what to fix. There are four decay patterns behind nearly every works-then-quits story, each with its own fingerprints.

## Pattern 1: The loosening connection

The star of this genre. A terminal screw, plug contact, or panel lug that's fractionally loose doesn't fail — it *cycles*. Every charging session heats it (expansion), every night cools it (contraction), and thousands of micro-movements later it's looser, hotter, and oxidizing. For weeks the connection carries current fine; the decline shows up only as trends: a plug slightly warmer than last month, sessions occasionally [dropping](/blog/charging-session-stops-mid-charge/), maybe a faint [buzz](/blog/charger-clicks-or-buzzes/). Then one night resistance crosses the threshold — the breaker heat-trips, or voltage sags enough that the charger faults, or in the bad version the [smell arrives](/blog/burning-smell-near-ev-charger/).

**Fingerprints:** failures preceded by weeks of subtle heat/warmth trend; the morning-after retry works (cooling re-made the contact — the trap that keeps people from acting); failures arrive later in sessions at first, then earlier and earlier. **The fix:** an electrician re-torquing the specific junction — and if the failure point is a budget receptacle, its [upgrade](/blog/melted-or-discolored-plug/) or a hardwire conversion.

## Pattern 2: The wearing mechanism

Everything you physically touch is a consumable. The handle latch, the connector pins, the cable's internal strands, the receptacle's grip springs — each has a cycle life, and daily charging spends it. Wear-based failure has the gentlest slope of the four: things get gradually *fussier* long before they stop. The connector needs a firmer push than it used to. Sessions occasionally need a second insertion. The [handshake](/blog/charger-handshake-failure/) drops if the cable hangs at the wrong angle.

**Fingerprints:** intermittency that responds to physical persuasion — reseating, jiggling, pressing — and a slow rise in how often persuasion is needed. **The fix:** identify the worn part via the handshake guide's wiggle-and-latch tests, and replace it (handles and tethered cables are serviceable parts on most brands; worn receptacles are a $50 electrician stop).

<div class="art-viz">
  <span class="vz-title">Four decay patterns, one timeline shape</span>
  <div class="vz-timeline">
    <div class="vz-tl-item"><span class="vz-tl-when">Weeks–months before</span><strong>Below-threshold decline</strong><p>Warmth trends, occasional retries, subtle fussiness — the evidence period almost everyone shrugs off.</p></div>
    <div class="vz-tl-item warn"><span class="vz-tl-when">Days before</span><strong>Intermittent symptoms</strong><p>Dropped sessions, a fault code that clears, a breaker trip that "doesn't repeat."</p></div>
    <div class="vz-tl-item danger"><span class="vz-tl-when">The day</span><strong>Threshold crossed</strong><p>"It just stopped." It didn't — this is week twelve of the process.</p></div>
    <div class="vz-tl-item"><span class="vz-tl-when">After</span><strong>The trail remains</strong><p>Heat discoloration, error logs, wear marks — the autopsy that names the pattern.</p></div>
  </div>
</div>

## Pattern 3: The environmental accumulation

Some declines are the environment depositing itself into your equipment. Moisture works past a weathered seal a little more each rain until one damp morning the leakage crosses the [ground-fault threshold](/blog/gfci-breaker-trips-when-charging/) — and from then on, wet weather means trips. Corrosion grows on outdoor connector pins by invisible degrees until a [handshake fails](/blog/charger-handshake-failure/). Dust and cobwebs accumulate in a charger's vents until a hot week pushes it into [thermal derating](/blog/charging-speed-suddenly-dropped/) it never needed before. Even rodents are an accumulation pattern — cable jacket nibbled progressively until the week a conductor is reached.

**Fingerprints:** weather correlation is the giveaway — failures that cluster with rain, humidity, or heat waves; symptoms that improve in dry spells. Seasonal firsts matter too: the first hard freeze, the first 95°F week, and the first storm season each "suddenly" reveal what accumulated during the mild months. **The fix:** the physical once-over — connector seals, cable jacket, vent cleanliness, drip loops on outdoor runs — plus holstering the handle so weather stops accumulating where it hurts most.

## Pattern 4: The software slow burn

The newest pattern, and the one that genuinely *can* be sudden: firmware. A charger that worked for months can misbehave after an automatic overnight update — new charging logic, a new bug, or an [update that hung](/blog/charger-firmware-update-stuck/) and left the unit in a bad state. The adjacent version: nothing changed on the charger, but the *car* updated, and a previously-fine pairing developed a [handshake quirk](/blog/charger-handshake-failure/).

**Fingerprints:** failure with a precise start date and zero physical trend before it; check both the charger app's and the car's update history against your first bad session. **The fix:** version history comparison, the manufacturer's release notes, and either the pending hotfix or a rollback via support. This is the one pattern where "what changed?" has a literal, timestamped answer.

## The baseline habit that makes "what changed" answerable

Every pattern above is diagnosed by comparing now against before — which requires knowing what before looked like. Five minutes, once, buys you that forever: open the charger's app and screenshot a healthy session's stats (kW rate, duration, energy delivered), note the plug's normal warmth with your palm or an IR thermometer reading, and photograph the receptacle faceplate. That's the whole baseline. From then on, "something's off" becomes a comparison instead of a feeling: the session that delivered the same energy in 20% more time, the plug reading 25 degrees over its old normal, the faceplate that's tanning — each is a pattern-1-through-3 process caught mid-decline, with evidence attached. The app helps passively too: most connected chargers keep months of session history, and scrolling that history backward from a failure is how you find the actual start date of a decline you never noticed living through. People who keep baselines don't experience sudden failures; they experience trends that get scheduled for repair. It's the difference between this article being a post-mortem and being a checklist you never needed.

## Running the diagnosis backward

When your charger pulls a works-then-quits, interrogate the past before the hardware:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Pin the date</strong><span>App session history: exactly when was the last clean session, and what did the failing ones log? Error families (<a href="/blog/charger-fault-error-codes/">decode here</a>) sort the patterns fast — voltage faults → pattern 1, pilot faults → pattern 2, ground faults → pattern 3.</span></div></div>
    <div class="vz-step"><div><strong>Check for software events</strong><span>Charger and car update histories around the failure date. A match = pattern 4, and you've saved yourself a hardware hunt.</span></div></div>
    <div class="vz-step"><div><strong>Check the weather</strong><span>Failure date vs. first rain / freeze / heat wave. A match = pattern 3, and the once-over finds the entry point.</span></div></div>
    <div class="vz-step"><div><strong>Read the heat and wear evidence</strong><span>Palm the plug, inspect for discoloration, run the wiggle and latch tests. Trends and marks = patterns 1–2, and the marks say which junction.</span></div></div>
  </div>
</div>

And the larger lesson, since this article is really about the weeks *before* the failure: the works-then-quits story is almost always preventable, because the decline period is long and detectable. The monthly three-minute routine — [palm on the plug](/blog/charger-plug-or-outlet-feels-hot/), [hand along the cable](/blog/charging-cable-feels-warm/), [ear at the connections](/blog/charger-clicks-or-buzzes/), eyes on the faceplate — exists precisely to catch patterns 1 through 3 in their evidence period, when the fix is a torque wrench or a $50 part instead of a dead charger and a cold battery. Equipment rarely surprises the person who checks on it.

*Educational content, not professional electrical advice. Trend evidence — warming plugs, buzzing junctions, discoloration — is exactly what to bring to the electrician while it's still a small job.*
