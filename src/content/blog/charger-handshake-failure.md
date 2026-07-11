---
title: "Charger Handshake Failure: Why Car and Charger Won't Talk"
description: "Before any power flows, car and charger negotiate through the pilot signal. When that talk fails, charging dies silently — here's how the handshake works."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, handshake, j1772, home-charging]
draft: false
---

Every charging session begins with a conversation you never see. Before a single watt flows, your charger and your car negotiate: the charger announces itself and offers a current level, the car checks the connection's safety and accepts, and only then do the contactors close and power move. The whole exchange takes about a second — when it works, it's invisible.

When it *doesn't* work, you get the most opaque failure in home charging: two healthy devices, physically connected, refusing to cooperate. No trip, no smoke, often no error — just a session that never begins, or one that collapses mid-charge when the conversation drops. Understanding the handshake turns this from voodoo into a checklist.

## The one-second negotiation, translated

In the J1772 standard that home AC charging uses, the conversation runs over one small pin — the **control pilot** — plus a companion **proximity pin** that tells the car a connector is physically present. The exchange, in plain English:

<div class="art-viz">
  <span class="vz-title">What car and charger actually say</span>
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Charger: "I'm here, and I can offer you up to X amps"</strong><span>The pilot pin carries a signal whose shape encodes the available current — this is how your charger's 32/40/48A setting reaches the car.</span></div></div>
    <div class="vz-step"><div><strong>Car: "Connector confirmed, checking safety"</strong><span>The proximity pin confirms physical connection; the car verifies the circuit before committing.</span></div></div>
    <div class="vz-step"><div><strong>Car: "Ready — I'll draw up to your offer"</strong><span>The car changes the pilot state to signal readiness. The charger closes its contactor — that's the <a href="/blog/charger-clicks-or-buzzes/">clack you hear</a>.</span></div></div>
    <div class="vz-step"><div><strong>Both, continuously: "still good?"</strong><span>The pilot conversation runs for the whole session. If it garbles or drops — even for a moment — charging stops immediately by design.</span></div></div>
  </div>
</div>

That last step explains the mid-session mystery: handshake failures aren't only a start-of-session problem. A conversation that degrades — through a failing pin, a damaged cable, or electrical noise — kills sessions at random, which is why handshake trouble appears in the [mid-charge dropout](/blog/charging-session-stops-mid-charge/) lineup too.

## Where conversations die

The pilot signal travels a short, vulnerable road: charger electronics → cable → connector pins → car's port pins → car's charging controller. Failures cluster at predictable points:

**The pins.** The pilot and proximity pins are smaller than the power pins and die first — bent from a bad insertion, recessed from wear, corroded from moisture, or simply not touching because the connector isn't fully seated. This is why "reseat and inspect" solves so many handshake failures: a connector at 95% depth can have power pins touching while the shorter signal pins float.

**The latch.** A worn handle latch is a stealth handshake killer twice over: it lets the connector sag out of full engagement, and on many designs the release button physically interacts with the proximity signal — a sticky or broken button can leave the car permanently believing you're about to unplug, which politely halts charging.

**The cable.** The pilot wire runs the cable's full length alongside the power conductors. Crush damage, a nicked jacket, or internal breaks from years of coiling can sever or intermittently interrupt it — the power wires often survive abuse that kills the thinner signal wire. A handshake that fails only when the cable lies at certain angles is this, confessing.

**Adapters.** Every adapter adds four more pin junctions to the conversation's road. In the era of connector transitions, adapters are involved in an outsized share of handshake complaints — always test without one before blaming anything more expensive.

**Firmware, on either side.** The J1772 standard leaves room for interpretation, and specific car-charger *pairs* have shipped genuine incompatibilities — handshakes that fail or flake between one model of car and one model of wallbox while both work perfectly with everything else. These get fixed in software: manufacturers on both sides patch handshake behavior constantly, which is why "update both, then retest" is a legitimate repair step and not IT superstition.

