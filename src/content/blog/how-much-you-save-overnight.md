---
title: "How Much You Actually Save Charging Overnight vs Daytime"
description: "On time-of-use rates, overnight charging can cost half as much as daytime. The real math, what TOU plans look like, and how to automate the savings."
pubDate: 2026-07-08
category: ev-home-charging
subcategory: "Charging Costs & Efficiency"
tags: [charging-costs, time-of-use, off-peak, home-charging]
draft: false
---

"Charge overnight — it's cheaper" is the most repeated advice in EV ownership, and also the most under-explained. Cheaper by how much? For whom? Why? The honest answers: it depends entirely on your rate plan, the savings range from zero to spectacular, and finding out which end you're on takes ten minutes with your utility bill. Here's the full picture, with real math.

## First: overnight is only cheaper on the right plan

The crucial fact most advice skips: **on a flat-rate plan, overnight charging saves nothing.** If your utility charges the same price per kWh at 3 a.m. as at 6 p.m., timing is irrelevant to cost — charge whenever you like. The savings exist only on **time-of-use (TOU) plans**, where the price per kWh changes by time of day: expensive during high-demand "peak" hours (typically late afternoon and evening), cheap during low-demand "off-peak" hours (typically overnight).

<div class="art-viz">
  <span class="vz-title">A typical TOU rate structure</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">Peak (e.g. 4–9 pm)</span><span class="vz-track"><span class="vz-fill danger" style="width:100%"></span></span><span class="vz-val">$0.30/kWh</span></div>
    <div class="vz-row"><span class="vz-label">Mid/shoulder hours</span><span class="vz-track"><span class="vz-fill warn" style="width:60%"></span></span><span class="vz-val">$0.18/kWh</span></div>
    <div class="vz-row"><span class="vz-label">Off-peak (e.g. 11 pm–6 am)</span><span class="vz-track"><span class="vz-fill" style="width:37%"></span></span><span class="vz-val">$0.11/kWh</span></div>
  </div>
  <span class="vz-note">Illustrative structure — actual rates and windows vary widely by utility. Yours are on your bill or your utility's site.</span>
</div>

Many utilities also offer **EV-specific rate plans** with extra-cheap overnight windows designed exactly for this. If you drive an EV and your utility has one, comparing it against your current plan is among the highest-value ten minutes in this entire subject.

## The real math

Take a typical scenario: 12,000 miles a year at 3.5 mi/kWh with [charging losses](/blog/charging-efficiency-loss/) included — about 3,840 kWh of charging annually. On the illustrative rates above:

<div class="art-viz">
  <span class="vz-title">Annual charging cost by charging window</span>
  <div class="vz-bars">
    <div class="vz-row"><span class="vz-label">All peak-hours charging</span><span class="vz-track"><span class="vz-fill danger" style="width:100%"></span></span><span class="vz-val">~$1,152/yr</span></div>
    <div class="vz-row"><span class="vz-label">Shoulder-hours charging</span><span class="vz-track"><span class="vz-fill warn" style="width:60%"></span></span><span class="vz-val">~$691/yr</span></div>
    <div class="vz-row"><span class="vz-label">All off-peak charging</span><span class="vz-track"><span class="vz-fill" style="width:37%"></span></span><span class="vz-val">~$422/yr</span></div>
  </div>
  <span class="vz-note">Same car, same miles, same energy — up to ~$730/year difference purely from <em>when</em> the charging happens.</span>
</div>

That's the headline: on a TOU plan with a real peak/off-peak spread, timing alone can cut your charging cost by half or more — hundreds of dollars a year, every year, for a one-time scheduling setup. In [cost-per-mile terms](/blog/how-to-estimate-cost-per-mile/), the example drops from ~9.6 cents to ~3.5 cents per mile.

## Automating it (the part that makes it real)

Savings that depend on remembering to plug in at 11 p.m. don't survive contact with real life. The whole trick is automation — plug in whenever you get home, and let a schedule delay the actual charging until the cheap window:

<div class="art-viz">
  <div class="vz-flow">
    <div class="vz-step"><div><strong>Find your windows</strong><span>Your utility's site or bill lists the exact peak/off-peak hours for your plan. Write them down.</span></div></div>
    <div class="vz-step"><div><strong>Set ONE schedule</strong><span>In the car OR the <a href="/blog/what-makes-a-charger-smart/">charger app</a> — never both (dueling schedules cause the classic <a href="/blog/ev-charger-not-charging-checklist/">phantom no-charge</a>). Set charging to start at the off-peak start time.</span></div></div>
    <div class="vz-step"><div><strong>Plug in on arrival, always</strong><span>The habit stays "plug in when you park" — the schedule handles the timing. Charging starts at 11 p.m. whether you remember it exists or not.</span></div></div>
    <div class="vz-step"><div><strong>Verify once on your bill</strong><span>After a month, check that your usage shifted into the off-peak bucket. Then never think about it again.</span></div></div>
  </div>
