---
title: "EV Charger Not Charging: The Step-by-Step Homeowner Checklist"
description: "Charger plugged in but nothing happening? Work this ordered checklist — cable, app, breaker, outlet, car — and find the fault before you call anyone."
pubDate: 2026-07-07
category: ev-home-charging
subcategory: "Troubleshooting"
tags: [troubleshooting, ev-charger, home-charging, checklist]
draft: false
---

You plugged in last night, walked away, and this morning the battery is exactly where you left it. No error you noticed, no drama — just no charge. It's one of the most common EV headaches, and the good news is that most of the time you can find the cause yourself in under twenty minutes.

The trick is checking things *in the right order*. Charging only works when a whole chain cooperates: your panel feeds the breaker, the breaker feeds the circuit, the circuit feeds the charger, the charger talks to the car, and the car decides whether to accept power. A fault anywhere in that chain stops everything — so we'll walk it from the easiest checks to the hardest.

<div class="callout info"><span class="co-icon">ⓘ</span><div><strong>Before you start:</strong> if you smell burning, see melted plastic, or the plug is hot to the touch, skip this checklist. Shut the breaker off and read our guide on <a href="/blog/burning-smell-near-ev-charger/">burning smells at the charger</a> instead — that's a stop-now situation, not a troubleshooting one.</div></div>

## Where faults actually happen

Before diving in, it helps to know the odds. Across the charging chain, some failure points come up far more often than others:

<div class="art-viz">
  <span class="vz-title">Where "won't charge" problems usually live</span>
  <span class="vz-caption">Rough share of home charging faults by location</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">Settings &amp; schedules (car or app)</span><span class="vz-track"><span class="vz-fill" style="width:85%"></span></span><span class="vz-val">most common</span></div>
    <div class="vz-row"><span class="vz-label">Tripped breaker / GFCI</span><span class="vz-track"><span class="vz-fill" style="width:65%"></span></span><span class="vz-val">very common</span></div>
    <div class="vz-row"><span class="vz-label">Cable &amp; connector seating</span><span class="vz-track"><span class="vz-fill warn" style="width:45%"></span></span><span class="vz-val">common</span></div>
    <div class="vz-row"><span class="vz-label">Outlet / wiring faults</span><span class="vz-track"><span class="vz-fill warn" style="width:25%"></span></span><span class="vz-val">less common</span></div>
    <div class="vz-row"><span class="vz-label">Dead charger hardware</span><span class="vz-track"><span class="vz-fill danger" style="width:12%"></span></span><span class="vz-val">rare</span></div>
  </div>
  <span class="vz-note">Software and scheduling issues outnumber real electrical faults by a wide margin — which is why we check them first.</span>
</div>

## Step 1: Rule out the two-minute stuff

Start with the checks that cost you nothing.

**Reseat the connector.** Unplug from the car, look into the port for debris, and plug back in until you feel a firm click. A connector that's 95% seated charges 0%. Handles with worn latches can sag just enough to break the connection between the pilot pin and the car.

**Check both ends.** If you have a plug-in charger (NEMA 14-50 style), make sure the wall plug hasn't crept out of the receptacle. These plugs are heavy, and a half-backed-out plug is a classic silent failure.

**Try the other side.** If a second EV or a friend's car is available, plug it in. If the other car charges, your charger and circuit are fine — the problem is in your car's settings or charge port.

## Step 2: Check schedules before hardware

This one step resolves more "broken" chargers than everything else combined. Both your car and your charger can carry charging schedules, and they can silently fight each other.

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Open the car's charging menu</strong><span>Look for "scheduled charging," "departure time," or "off-peak charging." If a window is set, the car will sit and wait for it — showing no error at all.</span></div></div>
    <div class="vz-step"><div><strong>Open the charger's app</strong><span>Check for its own schedule, a paused session, or a "load management" limit set to zero. Clear anything you don't recognize.</span></div></div>
    <div class="vz-step"><div><strong>Check the charge limit</strong><span>If the car's limit is set to 80% and the battery is at 80%, nothing is broken — it's finished. Bump the limit and see if charging starts.</span></div></div>
    <div class="vz-step"><div><strong>Disable both schedules and test</strong><span>With every schedule off, plug in. If charging starts immediately, you found it: re-add one schedule (car or charger, not both) and stop there.</span></div></div>
  </div>
</div>

<div class="callout ok"><span class="co-icon">✓</span><div><strong>Rule of thumb:</strong> keep your charging schedule in <em>one</em> place — either the car or the charger, never both. Two schedules is how you get a car that refuses to charge on the one night you actually need it.</div></div>

## Step 3: The breaker check

Head to your electrical panel. Your charger should be on a dedicated double-pole breaker — a wide, two-slot breaker, usually 40, 50, or 60 amps.

