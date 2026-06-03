---
layout: page
title: Hybrid Athlete 2026
description: A working father in his late-thirties chasing strength and endurance — one race at a time.
img: assets/img/blog/projects/hybrid_athelete/hybrid_athlete_thumb.jpg
importance: 3
category: Personal
permalink: /projects/hybrid_athlete/
---

<style>
/* ── Hybrid Athlete Page ── */
.ha-section { margin: 2.5rem 0; }
.ha-section > h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-bottom: 0.45rem;
  border-bottom: 2px solid #e63946;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.ha-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.55rem;
  border-radius: 20px;
  background: #22c55e;
  color: #fff;
  vertical-align: middle;
}
.ha-badge.upcoming { background: #3b82f6; }
.ha-badge.soon     { background: #f59e0b; color: #1a1a1a; }

/* ── Race Calendar ── */
.ha-calendar { display: flex; flex-direction: column; gap: 0.55rem; }
.ha-race-row {
  display: grid;
  grid-template-columns: 90px 1fr auto;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 8px;
  font-size: 0.85rem;
}
.ha-race-row.done  { border-left: 3px solid #22c55e; }
.ha-race-row.soon  { border-left: 3px solid #f59e0b; }
.ha-race-row.future{ border-left: 3px solid #3b82f6; }
.ha-race-date { font-weight: 600; color: var(--global-text-color-light, #666); font-size: 0.78rem; }
.ha-race-name { font-weight: 600; }
.ha-race-meta { font-size: 0.78rem; color: var(--global-text-color-light, #666); }
.ha-race-result { font-weight: 700; color: #e63946; white-space: nowrap; font-size: 0.9rem; }
.ha-race-goal   { font-size: 0.78rem; color: var(--global-text-color-light, #666); text-align: right; }

/* ── Event Cards ── */
.ha-events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
}
.ha-event-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.ha-event-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.1); }
.ha-event-header {
  padding: 0.75rem 1rem 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.ha-event-header .ev-name { font-weight: 800; font-size: 1rem; letter-spacing: 0.04em; }
.ha-event-header .ev-date { font-size: 0.78rem; color: var(--global-text-color-light, #888); }
.ha-event-imgs { display: grid; gap: 0.4rem; padding: 0.4rem; }
.ha-event-imgs.cols-2 { grid-template-columns: 1fr 1fr; }
.ha-event-imgs.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
.ha-event-imgs img { width: 100%; height: 220px; object-fit: cover; object-position: top center; border-radius: 6px; display: block; }
.ha-event-body { padding: 0.85rem 1rem; }
.ha-venue { font-size: 0.78rem; color: var(--global-text-color-light, #666); margin-bottom: 0.55rem; }
.ha-stat-row { display: flex; gap: 0.7rem; flex-wrap: wrap; }
.ha-stat {
  background: var(--global-bg-color, #f8f9fa);
  border: 1px solid var(--global-divider-color, #e8e8e8);
  border-radius: 7px;
  padding: 0.35rem 0.75rem;
  min-width: 80px;
}
.ha-stat .sl { font-size: 0.7rem; color: var(--global-text-color-light, #888); }
.ha-stat .sv { font-weight: 800; color: #e63946; font-size: 1.05rem; line-height: 1.2; }
.ha-cert { margin-top: 0.85rem; }
.ha-cert img { width: 100%; border-radius: 6px; border: 1px solid var(--global-divider-color, #ddd); }

/* ── Rankings ── */
.ha-rank-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  margin-bottom: 1.1rem;
}
.ha-rank-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 10px;
  padding: 1rem 1.1rem;
  text-align: center;
}
.ha-rank-card .rk-type { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #e63946; }
.ha-rank-card .rk-num  { font-size: 2.6rem; font-weight: 800; line-height: 1.05; }
.ha-rank-card .rk-lbl  { font-size: 0.7rem; color: var(--global-text-color-light, #888); }
.ha-rank-card .rk-time { font-size: 1.15rem; font-weight: 700; margin-top: 0.4rem; }
.ha-rank-card .rk-ag   { font-size: 0.72rem; color: var(--global-text-color-light, #888); }
.ha-ranking-screenshot img { width: 100%; border-radius: 8px; border: 1px solid var(--global-divider-color, #ddd); }

/* ── Monthly Progress ── */
.ha-month-label {
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}
.ha-dot { width: 9px; height: 9px; border-radius: 50%; background: #e63946; display: inline-block; flex-shrink: 0; }
.ha-months-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.ha-month-col { display: flex; flex-direction: column; gap: 0.5rem; }
.ha-month-col img {
  width: 100%;
  height: 700px;
  object-fit: contain;
  background: var(--global-bg-color, #f8f9fa);
  border-radius: 8px;
  border: 1px solid var(--global-divider-color, #ddd);
  display: block;
}
.ha-coming-soon {
  padding: 1.2rem;
  text-align: center;
  border: 1px dashed var(--global-divider-color, #bbb);
  border-radius: 8px;
  color: var(--global-text-color-light, #999);
  font-size: 0.82rem;
  font-style: italic;
}

/* ── Training Plan ── */
.ha-philosophy {
  background: #14142b;
  color: #f1f5f9;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.ha-philosophy span { color: #e63946; font-weight: 700; font-size: 0.9rem; white-space: nowrap; }
.ha-philosophy-text {
  font-size: 0.88rem;
  line-height: 1.7;
  color: var(--global-text-color, #333);
  margin-bottom: 1.2rem;
}
.ha-week-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  gap: 0.8rem;
}
.ha-day-card { border: 1px solid var(--global-divider-color, #e0e0e0); border-radius: 10px; overflow: hidden; }
.ha-day-head {
  background: #14142b;
  color: #fff;
  padding: 0.45rem 0.8rem;
  font-weight: 700;
  font-size: 0.82rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.ha-day-head .day-tag { font-size: 0.7rem; opacity: 0.7; }
.ha-day-body { padding: 0.65rem 0.8rem; font-size: 0.8rem; }
.ha-day-body .focus { font-weight: 700; color: #e63946; margin-bottom: 0.3rem; font-size: 0.82rem; }
.ha-day-body ul { margin: 0; padding-left: 1rem; }
.ha-day-body ul li { margin-bottom: 0.15rem; }
.ha-day-body .pm-block {
  margin-top: 0.5rem;
  padding-top: 0.4rem;
  border-top: 1px solid var(--global-divider-color, #eee);
}
.ha-day-body .pm-block .focus { color: #3b82f6; }
.ha-zone-table { width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-top: 0.8rem; }
.ha-zone-table th { background: #14142b; color: #fff; padding: 0.35rem 0.6rem; text-align: left; font-size: 0.75rem; }
.ha-zone-table td { padding: 0.3rem 0.6rem; border-bottom: 1px solid var(--global-divider-color, #eee); }
.ha-zone-table tr:nth-child(even) td { background: var(--global-bg-color, #f9f9f9); }

/* ── Story Timeline ── */
.ha-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0 0 1.5rem;
  position: relative;
}
.ha-timeline::before {
  content: "";
  position: absolute;
  left: 38px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--global-divider-color, #e0e0e0);
}
.ha-tl-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  position: relative;
}
.ha-tl-item:last-child { padding-bottom: 0; }
.ha-tl-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #14142b;
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.ha-tl-dot.red   { background: #e63946; }
.ha-tl-dot.green { background: #22c55e; }
.ha-tl-dot.amber { background: #f59e0b; }
.ha-tl-dot.blue  { background: #3b82f6; }
.ha-tl-content { padding-top: 0.4rem; }
.ha-tl-label {
  font-weight: 700;
  font-size: 0.92rem;
  margin-bottom: 0.25rem;
}
.ha-tl-year {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #e63946;
  margin-bottom: 0.2rem;
}
.ha-tl-text {
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--global-text-color-light, #555);
}

/* ── Nutrition ── */
.ha-macro-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}
.ha-macro-card { border: 1px solid var(--global-divider-color, #e0e0e0); border-radius: 10px; padding: 0.75rem 0.9rem; text-align: center; }
.ha-macro-card .mc-lbl { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--global-text-color-light, #888); }
.ha-macro-card .mc-val { font-size: 1.7rem; font-weight: 800; line-height: 1.1; margin: 0.2rem 0 0; }
.ha-macro-card .mc-sub { font-size: 0.72rem; color: var(--global-text-color-light, #888); }
.ha-macro-card.cal .mc-val  { color: #e63946; }
.ha-macro-card.prot .mc-val { color: #3b82f6; }
.ha-macro-card.carb .mc-val { color: #f59e0b; }
.ha-macro-card.fat  .mc-val { color: #22c55e; }
.ha-meal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
}
.ha-meal-card { border: 1px solid var(--global-divider-color, #e0e0e0); border-radius: 10px; overflow: hidden; font-size: 0.8rem; }
.ha-meal-head { background: var(--global-bg-color, #f1f5f9); padding: 0.45rem 0.8rem; font-weight: 700; font-size: 0.78rem; border-bottom: 1px solid var(--global-divider-color, #e0e0e0); }
.ha-meal-body { padding: 0.6rem 0.8rem; }
.ha-meal-body ul { margin: 0; padding-left: 1rem; }
.ha-meal-body ul li { margin-bottom: 0.2rem; }
.ha-note-box {
  margin-top: 1.1rem;
  background: var(--global-bg-color, #f8faff);
  border-left: 3px solid #3b82f6;
  border-radius: 0 8px 8px 0;
  padding: 0.7rem 1rem;
  font-size: 0.82rem;
  color: var(--global-text-color-light, #555);
}
</style>

<!-- ── HERO ── -->
<div class="ha-timeline">

  <div class="ha-tl-item">
    <div class="ha-tl-dot">🏃</div>
    <div class="ha-tl-content">
      <div class="ha-tl-year">Childhood</div>
      <div class="ha-tl-label">Born to Run</div>
      <div class="ha-tl-text">I have been a runner for as long as I can remember. At six years old, my father had my brother and me lacing up our shoes every morning for a 3km run before school — no exceptions, no excuses. It was just what we did. That daily ritual became the foundation of everything. Through school and university I competed in 800m and 1500m track races, collecting medals and a love for movement that felt as natural as breathing.</div>
    </div>
  </div>

  <div class="ha-tl-item">
    <div class="ha-tl-dot green">💪</div>
    <div class="ha-tl-content">
      <div class="ha-tl-year">2014 – 2015</div>
      <div class="ha-tl-label">Peak Shape — MMA &amp; the Gym</div>
      <div class="ha-tl-text">My peak came while training for MMA with <strong>Fitness Fight Club in Bangalore</strong>. I was in <a href="{{ '/blog/2014/transformation-skinny-bulky-ripped/' | relative_url }}">the best shape of my life</a> — lean, strong, and hungry. Then came a PhD offer in Germany, and with it, a different kind of pressure. The demands of doctoral research, life in a new country, and the slow accumulation of stress quietly pushed fitness to the back seat. By 2019 I was at my heaviest — close to 80kg — and barely recognising the athlete I used to be.</div>
    </div>
  </div>

  <div class="ha-tl-item">
    <div class="ha-tl-dot red">📉</div>
    <div class="ha-tl-content">
      <div class="ha-tl-year">2016 – 2019</div>
      <div class="ha-tl-label">The PhD Slide</div>
      <div class="ha-tl-text">Doctoral research, a new country, accumulated stress — fitness quietly moved to the back seat. By 2019 I was at my heaviest, close to 80kg, barely recognising the athlete I used to be. The knowledge was still there. The structure wasn't.</div>
    </div>
  </div>

  <div class="ha-tl-item">
    <div class="ha-tl-dot amber">🔄</div>
    <div class="ha-tl-content">
      <div class="ha-tl-year">2020 – 2023</div>
      <div class="ha-tl-label">Rebuilding — Triathlon &amp; Fatherhood</div>
      <div class="ha-tl-text">COVID became an unlikely turning point — the forced pause gave me time to reconnect with movement. By 2022 I crossed the finish line of my second Olympic Triathlon with the <strong>ASHA Silicon Valley group</strong>. In 2023 my son was born, and fitness stopped being just about me. It became about the kind of father I wanted to be.</div>
    </div>
  </div>

  <div class="ha-tl-item">
    <div class="ha-tl-dot blue">🎯</div>
    <div class="ha-tl-content">
      <div class="ha-tl-year">2026</div>
      <div class="ha-tl-label">The Hybrid Athlete Decision</div>
      <div class="ha-tl-text">At the end of 2025 I made a decision: no more half-measures. The <strong>Nick Bare</strong> hybrid philosophy — strength and endurance simultaneously — paired with <strong>Dorian Yates'</strong> Blood and Guts method gave me a framework that finally fit a working father's life. DEKA events, Spartan races, and triathlons — this season is the test.</div>
    </div>
  </div>

</div>

---

<!-- ── RACE CALENDAR ── -->
<div class="ha-section">
  <h2>📅 2026 Race Calendar</h2>
  <div class="ha-calendar">

    <div class="ha-race-row done">
      <div><div class="ha-race-date">Mar 15</div></div>
      <div><div class="ha-race-name">Deka Strong</div><div class="ha-race-meta">Academy of Self Defense · San Jose, CA · DEKA</div></div>
      <div style="text-align:right"><div class="ha-race-result">25:30 ✓</div></div>
    </div>

    <div class="ha-race-row done">
      <div><div class="ha-race-date">Apr 26</div></div>
      <div><div class="ha-race-name">Deka Fit — NorCal Sacramento</div><div class="ha-race-meta">Sacramento, CA · DEKA</div></div>
      <div style="text-align:right"><div class="ha-race-result">56:41 ✓</div></div>
    </div>

    <div class="ha-race-row done">
      <div><div class="ha-race-date">May 9</div></div>
      <div><div class="ha-race-name">Deka Mile</div><div class="ha-race-meta">APX Velocity · San Jose, CA · DEKA</div></div>
      <div style="text-align:right"><div class="ha-race-result">31:16 ✓</div></div>
    </div>

    <div class="ha-race-row done">
      <div><div class="ha-race-date">May 30</div></div>
      <div><div class="ha-race-name">NorCal Spartan Super</div><div class="ha-race-meta">Salinas, CA · OCF 10km</div></div>
      <div style="text-align:right"><div class="ha-race-result">2:06:42 ✓</div></div>
    </div>

    <div class="ha-race-row done">
      <div><div class="ha-race-date">May 31</div></div>
      <div><div class="ha-race-name">Spartan Sprint — Salinas</div><div class="ha-race-meta">Salinas, CA · OCF 5km</div></div>
      <div style="text-align:right"><div class="ha-race-result">2:05:46 ✓</div></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Jul 11</div></div>
      <div><div class="ha-race-name">Stars and Strides 10K + Rafa Kids Fun Run</div><div class="ha-race-meta">10K Run · with Rafa</div></div>
      <div style="text-align:right"><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Jul 12</div></div>
      <div><div class="ha-race-name">Deka Strong</div><div class="ha-race-meta">DEKA</div></div>
      <div style="text-align:right"><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Aug 9</div></div>
      <div><div class="ha-race-name">Triathlon — Santa Cruz</div><div class="ha-race-meta">Santa Cruz, CA · Sprint or Olympic</div></div>
      <div style="text-align:right"><div class="ha-race-goal">Sprint &lt;1:25 / Olympic &lt;2:50</div><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Aug 29</div></div>
      <div><div class="ha-race-name">Spartan Super 10K NorCal + Kids Race</div><div class="ha-race-meta">Elk Grove, CA · OCF 10km · with Rafa</div></div>
      <div style="text-align:right"><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Sep 13</div></div>
      <div><div class="ha-race-name">Santa Cruz 70.3 Swim Relay</div><div class="ha-race-meta">Santa Cruz, CA · 1.9km swim leg</div></div>
      <div style="text-align:right"><div class="ha-race-goal">Goal: Sub 48 min</div><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Sep 27</div></div>
      <div><div class="ha-race-name">Olympic/Sprint Triathlon</div><div class="ha-race-meta">Triathlon</div></div>
      <div style="text-align:right"><div class="ha-race-goal">Goal: Sub 2:45 Olympic</div><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Oct 3–4</div></div>
      <div><div class="ha-race-name">Rock 'n' Roll San Jose 10K</div><div class="ha-race-meta">San Jose, CA · 10K Run</div></div>
      <div style="text-align:right"><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

    <div class="ha-race-row future">
      <div><div class="ha-race-date">Nov 7</div></div>
      <div><div class="ha-race-name">SLO CAL Spartan Beast</div><div class="ha-race-meta">San Luis Obispo, CA · OCF 21km</div></div>
      <div style="text-align:right"><span class="ha-badge upcoming">Upcoming</span></div>
    </div>

  </div>
</div>

---

<!-- ── DEKA TRIFECTA ── -->
<div class="ha-section">
  <h2>🏆 2026 Deka Trifecta <span class="ha-badge">Completed</span></h2>

  <div class="ha-events-grid">

    <!-- Deka Strong -->
    <div class="ha-event-card">
      <div class="ha-event-header">
        <span class="ev-name">DEKA STRONG</span>
        <span class="ev-date">Mar 15, 2026</span>
      </div>
      <div class="ha-event-imgs">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka-strong/5999757466242244668.JPG' | relative_url }}" alt="Deka Strong 2026" loading="lazy">
      </div>
      <div class="ha-event-body">
        <div class="ha-venue">📍 Academy of Self Defense — San Jose, CA</div>
        <div class="ha-stat-row">
          <div class="ha-stat"><div class="sl">Time</div><div class="sv">25:30</div></div>
          <div class="ha-stat"><div class="sl">Global Rank</div><div class="sv">#381</div></div>
          <div class="ha-stat"><div class="sl">AG M35–39</div><div class="sv">#796</div></div>
        </div>
        <div class="ha-cert">
          <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka-strong/DEKA-strong-cert.png' | relative_url }}" alt="Deka Strong Certificate" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Deka Fit -->
    <div class="ha-event-card">
      <div class="ha-event-header">
        <span class="ev-name">DEKA FIT</span>
        <span class="ev-date">Apr 26, 2026</span>
      </div>
      <div class="ha-event-imgs cols-2">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka_fit/681459976.JPG' | relative_url }}" alt="Deka Fit — Farmer's Carry" loading="lazy">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka_fit/681462572.JPG' | relative_url }}" alt="Deka Fit — Sled Pull" loading="lazy">
      </div>
      <div class="ha-event-body">
        <div class="ha-venue">📍 NorCal DEKA FIT — Sacramento, CA</div>
        <div class="ha-stat-row">
          <div class="ha-stat"><div class="sl">Time</div><div class="sv">56:41</div></div>
          <div class="ha-stat"><div class="sl">Global Rank</div><div class="sv">#223</div></div>
          <div class="ha-stat"><div class="sl">AG M35–39</div><div class="sv">#893</div></div>
        </div>
        <div class="ha-cert">
          <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka_fit/DEKA-fit-cert.png' | relative_url }}" alt="Deka Fit Certificate" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Deka Mile -->
    <div class="ha-event-card">
      <div class="ha-event-header">
        <span class="ev-name">DEKA MILE</span>
        <span class="ev-date">May 9, 2026</span>
      </div>
      <div class="ha-event-imgs">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka-mile/deka-mile.jpg' | relative_url }}" alt="Deka Mile 2026" loading="lazy">
      </div>
      <div class="ha-event-body">
        <div class="ha-venue">📍 APX Velocity — San Jose, CA</div>
        <div class="ha-stat-row">
          <div class="ha-stat"><div class="sl">Time</div><div class="sv">31:16</div></div>
          <div class="ha-stat"><div class="sl">Global Rank</div><div class="sv">#191</div></div>
          <div class="ha-stat"><div class="sl">AG M35–39</div><div class="sv">#426</div></div>
        </div>
        <div class="ha-cert">
          <img src="{{ '/assets/img/blog/projects/hybrid_athelete/deka-mile/deka-mile-cert.png' | relative_url }}" alt="Deka Mile Certificate" loading="lazy">
        </div>
      </div>
    </div>

  </div>
</div>

---

<!-- ── SPARTAN SALINAS ── -->
<div class="ha-section">
  <h2>⚔️ Spartan Salinas — May 2026 <span class="ha-badge">Completed</span></h2>

  <div class="ha-events-grid">

    <!-- Spartan Super 10K -->
    <div class="ha-event-card">
      <div class="ha-event-header">
        <span class="ev-name">SPARTAN SUPER</span>
        <span class="ev-date">May 30, 2026</span>
      </div>
      <div class="ha-event-imgs cols-2">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/spartan%20super%2010k%20-%20may%202026/712112501.JPG' | relative_url }}" alt="Spartan Super — Monkey Bars" loading="lazy">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/spartan%20super%2010k%20-%20may%202026/712143843.JPG' | relative_url }}" alt="Spartan Super — Cargo Net" loading="lazy">
      </div>
      <div class="ha-event-body">
        <div class="ha-venue">📍 Salinas, CA · 10 KM · Open Heat</div>
        <div class="ha-stat-row">
          <div class="ha-stat"><div class="sl">Time</div><div class="sv">2:06:42</div></div>
          <div class="ha-stat"><div class="sl">Category</div><div class="sv">#245/1830</div></div>
          <div class="ha-stat"><div class="sl">AG 35–39</div><div class="sv">#41/247</div></div>
          <div class="ha-stat"><div class="sl">Percentile</div><div class="sv">Top 13%</div></div>
        </div>
        <div class="ha-cert">
          <img src="{{ '/assets/img/blog/projects/hybrid_athelete/spartan%20super%2010k%20-%20may%202026/spartan-10k-results.png' | relative_url }}" alt="Spartan Super Results" loading="lazy">
        </div>
      </div>
    </div>

    <!-- Spartan Sprint 5K -->
    <div class="ha-event-card">
      <div class="ha-event-header">
        <span class="ev-name">SPARTAN SPRINT</span>
        <span class="ev-date">May 31, 2026</span>
      </div>
      <div class="ha-event-imgs cols-2">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/spartan%20sprint%205k%20-%20may%202026/715056519.JPG' | relative_url }}" alt="Spartan Sprint — Monkey Bars" loading="lazy">
        <img src="{{ '/assets/img/blog/projects/hybrid_athelete/spartan%20sprint%205k%20-%20may%202026/715084483.JPG' | relative_url }}" alt="Spartan Sprint — Sandbag Carry" loading="lazy">
      </div>
      <div class="ha-event-body">
        <div class="ha-venue">📍 Salinas, CA · 5 KM · Open Heat</div>
        <div class="ha-stat-row">
          <div class="ha-stat"><div class="sl">Time</div><div class="sv">2:05:46</div></div>
          <div class="ha-stat"><div class="sl">Category</div><div class="sv">#1462/2230</div></div>
          <div class="ha-stat"><div class="sl">AG 35–39</div><div class="sv">#153/240</div></div>
          <div class="ha-stat"><div class="sl">Percentile</div><div class="sv">Top 66%</div></div>
        </div>
        <div class="ha-cert">
          <img src="{{ '/assets/img/blog/projects/hybrid_athelete/spartan%20sprint%205k%20-%20may%202026/spartan-5k-result.png' | relative_url }}" alt="Spartan Sprint Results" loading="lazy">
        </div>
      </div>
    </div>

  </div>
</div>

---

<!-- ── RANKINGS ── -->
<div class="ha-section">
  <h2>📊 Current Rankings</h2>
  <p style="font-size:0.82rem;color:var(--global-text-color-light,#666);margin-bottom:1rem;">Global DEKA Atlas · Elite &amp; Age Group · Male 35–39 · United States · as of May 2026</p>

  <div class="ha-rank-grid">
    <div class="ha-rank-card">
      <div class="rk-type">Deka Strong</div>
      <div class="rk-num">#381</div>
      <div class="rk-lbl">Global</div>
      <div class="rk-time">25:30</div>
      <div class="rk-ag">AG M35–39 · #796 Gender</div>
    </div>
    <div class="ha-rank-card">
      <div class="rk-type">Deka Fit</div>
      <div class="rk-num">#223</div>
      <div class="rk-lbl">Global</div>
      <div class="rk-time">56:41</div>
      <div class="rk-ag">AG M35–39 · #893 Gender</div>
    </div>
    <div class="ha-rank-card">
      <div class="rk-type">Deka Mile</div>
      <div class="rk-num">#191</div>
      <div class="rk-lbl">Global</div>
      <div class="rk-time">31:16</div>
      <div class="rk-ag">AG M35–39 · #426 Gender</div>
    </div>
  </div>

</div>

---

<!-- ── MONTHLY PROGRESS ── -->
<div class="ha-section">
  <h2>📸 Monthly Progress</h2>

  <!-- Body Composition Table -->
  <div style="margin-bottom:1.5rem;">
    <p style="font-size:0.82rem;color:var(--global-text-color-light,#666);margin-bottom:0.8rem;">InBody scan data — Villa Sport</p>
    <div style="overflow-x:auto;">
      <table class="ha-zone-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight (lb)</th>
            <th>Body Fat %</th>
            <th>Δ BF%</th>
            <th>Skeletal Muscle (lb)</th>
            <th>ECW/TBW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Feb 24, 2026</strong></td>
            <td>162.5</td>
            <td>16.3%</td>
            <td>—</td>
            <td>77.8</td>
            <td>0.367</td>
          </tr>
          <tr>
            <td><strong>Mar 28, 2026</strong></td>
            <td>159.1</td>
            <td>14.5%</td>
            <td style="color:#22c55e;font-weight:700;">↓ 1.8%</td>
            <td>77.6</td>
            <td>0.369</td>
          </tr>
          <tr>
            <td><strong>May 7, 2026</strong></td>
            <td>161.2</td>
            <td>14.9%</td>
            <td style="color:#f59e0b;font-weight:700;">↑ 0.4%</td>
            <td>78.7</td>
            <td>0.365</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ha-months-grid">

    <div class="ha-month-col">
      <div class="ha-month-label"><span class="ha-dot"></span> February 2026</div>
      <img src="{{ '/assets/img/blog/projects/hybrid_athelete/physique/feb.jpg' | relative_url }}" alt="February 2026" loading="lazy">
    </div>

    <div class="ha-month-col">
      <div class="ha-month-label"><span class="ha-dot"></span> March 2026</div>
      <img src="{{ '/assets/img/blog/projects/hybrid_athelete/physique/march.jpg' | relative_url }}" alt="March 2026" loading="lazy">
    </div>

    <div class="ha-month-col">
      <div class="ha-month-label"><span class="ha-dot"></span> May 2026</div>
      <div class="ha-coming-soon">Photos coming soon</div>
    </div>

  </div>
</div>

---

<!-- ── TRAINING PLAN ── -->
<div class="ha-section">
  <h2>🏋️ Training Plan</h2>

  <div class="ha-philosophy">
    <span>Nick Bare — Hybrid Athlete</span>
    <em>"Do the work. Trust the process. Become uncommon amongst uncommon people."</em>
  </div>
  <p class="ha-philosophy-text">
    Nick Bare's Hybrid Athlete method is built on one core belief: you should never have to choose between being strong and being fast.
    The program combines heavy compound lifting with structured endurance training — running, swimming, and cycling — in a two-a-day format where strength comes first in the morning and cardio follows in the evening.
    Both domains are trained with progressive overload, never letting one stagnate to serve the other.
    The philosophy demands consistency over perfection: a modified session always beats skipping one, and attacking your weakest pillar is what drives real growth.
    Fueling is treated as non-negotiable — protein at every meal, carbs around every session, and recovery prioritized as seriously as the training itself.
  </p>
  <p class="ha-philosophy-text">
    The strength side of this program draws from <strong>Dorian Yates' Blood and Guts HIT method</strong> — the approach used by the 6-time Mr. Olympia to build one of the most muscular physiques in history in under 40 minutes a session.
    The principle is simple: instead of multiple sets at moderate effort, each exercise is taken to absolute muscular failure on a single all-out working set, preceded by two pyramid warm-up sets.
    Controlled tempo (2 seconds up, 4 seconds down), no momentum, and full range of motion ensure the muscle — not the joints — does all the work.
    With maximum intensity replacing maximum volume, the muscles are fully stimulated and then left to grow during recovery, making this method ideal for a hybrid athlete who needs time and energy left for running, swimming, and racing.
  </p>

  <div class="ha-week-grid">

    <div class="ha-day-card">
      <div class="ha-day-head">Monday <span class="day-tag">Two-a-day</span></div>
      <div class="ha-day-body">
        <div class="focus">AM — Chest + Shoulders + Triceps (40 min)</div>
        <ul>
          <li>Incline Barbell Press: 2 warm-up + 1×6–8 to failure</li>
          <li>Seated DB Lateral Raises: 1 warm-up + 1×8–10 to failure</li>
          <li>Overhead Press: 1 warm-up + 1×8–10 to failure</li>
          <li>Tricep Pushdowns: 1 warm-up + 1×10–12 to failure</li>
          <li>Box Jumps 3×5 — DEKA explosive power</li>
        </ul>
        <div class="pm-block">
          <div class="focus">PM — Run 25–30 min</div>
          <ul><li>Zone 2 easy run</li><li>Conversational pace</li></ul>
        </div>
      </div>
    </div>

    <div class="ha-day-card">
      <div class="ha-day-head">Tuesday <span class="day-tag">Two-a-day</span></div>
      <div class="ha-day-body">
        <div class="focus">AM — Swim 1,200–1,500m</div>
        <ul>
          <li>Warm-up 200m easy</li>
          <li>Drills: single-arm, catch-up, finger-drag 4×50m</li>
          <li>Main set: 8×100m at race pace, 20s rest</li>
          <li>Cool-down 100m easy</li>
        </ul>
        <div class="pm-block">
          <div class="focus">PM — Run 25–30 min</div>
          <ul><li>Zone 2 easy run</li><li>Conversational pace</li></ul>
        </div>
      </div>
    </div>

    <div class="ha-day-card">
      <div class="ha-day-head">Wednesday <span class="day-tag">Two-a-day</span></div>
      <div class="ha-day-body">
        <div class="focus">AM — Legs + Core + OCF (40 min) + Bike (30 min)</div>
        <ul>
          <li>Back Squat: 2 warm-up + 1×8–10 to failure</li>
          <li>Romanian Deadlift: 1 warm-up + 1×8–10 to failure</li>
          <li>Hip Thrust: 1 warm-up + 1×10–12 to failure</li>
          <li>Calf Raises: 1 warm-up + 1×12–15 to failure</li>
          <li>Sandbag Lunges 3×20m — DEKA/Spartan</li>
          <li>Hanging Leg Raises 1×15</li>
          <li>Bike 30 min Zone 2</li>
        </ul>
        <div class="pm-block">
          <div class="focus">PM — Run 25–30 min</div>
          <ul><li>Zone 2 easy run</li><li>Conversational pace</li></ul>
        </div>
      </div>
    </div>

    <div class="ha-day-card">
      <div class="ha-day-head">Thursday <span class="day-tag">Two-a-day</span></div>
      <div class="ha-day-body">
        <div class="focus">AM — Swim 1,500–2,000m</div>
        <ul>
          <li>Warm-up 200m easy</li>
          <li>Main set: 3×500m continuous at steady pace, 30s rest</li>
          <li>Pull buoy 200m for stroke focus</li>
          <li>Cool-down 100m easy</li>
        </ul>
        <div class="pm-block">
          <div class="focus">PM — Bike 45–60 min</div>
          <ul><li>3×15 min at hard effort (Zone 3–4)</li><li>5 min easy between intervals</li></ul>
        </div>
      </div>
    </div>

    <div class="ha-day-card">
      <div class="ha-day-head">Friday <span class="day-tag">Strength+</span></div>
      <div class="ha-day-body">
        <div class="focus">AM — Back + Biceps + DEKA (40 min)</div>
        <ul>
          <li>Weighted Pull-Up: 2 warm-up + 1×6–8 to failure</li>
          <li>Barbell Row: 1 warm-up + 1×8–10 to failure</li>
          <li>EZ Bar Curl: 1 warm-up + 1×6–8 to failure</li>
          <li>Farmer's Carry 3×40m — DEKA grip + traps</li>
        </ul>
        <div class="pm-block">
          <div class="focus">PM — Short Bike or Rest</div>
          <ul><li>20–30 min flush ride or rest</li></ul>
        </div>
      </div>
    </div>

    <div class="ha-day-card">
      <div class="ha-day-head">Saturday <span class="day-tag">Brick</span></div>
      <div class="ha-day-body">
        <div class="focus">Brick — Bike + Run</div>
        <ul>
          <li>Bike 60–90 min Zone 2</li>
          <li>Immediately into Run 20–30 min</li>
          <li>No rest between bike and run</li>
          <li>Gel every 40 min on bike leg</li>
          <li>Simulates triathlon race transition</li>
        </ul>
      </div>
    </div>

    <div class="ha-day-card">
      <div class="ha-day-head">Sunday <span class="day-tag">Swim + Recovery</span></div>
      <div class="ha-day-body">
        <div class="focus">Open Water Swim — 1.5km → build to 2km</div>
        <ul>
          <li>Zone 2 effort throughout</li>
          <li>Sighting practice every 10 strokes</li>
          <li>Race simulation — no rest, steady pace</li>
          <li>Build to 2km+ by August</li>
        </ul>
        <div class="pm-block">
          <div class="focus">Recovery</div>
          <ul>
            <li>Mobility &amp; foam roll</li>
            <li>Sleep 8–9 hrs</li>
            <li>Nutrition focus day</li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  <table class="ha-zone-table" style="margin-top:1.2rem;">
    <thead><tr><th>RPE</th><th>Feel</th><th>HR Zone</th><th>Used For</th></tr></thead>
    <tbody>
      <tr><td>1–3</td><td>Very Easy</td><td>Zone 1</td><td>Warm-up / Cool-down</td></tr>
      <tr><td>4–5</td><td>Moderate</td><td>Zone 2</td><td>Long aerobic work (nasal breathing)</td></tr>
      <tr><td>6–7</td><td>Comfortably Hard</td><td>Zone 3</td><td>Tempo / bike intervals</td></tr>
      <tr><td>8</td><td>Hard</td><td>Zone 4</td><td>Threshold intervals</td></tr>
      <tr><td>9–10</td><td>Max Effort</td><td>Zone 5+</td><td>Sprints · DEKA finish · VO2max</td></tr>
    </tbody>
  </table>
</div>

---

<!-- ── NUTRITION ── -->
<div class="ha-section">
  <h2>🥗 Nutrition</h2>
  <p style="font-size:0.83rem;color:var(--global-text-color-light,#666);margin-bottom:1rem;">
    Target: <strong>0.8–1g protein × bodyweight (lbs)</strong> · Carbs 2–3g × bodyweight · Fats 0.4g × bodyweight. Fuel every session — you cannot out-train poor nutrition.
  </p>

  <div class="ha-macro-row">
    <div class="ha-macro-card cal"><div class="mc-lbl">Calories</div><div class="mc-val">~2,600</div><div class="mc-sub">kcal / day</div></div>
    <div class="ha-macro-card prot"><div class="mc-lbl">Protein</div><div class="mc-val">~180g</div><div class="mc-sub">0.9g × lb</div></div>
    <div class="ha-macro-card carb"><div class="mc-lbl">Carbs</div><div class="mc-val">~260g</div><div class="mc-sub">2.5g × lb</div></div>
    <div class="ha-macro-card fat"><div class="mc-lbl">Fats</div><div class="mc-val">~80g</div><div class="mc-sub">0.4g × lb</div></div>
  </div>

  <div class="ha-meal-grid">

    <div class="ha-meal-card">
      <div class="ha-meal-head">☀️ Pre-Workout (5:15–5:45 AM)</div>
      <div class="ha-meal-body">
        <ul>
          <li>Creatine 3–5g in water/juice</li>
          <li>1–2 cups black coffee or tea</li>
          <li>Half banana (if feeling low energy)</li>
        </ul>
      </div>
    </div>

    <div class="ha-meal-card">
      <div class="ha-meal-head">💪 Post-Workout Breakfast</div>
      <div class="ha-meal-body">
        <ul>
          <li>Overnight oats + mixed berries</li>
          <li>Half banana + nuts + milk</li>
          <li>Protein powder + cinnamon</li>
          <li>+1 scoop extra on heavy lift days</li>
        </ul>
        <div style="font-size:0.72rem;color:var(--global-text-color-light,#888);margin-top:0.4rem;">~500 cal · 35g P · 55g C · 12g F</div>
      </div>
    </div>

    <div class="ha-meal-card">
      <div class="ha-meal-head">🕐 Lunch — Rotate Daily</div>
      <div class="ha-meal-body">
        <ul>
          <li>Chicken shawarma + rice + salad <em>(staple)</em></li>
          <li>Mediterranean: Greek bowl / falafel plate / grilled fish</li>
          <li>Indian: Chicken tikka masala / tandoori + dal / paneer bowl</li>
          <li>Mexican: Chicken burrito bowl / carne asada tacos</li>
        </ul>
        <div style="font-size:0.72rem;color:var(--global-text-color-light,#888);margin-top:0.4rem;">~650 cal · 45g P · 60g C · 15g F</div>
      </div>
    </div>

    <div class="ha-meal-card">
      <div class="ha-meal-head">🍎 Snacks</div>
      <div class="ha-meal-body">
        <ul>
          <li>Pure Protein bar (pre-PM session)</li>
          <li>RXBAR (whole food alternative)</li>
          <li>Apple or banana + nut butter</li>
          <li>Greek yogurt + honey + nuts</li>
          <li>Roasted masala chickpeas (rest days)</li>
        </ul>
      </div>
    </div>

    <div class="ha-meal-card">
      <div class="ha-meal-head">🌙 Dinner — Rotate Daily</div>
      <div class="ha-meal-body">
        <ul>
          <li>Med: Salmon + quinoa + Greek salad</li>
          <li>Med: Lamb kofta + tabbouleh + hummus</li>
          <li>Indian: Butter chicken + roti / tandoori + rice</li>
          <li>Mexican: Shrimp fajita bowl / tacos</li>
        </ul>
      </div>
    </div>

    <div class="ha-meal-card">
      <div class="ha-meal-head">🏁 Race Day (DEKA)</div>
      <div class="ha-meal-body">
        <ul>
          <li><strong>2 hrs before:</strong> Light oats, no heavy foods</li>
          <li><strong>30 min before:</strong> Gel or gummy chews + electrolyte drink</li>
          <li><strong>During:</strong> Nothing needed (20–40 min event)</li>
          <li><strong>After:</strong> Protein + carbs ASAP · daal + rice</li>
        </ul>
      </div>
    </div>

  </div>

  <div class="ha-note-box">
    <strong>Key rules:</strong> Add +200 kcal on Mon/Wed/Fri (two-a-day) and long Saturday sessions.
    Aim for 40–50g protein post-workout on strength + cardio days.
    Minimum 3L water/day on training days.
    Night before a race: carb-heavy meal (shawarma + extra rice + daal), no raw salad, 500ml electrolyte water.
  </div>
</div>
