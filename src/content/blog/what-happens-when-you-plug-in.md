---
title: "What Happens Electrically When You Plug In Your EV"
description: "From plug to full battery, a precise sequence runs in seconds. A plain-English walk through the handshake, safety checks, and power flow every time you charge."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, handshake, electrical, home-charging]
draft: false
---

Every time you plug in your EV, an invisible sequence unfolds in about a second — a careful negotiation between your home, the charging equipment, and your car before a single unit of energy moves. Understanding this sequence isn't just satisfying; it makes you far better at diagnosing problems, because you'll know exactly which step failed when something goes wrong. Here's the whole electrical story, in plain English.

## The players

Three systems participate every time you charge, and knowing their roles is half the picture:

<div class="art-viz">
  <div class="vz-tiles">
    <div class="vz-tile"><span class="vz-ico">🏠</span><strong>Your home circuit</strong><span>Delivers 240V AC from a dedicated breaker to the charging equipment.</span></div>
    <div class="vz-tile"><span class="vz-ico info">🔌</span><strong>The EVSE (wall unit)</strong><span>The safety gatekeeper — checks, signals, and switches. Not a charger.</span></div>
    <div class="vz-tile"><span class="vz-ico ok">🚗</span><strong>The car's onboard charger</strong><span>The real charger — converts AC to DC and fills the battery.</span></div>
  </div>
</div>

If those roles are new to you, our [EVSE guide](/blog/what-is-an-evse/) and [onboard charger guide](/blog/onboard-charger-explained/) go deeper. Here we watch them work together.

## The sequence, step by step

<div class="art-viz">
  <span class="vz-title">What happens in the first second</span>
  <div class="vz-flow">
    <div class="vz-step"><div><strong>1. Connection detected</strong><span>You insert the connector. A "proximity" signal tells the car a plug is physically present — it knows not to try driving off, and prepares to charge.</span></div></div>
    <div class="vz-step"><div><strong>2. The handshake begins</strong><span>The EVSE and car open a conversation over a dedicated "pilot" signal — a small low-voltage line separate from the power pins.</span></div></div>
    <div class="vz-step"><div><strong>3. The EVSE advertises available current</strong><span>Through the pilot signal's shape, the EVSE tells the car exactly how many amps this circuit can safely provide — say, 40A. The car now knows its upper limit.</span></div></div>
    <div class="vz-step"><div><strong>4. Safety checks pass</strong><span>The EVSE verifies proper grounding and that no current is leaking. If anything's wrong, it stops here and never energizes the power pins.</span></div></div>
    <div class="vz-step"><div><strong>5. The car says "ready"</strong><span>Satisfied, the car signals readiness back through the pilot line. Only now does the EVSE close its internal contactor — the <em>clack</em> you hear.</span></div></div>
    <div class="vz-step"><div><strong>6. Power flows</strong><span>240V AC now reaches the car's onboard charger, which converts it to DC and feeds the battery — at up to the current the EVSE advertised, never more.</span></div></div>
    <div class="vz-step"><div><strong>7. Continuous monitoring</strong><span>The pilot conversation and safety checks run for the entire session. Any fault — a ground leak, a lost connection — stops everything instantly.</span></div></div>
  </div>
</div>

## Why the handshake matters so much

Notice that *no power flows until everything is verified.* This is the genius of the system: the dangerous part (240V at 40 amps) is withheld until grounding is confirmed, current capacity is agreed, and both sides signal ready. That's why EV charging — high power, outdoors, handled by untrained people in all weather — is remarkably safe. The handshake is the safety.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The insight:</strong> the power pins stay dead until the low-voltage "conversation" over the pilot line confirms it's safe to energize them. Charging isn't "plug in and power flows" — it's "plug in, negotiate, verify, <em>then</em> power flows."</div></div>

## What this teaches you about troubleshooting

Knowing the sequence turns vague problems into specific ones. When charging fails, it failed at a *step*:

