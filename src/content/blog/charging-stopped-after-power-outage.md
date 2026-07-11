---
title: "Charging Stopped After a Power Outage: The Restart Sequence"
description: "Power's back but your EV charger isn't. Learn the correct restart order — breaker, charger, network, car — and why chargers stay confused after outages."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, power-outage, home-charging]
draft: false
---

The storm passed, the lights came back, the microwave is blinking 12:00 — and the charger in the garage is doing something weird. Maybe it's dark, maybe it's showing a color you've never seen, maybe it looks fine but refuses to start a session. Outage recovery is its own small genre of charger trouble, and it has its own logic: the problem usually isn't damage, it's *state* — several computers that all lost power at different moments and came back in the wrong order, each confused about the world.

The cure is restarting things in the right order, on purpose. Here's the sequence, then the special cases.

## Why outages confuse chargers more than toasters

Your toaster has no memory. Your charger has several kinds — a fault latch, a session state, network credentials, a schedule clock — plus a safety system that treats abnormal power as a threat. Three separate things happen to it during an outage:

<div class="art-viz">
  <span class="vz-title">What an outage does to a charging setup</span>
  <div class="vz-tiles">
    <div class="vz-tile"><span class="vz-ico warn">⚡</span><strong>Dirty power at the edges</strong><span>Outages rarely cut clean. Brownouts before and voltage spikes at restoration are what actually stress (and occasionally damage) electronics.</span></div>
    <div class="vz-tile"><span class="vz-ico info">🧠</span><strong>Latched fault states</strong><span>A charger that saw wild voltage may have tripped an internal fault and <em>stayed</em> tripped — waiting for a deliberate reset, not just power.</span></div>
    <div class="vz-tile"><span class="vz-ico info">📶</span><strong>A race with the router</strong><span>The charger often boots faster than your Wi-Fi. It wakes, finds no network, and some units sulk about it for a long time.</span></div>
  </div>
</div>

Interrupted mid-session is the worst case for confusion: the charger, the car, and the app can each hold a different opinion about whether a session is still running — and a car that believes it's mid-session may [hold the cable locked](/blog/ev-charger-cable-wont-release/) or refuse a new handshake.

## The restart sequence

