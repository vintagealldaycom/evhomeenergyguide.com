---
title: "EV Won't Accept a Charge Even Though the Charger Shows Power"
description: "Charger green and ready, car refusing to drink — the fault lives in the handshake or the car. Here's how to diagnose the gap between power and charging."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, charge-port, home-charging]
draft: false
---

This one has a specific flavor of frustration: the charger's light is green, the app says "ready," power is demonstrably present — and the car sits there like a horse refusing water. No dead equipment to blame, no tripped breaker to reset. Everything is *on*; nothing is *charging*.

Here's the reframe that makes this solvable: in AC home charging, **the charger doesn't push power into the car — the car pulls it.** Your wallbox is essentially a smart, safe extension cord: it advertises how much current is available and waits. The car's onboard charger decides whether to draw anything at all. So when a powered charger isn't charging, the question is never "why won't the charger charge?" It's "**why is the car declining?**" — and cars decline for a shortlist of reasons.

<div class="art-viz">
  <span class="vz-title">Why a car declines available power</span>
  <span class="vz-caption">Ordered by likelihood</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">It's obeying an instruction (schedule / limit)</span><span class="vz-track"><span class="vz-fill" style="width:88%"></span></span><span class="vz-val">most common</span></div>
    <div class="vz-row"><span class="vz-label">The handshake never completed</span><span class="vz-track"><span class="vz-fill info" style="width:55%"></span></span><span class="vz-val">common</span></div>
    <div class="vz-row"><span class="vz-label">It's protecting its battery (temperature)</span><span class="vz-track"><span class="vz-fill warn" style="width:40%"></span></span><span class="vz-val">seasonal</span></div>
    <div class="vz-row"><span class="vz-label">Charge-port hardware problem</span><span class="vz-track"><span class="vz-fill warn" style="width:22%"></span></span><span class="vz-val">less common</span></div>
    <div class="vz-row"><span class="vz-label">Onboard charger fault</span><span class="vz-track"><span class="vz-fill danger" style="width:12%"></span></span><span class="vz-val">rare, serious</span></div>
  </div>
</div>

## First: what does the car say?

Before touching anything, read the car's side of the story — dashboard, center screen, and the manufacturer's app. Cars are usually more talkative than chargers about *why* they're declining:

- **"Scheduled" / a clock icon / "charging starts at…"** — not a fault. The car is waiting for its window. This is the single most common answer, especially with location-based schedules that only apply at home. Full treatment in [charges in public but not at home](/blog/ev-charges-in-public-not-at-home/).
- **Charge limit reached** — an 80% target with an 80% battery is a finished job, not a failure.
- **A charge-port or charging-system warning** — now you have a real fault, and the message text (photograph it) is your best evidence.
- **Nothing at all — the car doesn't even acknowledge being plugged in** — that's a handshake that never started, and it moves you to the physical checks below.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The acknowledgment test:</strong> when you plug in, does the car react at all — a chime, a port light, a dash icon? A car that <em>acknowledges then declines</em> has a reason (read its screen). A car that <em>doesn't notice the plug</em> has a connection problem (keep reading).</div></div>

## The silent plug: when the car doesn't even notice

No acknowledgment means the pilot conversation — the low-voltage signal through the connector's small pins that precedes any power flow — isn't happening. Work the physical layer:

**Reseat like you mean it.** Full removal, inspect both connector faces under your phone light. You're looking for debris in the port, corrosion (white/green crust), moisture, and especially a **bent or recessed pilot pin** — the small pins carry the conversation, and one bent pin silences everything while the big power pins look perfect.

**Remove the adapter.** Any adapter in the chain doubles the pin count and is the prime suspect — test without it or swap it before condemning the port.

**Check the latch and seating depth.** A worn handle latch lets the connector sit a few millimeters shy of full engagement — power pins can touch while the shorter signal pins don't. If the handle feels loose or doesn't click positively, try deliberate firm pressure while watching for the car's acknowledgment; if that works, the handle latch is your culprit and the charger manufacturer should hear about it.

**Try the other side of the isolation split.** The car at a public Level 2 station, or another EV on your charger — one test, and you know which side of the connector owns the silence. It's the same decisive move as always, detailed in the [handshake failure guide](/blog/charger-handshake-failure/).

## The polite decline: temperature protection

