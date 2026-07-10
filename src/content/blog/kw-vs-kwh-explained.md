---
title: "kW vs kWh: What's the Difference in Plain English?"
description: "kW is speed, kWh is amount — mixing them up leads to bad charging decisions. A plain-English guide with everyday analogies every EV owner should know."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Basics"
tags: [charging-basics, kw-kwh, energy, home-charging]
draft: false
---

Two little letters cause more EV confusion than anything else: the difference between **kW** and **kWh**. They look nearly identical, they show up all over your car's screen and your electric bill, and mixing them up leads to genuinely bad decisions — buying the wrong charger, misreading your costs, misjudging how long a charge will take. The good news is that the difference is simple once you have the right picture, and you'll never un-see it after this.

## The one analogy that fixes everything

Think about water flowing from a tap into a bucket.

- **kW (kilowatts) is the flow rate** — how fast the water comes out of the tap. Turn the tap wide open, high kW. Trickle it, low kW.
- **kWh (kilowatt-hours) is the amount** — how much water ends up in the bucket after some time.

<div class="art-viz">
  <span class="vz-title">Power vs. energy, in one picture</span>
  <div class="vz-versus">
    <div class="vz-side"><h4>⚡ kW — the rate</h4><ul><li>How fast energy moves right now</li><li>A speed, a snapshot</li><li>"The tap is open this wide"</li><li>Charger output, car's draw</li></ul></div>
    <span class="vz-vs">VS</span>
    <div class="vz-side"><h4>🪣 kWh — the amount</h4><ul><li>How much energy total</li><li>A quantity, an accumulation</li><li>"This much water in the bucket"</li><li>Battery size, energy on your bill</li></ul></div>
  </div>
</div>

The relationship between them is just multiplication by time:

**kW × hours = kWh.** A tap running at 7 kW for 2 hours delivers 14 kWh into the bucket. That's the whole math. Everything else is applying it.

## Where each one shows up in EV life

Once you know which is which, your car and your bill suddenly make sense:

<div class="art-viz">
  <span class="vz-title">Which number is which</span>
  <table class="vz-table">
    <tr><th>You'll see it as…</th><th>It's measuring…</th><th>So it's…</th></tr>
    <tr><td>"Charging at 7.4 kW"</td><td>How fast energy is flowing now</td><td><span class="vz-badge info">kW — rate</span></td></tr>
    <tr><td>"75 kWh battery"</td><td>How much energy the pack holds</td><td><span class="vz-badge ok">kWh — amount</span></td></tr>
    <tr><td>"Added 30 kWh overnight"</td><td>Total energy delivered</td><td><span class="vz-badge ok">kWh — amount</span></td></tr>
    <tr><td>"48-amp / 11.5 kW charger"</td><td>The max flow it can supply</td><td><span class="vz-badge info">kW — rate</span></td></tr>
    <tr><td>"You used 900 kWh this month"</td><td>Total energy billed</td><td><span class="vz-badge ok">kWh — amount</span></td></tr>
    <tr><td>"$0.18 per kWh"</td><td>Price per unit of amount</td><td><span class="vz-badge ok">kWh — you pay for amount</span></td></tr>
  </table>
</div>

The single most important takeaway from that table: **your utility bills you for kWh, not kW.** You pay for the water in the bucket, not how fast the tap ran. This is why a slow overnight charge and a fast one that deliver the same energy cost you exactly the same — a fact that surprises people and that underpins our whole [charging cost](/blog/how-to-estimate-cost-per-mile/) discussion.

## Putting it to work: three real questions

**"How long will charging take?"** This is a kWh ÷ kW question. You need to *add* a certain amount (kWh), and your setup delivers at a certain rate (kW). Need 40 kWh, charging at 8 kW? About 5 hours. Amount divided by rate equals time.

<div class="art-viz">
  <div class="vz-gauge">
    <div class="vz-ring info" style="--p:63"><span>5 hrs</span></div>
    <div class="vz-gauge-text"><strong>40 kWh ÷ 8 kW = 5 hours</strong>The amount you need divided by your flow rate gives your charging time. Bump the rate to 11 kW and the same 40 kWh takes under 4 hours — same bucket, wider tap.</div>
  </div>
</div>

**"What does a full charge cost?"** This is a kWh × price question. Fill 40 kWh at $0.18/kWh and you've spent about $7.20 — the *rate* you charged at never enters the calculation. Only the amount and the price do.