Do this in order, even the steps that seem unnecessary. The order is the fix.

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>1. Unplug the car</strong><span>Clear the session question first. If the connector is locked, end the session from the car's screen or unlock the car — the <a href="/blog/ev-charger-cable-wont-release/">stuck-cable guide</a> has the full ladder.</span></div></div>
    <div class="vz-step"><div><strong>2. Check the panel — all of it</strong><span>Outage transitions trip breakers, and not just the charger's. Look for any handle in the middle position; reset each one properly: firm OFF until it clicks, then ON. GFCI breakers especially love to trip on restoration surges.</span></div></div>
    <div class="vz-step"><div><strong>3. Give the charger a real reboot</strong><span>Even if it looks alive: breaker off, count a full 60 seconds so its electronics fully drain and any latched fault clears, then on. This single step resolves most post-outage weirdness.</span></div></div>
    <div class="vz-step"><div><strong>4. Let the network come back first</strong><span>Confirm your router and Wi-Fi are fully up before judging the charger's connectivity. If the charger booted into a dead network, one more power cycle after Wi-Fi returns re-runs the race in the right order.</span></div></div>
    <div class="vz-step"><div><strong>5. Reconnect and watch one session start</strong><span>Plug in, watch the LED sequence through the handshake, and confirm current is actually flowing (app kW reading or the car's screen). Don't just walk away — a session that starts and dies belongs to the next section.</span></div></div>
  </div>
</div>

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The 90-second version:</strong> unplug car → reset breakers properly → charger off 60 seconds → Wi-Fi up → plug in and verify. Order matters more than any individual step.</div></div>

## When the sequence doesn't fix it

**The charger is completely dead.** Restoration surges are the classic killer of switching power supplies, and a unit that never wakes up after an outage has likely taken real damage. Work the [won't-turn-on path](/blog/ev-charger-wont-turn-on/) — breaker, outlet voltage, five-minute drain — and if the unit is confirmed dead with good power at the plug, mention the outage in your warranty call; manufacturers know this failure mode well.

**A GFCI now trips every session.** Two possibilities: moisture got into outdoor equipment during the storm (dry and inspect connectors and any exposed cable run — leaks announce themselves through the leakage detector), or the outage-and-surge cycle weakened an already-marginal breaker. If dry equipment still trips it, the [GFCI guide](/blog/gfci-breaker-trips-when-charging/) takes over.

**Everything looks right but sessions fault.** Check the charger's [error log](/blog/charger-fault-error-codes/) — post-outage faults are usually in the voltage/supply family, and a charger logging under- or over-voltage *after* the grid has stabilized is telling you something upstream of it is still wrong: a utility leg down (is every 240V appliance in the house okay?), or a connection that the surge loosened. Half-dead 240V circuits — one leg working — are a real post-outage phenomenon; a charger seeing ~120V where it expects 240V will correctly refuse to run, and that one's a utility or electrician call.

**Schedules went haywire.** Clocks reset. A charger whose schedule now thinks 3 p.m. is 3 a.m. will "mysteriously" refuse sessions in the way any schedule conflict does. Post-outage, glance at the schedule settings in both car and charger app — and re-sync anything blinking 12:00, metaphorically speaking.

## The car has outage quirks too

The wall isn't the only computer that got confused. Cars interrupted mid-charge sometimes hold a stale session and want a full sleep cycle before behaving: lock the car, walk away ten minutes, return. A handful of EVs are also picky about the *first* session after abnormal grid behavior and simply work on the second attempt. And if your outage was long — days, not hours — remember the car's 12-volt battery was quietly running the vehicle's electronics the whole time without support; a car that acts strangely after an extended outage (won't wake properly, throws unrelated warnings) may have a depleted 12V, which is its own well-documented gremlin on [certain models](/blog/model-specific-charging-quirks/).

## The generator and backup-power caveat

A word for outage-prone households, because this mistake gets made every storm season: **most portable generators and EV chargers do not mix well.** A Level 2 charger is among the most demanding and pickiest loads you can hand a generator — it draws heavily, continuously, and its electronics actively monitor voltage and frequency quality. Small generators produce power "dirty" enough (voltage wobble, frequency drift, and on many units a floating neutral that trips ground-fault protection instantly) that the charger will refuse to run or fault repeatedly — and that refusal is the charger protecting itself and your car correctly. If backup charging genuinely matters to you, the workable paths are: a properly installed standby generator sized and wired by an electrician (with the charger's circuit included in the transfer-switch plan), a home battery system, or the humble but reliable fallback — the car's portable Level 1 cable, which tolerates imperfect power far better and can sip from a modest generator through an outage. And if your EV supports V2L or vehicle-to-home, remember the irony available to you: during an outage, the car may be a better power *source* than power consumer. Whatever you do, never backfeed a generator into your home's wiring through an outlet — that's illegal, and it endangers the line workers restoring your grid.

## Armor for next time

One outage is weather; the response to it is choice. Three upgrades, in rising order of cost: **surge protection at the panel** — a whole-home surge protective device is a modest electrician add-on that stands between restoration spikes and every electronic thing you own, chargers included. **A charger that recovers gracefully** — when you next shop, "resumes charging after power loss" is a real spec worth checking, because units differ meaningfully in how much babysitting they need after an outage. And **schedule hygiene** — one schedule, in one place, is not only the cure for [phantom no-charge problems](/blog/ev-charger-not-charging-checklist/) but also the least state to untangle when the grid hiccups.

Outage recovery rewards the methodical. The equipment isn't usually broken — it's disoriented, and a deliberate restart in the right order is how you reorient it. Save the sequence; storms repeat.

*Educational content, not professional electrical advice. Suspected surge damage inside the panel, or a half-dead 240V circuit, are licensed-electrician calls.*