<div class="art-viz">
  <table class="vz-table">
    <tr><th>Symptom</th><th>Likely failed step</th></tr>
    <tr><td>Car doesn't acknowledge the plug at all</td><td>Step 1–2: connection/proximity — reseat, check pins</td></tr>
    <tr><td>Charging never starts, no clack</td><td>Step 3–5: <a href="/blog/charger-handshake-failure/">handshake failure</a></td></tr>
    <tr><td>Starts then stops with a fault</td><td>Step 4/7: <a href="/blog/charger-says-ground-fault/">ground fault</a> or safety trip</td></tr>
    <tr><td>Charges slower than expected</td><td>Step 3: EVSE advertised low current, or car's limit</td></tr>
  </table>
</div>

This is why "it won't charge" is really several different problems — each maps to a different step in the sequence, and the [not-charging checklist](/blog/ev-charger-not-charging-checklist/) walks them in order.

## The DC fast-charging variation

At a [DC fast charger](/blog/ac-vs-dc-charging/), the sequence is similar but richer: the handshake includes a full digital conversation about battery state and charging limits, and the station sends DC directly to the battery rather than AC to the onboard charger. Same principle — negotiate and verify before energizing — with more data exchanged. It's why fast chargers take a moment to "initialize" before power flows.

## The elegance of it

Step back and appreciate what happens each time you plug in without a thought: three systems introduce themselves, agree on safe limits, verify the circuit's integrity, confirm mutual readiness, and only then move serious power — all in about a second, every single time, for years. The occasional [handshake hiccup](/blog/charger-handshake-failure/) is the price of a system that refuses to energize anything it hasn't first proven safe. Next time you hear that reassuring clack, you'll know it's the sound of a completed negotiation — the moment verification ends and charging begins.

## The pilot signal, a little deeper

The unsung hero of the whole sequence is the "control pilot" — a single low-voltage signal line, separate from the power conductors, that carries the entire conversation between car and charger. Its cleverness is in how much it communicates with so little: by varying the signal's shape, the charger tells the car precisely how many amps are available, and by changing how it responds, the car signals its readiness state (connected, ready to charge, charging, done). This tiny signal is why no power flows until safety is confirmed — the high-current pins stay dead until the pilot conversation reaches the "ready" state. It's also why a damaged pilot pin or wire silences charging completely while the big power pins look perfectly fine: break the conversation, and the power that depends on it never gets permission to flow. The pilot is small, but it's the linchpin of the entire safe-charging system.

## What continuous monitoring catches

The handshake isn't a one-time gate at the start — the safety conversation runs continuously for the entire session, and that ongoing vigilance is what makes EV charging so safe over hours of unattended operation. Throughout the charge, the system watches for current leakage (a [ground fault](/blog/charger-says-ground-fault/)), verifies the connection stays sound, monitors temperature, and confirms both sides still agree on the charging parameters. Any anomaly — a connector working loose, moisture creating a leak path, a component overheating — triggers an immediate shutdown, often before you'd notice anything wrong. This is why an EV can safely charge overnight in a garage while everyone sleeps: it's not "set and forget," it's "continuously verified," with a safety system auditing the session thousands of times per second and ready to cut power in milliseconds. The reassuring clack at the start is just the beginning of a conversation that never actually stops until you unplug.

## Why sessions start instantly some days and not others

Armed with the sequence, one everyday observation makes sense: the variable pause between plugging in and the clack. Some days it's instant; others there's a beat or three. The variation is the car working through its checks — reading schedules, checking the battery's temperature and state, occasionally waking from sleep first. A pause of seconds is the negotiation being thorough; only a pause that becomes a permanent silence belongs in the [handshake diagnostics](/blog/charger-handshake-failure/). The clack's timing varies; its meaning never does.

## Quick answers

**Why does charging sometimes start with a delay?** Schedules, a cold battery warming first, or the car simply taking a moment on its checks — a short pause before the clack is normal.

**What if the clack never comes?** The handshake didn't complete — reseat the connector and see the [handshake guide](/blog/charger-handshake-failure/).

**Is it safe to unplug mid-charge?** Yes — pressing the release signals the car to stop current *before* the connection breaks. The sequence protects you both ways.

*Educational content. Understand the whole flow, then see what it costs in the [Sim-Lab](/en/sim-lab/).*
