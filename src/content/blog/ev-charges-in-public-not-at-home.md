---
title: "EV Charges Fine in Public but Not at Home: Isolating the Cause"
description: "If your EV charges at public stations but refuses at home, the car is innocent. Use this isolation method to corner the fault in your home setup fast."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, home-charging, diagnostics]
draft: false
---

There's a strange comfort in this particular failure: your car happily drinks electrons at the grocery store, at work, at the mall — everywhere except your own garage. Annoying? Extremely. But diagnostically, it's a gift. A car that charges in public has just *proven* its charge port, onboard charger, and battery management are healthy. The suspect list collapses to the equipment you own: your charger, your outlet, your circuit, and your settings.

This guide is one long process of elimination, and it starts with an important technicality.

## Make sure your public test was a fair test

Not all public charging exercises the same hardware. **DC fast chargers bypass your car's onboard charger entirely** — they feed the battery directly. Your home Level 2 unit, meanwhile, sends AC power *through* that onboard charger. So:

<div class="callout warn"><span class="co-icon">⚠</span><div>If your only successful public charging has been DC fast charging, you haven't cleared the car yet. Find a regular <strong>Level 2 (J1772/AC)</strong> public station and confirm the car charges there. Success on AC is what actually rules the car out.</div></div>

Charged fine on public *Level 2*? Good — the car is officially innocent. Everything below assumes that.

## The suspect list, in order of likelihood

<div class="art-viz">
  <span class="vz-title">Home-only charging failures: where they come from</span>
  <span class="vz-caption">Ordered by how often each turns out to be the cause</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">Settings &amp; schedule conflicts</span><span class="vz-track"><span class="vz-fill" style="width:88%"></span></span><span class="vz-val">check first</span></div>
    <div class="vz-row"><span class="vz-label">Charger configuration (current limit, load mgmt)</span><span class="vz-track"><span class="vz-fill" style="width:62%"></span></span><span class="vz-val">check second</span></div>
    <div class="vz-row"><span class="vz-label">Circuit problems (breaker, GFCI, outlet)</span><span class="vz-track"><span class="vz-fill warn" style="width:45%"></span></span><span class="vz-val">check third</span></div>
    <div class="vz-row"><span class="vz-label">Charger hardware fault</span><span class="vz-track"><span class="vz-fill warn" style="width:20%"></span></span><span class="vz-val">check fourth</span></div>
    <div class="vz-row"><span class="vz-label">Car-charger compatibility quirk</span><span class="vz-track"><span class="vz-fill danger" style="width:10%"></span></span><span class="vz-val">rare but real</span></div>
  </div>
</div>

## Round 1: The settings sweep

Public stations succeed partly because they're *dumb* in the right way — you tap, they charge, no schedules, no negotiation with your utility plan. Home setups fail because they're smart: schedules in the car, schedules in the charger, utility-linked "managed charging" programs, charge limits. Any of these can silently veto a session, and they only apply at home.

Sweep all of it: the car's scheduled/departure charging (many cars apply schedules *only at locations saved as "home"* — which is exactly why public works!), the charger app's own schedule, any utility demand-response program you enrolled in for a rebate, and the charge limit. Disable everything, plug in, and see if charging starts instantly.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The "location-based schedule" trap</strong> is the #1 answer to this entire article. Cars that geofence their charging schedule to your home address will charge anywhere else on demand — and sit patiently in your garage waiting for 11 p.m. It looks exactly like a broken home charger.</div></div>

## Round 2: Interrogate the charger

Settings clean and it still won't start? Look at what the charger says about itself.

