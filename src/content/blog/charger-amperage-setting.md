---
title: "Your EV Charger's Amperage Setting: How to Get It Right"
description: "Many smart chargers let you dial the amps up or down. Learn what the setting does, why it must match your circuit, and when lowering it is the smart move."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, amperage, charger-settings, home-charging]
draft: false
---

Open your smart charger's app and you'll likely find a slider or dropdown for amperage — and it can be genuinely confusing. Set it too high and you risk tripping breakers or worse; set it too low and you charge slower than you could. This setting isn't a "more is better" dial; it's a safety-critical value that must match your circuit, with a few legitimate reasons to deliberately turn it *down*. Here's how to get it right.

## What the setting actually controls

The amperage setting tells the charger the **maximum current to draw from your circuit.** It's the charger's self-imposed speed limit. Crucially, it does *not* change what your circuit is physically capable of — it configures the charger to stay within a safe limit you (or your installer) set.

<div class="callout danger"><span class="co-icon">⚠</span><div><strong>The safety rule that comes first:</strong> this setting must never exceed 80% of your circuit's breaker rating. A charger on a 50A breaker must be set to 40A or below; on a 40A breaker, 32A or below. This is the <a href="/blog/dedicated-circuit-ev-charger/">continuous-load 80% rule</a>, and it's not optional — exceeding it means chronic overheating and tripping. If your installer set this correctly, <em>leave the ceiling alone.</em></div></div>

So the setting has a hard maximum defined by your circuit. Within that ceiling, you have some freedom — and that's where the interesting decisions live.

## Why it's usually set at install

A good installer configures this value to match your circuit when they set the charger up, and for many people that's the end of it — the charger draws its safe maximum, the car takes what it can, and everything just works. If your charging is fine, you may never need to touch this setting.

But three situations make deliberately *lowering* it worthwhile:

<div class="art-viz">
  <span class="vz-title">Good reasons to dial amps down</span>
  <div class="vz-tiles">
    <div class="vz-tile"><span class="vz-ico info">🔮</span><strong>Future-proofed circuit</strong><span>You ran a big circuit for a future car; set the charger to what today's car needs, raise it later.</span></div>
    <div class="vz-tile"><span class="vz-ico warn">🌡</span><strong>Managing heat</strong><span>Lower amps means less heat at every connection — a temporary hedge while awaiting a repair, or in a hot install.</span></div>
    <div class="vz-tile"><span class="vz-ico ok">💰</span><strong>Softer on equipment</strong><span>Charging overnight, you have hours to spare — gentler current is easier on outlets and cables with no downside.</span></div>
  </div>
</div>

## The "I have all night" logic

Here's the insight that makes lowering amps painless: for overnight charging, **speed you don't need is speed you can trade for gentleness.** If your car finishes charging by 1am at 48A, dialing down to 32A might mean it finishes by 3am instead — and you're asleep either way. That slower current runs cooler at every connection, is easier on a plug-in [receptacle](/blog/melted-or-discolored-plug/), and costs you nothing in practice.

<div class="art-viz">
  <div class="vz-gauge">
    <div class="vz-ring ok" style="--p:100"><span>Full</span></div>
    <div class="vz-gauge-text"><strong>Same result, less stress</strong>Whether you charge at 32A or 48A, you wake up to a full battery. The lower setting just gets there a couple hours later — invisible during sleep — while running cooler and gentler on your hardware. When you have time to spare, spending it is free.</div>
  </div>
</div>

This isn't a reason to *always* charge slow — if you need the speed, use it. It's permission to lower amps guilt-free whenever you don't, and a useful tool if you're nursing a setup that runs warm while waiting on an [electrician](/blog/electrician-or-manufacturer-first/).

## When to raise it (carefully)

Raising the setting is fine — up to the circuit's safe ceiling — if:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Your car got upgraded</strong><span>New car with a bigger onboard charger? Raise the setting toward the circuit's max to use its speed.</span></div></div>
    <div class="vz-step"><div><strong>You genuinely need faster charging</strong><span>Daytime top-ups, high daily mileage, or a shared charger justify running nearer the max.</span></div></div>
    <div class="vz-step"><div><strong>But never above 80% of the breaker</strong><span>The ceiling is set by your circuit, not your wishes. Unsure of the safe max? Ask your installer — don't guess upward.</span></div></div>
  </div>
</div>

## Load management: the automatic version

Some advanced chargers adjust amperage *automatically* — a feature called load management or dynamic load balancing. These units monitor your home's overall power use and lower the charger's draw when other big appliances kick on, preventing overloads on a constrained panel. If your charger has this, it's managing amperage for you in real time, and it's especially valuable in homes where a full-speed charger would otherwise exceed the panel's capacity. It's also how [two EVs share one circuit](/blog/charging-two-evs-on-one-circuit/) safely.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>The bottom line:</strong> the amperage setting has a hard safety ceiling (80% of your breaker) set at install — respect it. Below that, feel free to lower it for gentler overnight charging or to match a smaller car, and raise it (never past the ceiling) when you need speed or upgrade cars. When unsure of your safe maximum, your installer knows it.</div></div>

The amperage setting looks like a simple speed dial, but it's really a safety boundary with some comfort room inside it. Know your ceiling, respect it absolutely, and use the freedom below it to charge as gently or as quickly as each night actually requires.

## A worked example

Picture a common setup: you future-proofed by installing a 60A circuit (good for up to 48A charging), but your current car only accepts 32A. Your charger is capable of 48A. What should the setting be? Set it to 32A — matching your car — even though the circuit and charger could both do more. Why not leave it at 48A "just in case"? Because there's no benefit: the car won't draw more than 32A regardless, so 48A and 32A produce identical charging for this vehicle, and the lower setting runs everything a touch cooler and gentler. When you upgrade to a car that accepts 48A, you raise the setting to 48A (safe, because your 60A circuit supports it) and unlock the full speed. This is future-proofing done right: the expensive circuit is ready, and the cheap-to-change setting tracks whatever car you actually own.

## When the setting is grayed out or fixed

Not every charger exposes an amperage setting, and that's fine — many are simply configured to their circuit's safe maximum at install and left there. If yours has no adjustable setting, it means the installer set the hardware to match your circuit and there's nothing for you to change; the charger draws its safe max and your car takes what it can. If your charger *does* have a setting but it's locked or requires an installer code, that's a deliberate safety feature preventing anyone from setting it above the circuit's safe ceiling — respect it, and if you genuinely need it changed (say, after a circuit upgrade), have your electrician adjust it. The setting exists to give flexibility *below* the safety ceiling, never above it, so a charger that won't let you exceed a certain value isn't broken — it's protecting you exactly as designed.

## Quick answers

**Will lowering amps hurt my battery?** No — slower AC charging is, if anything, gentler. The battery doesn't care whether kWh arrive at 32A or 48A.

**My app shows fewer amps than my setting — why?** The setting is a ceiling; the car may draw less when [tapering](/blog/charge-rate-tapering/), cold, or limited by its own settings.

**Who should change the ceiling after a circuit upgrade?** Your electrician — the setting must match the new breaker per the 80% rule, and that's their call to certify.

*Educational content, not professional electrical advice. Your circuit's safe maximum is set by its wiring and breaker — confirm it with a licensed electrician. Plan in the [Sim-Lab](/en/sim-lab/).*
