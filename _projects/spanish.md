---
layout: page
title: Learn Spanish
description: Tracking my journey from A2 to fluency — monthly CEFR tests, Memrise, tutor sessions, and a plan to reach B1.
img: assets/img/blog/projects/spanish_learning.png
importance: 5
category: Personal
permalink: /projects/spanish/
---

<style>
/* ── Spanish Progress Page ── */
.sp-section { margin: 2.5rem 0; }
.sp-section > h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  padding-bottom: 0.45rem;
  border-bottom: 2px solid #f59e0b;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

/* Current level hero */
.sp-level-hero {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.2rem;
  align-items: center;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 12px;
  margin-bottom: 1.5rem;
}
.sp-level-badge {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f59e0b;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1;
  flex-shrink: 0;
}
.sp-level-badge .lv-sub { font-size: 0.65rem; font-weight: 600; opacity: 0.85; letter-spacing: 0.05em; }
.sp-level-info .lv-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.2rem; }
.sp-level-info .lv-desc { font-size: 0.85rem; color: var(--global-text-color-light, #666); line-height: 1.6; }
.sp-level-info .lv-next { margin-top: 0.5rem; font-size: 0.8rem; }
.sp-level-info .lv-next span { font-weight: 700; color: #f59e0b; }

/* CEFR progression bar */
.sp-cefr-track {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}
.sp-cefr-step {
  text-align: center;
  padding: 0.6rem 0.3rem;
  border-radius: 8px;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  font-size: 0.78rem;
}
.sp-cefr-step .cs-level { font-weight: 800; font-size: 1rem; margin-bottom: 0.15rem; }
.sp-cefr-step .cs-name { font-size: 0.68rem; color: var(--global-text-color-light, #888); }
.sp-cefr-step .cs-can { font-size: 0.68rem; margin-top: 0.3rem; color: var(--global-text-color-light, #777); line-height: 1.4; }
.sp-cefr-step.done { background: #22c55e; border-color: #22c55e; color: #fff; }
.sp-cefr-step.done .cs-name, .sp-cefr-step.done .cs-can { color: rgba(255,255,255,0.8); }
.sp-cefr-step.current { background: #f59e0b; border-color: #f59e0b; color: #fff; }
.sp-cefr-step.current .cs-name, .sp-cefr-step.current .cs-can { color: rgba(255,255,255,0.85); }
.sp-cefr-step.next { border-color: #3b82f6; border-style: dashed; }
.sp-cefr-step.next .cs-level { color: #3b82f6; }

/* Monthly test log */
.sp-test-info {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--global-bg-color, #f8faff);
  border-left: 3px solid #f59e0b;
  border-radius: 0 8px 8px 0;
  font-size: 0.83rem;
  margin-bottom: 1.1rem;
  line-height: 1.6;
}
.sp-test-info strong { display: block; margin-bottom: 0.15rem; font-size: 0.88rem; }
.sp-log { display: flex; flex-direction: column; gap: 0.55rem; }
.sp-log-row {
  display: grid;
  grid-template-columns: 90px 70px 1fr auto;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 0.9rem;
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 8px;
  font-size: 0.85rem;
}
.sp-log-row.done  { border-left: 3px solid #22c55e; }
.sp-log-row.pending { border-left: 3px solid var(--global-divider-color, #ccc); }
.sp-log-date { font-weight: 600; font-size: 0.78rem; color: var(--global-text-color-light, #666); }
.sp-log-level {
  font-weight: 800;
  font-size: 1rem;
  color: #f59e0b;
}
.sp-log-level.pending { color: var(--global-text-color-light, #aaa); font-size: 0.8rem; font-weight: 400; font-style: italic; }
.sp-log-notes { font-size: 0.8rem; color: var(--global-text-color-light, #666); }
.sp-log-score { font-size: 0.78rem; font-weight: 700; white-space: nowrap; }

/* Score bar */
.sp-score-bar-wrap { margin-top: 0.3rem; }
.sp-score-bar-bg {
  height: 6px;
  border-radius: 3px;
  background: var(--global-divider-color, #e8e8e8);
  overflow: hidden;
}
.sp-score-bar-fill { height: 100%; border-radius: 3px; background: #f59e0b; }

/* Study plan */
.sp-plan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}
.sp-plan-card { border: 1px solid var(--global-divider-color, #e0e0e0); border-radius: 10px; overflow: hidden; }
.sp-plan-head {
  background: #14142b;
  color: #fff !important;
  padding: 0.45rem 0.8rem;
  font-weight: 700;
  font-size: 0.82rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.sp-plan-head span { color: #fff !important; }
.sp-plan-head .ph-tag { font-size: 0.7rem; opacity: 0.7; }
.sp-plan-body { padding: 0.65rem 0.8rem; font-size: 0.8rem; }
.sp-plan-body ul { margin: 0; padding-left: 1rem; }
.sp-plan-body ul li { margin-bottom: 0.25rem; color: var(--global-text-color-light, #555); }
.sp-plan-body .focus { font-weight: 700; color: #f59e0b; margin-bottom: 0.3rem; font-size: 0.82rem; }

/* Resources */
.sp-resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.8rem;
}
.sp-resource-card {
  border: 1px solid var(--global-divider-color, #e0e0e0);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.82rem;
}
.sp-resource-card .rc-name { font-weight: 700; font-size: 0.88rem; margin-bottom: 0.2rem; }
.sp-resource-card .rc-type {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.15rem 0.45rem;
  border-radius: 20px;
  background: #f59e0b;
  color: #fff;
  margin-bottom: 0.4rem;
}
.sp-resource-card .rc-type.free { background: #22c55e; }
.sp-resource-card .rc-type.paid { background: #3b82f6; }
.sp-resource-card .rc-desc { color: var(--global-text-color-light, #666); line-height: 1.5; }
.sp-note {
  margin-top: 1rem;
  background: var(--global-bg-color, #f8faff);
  border-left: 3px solid #3b82f6;
  border-radius: 0 8px 8px 0;
  padding: 0.65rem 1rem;
  font-size: 0.82rem;
  color: var(--global-text-color-light, #555);
}
</style>

<!-- ── CURRENT LEVEL ── -->
<div class="sp-section">
<h2>🎯 Current Level</h2>

<div class="sp-level-hero">
  <div class="sp-level-badge">
    A2
    <span class="lv-sub">CEFR</span>
  </div>
  <div class="sp-level-info">
    <div class="lv-name">Elementary — A2</div>
    <div class="lv-desc">Can understand sentences on familiar topics (personal info, shopping, local geography). Can communicate in simple, routine tasks and describe everyday matters in simple terms.</div>
    <div class="lv-next">Next target: <span>B1 — Intermediate</span> · Can manage most travel situations and describe experiences in connected sentences.</div>
  </div>
</div>

<div class="sp-cefr-track">
  <div class="sp-cefr-step done">
    <div class="cs-level">A1</div>
    <div class="cs-name">Beginner</div>
    <div class="cs-can">Greetings, numbers, simple phrases</div>
  </div>
  <div class="sp-cefr-step current">
    <div class="cs-level">A2</div>
    <div class="cs-name">Elementary</div>
    <div class="cs-can">Familiar topics, routine tasks</div>
  </div>
  <div class="sp-cefr-step next">
    <div class="cs-level">B1</div>
    <div class="cs-name">Intermediate</div>
    <div class="cs-can">Travel, describe experiences</div>
  </div>
  <div class="sp-cefr-step">
    <div class="cs-level">B2</div>
    <div class="cs-name">Upper-Int</div>
    <div class="cs-can">Complex topics, native fluency</div>
  </div>
  <div class="sp-cefr-step">
    <div class="cs-level">C1</div>
    <div class="cs-name">Advanced</div>
    <div class="cs-can">Academic & professional use</div>
  </div>
  <div class="sp-cefr-step">
    <div class="cs-level">C2</div>
    <div class="cs-name">Mastery</div>
    <div class="cs-can">Near-native proficiency</div>
  </div>
</div>
</div>

---

<!-- ── MONTHLY TEST LOG ── -->
<div class="sp-section">
<h2>📊 Monthly Progress Log</h2>

<div class="sp-test-info">
  <span style="font-size:1.3rem">📝</span>
  <div>
    <strong>Standard Test: Kwiziq Spanish Level Test</strong>
    Free, takes ~15 minutes, maps directly to CEFR A1–C2. Take it on the same day each month (e.g. first Saturday) for consistent comparison. Search for "Kwiziq Spanish level test" to find it.
  </div>
</div>

<div class="sp-log">

  <div class="sp-log-row pending">
    <div class="sp-log-date">May 2026</div>
    <div class="sp-log-level pending">Not taken</div>
    <div class="sp-log-notes">Baseline test — take this month to establish starting score</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Jun 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">—</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Jul 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">—</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Aug 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">—</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Sep 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">—</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Oct 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">—</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Nov 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">—</div>
    <div class="sp-log-score">—</div>
  </div>

  <div class="sp-log-row pending">
    <div class="sp-log-date">Dec 2026</div>
    <div class="sp-log-level pending">Upcoming</div>
    <div class="sp-log-notes">Year-end review</div>
    <div class="sp-log-score">—</div>
  </div>

</div>

<div class="sp-note">Update each row after taking your monthly test — add the CEFR level result and any notes on what felt harder or easier than last time.</div>
</div>

---

<!-- ── STUDY PLAN ── -->
<div class="sp-section">
<h2>📚 Study Plan — A2 → B1</h2>

<p style="font-size:0.88rem; color:var(--global-text-color-light,#555); margin-bottom:1rem;">
  Target: reach B1 by end of 2026. The key jump from A2 to B1 is mastering the subjunctive, preterite vs imperfect distinction, and building enough vocabulary (~2,500 words) to handle unfamiliar topics. Daily consistency matters more than long sessions.
</p>

<div class="sp-plan-grid">
  <div class="sp-plan-card">
    <div class="sp-plan-head"><span>Monday</span><span class="ph-tag">Vocabulary</span></div>
    <div class="sp-plan-body">
      <div class="focus">Memrise — 20 min</div>
      <ul>
        <li>Complete daily Memrise streak</li>
        <li>Focus on A2–B1 word sets</li>
        <li>Repeat any difficult words</li>
      </ul>
    </div>
  </div>
  <div class="sp-plan-card">
    <div class="sp-plan-head"><span>Tuesday</span><span class="ph-tag">Listening</span></div>
    <div class="sp-plan-body">
      <div class="focus">Input — 20 min</div>
      <ul>
        <li>Dreaming Spanish (A2 content)</li>
        <li>No subtitles — immersion focus</li>
        <li>Note unknown words for Anki</li>
      </ul>
    </div>
  </div>
  <div class="sp-plan-card">
    <div class="sp-plan-head"><span>Wednesday</span><span class="ph-tag">Tutor</span></div>
    <div class="sp-plan-body">
      <div class="focus">Grammar — 1 hr session</div>
      <ul>
        <li>Preterite vs imperfect</li>
        <li>Subjunctive introduction</li>
        <li>Conversation practice</li>
      </ul>
    </div>
  </div>
  <div class="sp-plan-card">
    <div class="sp-plan-head"><span>Thursday</span><span class="ph-tag">Reading</span></div>
    <div class="sp-plan-body">
      <div class="focus">Reading — 20 min</div>
      <ul>
        <li>BBC Mundo easy articles</li>
        <li>Or graded reader (A2 level)</li>
        <li>Look up max 5 words</li>
      </ul>
    </div>
  </div>
  <div class="sp-plan-card">
    <div class="sp-plan-head"><span>Friday</span><span class="ph-tag">Speaking</span></div>
    <div class="sp-plan-body">
      <div class="focus">Production — 20 min</div>
      <ul>
        <li>Write 5 sentences in Spanish</li>
        <li>Talk to tutor / language exchange</li>
        <li>Shadowing practice</li>
      </ul>
    </div>
  </div>
  <div class="sp-plan-card">
    <div class="sp-plan-head"><span>Weekend</span><span class="ph-tag">Review</span></div>
    <div class="sp-plan-body">
      <div class="focus">Light review — 15 min</div>
      <ul>
        <li>Memrise catch-up only</li>
        <li>Watch Spanish TV / film</li>
        <li>Monthly test (1st weekend)</li>
      </ul>
    </div>
  </div>
</div>

<div class="sp-note">
  <strong>A2 → B1 grammar milestones:</strong> Preterite (done actions) · Imperfect (ongoing/habitual past) · Subjunctive mood (wishes, doubts, emotions) · Reflexive verbs · Direct + indirect object pronouns · Future tense
</div>
</div>

---

<!-- ── RESOURCES ── -->
<div class="sp-section">
<h2>🛠 Resources</h2>

<div class="sp-resource-grid">
  <div class="sp-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name">Memrise</div>
    <div class="rc-desc">Spaced repetition vocabulary with native speaker video clips. Use the official Spanish course and keep the daily streak going. 15–20 min/day is enough.</div>
  </div>
  <div class="sp-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name">Dreaming Spanish</div>
    <div class="rc-desc">Comprehensible input videos in Spanish at every level. Start at A2 content. The most natural way to build listening intuition.</div>
  </div>
  <div class="sp-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name">BBC Mundo</div>
    <div class="rc-desc">Real news written for native speakers. Good for reading practice once you hit solid A2. Start with shorter articles.</div>
  </div>
  <div class="sp-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name">Kwiziq Level Test</div>
    <div class="rc-desc">Monthly CEFR placement test. Takes 15 min, gives A1–C2 result. Use consistently on the same day each month.</div>
  </div>
  <div class="sp-resource-card">
    <span class="rc-type paid">Tutor</span>
    <div class="rc-name">1:1 Tutor Sessions</div>
    <div class="rc-desc">Most effective for grammar correction and speaking confidence. Focus sessions on the grammar milestones above — don't let it become casual chat only.</div>
  </div>
  <div class="sp-resource-card">
    <span class="rc-type free">Free</span>
    <div class="rc-name">Language Transfer</div>
    <div class="rc-desc">Free audio course — "Complete Spanish". Excellent for understanding the logic of the language, not just memorising. Great complement to Anki.</div>
  </div>
</div>
</div>