<div class="callout info"><span class="co-icon">ⓘ</span><div><strong>Search your exact pair.</strong> If handshakes fail between your specific car model and specific charger model, search those two names together before replacing hardware. Known pairs have known fixes — usually a firmware version, occasionally a setting.</div></div>

## The diagnostic, in order

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Reseat + inspect both faces</strong><span>Phone light into the handle and the port: bent/recessed small pins, corrosion, debris, moisture. Firm insertion to a positive click.</span></div></div>
    <div class="vz-step"><div><strong>Pull any adapter</strong><span>Test bare. If bare works, the adapter is done — replace it, don't nurse it.</span></div></div>
    <div class="vz-step"><div><strong>Exercise the latch</strong><span>Press-release the handle button several times; try a session while pressing the connector firmly home. Improvement = worn latch, a warranty item.</span></div></div>
    <div class="vz-step"><div><strong>Wiggle-test the cable</strong><span>During a session attempt, gently flex the cable near both ends. A handshake that lives and dies with cable position = internal signal-wire damage. Stop using the cable.</span></div></div>
    <div class="vz-step"><div><strong>Update firmware both sides, retest</strong><span>Charger app + car software. Then the isolation split: your car on public AC, another car on your charger — the <a href="/blog/ev-charges-in-public-not-at-home/">usual decisive move</a>.</span></div></div>
  </div>
</div>

## Why home AC handshakes differ from fast-charging ones

If your car handshakes fine at DC fast chargers but flakes at home, it helps to know the conversations aren't the same language. Home AC charging uses the simple pilot-signal negotiation described above — closer to two devices agreeing on a current level than to networking. DC fast charging layers a genuine digital communication protocol on top, with far more data exchanged (battery state, temperature, charging curves) through additional pins and different electronics on both ends. Practical consequences: a car can have a fault in its AC pilot circuitry while its DC communication hardware is perfect — which is why "DCFC works, home charging doesn't" points specifically at the AC side of the car's charge port or its onboard charger, as covered in the [won't-accept-charge guide](/blog/ev-wont-accept-charge/). The reverse is also true: fast-charging communication failures don't implicate your home setup at all. And adapters differ by world: an AC adapter only has to pass the pilot signal faithfully, while DC adapters must relay the whole digital conversation — one reason cheap AC adapters mostly work and cheap DC adapters mostly make headlines. When you report a handshake problem to any support line, saying which *kind* of charging fails is the first fork in their diagnostic tree — lead with it.

## Reading the evidence

The failure *pattern* narrows the suspect before you've touched anything:

<div class="art-viz">
  <span class="vz-title">Pattern → suspect</span>
  <table class="vz-table">
    <tr><th>Pattern</th><th>Points at</th></tr>
    <tr><td>Never connects, car doesn't acknowledge the plug</td><td>Pins, seating, adapter — the physical layer</td></tr>
    <tr><td>Connects after multiple insertions</td><td>Worn latch or recessed pins — wear, progressing</td></tr>
    <tr><td>Fails only in rain or humidity</td><td>Moisture on signal pins — dry, inspect seals, holster the handle</td></tr>
    <tr><td>Drops mid-session at random</td><td>Cable signal wire or electrical noise — wiggle test</td></tr>
    <tr><td>Fails only with one specific car-charger pair</td><td>Firmware incompatibility — update both, search the pair</td></tr>
    <tr><td>Fails everywhere, every charger</td><td>The car's port or charging controller — dealer, with the <a href="/blog/ev-wont-accept-charge/">car-side guide</a></td></tr>
  </table>
</div>

One habit prevents most of this genre: **treat the connector like the precision part it is.** Holster the handle instead of dropping it, insert straight rather than at an angle, and never yank the cable by its cord. The power pins forgive abuse for years; the little pins that do the talking don't — and without the talking, the power never flows at all.

*Educational content, not professional electrical advice. A cable with confirmed internal damage should be replaced, not repaired with tape — the signal wire that failed is millimeters from conductors carrying 240 volts.*
