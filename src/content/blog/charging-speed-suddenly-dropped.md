---
title: "Charging Speed Suddenly Dropped — What Changed?"
description: "Charging at half the speed it used to? Something in the chain requested it. Find which — car limit, charger derate, heat, or utility — with one question."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, charging-speed, home-charging]
draft: false
---

Your charging didn't get slower by accident. That's the core insight of this entire article, so let's put it up front: in an EV charging session, the speed is *negotiated* — the charger offers a maximum, the car requests what it wants up to that offer, and either side (plus the battery, plus your utility) can lower the number on purpose at any time. When your overnight charge suddenly takes twice as long, something in that negotiation **asked** for the slowdown.

Which means diagnosis isn't about finding what broke. It's about finding who asked — and there are only five candidates.

<div class="art-viz">
  <span class="vz-title">Who lowered your charging speed?</span>
  <div class="vz-tiles">
    <div class="vz-tile"><span class="vz-ico info">🚗</span><strong>The car</strong><span>Battery state, temperature, or a settings limit</span></div>
    <div class="vz-tile"><span class="vz-ico">🔌</span><strong>The charger</strong><span>Configured amps, load sharing, or thermal derating</span></div>
    <div class="vz-tile"><span class="vz-ico warn">🌡</span><strong>The environment</strong><span>Heat or extreme cold slowing the whole chain</span></div>
    <div class="vz-tile"><span class="vz-ico info">🏢</span><strong>The utility</strong><span>Managed-charging program throttling on grid events</span></div>
    <div class="vz-tile"><span class="vz-ico danger">⚡</span><strong>The circuit</strong><span>Voltage sag forcing the charger to back off — the one real fault</span></div>
  </div>
</div>

## First: measure, don't vibe

"Feels slower" is a terrible instrument. Before hunting, get numbers. Your charger's app (or the car's screen) shows the session's actual power in kilowatts — grab today's number and compare it against what your setup *should* deliver: amps × 240 volts. A 40-amp charger should show roughly 9.6 kW; 32 amps ≈ 7.7 kW; 48 amps ≈ 11.5 kW.

<div class="art-viz">
  <div class="vz-gauge">
    <div class="vz-ring warn" style="--p:50"><span>4.8 kW</span></div>
    <div class="vz-gauge-text"><strong>Reading the gap</strong>A 40A setup showing ~9.6 kW is healthy. Showing ~4.8 kW — half — is a clean fingerprint: something set a 20A limit. Round-number fractions (half, two-thirds) almost always mean a <em>configured</em> limit; ragged, drifting numbers mean heat or a struggling circuit.</div>
  </div>
</div>

That one distinction — clean fraction vs. drifting value — sorts most cases before you've opened a single menu.

## The clean-fraction suspects: somebody set a limit

