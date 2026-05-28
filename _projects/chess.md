---
layout: page
title: Master Chess
description: Chasing 2000. Rapid games, monthly rating snapshots, and a tactical study plan to keep improving.
img: assets/img/blog/projects/chess_learning.png
importance: 6
category: Personal
---

<style>
/* ── Chess Progress Page ── */
.ch-section { margin: 2.5rem 0; }
.ch-section > h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-bottom: 0.45rem;
  border-bottom: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

/* Current rating hero */
.ch-level-hero {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.2rem;
  align-items: center;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  margin-bottom: 1.5rem;
}
.ch-level-badge {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #3b82f6;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
}
.ch-level-badge .lv-sub { font-size: 0.62rem; font-weight: 600; opacity: 0.85; letter-spacing: 0.05em; margin-top: 0.15rem; }
.ch-level-info .lv-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.2rem; }
.ch-level-info .lv-desc { font-size: 0.85rem; color: var(--global-text-color-light, #666); line-height: 1.6; }
.ch-level-info .lv-next { margin-top: 0.5rem; font-size: 0.8rem; }
.ch-level-info .lv-next span { font-weight: 700; color: #3b82f6; }

/* Rating track */
.ch-rating-track {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}
.ch-rt-step {
  text-align: center;
  padding: 0.6rem 0.3rem;
  border-radius: 8px;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  font-size: 0.78rem;
}
.ch-rt-step .rt-rating { font-weight: 800; font-size: 1rem; margin-bottom: 0.15rem; }
.ch-rt-step .rt-label { font-size: 0.65rem; color: var(--global-text-color-light, #888); }
.ch-rt-step.done { background: #22c55e; border-color: #22c55e; color: #fff; }
.ch-rt-step.done .rt-label { color: rgba(255,255,255,0.8); }
.ch-rt-step.current { background: #3b82f6; border-color: #3b82f6; color: #fff; }
.ch-rt-step.current .rt-label { color: rgba(255,255,255,0.85); }
.ch-rt-step.goal { border: 2px dashed #e63946; }
.ch-rt-step.goal .rt-rating { color: #e63946; }

/* Monthly log */
.ch-test-info {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--global-bg-color, #f8faff);
  border-left: 3px solid #3b82f6;
  border-radius: 0 8px 8px 0;
  font-size: 0.83rem;
  margin-bottom: 1.1rem;
  line-height: 1.6;
}
.ch-test-info strong { display: block; margin-bottom: 0.15rem; font-size: 0.88rem; }
.ch-log { display: flex; flex-direction: column; gap: 0.55rem; }
.ch-log-row {
  display: grid;
  grid-template-columns: 90px 90px 1fr auto;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 8px;
  font-size: 0.85rem;
}
.ch-log-row.done  { border-left: 3px solid #22c55e; }
.ch-log-row.pending { border-left: 3px solid var(--global-divider-color, #ccc); }
.ch-log-date { font-weight: 600; font-size: 0.78rem; color: var(--global-text-color-light, #666); }
.ch-log-rating { font-weight: 800; font-size: 1rem; color: #3b82f6; }
.ch-log-rating.pending { color: var(--global-text-color-light, #aaa); font-size: 0.8rem; font-weight: 400; font-style: italic; }
.ch-log-notes { font-size: 0.8rem; color: var(--global-text-color-light, #666); }
.ch-log-score { font-size: 0.78rem; font-weight: 700; white-space: nowrap; }

/* Study plan */
.ch-plan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}
.ch-plan-card { border: 1px solid var(--global-divider-color, #e0e0e0); border-radius: 10px; overflow: hidden; }
.ch-plan-head {
  background: #14142b;
  color: #fff !important;
  padding: 0.45rem 0.8rem;
  font-weight: 700;
  font-size: 0.82rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.ch-plan-head span { color: #fff !important; }
.ch-plan-head .ph-tag { font-size: 0.7rem; opacity: 0.7; }
.ch-plan-body { padding: 0.65rem 0.8rem; font-size: 0.8rem; }
.ch-plan-body ul { margin: 0; padding-left: 1rem; }
.ch-plan-body ul li { margin-bottom: 0.25rem; color: var(--global-text-color-light, #555); }
.ch-plan-body .focus { font-weight: 700; color: #3b82f6; margin-bottom: 0.3rem; font-size: 0.82rem; }

/* Resources */
.ch-resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.8rem;
}
.ch-resource-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.82rem;
}
.ch-resource-card .rc-name { font-weight: 700; font-size: 0.88rem; margin-bottom: 0.2rem; }
.ch-resource-card .rc-type {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.15rem 0.45rem;
  border-radius: 20px;
  background: #3b82f6;
  color: #fff;
  margin-bottom: 0.4rem;
}
.ch-resource-card .rc-type.free { background: #22c55e; }
.ch-resource-card .rc-type.paid { background: #3b82f6; }
.ch-resource-card .rc-desc { color: var(--global-text-color-light, #666); line-height: 1.5; }
.ch-note {
  margin-top: 1rem;
  background: var(--global-bg-color, #f8faff);
  border-left: 3px solid #3b82f6;
  border-radius: 0 8px 8px 0;
  padding: 0.65rem 1rem;
  font-size: 0.82rem;
  color: var(--global-text-color-light, #555);
}
</style>

<!-- ── CURRENT RATING ── -->
<div class="ch-section">
<h2>♟ Current Rating</h2>

<div class="ch-level-hero">
  <div class="ch-level-badge">
    1142
    <span class="lv-sub">RAPID</span>
  </div>
  <div class="ch-level-info">
    <div class="lv-name">Intermediate — Chess.com Rapid</div>
    <div class="lv-desc">Playing 10–15 min Rapid games. Win rate around 40–50%. Solid foundations in place — the main gains now come from tactics training and cutting down on blunders. Next milestone is cracking 1200.</div>
    <div class="lv-next">Goal: <span>2000 rating</span> · Time control: Rapid (10–15 min) · <a href="https://www.chess.com/home" target="_blank" rel="noopener noreferrer" style="color:#3b82f6;">Chess.com profile ↗</a></div>
  </div>
</div>

<div class="ch-rating-track">
  <div class="ch-rt-step done">
    <div class="rt-rating">1000</div>
    <div class="rt-label">Beginner ✓</div>
  </div>
  <div class="ch-rt-step current">
    <div class="rt-rating">1142</div>
    <div class="rt-label">Now ← You</div>
  </div>
  <div class="ch-rt-step">
    <div class="rt-rating">1200</div>
    <div class="rt-label">Jun 2026</div>
  </div>
  <div class="ch-rt-step">
    <div class="rt-rating">1400</div>
    <div class="rt-label">Sep 2026</div>
  </div>
  <div class="ch-rt-step">
    <div class="rt-rating">1600</div>
    <div class="rt-label">Advanced</div>
  </div>
  <div class="ch-rt-step">
    <div class="rt-rating">1800</div>
    <div class="rt-label">Expert</div>
  </div>
  <div class="ch-rt-step goal">
    <div class="rt-rating">2000 🎯</div>
    <div class="rt-label">Master Goal</div>
  </div>
</div>
</div>

---

<!-- ── MONTHLY RATING LOG ── -->
<div class="ch-section">
<h2>📊 Monthly Rating Log</h2>

<div class="ch-test-info">
  <span style="font-size:1.3rem">♟</span>
  <div>
    <strong>How to log: <a href="https://www.chess.com/stats" target="_blank" rel="noopener noreferrer">Chess.com Stats page ↗</a></strong>
    At the end of each month, record your Rapid rating from the Chess.com stats page. Note games played and win rate. Aim for at least 20–30 games per month for a meaningful rating.
  </div>
</div>

<div class="ch-log">

  <div class="ch-log-row done">
    <div class="ch-log-date">May 2026</div>
    <div class="ch-log-rating">1142</div>
    <div class="ch-log-notes">Baseline recorded · Win rate ~40–50% · Rapid 10–15 min</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Jun 2026</div>
    <div class="ch-log-rating pending">Target: 1200</div>
    <div class="ch-log-notes">Tactics puzzles daily · Cut blunders below 2 per game</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Jul 2026</div>
    <div class="ch-log-rating pending">Target: 1250</div>
    <div class="ch-log-notes">Solid openings as White &amp; Black · Basic endgames</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Aug 2026</div>
    <div class="ch-log-rating pending">Target: 1300</div>
    <div class="ch-log-notes">Game analysis habit · Review 2 losses per week</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Sep 2026</div>
    <div class="ch-log-rating pending">Target: 1400</div>
    <div class="ch-log-notes">Milestone — Club Player level · Positional awareness</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Oct 2026</div>
    <div class="ch-log-rating pending">Target: 1500</div>
    <div class="ch-log-notes">Middlegame planning · Piece coordination</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Nov 2026</div>
    <div class="ch-log-rating pending">Target: 1600</div>
    <div class="ch-log-notes">Advanced tactics · Rook endgames · Deeper opening prep</div>
    <div class="ch-log-score">—</div>
  </div>

  <div class="ch-log-row pending">
    <div class="ch-log-date">Dec 2026</div>
    <div class="ch-log-rating pending">Target: 1700+</div>
    <div class="ch-log-notes">Year-end review · Set 2027 roadmap to 2000</div>
    <div class="ch-log-score">—</div>
  </div>

</div>

<div class="ch-note">Update each row at month-end. Record your Rapid rating, games played, and one thing you improved on that month.</div>
</div>

---

<!-- ── STUDY PLAN ── -->
<div class="ch-section">
<h2>📚 Study Plan — 1142 → 2000</h2>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:0.8rem; margin-bottom:1.2rem;">
  <div style="border:1px solid var(--global-divider-color,#e0e0e0); border-radius:10px; padding:0.8rem 1rem;">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:#3b82f6; margin-bottom:0.2rem;">Phase 1 · Now → Sep</div>
    <div style="font-size:1.1rem; font-weight:800; margin-bottom:0.3rem;">1200–1400</div>
    <div style="font-size:0.78rem; color:var(--global-text-color-light,#666);">Tactics daily · Cut blunders · 2 solid openings · Basic endgames</div>
  </div>
  <div style="border:1px solid var(--global-divider-color,#e0e0e0); border-radius:10px; padding:0.8rem 1rem;">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:#22c55e; margin-bottom:0.2rem;">Phase 2 · Oct → Dec</div>
    <div style="font-size:1.1rem; font-weight:800; margin-bottom:0.3rem;">1400–1600</div>
    <div style="font-size:0.78rem; color:var(--global-text-color-light,#666);">Middlegame planning · Positional play · Rook endgames · Opening theory</div>
  </div>
  <div style="border:2px dashed #e63946; border-radius:10px; padding:0.8rem 1rem;">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:#e63946; margin-bottom:0.2rem;">🎯 Long-term Goal</div>
    <div style="font-size:1.1rem; font-weight:800; margin-bottom:0.3rem;">2000</div>
    <div style="font-size:0.78rem; color:var(--global-text-color-light,#666);">Candidate Master territory · Deep opening prep · Advanced endgame theory</div>
  </div>
  <div style="border:1px solid var(--global-divider-color,#e0e0e0); border-radius:10px; padding:0.8rem 1rem; background:var(--global-bg-color,#f8f9fa);">
    <div style="font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--global-text-color-light,#888); margin-bottom:0.2rem;">Daily Commitment</div>
    <div style="font-size:1.1rem; font-weight:800; margin-bottom:0.3rem;">20–30 min</div>
    <div style="font-size:0.78rem; color:var(--global-text-color-light,#666);">Puzzles every day. 2–3 Rapid games on weekdays. Deeper sessions on weekends.</div>
  </div>
</div>

<div class="ch-plan-grid">
  <div class="ch-plan-card">
    <div class="ch-plan-head"><span>Monday</span><span class="ph-tag">Tactics</span></div>
    <div class="ch-plan-body">
      <div class="focus">Puzzles — 15–20 min</div>
      <ul>
        <li>Chess.com daily puzzles</li>
        <li>Focus: forks &amp; pins</li>
        <li>Aim for 10+ puzzles solved</li>
      </ul>
    </div>
  </div>
  <div class="ch-plan-card">
    <div class="ch-plan-head"><span>Tuesday</span><span class="ph-tag">Play</span></div>
    <div class="ch-plan-body">
      <div class="focus">Rapid games — 2–3 games</div>
      <ul>
        <li>Think before every move</li>
        <li>Check for opponent threats first</li>
        <li>No fast blitz — keep it slow</li>
      </ul>
    </div>
  </div>
  <div class="ch-plan-card">
    <div class="ch-plan-head"><span>Wednesday</span><span class="ph-tag">Openings</span></div>
    <div class="ch-plan-body">
      <div class="focus">Opening study — 20 min</div>
      <ul>
        <li>Learn one opening line at a time</li>
        <li>Chess.com opening explorer</li>
        <li>Drill with practice match</li>
      </ul>
    </div>
  </div>
  <div class="ch-plan-card">
    <div class="ch-plan-head"><span>Thursday</span><span class="ph-tag">Tactics</span></div>
    <div class="ch-plan-body">
      <div class="focus">Puzzle Rush — 10 min</div>
      <ul>
        <li>Timed puzzle burst</li>
        <li>Focus: discovered attacks &amp; skewers</li>
        <li>Review any you got wrong</li>
      </ul>
    </div>
  </div>
  <div class="ch-plan-card">
    <div class="ch-plan-head"><span>Friday</span><span class="ph-tag">Play + Review</span></div>
    <div class="ch-plan-body">
      <div class="focus">Play then analyse</div>
      <ul>
        <li>2 Rapid games</li>
        <li>Run computer analysis on 1 game</li>
        <li>Find the key mistake (not just blunders)</li>
      </ul>
    </div>
  </div>
  <div class="ch-plan-card">
    <div class="ch-plan-head"><span>Weekend</span><span class="ph-tag">Deep Work</span></div>
    <div class="ch-plan-body">
      <div class="focus">Deep session — 1 hr</div>
      <ul>
        <li>Endgame practice (King + Pawn, Rook)</li>
        <li>Watch a GM game analysis video</li>
        <li>Play 1 longer game (15+10)</li>
        <li>Record monthly rating (1st weekend)</li>
      </ul>
    </div>
  </div>
</div>

<div class="ch-note">
  <strong>1142→1200:</strong> Stop hanging pieces · Check for captures before moving · Solve 10 puzzles daily<br>
  <strong>1200→1400:</strong> 2 opening lines solid (White &amp; Black) · Basic K+P and Rook endgames · Weekly game analysis<br>
  <strong>1400→1600:</strong> Positional thinking · Pawn structure · Piece activity · Deeper middlegame plans
</div>
</div>

---

<!-- ── RESOURCES ── -->
<div class="ch-section">
<h2>🛠 Resources</h2>

<div class="ch-resource-grid">
  <div class="ch-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name"><a href="https://www.chess.com/puzzles" target="_blank" rel="noopener noreferrer">Chess.com Puzzles ↗</a></div>
    <div class="rc-desc">Daily tactics puzzles rated by difficulty. The single best thing you can do at 1100–1400. Aim for 10–15 puzzles daily — consistency beats intensity.</div>
  </div>
  <div class="ch-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name"><a href="https://lichess.org/training" target="_blank" rel="noopener noreferrer">Lichess Puzzles ↗</a></div>
    <div class="rc-desc">Unlimited free tactics training with a rating system. Great complement to Chess.com puzzles. Also has excellent free study tools and opening explorer.</div>
  </div>
  <div class="ch-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name"><a href="https://www.youtube.com/@GothamChess" target="_blank" rel="noopener noreferrer">GothamChess (YouTube) ↗</a></div>
    <div class="rc-desc">Levy Rozman breaks down games, openings, and concepts for improving players. His "guess the move" videos are excellent for pattern recognition at the 1000–1500 level.</div>
  </div>
  <div class="ch-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name"><a href="https://www.youtube.com/@DanielNaroditskyGM" target="_blank" rel="noopener noreferrer">Danya Speed Run ↗</a></div>
    <div class="rc-desc">GM Daniel Naroditsky plays from 600 Elo explaining every decision out loud. Watching games at your rating level narrated by a GM is one of the most efficient ways to improve.</div>
  </div>
  <div class="ch-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name"><a href="https://www.chess.com/openings" target="_blank" rel="noopener noreferrer">Chess.com Opening Explorer ↗</a></div>
    <div class="rc-desc">Explore opening theory and see win rates at your level. Pick 1 opening as White (e.g. London System) and 1 as Black vs e4 (e.g. Sicilian) and drill them until automatic.</div>
  </div>
  <div class="ch-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name"><a href="https://www.chesstempo.com" target="_blank" rel="noopener noreferrer">ChessTempo ↗</a></div>
    <div class="rc-desc">Focused tactical training with detailed difficulty ratings. Good for identifying weak tactical pattern areas — sorts puzzles by motif (pins, forks, discovered attacks).</div>
  </div>
</div>
</div>