Cars protect their batteries by refusing or postponing charge at temperature extremes, and this masquerades as a fault twice a year. **Deep cold:** a frozen pack may accept nothing until the car warms it — some EVs will sit for many minutes running the battery heater off wall power before a single amp reaches the cells, which looks exactly like "plugged in, powered, not charging." Patience (or preconditioning) is the fix, and the [speed-drop guide](/blog/charging-speed-suddenly-dropped/) covers the winter math. **Serious heat:** a pack that's hot from highway driving or a 100°F garage may pause acceptance until it cools. In both cases the car's energy screen typically shows *something* happening (conditioning) even while charge percent holds still — that something is your reassurance.

## The car-side hardware suspects

If the car acknowledges the plug, has no schedule, is at reasonable temperature, and still won't draw — you're down to its hardware:

**The charge port** itself: the door sensor (some cars refuse to charge if they believe the port door is open), the port's locking actuator, or damaged pins from a past yank. Port problems tend to be intermittent-then-permanent and often come with a history of [stuck cables](/blog/ev-charger-cable-wont-release/).

**The onboard charger** — the component that converts your home's AC into the DC the battery stores. When it fails, the definitive signature appears: the car **won't charge on any AC source anywhere, but DC fast charging still works**, because DC fast charging bypasses the onboard charger entirely. That's a diagnostic gift; run it deliberately. AC fails everywhere + DCFC works = onboard charger, and that's a dealer conversation, warranty-relevant, and — on some platforms — a known-issue conversation: the Hyundai/Kia/Genesis ICCU saga is exactly this failure at scale, with recalls attached, covered in [model-specific quirks](/blog/model-specific-charging-quirks/).

<div class="callout warn"><span class="co-icon">⚠</span><div><strong>Bring evidence to the dealer:</strong> photos of any warning messages, dates and locations of failed attempts, and the results of your AC-everywhere vs. DCFC test. "It won't charge" starts a fishing expedition; "AC charging fails at home and on two public stations, DC fast charging works, error photo attached" starts a repair.</div></div>

## The 12-volt wildcard

One more car-side suspect earns its own section because it's so counterintuitive: the **12-volt battery**. Every EV still carries one, and it — not the big pack — powers the computers that run the charging process itself: the port lock, the charging controller, the modules that conduct the handshake. A weak or dying 12V produces exactly this article's symptom in its strangest form: a car with an 80% main battery that behaves erratically about charging, throws unrelated electrical warnings, wakes slowly, or sometimes won't acknowledge the plug at all — because the computers that would accept the charge are browning out. The tells: symptoms that are worse after the car sits (the 12V sags overnight), a cluster of random electrical gremlins beyond charging, and a 12V battery past two or three years old. Most EVs charge their 12V from the main pack automatically, but the support systems doing that have their own documented failure stories — the Mach-E's early "deep sleep" bug and Hyundai's ICCU saga are both, at heart, 12V-maintenance failures, covered in [model-specific quirks](/blog/model-specific-charging-quirks/). A dealer or any auto-parts store can test a 12V battery in minutes, and replacing a tired one is among the cheapest fixes in this entire troubleshooting series.

## The complete decision path

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Read the car's screens</strong><span>Schedule, limit, or warning message? That's your answer — act on it.</span></div></div>
    <div class="vz-step"><div><strong>Acknowledgment test</strong><span>No reaction to plugging in → physical layer: pins, adapter, latch, seating.</span></div></div>
    <div class="vz-step"><div><strong>Temperature sanity check</strong><span>Extreme cold or heat → give conditioning time before declaring a fault.</span></div></div>
    <div class="vz-step"><div><strong>Run the two splits</strong><span>Car on public AC (owns the fault or clears itself) · AC-anywhere vs. DCFC (isolates the onboard charger).</span></div></div>
    <div class="vz-step"><div><strong>Escalate with evidence</strong><span>Car-side conclusion → dealer, with photos and test results. Charger-side → manufacturer, same standard.</span></div></div>
  </div>
</div>

A powered charger and an uncharging car is the system working as designed with one participant declining — and the decliner always has a reason. Schedules first, screens second, pins third, splits fourth. The reason never survives all four.

*Educational content, not professional advice. Once the car drinks again, the [Sim-Lab](/en/sim-lab/) will tell you what each full charge actually costs.*