**Status LED.** Green/ready means it has power and believes everything is fine — suspicion shifts to the handshake. Red or flashing means it detected a fault; decode it with the [LED color guide](/blog/ev-charger-led-flashing-red/). Dark means no power — take the [won't-turn-on path](/blog/ev-charger-wont-turn-on/).

**Current limit set to zero (or near it).** Load-management features and "circuit sharing" settings can throttle a charger to nothing. In the app, confirm the configured amperage is what you expect (32/40/48A), not 6A or 0A left over from setup or an experiment.

**Session logs.** Most app-connected chargers log attempted sessions. A log that shows sessions *starting* then immediately faulting points at ground-fault or pilot errors; a log with no session at all points back at settings or the cable.

## Round 3: The circuit

Now the electrical side, from easy to hard:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Breaker reset — the real one</strong><span>Full OFF until it clicks, then ON. Half-tripped breakers can power a charger's electronics but fail under charging load.</span></div></div>
    <div class="vz-step"><div><strong>GFCI pattern check</strong><span>If a GFCI breaker trips the instant charging tries to start, you may have the classic double-protection conflict — <a href="/blog/gfci-breaker-trips-when-charging/">covered here</a>.</span></div></div>
    <div class="vz-step"><div><strong>Outlet inspection (plug-in units)</strong><span>Discolored blades, browned faceplate, loose grip = a receptacle failing under load. It can pass a light-touch test and still collapse at 40 amps.</span></div></div>
    <div class="vz-step"><div><strong>Voltage sag under load</strong><span>An electrician can check whether the circuit's voltage droops when charging starts — a marker for a loose connection that only fails when current flows. This one is invisible to every test you can do by hand.</span></div></div>
  </div>
</div>

That last item explains the most confusing version of this fault: everything *measures* fine at rest, the charger lights up, the handshake begins — and the moment real current flows, a weak connection sags the voltage, the charger aborts to protect itself, and the session dies. At the public station, on healthy infrastructure, the same car charges perfectly.

## Round 4: The handshake

Between "charger is fine" and "car is fine" sits the conversation they have through the cable — the pilot signal that negotiates how much current the car may draw. Home-only handshake failures are rare but memorable:

- **A worn connector latch** that seats fine on the public station's newer cable but not on your older one.
- **Cable damage** — a crushed or nicked section that breaks the pilot line while the power lines still test okay.
- **Genuine model quirks.** A small number of car-charger pairings have known firmware incompatibilities (fixed by updates on one side or the other). Search your exact car model plus your exact charger model before assuming hardware death; if it's a known pair, the fix is usually a firmware update, and we cover the pattern in [charger handshake failures](/blog/charger-handshake-failure/).

Update the charger's firmware and the car's software as a matter of course — it's free and it closes out the quirk category.

## A note on adapters and connector types

If there's an adapter anywhere in your home setup, move it to the top of the suspect list. With the industry mid-transition between connector standards, plenty of garages have a Tesla-to-J1772 adapter, a NACS adapter, or a legacy plug adapter living permanently on the home charger — and adapters add exactly the failure modes this article hunts: another pair of contacts to wear, another latch to misalign, and another link in the pilot-signal chain. The test is simple: if your public charging succeeds *without* the adapter and home charging fails *with* it, borrow or buy a replacement adapter before condemning anything more expensive. Adapters also age faster than the equipment around them because they take the mechanical stress of every plug cycle on both faces. A charger that's babied in a holster can outlive three cheap adapters.

## Keeping it fixed

Once you've found your culprit, three habits keep this article in your past: **one schedule, one place** — pick the car or the charger to own charging times, never both, and write down which; **update firmware quarterly** on both charger and car, since handshake quirks are patched constantly and silently; and **re-run the public test whenever things get weird** — it remains the fastest single split in home-charging diagnostics, instantly halving the problem space for the cost of a coffee-shop charging session. A car that charges in public has told you where the problem isn't. That's most of the battle.

## The endgame: who to call

By now you've cornered it. Match your result:

<div class="art-viz">
  <table class="vz-table">
    <tr><th>Your finding</th><th>Who fixes it</th></tr>
    <tr><td>A schedule/limit was the veto</td><td>You — already fixed, no charge</td></tr>
    <tr><td>GFCI conflict or outlet damage</td><td>Licensed electrician</td></tr>
    <tr><td>Voltage sag / circuit weakness suspected</td><td>Licensed electrician</td></tr>
    <tr><td>Charger faults on a verified-good circuit</td><td>Charger manufacturer (warranty)</td></tr>
    <tr><td>Known model-pair firmware quirk</td><td>Update firmware; then manufacturer support</td></tr>
  </table>
</div>

The beautiful thing about the public-works-home-doesn't scenario is that it never stays a mystery. The car exonerated itself; everything left is on your side of the wall, and everything on your side of the wall can be tested. Work the rounds in order and this one always ends with a name.

*Educational content, not professional electrical advice. Once it's charging again, see what those sessions actually cost in the [Sim-Lab](/en/sim-lab/).*