</div>

## The caveats that keep it honest

**TOU cuts both ways.** Switching to a TOU plan makes your *whole household's* peak-hour usage pricier, not just charging. If your home runs heavy AC at 5 p.m. daily, a TOU plan can cost more overall despite cheap charging — run your utility's plan-comparison tool with your actual usage before switching. EV-specific plans with modest peak premiums and deep overnight discounts are usually the safest win.

**Charging isn't the place to chase pennies past the schedule.** Once your charging sits in the off-peak window, you've captured essentially all the timing savings available — micro-optimizing beyond that yields cents. Set it, verify it, move on.

**Demand-response programs stack.** Some utilities pay ongoing credits for enrolling your charger in [managed-charging programs](/blog/charging-session-stops-mid-charge/) on top of TOU savings — worth a look while you're on their site, with the trade-off that they can occasionally pause or throttle your sessions during grid events.

The overnight-charging advice is real — it's just conditional. Flat rate: charge whenever. TOU rate: one schedule, set once, saves hundreds a year for the life of the car. Ten minutes with your bill tells you which world you're in, and the [Sim-Lab](/en/sim-lab/) will put exact numbers on your situation.

## Quick answers

**Do I need a smart charger for this?** Not if your car schedules charging — [most modern EVs do](/blog/what-makes-a-charger-smart/). One schedule, in one place, either side.

**What if my overnight window is shorter than my charge time?** Rare at Level 2, but if so, let the schedule *start* off-peak and run past the boundary — most energy still lands in the cheap window.

**Is off-peak charging worse for the grid or my battery?** The opposite on both counts — overnight is when the grid has spare capacity, and timing has no effect on battery health.

## A worked monthly example

To make it concrete, take one month for a typical commuter: 1,000 miles driven, 3.5 mi/kWh, ~320 kWh of wall-side charging after [losses](/blog/charging-efficiency-loss/). On a flat $0.16 rate that's $51.20, regardless of timing. Move to the illustrative TOU plan: all-peak charging costs $96, all-off-peak costs $35.20. The off-peak schedule saves ~$16/month against the flat plan and ~$61/month against careless peak charging — and remember the schedule costs nothing and runs itself. Scale to your real numbers: higher-mileage drivers and utilities with wider peak/off-peak spreads see proportionally bigger savings, while modest spreads yield modest savings. The point of the worked example isn't the specific dollars — it's that the calculation takes two minutes with your own bill, and the result tells you exactly what your one-time scheduling setup is worth per month, forever.

## Verifying the savings are real

One month after setting your schedule, spend five minutes closing the loop — because a schedule that silently isn't running saves nothing. Check three things: your charger or car app's session history shows charging starting inside the off-peak window (timestamps don't lie); your utility bill's TOU breakdown shows the charging kWh landing in the off-peak bucket; and your battery still reaches its target by morning. All three green means the automation is doing its job and will keep doing it for years untouched. A mismatch usually traces to the classic culprits — a second schedule fighting the first, a [clock reset after an outage](/blog/charging-stopped-after-power-outage/), or a charger that lost its settings in an update. The verification habit matters because TOU savings fail silently: nothing breaks, charging still works, and the only symptom of a dead schedule is a bill quietly $30 higher than it should be. One five-minute check per season keeps the savings honest.

## The household-shift bonus

Once you're on a TOU plan for the car, an underrated second win appears: shifting *other* flexible loads into the cheap window. Dishwashers with delay-start, laundry timed after 9 p.m., pool pumps rescheduled — each moved load compounds the plan's value. The EV is usually the anchor that justifies switching to TOU (it's the biggest schedulable load a home has ever had), but households that lean into the plan often find another meaningful monthly saving in the loads they shifted alongside it. The flip side deserves equal honesty: loads you *can't* shift — dinnertime cooking, evening AC in a heat wave — now cost more, which is why the plan-comparison step with your real usage history matters before switching. TOU rewards flexible households generously and penalizes inflexible ones mildly; know which you are, and the EV's schedule is your down payment on the flexible side.

*Educational content, not financial advice. Rates and plans vary — your utility's own comparison tools use your real usage history.*
