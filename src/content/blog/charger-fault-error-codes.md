---
title: "Charger Says \"Fault\" or Shows an Error Code — What Now?"
description: "Every EV charger error code belongs to one of five families. Learn to classify any fault — ground, pilot, voltage, thermal, internal — and fix each one."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, error-codes, home-charging]
draft: false
---

"Fault." Possibly the least helpful word ever displayed by a machine that knows exactly what's wrong with itself. Behind that word — or behind the cryptic "E-23" in the app — your charger has recorded a specific, categorized failure. The trouble is that every brand invents its own codes, so no article can hand you a universal decoder ring.

Here's what an article *can* do, and what this one does: teach you the five families that every error code on every brand falls into. Once you can classify a code into its family, you know what the fix path looks like — even before you've looked the exact code up. Manufacturers differ on numbering; physics doesn't.

## The five fault families

<div class="art-viz">
  <span class="vz-title">Every charger error belongs to one of these</span>
  <table class="vz-table">
    <tr><th>Family</th><th>The charger detected…</th><th>Usual fix path</th></tr>
    <tr><td><span class="vz-badge danger">Ground fault</span></td><td>Current leaking out of the circuit</td><td>Connector, cable, moisture — then car vs. home isolation</td></tr>
    <tr><td><span class="vz-badge info">Pilot / comms</span></td><td>Lost or invalid conversation with the car</td><td>Reseat, inspect pins, firmware, adapter check</td></tr>
    <tr><td><span class="vz-badge warn">Voltage / supply</span></td><td>Incoming power out of expected range</td><td>Breaker, outlet, circuit — often electrician</td></tr>
    <tr><td><span class="vz-badge warn">Thermal</span></td><td>Something running too hot</td><td>Reduce amps, ventilate, inspect connections</td></tr>
    <tr><td><span class="vz-badge">Internal</span></td><td>Its own hardware self-test failed</td><td>Power drain, firmware, then warranty</td></tr>
  </table>
</div>

Look your code up in the manual or app once — but *file it into a family* as you do, because the family is what you'll act on. A few classification hints when the manual is unhelpful: codes that appear at the instant of plug-in are usually pilot or ground; codes that appear under load are usually thermal or voltage; codes present at boot with nothing plugged in are internal.

## Family 1: Ground faults — the safety trip

The charger's leakage detector found current escaping the circuit and killed the session. This is the most common family, the one your [flashing red LED](/blog/ev-charger-led-flashing-red/) usually announces, and the one with the strictest rule: **never work around it**. The escape path it detected might be moisture — or a person, next time.

The sequence: inspect and dry both connectors, walk the full cable for damage, reset properly (breaker off 60 seconds), and if the code returns, run the isolation test — does the car fault on public Level 2 equipment too? Car faults everywhere → dealer. Car is clean elsewhere → your charger, outlet ground, or circuit, in that order of likelihood. The [GFCI guide](/blog/gfci-breaker-trips-when-charging/) covers the special case where breaker-level protection is doing the tripping.

## Family 2: Pilot errors — the failed handshake

Before any power flows, charger and car negotiate through the connector's pilot pin: the charger advertises available current, the car accepts, and only then do the contactors close. Pilot-family codes mean that conversation failed or died mid-session — and they're the family most often fixed for free.

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Reseat with intent</strong><span>Full removal, look into both connector faces for debris or a bent pilot pin (it's one of the small pins), firm re-insertion to a positive click.</span></div></div>
    <div class="vz-step"><div><strong>Remove any adapter</strong><span>Adapters add a junction to the pilot line. If one's in the chain, test without it or with a different one before blaming anything else.</span></div></div>
    <div class="vz-step"><div><strong>Update both sides</strong><span>Pilot quirks between specific car and charger models are real and get patched constantly. Charger firmware + car software update is the cure for a surprising share of these.</span></div></div>
    <div class="vz-step"><div><strong>Persistent? Split the blame</strong><span>Car handshakes fine in public → your charger's pilot circuit or cable. Car fails everywhere → the car's charge port. Full method in the <a href="/blog/charger-handshake-failure/">handshake guide</a>.</span></div></div>
  </div>
</div>

## Family 3: Voltage and supply faults — the charger protecting itself

Over-voltage, under-voltage, phase or frequency errors: the charger measured its incoming power and refused to work with it. Two very different causes share this family, and the pattern separates them.

**Grid-side events** — a brownout, storm damage, utility work — hit the whole house. If the lights dimmed or the microwave clock reset around the same time, the charger was just the most articulate victim. These clear on their own; do a proper reset and see the [post-outage restart guide](/blog/charging-stopped-after-power-outage/) if things stay weird.

**Circuit-side sag** is the one to respect: voltage that's fine at rest but droops when charging load kicks in points at a loose, high-resistance connection between the panel and the charger. It's the same failing-connection physics as a [hot plug](/blog/charger-plug-or-outlet-feels-hot/), caught by the charger's voltmeter instead of your palm. Repeated under-voltage codes with no house-wide events = electrician, and mention "voltage sag under load" — they'll know exactly what to check.

<div class="callout warn"><span class="co-icon">⚠</span><div><strong>Frequency matters:</strong> one voltage code after a stormy night is weather. The same code three sessions in a row on a calm week is your circuit talking. Treat repetition as escalation.</div></div>

## Family 4: Thermal faults — heat somewhere in the chain

The charger tracks temperature at its electronics, often at the connector, and infers it at the plug. Thermal codes usually arrive after a **derating warning** (amber LED, reduced rate) that went unheeded — the charger tried slowing down first and gave up.

<div class="art-viz">
  <div class="vz-gauge">
    <div class="vz-ring danger" style="--p:92"><span>92°C</span></div>
    <div class="vz-gauge-text"><strong>Read the code's location field</strong>Many thermal codes specify <em>where</em>: "handle over-temp" points at the connector and the car-side port; "internal over-temp" points at the charger's mounting spot (sun, enclosed cabinet, dead airflow); "plug over-temp" — on units with plug sensing — is a failing receptacle announcing itself early. Location turns a generic heat complaint into a specific inspection.</div>
  </div>
</div>

Fix path: reduce configured amps a step, improve ventilation or shade, and physically inspect whichever junction the code named. A thermal code that persists at reduced current in a cool garage means one component is generating concentrated heat — that's a failing connection, and it doesn't fix itself.

## Family 5: Internal faults — the charger's own confession

Self-test failures: a contactor that didn't respond, a sensor reading impossible values, a memory check that failed. These are the codes where the fault isn't in your house at all. Your part is short — do the full power drain (breaker off five minutes, not sixty seconds; internal faults latch harder), retry once, check whether a [firmware update stalled](/blog/charger-firmware-update-stuck/) recently — and then it's a warranty call.

Bring receipts: the exact code, when it appears (boot? plug-in? under load?), what you've already tried, and confirmation that supply voltage is good if you have it. Internal-fault codes with a documented history are among the smoothest warranty claims there are, because the charger has literally testified against itself.

## Build your own decoder page

One habit ends the mystery permanently: the first time you look up any code, write it down — code, family, meaning, and what fixed it — in a note on your phone or a card taped inside the panel door. Chargers repeat their greatest hits; your personal top three codes will cover almost every future incident, and the 2 a.m. version of you will be grateful to the version that took notes. Add the manufacturer support number and your charger's model and serial while you're there.

"Fault" is a bad message from a machine that knows better. But five families, one classification habit, and a fix path per family turns every cryptic code into a next step — which is all a diagnosis ever needs to be.

*Educational content, not professional electrical advice. Repeated voltage or thermal codes are electrician territory — bring your code notes to the visit.*