A tripped breaker is sneaky: the handle often rests in a middle position that *looks* on. Don't just eyeball it. Push the handle firmly to full **OFF** until it clicks, then back to **ON**. That reset motion matters — a tripped breaker won't re-latch unless you take it all the way off first.

<div class="callout danger"><span class="co-icon">⚠</span><div><strong>If it trips again immediately</strong> with a hard snap, stop. Do not keep resetting it. Repeated instant trips point to a short circuit or ground fault, and forcing the breaker can damage your panel. Jump to our <a href="/blog/charger-keeps-tripping-breaker/">breaker-tripping diagnostic</a> or call an electrician.</div></div>

If your charger is on a GFCI breaker (common for plug-in installs) and it trips every time you charge, that's its own animal — we cover it in the <a href="/blog/gfci-breaker-trips-when-charging/">GFCI tripping guide</a>.

## Step 4: Read the lights

Your charger's LED is telling you something; you just need the translation. Colors vary a little by brand, but the conventions are strong:

<div class="art-viz">
  <span class="vz-title">What the status LED usually means</span>
  <table class="vz-table">
    <tr><th>LED</th><th>Meaning</th><th>Your move</th></tr>
    <tr><td><span class="vz-badge ok">Green / white</span></td><td>Powered and ready — the fault is downstream</td><td>Focus on cable, port, and car settings</td></tr>
    <tr><td><span class="vz-badge info">Blue / pulsing</span></td><td>Session active or negotiating</td><td>It may be working — check the car's screen</td></tr>
    <tr><td><span class="vz-badge warn">Amber</span></td><td>Derated output or heat warning</td><td>Charging slow, not stopped — see why later</td></tr>
    <tr><td><span class="vz-badge danger">Red / flashing</span></td><td>Safety fault — charger has shut itself down</td><td>Decode it with our <a href="/blog/ev-charger-led-flashing-red/">LED color guide</a></td></tr>
    <tr><td><span class="vz-badge">Dark</span></td><td>No power reaching the unit</td><td>Back to the breaker and outlet — Step 3 and 5</td></tr>
  </table>
</div>

## Step 5: The outlet (plug-in chargers only)

If the LED is dark and the breaker is fine, the wall receptacle is the next suspect. Budget 14-50 outlets built for occasional dryer duty degrade fast under daily EV loads — internal contacts loosen, resistance climbs, and eventually connections fail or overheat.

Unplug the charger and look at the plug blades. **Any browning, discoloration, or deformed plastic means the outlet is done** — stop using it and have it replaced with an EV-rated (industrial-grade) receptacle. If the blades look clean, an inexpensive plug-in voltage tester or multimeter can confirm whether the outlet is delivering ~240V. No meter? An electrician can verify it in minutes.

## Step 6: Power-cycle the electronics

Chargers and cars are computers, and computers wedge. With schedules ruled out and power confirmed:

1. Unplug the car.
2. Flip the charger's breaker off, wait a full 60 seconds so its internal electronics fully drain, then flip it back on.
3. Let the charger boot (LED settles), then plug the car back in.

If the car has been showing charge-port errors, also try locking the car, walking away for a few minutes, and returning — many EVs reset their charge controller on sleep.

<div class="callout warn"><span class="co-icon">⚠</span><div>A reset that works once is a fix. A reset you need <em>every week</em> is a symptom — something underneath is failing. Our guide on <a href="/blog/when-a-reset-actually-fixes-your-charger/">when resets actually fix chargers</a> explains the difference.</div></div>

## Step 7: Isolate car vs. charger

Still stuck? One last split decides who you call:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Take the car to a public Level 2 station</strong><span>Not a DC fast charger — a regular J1772/AC station, which exercises the same onboard charger your home unit uses.</span></div></div>
    <div class="vz-step"><div><strong>If the car charges there</strong><span>Your car is fine. The fault is at home: charger, outlet, or circuit. Call the charger manufacturer (or an electrician if Step 5 raised flags).</span></div></div>
    <div class="vz-step"><div><strong>If the car won't charge there either</strong><span>The problem rides with the car — charge port, onboard charger, or settings. That's a call to your dealer or the vehicle's service line.</span></div></div>
  </div>
</div>

There's a full walkthrough of this split in <a href="/blog/ev-charges-in-public-not-at-home/">EV charges fine in public but not at home</a>.

## When to stop DIY-ing

Everything above is safe for any homeowner: plugging, unplugging, reading lights, flipping breakers, changing settings. The line is opening things. Never remove the charger's cover, never pull an outlet from the wall, and never work inside the panel — 240V circuits don't give second chances. If the checklist points at wiring, the outlet, or repeated breaker trips, hand it to a licensed electrician and show them what you found; the diagnosis you've already done will save them time and you money.

*This guide is educational, not professional electrical advice. When in doubt, bring in a licensed pro — and if you want to know what charging should cost you once it's fixed, run your numbers in the [Sim-Lab](/en/sim-lab/).*