**The car's charge-current setting.** Most EVs let you cap AC charging amps, and the setting is one careless elbow away — some cars even remember different limits per location. Check the charging menu for a current slider that's mysteriously at 16 or 20 amps. Also check the *charge limit* (that 80% target isn't a speed issue, but "it stopped early" often gets reported as "it's slow").

**The charger's configured maximum.** In the charger app, confirm the amperage matches your circuit's design (and note it can be legitimately lower than the hardware max — a 48A-capable unit correctly set to 32A on a 40A circuit, per the [80% rule](/blog/charger-keeps-tripping-breaker/)). Look especially for **load-sharing / power-management** features: if a second charger, a panel-monitoring device, or a "circuit sharing" mode was added or misconfigured, your charger may be voluntarily splitting its allowance with a phantom sibling.

**The utility program.** Enrolled in managed charging for a rebate? Grid-stress evenings are exactly when those programs throttle participants — and a throttle looks like a mystery slowdown that recovers late at night. Check the program app's event history; slowdowns that align with heat waves are it. (Same suspect, different symptom, as in [sessions stopping mid-charge](/blog/charging-session-stops-mid-charge/).)

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The "what changed" question:</strong> new charger in the household? New phone app update? Signed anything from the utility? Slowdowns that begin on a specific date have a cause with the same date. Your session history pins the date; your memory (or inbox) pins the change.</div></div>

## The drifting-number suspects: physics is intervening

**Heat derating.** Chargers protect themselves by stepping output down as temperature climbs — you'll see rate sag through the session, often with an amber LED, worst on hot afternoons in enclosed garages. The car does the same to protect its battery when the pack is hot (right after a highway drive) or very cold (a deep-winter morning, before the battery heater catches up). Both recover when temperatures do — that recovery is how you know it was thermal. Persistent derating in mild conditions, though, means one *component* is running hot: palm-test the plug and see the [hot connection guide](/blog/charger-plug-or-outlet-feels-hot/).

**The battery's natural taper.** Not a fault, but worth naming: every EV slows charging as the battery approaches full — the last 10–15% always crawls, by design, on every charger, everywhere. If your "slowdown" only happens above ~85% state of charge, that's not a symptom, it's chemistry.

**Extreme cold.** A frigid pack accepts less current until it warms. If winter slowdowns bother you, schedule preconditioning or charging right after driving, while the pack holds its own warmth.

## The one real fault: voltage sag

Every suspect so far lowers *amps* on purpose. The last one lowers *volts* by failure: a loose or corroding connection between panel and charger drops voltage when load flows, and since power = volts × amps, the charger delivers less even at full current — and may progressively back off to protect itself. The signatures: charging power below spec even though every configured limit checks out, under-voltage entries in the charger's [error log](/blog/charger-fault-error-codes/), possibly a [buzz](/blog/charger-clicks-or-buzzes/) or warmth at one junction, and a slowdown that's been *worsening over weeks* rather than arriving on one date.

<div class="callout warn"><span class="co-icon">⚠</span><div>Settings slowdowns are instant and stable. Sag slowdowns <strong>trend</strong>. If your session logs show a slow multi-week decline at unchanged settings, stop auditing menus — that's a physical connection degrading, and it's the same failure family that ends in heat damage. Electrician, this week.</div></div>

## Two special cases worth naming

**The Level 1 trap.** If your speed drop coincides with using the portable cable that came with the car — house guests borrowed the wallbox outlet, you moved, you're traveling — remember that a standard 120V outlet delivers 3–5 miles of range per hour against Level 2's ~30. That's not a 15% slowdown; it's an 85% one, and no menu will fix it. The same trap has a subtler version: portable EVSEs that support both voltages default to conservative amperage on unfamiliar outlets, so a 240V-capable travel cable can quietly run at 16A where your wallbox ran 40A.

**Charging losses masquerading as slowness.** The kilowatts your charger reports and the kilowatts your battery keeps differ by charging overhead — typically around 10%, worse at very low amperage and in temperature extremes, since the car's electronics and thermal systems take their cut off the top. This matters for one specific misdiagnosis: people who calculate speed from the *battery percentage gained per hour* on a bitter-cold night can see "slow charging" that's really the car spending watts heating its own pack. The charger-side kW number is the honest speedometer; the percent-per-hour figure includes the battery's living expenses. When the two diverge sharply and it's freezing out, the mystery is just winter.

## The 10-minute diagnostic, in order

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Get the number</strong><span>Session kW from the app vs. your setup's spec (amps × 240V). Clean fraction or drifting?</span></div></div>
    <div class="vz-step"><div><strong>Audit the three limit menus</strong><span>Car current setting → charger configured amps &amp; load sharing → utility program events.</span></div></div>
    <div class="vz-step"><div><strong>Rule out chemistry &amp; weather</strong><span>Above 85% charge? Hot pack, cold snap? Those aren't faults.</span></div></div>
    <div class="vz-step"><div><strong>Check the trend</strong><span>Stable-slow = a setting you haven't found yet. Worsening-slow = voltage sag → electrician with your session logs.</span></div></div>
  </div>
</div>

Speed drops feel like decay, but the system is more honest than that: someone always asked for the slowdown, and the asking always left a record — in a menu, in a program's event log, or in a trend line. Find the record and you've found the fix. And once you're back to full speed, it's a good moment to check whether those amps are flowing at the cheapest possible hour — the [Sim-Lab](/en/sim-lab/) will do that math with your actual rates.

*Educational content, not professional electrical advice.*