**"Will a bigger charger save me money?"** No — and now you can see exactly why. A bigger charger raises kW (the flow rate), which only changes *how fast* you fill the bucket, not *how much* is in it or what each unit costs. You'll finish sooner; you won't pay less. Speed and cost are genuinely separate questions, and conflating them is the classic kW/kWh mistake.

<div class="callout ok"><span class="co-icon">✓</span><div><strong>Remember it this way:</strong> the "h" in kWh stands for the hours that turn a <em>rate</em> into an <em>amount</em>. kW is how fast; kWh is how much. Anything you're billed for, or that describes a battery's size, is kWh.</div></div>

## A couple of cousins you'll meet

Two related terms trip people up in the same family. **Amps and volts** are the ingredients of kW: volts × amps = watts (and watts ÷ 1,000 = kW). That's why a "40-amp" charger on a 240-volt circuit is a "9.6 kW" charger — same fact, two vocabularies, explained in [what a charger's kW rating means](/blog/charger-kw-rating-explained/). And **range per hour** (miles added per hour of charging) is just kW translated into driving terms through your car's efficiency — a friendlier unit for everyday planning, but kW underneath.

Master the tap-and-bucket picture and every one of these becomes obvious instead of intimidating. kW is the tap; kWh is the bucket; time connects them; and your bill only ever cares about the bucket.

## The bill-reading payoff

Here's where this pays off concretely: your electric bill. When your EV charging shows up, it shows up as kWh — the amount of energy you drew — multiplied by your rate. If your bill jumped 250 kWh the month you got your EV, that's the *amount* the car consumed, and multiplying by your per-kWh rate gives the dollar cost. The charging *speed* (kW) never appears on the bill at all, because the utility genuinely doesn't care how fast you drew the energy — only how much. This is the single most freeing realization for cost-conscious EV owners: you cannot save money by charging slower or faster, because you're billed purely on the total amount. Charge at whatever speed is convenient; optimize cost by charging at cheaper *times* (via [time-of-use rates](/blog/how-much-you-save-overnight/)) or by using less energy — never by adjusting speed.

## The mistake that costs real money

The most expensive kW/kWh confusion is buying a charger for its kW rating expecting lower bills. A shopper sees "11.5 kW — charges twice as fast!" and imagines twice the value. But twice the *rate* fills the same *amount* (kWh) into the same battery at the same per-kWh price — the bill is identical, you just finish sooner. If your car charges fully overnight either way, that speed bought you nothing but bragging rights. Spend the kW/kWh clarity where it counts: match the charger to your car's needs, and put your money-saving energy into *when* you charge, not how fast. The tap-and-bucket picture, once internalized, quietly protects you from a whole category of marketing.

## The metric that ties it to driving

One more translation worth knowing: efficiency, expressed as miles per kWh. If your car averages 3.5 miles/kWh, then every kWh in the bucket is 3.5 miles of driving, and your cost per mile is your electricity rate divided by that number. It's the bridge between the electrical units and the only unit you actually feel — distance. Watch it on your car's trip screen for a few weeks and the kW/kWh vocabulary becomes fully fluent: the tap fills the bucket, the bucket holds miles, and your bill prices the bucket.

## The metric that ties it to driving

One more translation worth knowing: efficiency, expressed as miles per kWh. If your car averages 3.5 miles/kWh, then every kWh in the bucket is 3.5 miles of driving, and your cost per mile is your electricity rate divided by that number. It's the bridge between the electrical units and the only unit you actually feel — distance. Watch it on your car's trip screen for a few weeks and the kW/kWh vocabulary becomes fully fluent: the tap fills the bucket, the bucket holds miles, and your bill prices the bucket.

## Quick answers

**Is a bigger kW charger ever worth it?** For speed, yes — if your car can accept it. For cost, never: you pay per kWh regardless of rate.

**Why does my bill say kWh but my charger app says kW?** The app shows the live rate (kW) during charging and the session total (kWh) afterward — the total is what the bill reflects.

**How many kWh does a full charge take?** Roughly your battery's usable size plus ~10–15% [efficiency loss](/blog/charging-efficiency-loss/) — a 60 kWh battery from empty draws ~66–69 kWh from the meter.

*Educational content. Want to turn kWh and your local price into a real monthly number? The [Sim-Lab](/en/sim-lab/) does the arithmetic for you.*
