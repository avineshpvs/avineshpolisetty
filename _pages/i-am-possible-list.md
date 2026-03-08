---
layout: page
title: I'M Possible List
permalink: /i-am-possible-list/
description: My life goals tracker — not a bucket list, but intentional decisions.
nav: true
nav_order: 4
_styles: >
  header.post-header .post-title { display: none; }
  header.post-header .post-description { display: none; }
---

<h1 class="post-title"><s>Impossible</s> → I'M Possible List</h1>
<p class="post-description">My life goals tracker — not a bucket list, but intentional decisions.</p>

<style>
:root {
  --bl-primary: #0d9488;
  --bl-primary-light: #14b8a6;
  --bl-done: #059669;
  --bl-done-bg: #ecfdf5;
  --bl-pending: #64748b;
  --bl-dark: #0f172a;
  --bl-gray: #475569;
  --bl-light: #f1f5f9;
  --bl-white: #ffffff;
  --bl-card-bg: #ffffff;
  --bl-card-border: #e2e8f0;
  --bl-done-border: #a7f3d0;
  --bl-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

html[data-theme="dark"] {
  --bl-primary: #14b8a6;
  --bl-primary-light: #2dd4bf;
  --bl-done: #34d399;
  --bl-done-bg: rgba(5, 150, 105, 0.15);
  --bl-pending: #94a3b8;
  --bl-dark: #e2e8f0;
  --bl-gray: #94a3b8;
  --bl-light: #1e293b;
  --bl-white: #e2e8f0;
  --bl-card-bg: #1e293b;
  --bl-card-border: #334155;
  --bl-done-border: rgba(52, 211, 153, 0.3);
  --bl-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.bucket-list-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Hero Progress Section */
.bl-hero {
  background: linear-gradient(135deg, var(--bl-dark) 0%, #1e293b 100%);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  color: var(--bl-white);
  text-align: center;
  box-shadow: var(--bl-shadow);
}
.bl-hero-title { font-size: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; margin: 0 0 0.1rem 0; color: #ffffff !important; }
.bl-hero-count { font-size: 1rem; font-weight: 800; margin: 0; line-height: 1; color: #ffffff !important; }
.bl-hero-count span { color: #059669 !important; }
.bl-hero-label { font-size: 0.55rem; opacity: 0.8; margin: 0.1rem 0 0 0; color: #ffffff !important; }
.bl-progress-bar { height: 3px; background: rgba(255,255,255,0.15); border-radius: 100px; margin: 0.35rem auto 0; max-width: 100px; }
.bl-progress-fill { height: 100%; width: 22%; background: linear-gradient(90deg, var(--bl-primary), var(--bl-primary-light)); border-radius: 100px; } /* 24/111 ≈ 22% */

/* Intro */
.bl-intro { color: var(--bl-gray); font-size: 0.85rem; line-height: 1.7; margin-bottom: 1.5rem; }

/* Section Headers */
.bl-section { margin-bottom: 1.5rem; }
.bl-section-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem; padding-bottom: 0.4rem; border-bottom: 2px solid var(--bl-light); }
.bl-section-icon { width: 26px; height: 26px; background: linear-gradient(135deg, var(--bl-primary) 0%, var(--bl-primary-light) 100%); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }
.bl-section-title { font-size: 0.95rem; font-weight: 700; color: var(--bl-dark); margin: 0; }

/* Regular Item Cards */
.bl-items { display: flex; flex-direction: column; gap: 0.3rem; }
.bl-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.6rem; background: var(--bl-card-bg); border-radius: 8px; border: 1px solid var(--bl-card-border); }
.bl-item.done { background: var(--bl-done-bg); border-color: var(--bl-done-border); }
.bl-item-num { min-width: 22px; height: 22px; background: var(--bl-light); border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 600; color: var(--bl-pending); }
.bl-item.done .bl-item-num { background: var(--bl-done); color: white; }
.bl-item-content { flex: 1; font-size: 0.8rem; color: var(--bl-dark); }
.bl-item.done .bl-item-content { color: var(--bl-done); }
.bl-item-date { font-size: 0.65rem; color: var(--bl-gray); background: rgba(0,0,0,0.05); padding: 0.1rem 0.35rem; border-radius: 3px; margin-left: 0.3rem; }
.bl-item.done .bl-item-date { background: rgba(5,150,105,0.15); color: var(--bl-done); }
.bl-item a { color: var(--bl-primary); text-decoration: none; }

/* Achievement Card - Side by Side (text left, image right) */
.bl-achievement-card {
  display: flex;
  gap: 1rem;
  background: var(--bl-card-bg);
  border-radius: 12px;
  border: 1px solid var(--bl-card-border);
  overflow: hidden;
  margin: 0.5rem 0;
  box-shadow: var(--bl-shadow);
}
.bl-achievement-card.done {
  background: var(--bl-done-bg);
  border-color: var(--bl-done-border);
}
.bl-achievement-body {
  flex: 1;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: block;
  align-self: center;
  order: 1;
}
.bl-achievement-img {
  flex: 0 0 140px;
  min-height: 100px;
  overflow: hidden;
  order: 2;
}
/* Multi-image grid wrapper — wraps images into rows of 3 */
.bl-achievement-imgs {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  max-width: 420px; /* 3 × 140px */
  order: 2;
}
.bl-achievement-imgs .bl-achievement-img {
  order: unset;
}
.bl-achievement-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.bl-achievement-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--bl-done);
  color: white;
  border-radius: 5px;
  font-size: 0.65rem;
  font-weight: 600;
  margin-right: 0.4rem;
  vertical-align: middle;
}
.bl-achievement-title {
  display: inline;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--bl-done);
  margin: 0;
  line-height: 1.3;
  vertical-align: middle;
}
.bl-achievement-meta {
  font-size: 0.7rem;
  color: var(--bl-gray);
  margin: 0;
}
.bl-achievement-link {
  font-size: 0.7rem;
  color: var(--bl-primary);
  text-decoration: none;
  margin-top: 0.35rem;
  display: inline-block;
}
.bl-achievement-link:hover { text-decoration: underline; }

/* Video Card (text left, video right) */
.bl-video-card {
  display: flex;
  gap: 1rem;
  background: var(--bl-done-bg);
  border-radius: 12px;
  border: 1px solid var(--bl-done-border);
  overflow: hidden;
  margin: 0.5rem 0;
  box-shadow: var(--bl-shadow);
}
.bl-video-body {
  flex: 1;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: block;
  align-self: center;
  order: 1;
}
.bl-video-embed {
  flex: 0 0 180px;
  aspect-ratio: 16/9;
  order: 2;
}
.bl-video-embed + .bl-video-embed {
  order: 3;
}
.bl-video-embed iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}

/* Sub-notes */
.bl-note { font-size: 0.7rem; color: var(--bl-gray); font-style: italic; margin: 0 0 0.4rem 0.25rem; }

/* Link buttons */
.bl-link { display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.35rem 0.7rem; background: var(--bl-primary); color: white !important; text-decoration: none !important; border-radius: 5px; font-size: 0.7rem; font-weight: 500; margin: 0.4rem 0; }
.bl-link:hover { background: var(--bl-primary-light); }

/* Medium-zoom overrides — prevent object-fit:cover from applying when zoomed */
.medium-zoom-image--opened {
  object-fit: contain !important;
  width: auto !important;
  height: auto !important;
  max-height: 90vh !important;
}

/* Responsive */
@media (max-width: 600px) {
  .bl-achievement-card, .bl-video-card { flex-direction: column; }
  .bl-achievement-img { flex: none; height: 120px; order: 1; }
  .bl-achievement-body { order: 2; padding: 0.75rem; }
  .bl-video-embed { flex: none; width: 100%; order: 1; }
  .bl-video-body { order: 2; padding: 0.75rem; }
}

/* Countries Map Widget */
.bl-map-section {
  background: var(--bl-card-bg);
  border: 1px solid var(--bl-card-border);
  border-radius: 12px;
  overflow: hidden;
  margin: 0.75rem 0 1rem;
  box-shadow: var(--bl-shadow);
}
.bl-map-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.85rem;
  background: linear-gradient(135deg, var(--bl-dark) 0%, #1e293b 100%);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
}
.bl-map-count {
  font-size: 0.72rem;
  background: rgba(255,255,255,0.15);
  padding: 0.1rem 0.5rem;
  border-radius: 20px;
}
#visited-countries-map {
  width: 100%;
  height: 280px;
}
#visited-countries-map .jsvectormap-zoomin,
#visited-countries-map .jsvectormap-zoomout { display: none; }
.bl-countries-list {
  padding: 0.6rem 0.85rem;
  border-top: 1px solid var(--bl-card-border);
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.bl-continent-group { flex: 1; min-width: 130px; }
.bl-continent-label {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--bl-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.25rem;
}
.bl-country-chips { display: flex; flex-wrap: wrap; gap: 0.2rem; }
.bl-country-chip {
  font-size: 0.65rem;
  color: var(--bl-gray);
  background: var(--bl-light);
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  white-space: nowrap;
}
</style>

<div class="bucket-list-wrapper">

<!-- Hero -->
<div class="bl-hero">
  <p class="bl-hero-title">Life Goals Progress</p>
  <p class="bl-hero-count"><span>24</span> / 111</p>
  <p class="bl-hero-label">Adventures Completed</p>
  <div class="bl-progress-bar"><div class="bl-progress-fill"></div></div>
</div>

<div class="bl-intro">
I used to keep a 101 Bucket List — a list of things I thought I might do "one day."
Over time, I realized two things: "one day" created distance, and 101 quietly put a ceiling on my ambition.
So I redefined it as My I'M Possible List — a reminder that these aren't just ideas. They're intentional decisions.
</div>

<!-- ==================== TRAVEL, EXPLORATION & EXPEDITIONS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">✈️</div>
    <h2 class="bl-section-title">Travel, Exploration & Expeditions</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">1</div><div class="bl-item-content">Visit all Seven Wonders of the world</div></div>
    <div class="bl-item"><div class="bl-item-num">2</div><div class="bl-item-content">Visit all the countries in the world<span class="bl-item-date">29 so far!</span></div></div>
  </div>
  <div class="bl-map-section">
    <div class="bl-map-header">
      <span>🌍 Countries Visited</span>
      <span class="bl-map-count">29 countries visited</span>
    </div>
    <div id="visited-countries-map"></div>
    <div class="bl-countries-list">
      <div class="bl-continent-group">
        <span class="bl-continent-label">🌏 Asia</span>
        <div class="bl-country-chips">
          <span class="bl-country-chip">India</span>
          <span class="bl-country-chip">Japan</span>
          <span class="bl-country-chip">Malaysia</span>
          <span class="bl-country-chip">Singapore</span>
          <span class="bl-country-chip">Thailand</span>
          <span class="bl-country-chip">UAE</span>
        </div>
      </div>
      <div class="bl-continent-group">
        <span class="bl-continent-label">🌍 Europe</span>
        <div class="bl-country-chips">
          <span class="bl-country-chip">Austria</span>
          <span class="bl-country-chip">Belgium</span>
          <span class="bl-country-chip">Czech Rep.</span>
          <span class="bl-country-chip">France</span>
          <span class="bl-country-chip">Germany</span>
          <span class="bl-country-chip">Hungary</span>
          <span class="bl-country-chip">Italy</span>
          <span class="bl-country-chip">Luxembourg</span>
          <span class="bl-country-chip">Netherlands</span>
          <span class="bl-country-chip">Norway</span>
          <span class="bl-country-chip">Portugal</span>
          <span class="bl-country-chip">Romania</span>
          <span class="bl-country-chip">Serbia</span>
          <span class="bl-country-chip">Slovenia</span>
          <span class="bl-country-chip">Spain</span>
          <span class="bl-country-chip">Sweden</span>
          <span class="bl-country-chip">Switzerland</span>
          <span class="bl-country-chip">UK</span>
        </div>
      </div>
      <div class="bl-continent-group">
        <span class="bl-continent-label">🌎 Americas</span>
        <div class="bl-country-chips">
          <span class="bl-country-chip">Brazil</span>
          <span class="bl-country-chip">Canada</span>
          <span class="bl-country-chip">Colombia</span>
          <span class="bl-country-chip">USA</span>
        </div>
      </div>
      <div class="bl-continent-group">
        <span class="bl-continent-label">🌏 Oceania</span>
        <div class="bl-country-chips">
          <span class="bl-country-chip">Australia</span>
        </div>
      </div>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">3</div><div class="bl-item-content">Visit all 7 continents — <span style="color:var(--bl-done)">✓ Asia, ✓ Europe, ✓ N. America, ✓ S. America, ✓ Australia</span>, Africa, Antarctica</div></div>
    <div class="bl-item"><div class="bl-item-num">4</div><div class="bl-item-content">Road trip across US</div></div>
    <div class="bl-item"><div class="bl-item-num">5</div><div class="bl-item-content">Road trip across South America</div></div>
    <div class="bl-item"><div class="bl-item-num">6</div><div class="bl-item-content">Trans-Siberian overland journey</div></div>
    <div class="bl-item"><div class="bl-item-num">7</div><div class="bl-item-content">Patagonia trekking - Chile's Torres del Paine</div></div>
    <div class="bl-item"><div class="bl-item-num">8</div><div class="bl-item-content">Camino de Santiago (Galicia, Spain)</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/blog/biketrip/bike_trip.jpg" alt="Road trip" data-zoom-src="/assets/img/blog/biketrip/bike_trip.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">9</div>
      <h3 class="bl-achievement-title">Road trip across India</h3>
      <p class="bl-achievement-meta">2015 — An unplanned bike trip across 4 states</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/blog/biketrip/ludhiana/couch_surfing_sim.jpg" alt="Couchsurfing" data-zoom-src="/assets/img/blog/biketrip/ludhiana/couch_surfing_sim.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">10</div>
      <h3 class="bl-achievement-title">Couchsurfing trip</h3>
      <p class="bl-achievement-meta">2015 — At Sim Dhaliwal's place</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">11</div><div class="bl-item-content">Rafting Expedition</div></div>
    <div class="bl-item"><div class="bl-item-num">12</div><div class="bl-item-content"> Mt. Kilimanjaro Hike Expedition</div></div>
    <div class="bl-item"><div class="bl-item-num">13</div><div class="bl-item-content"> Mt. Everest Base Camp expedition</div></div>
    <div class="bl-item"><div class="bl-item-num">14</div><div class="bl-item-content">Skiing Expedition</div></div>
    <div class="bl-item"><div class="bl-item-num">15</div><div class="bl-item-content">Wildlife Safari</div></div>
    <div class="bl-item"><div class="bl-item-num">16</div><div class="bl-item-content">Northern Lights (Aurora Borealis) in Iceland/Norway</div></div>
    <div class="bl-item"><div class="bl-item-num">17</div><div class="bl-item-content">Machu Picchu trek (Inca Trail)</div></div>
    <div class="bl-item"><div class="bl-item-num">18</div><div class="bl-item-content">Great Migration Safari (Serengeti/Masai Mara)</div></div>
    <div class="bl-item"><div class="bl-item-num">19</div><div class="bl-item-content">Dive the Great Barrier Reef</div></div>
    <div class="bl-item"><div class="bl-item-num">20</div><div class="bl-item-content">Sail the Greek Islands</div></div>
    <div class="bl-item"><div class="bl-item-num">21</div><div class="bl-item-content">Drive Route 66 (USA)</div></div>
    <div class="bl-item"><div class="bl-item-num">22</div><div class="bl-item-content">Antarctica expedition</div></div>
  </div>
</div>

<!-- ==================== FESTIVALS & EVENTS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎉</div>
    <h2 class="bl-section-title">Festivals & Events</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">23</div><div class="bl-item-content">San Fermin — Run with the Bulls (Pamplona, Spain)</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/octoberfest_2012.JPG" alt="Oktoberfest, 2012" data-zoom-src="/assets/img/bucket_list/octoberfest_2012.JPG"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/octoberfest_2012_2.JPG" alt="Oktoberfest, 2012" data-zoom-src="/assets/img/bucket_list/octoberfest_2012_2.JPG"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">24</div>
      <h3 class="bl-achievement-title">Oktoberfest (Munich, Germany)</h3>
      <p class="bl-achievement-meta">2012 — Munich, Germany</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">25</div><div class="bl-item-content">La Tomatina (Bunol, Spain)</div></div>
    <div class="bl-item"><div class="bl-item-num">26</div><div class="bl-item-content">Carnival (Rio de Janeiro, Brazil)</div></div>
    <div class="bl-item"><div class="bl-item-num">27</div><div class="bl-item-content">Burning Man (Black Rock Desert, Nevada, USA)</div></div>
    <div class="bl-item"><div class="bl-item-num">28</div><div class="bl-item-content">Día de los Muertos (Oaxaca, Hanal Pixán, San Miguel, Mexico)</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">29</div>
      <h3 class="bl-achievement-title">Indian Republic/Independence Day Parade</h3>
      <p class="bl-achievement-meta">2013 — Delhi, India</p>
    </div>
  </div>
</div>

<!-- ==================== ADVENTURE SPORTS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🏔️</div>
    <h2 class="bl-section-title">Adventure Sports</h2>
  </div>
  <div class="bl-video-card">
    <div class="bl-video-embed"><iframe src="https://www.youtube.com/embed/7N_TIv6pY-8?si=u9MVJsYnhYfgN9Ra" allowfullscreen></iframe></div>
    <div class="bl-video-body">
      <div class="bl-achievement-num">30</div>
      <h3 class="bl-achievement-title">Learn Paragliding </h3>
      <p class="bl-achievement-meta">- 2011 - <a href="/blog/2013/i-believe-i-can-fly-paragliding/">P1 course</a>, Kamshet, India</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/surfing_spain_2012.JPG" alt="2012 - Surfing in Santander, Spain" data-zoom-src="/assets/img/bucket_list/surfing_spain_2012.JPG"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">31</div>
      <h3 class="bl-achievement-title">Skiing </h3>
      <p class="bl-achievement-meta"> 2012 — Santander, Spain</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/skiing_gulmarg.JPG" alt="Skiing in Gulmarg" data-zoom-src="/assets/img/bucket_list/skiing_gulmarg.JPG"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/skiing_tahoe.jpg" alt="Skiing in Tahoe" data-zoom-src="/assets/img/bucket_list/skiing_tahoe.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/skiing_alps.jpg" alt="Skiing in Widderstein, Alps" data-zoom-src="/assets/img/bucket_list/skiing_alps.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">32</div>
      <h3 class="bl-achievement-title">Sufring </h3>
      <p class="bl-achievement-meta"> 2011 — Gulmarg, India</p>
      <p class="bl-achievement-meta"> 2017 — Alps, Austria</p>
      <p class="bl-achievement-meta"> 2019 — Tahoe, USA</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/blog/scuba/scuba_preview.png" alt="Scuba diving" data-zoom-src="/assets/img/blog/scuba/scuba_preview.png"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">33</div>
      <h3 class="bl-achievement-title">Scuba Diving </h3>
      <p class="bl-achievement-meta"> 2015 — PADI Open Water License, Havelock, India</p>
    </div>
  </div>
  <div class="bl-video-card">
    <div class="bl-video-embed"><iframe src="https://www.youtube.com/embed/pZi6aE2iglM" allowfullscreen></iframe></div>
    <div class="bl-video-embed"><iframe src="https://www.youtube.com/embed/UJ8tZASNyww" allowfullscreen></iframe></div>
    <div class="bl-video-body">
      <div class="bl-achievement-num">34</div>
      <h3 class="bl-achievement-title">Bungee Jump</h3>
      <p class="bl-achievement-meta">2015 - Rishikesh, India <br/> 2016 - Belgrade, Serbia</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">35</div><div class="bl-item-content">Learn to Sail</div></div>
    <div class="bl-item"><div class="bl-item-num">36</div><div class="bl-item-content">Wind Surfing</div></div>
    <div class="bl-item"><div class="bl-item-num">37</div><div class="bl-item-content">Horse Riding</div></div>
    <div class="bl-item"><div class="bl-item-num">38</div><div class="bl-item-content">Ride in hot-air balloon</div></div>
    <div class="bl-item"><div class="bl-item-num">39</div><div class="bl-item-content">Swim with Dolphins</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/dubai_dune_bashing.jpg" alt="2015 - Dubai - Dune Bashing" data-zoom-src="/assets/img/bucket_list/dubai_dune_bashing.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">40</div>
      <h3 class="bl-achievement-title">Desert dune bashing (self-drive) </h3>
      <p class="bl-achievement-meta"> 2015 — Dubai Fun Drive</p>
    </div>
  </div>  
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">41</div><div class="bl-item-content">Participate in Amazing Race</div></div>
    <div class="bl-item"><div class="bl-item-num">42</div><div class="bl-item-content">Dive at Raja Ampat, Indonesia</div></div>
    <div class="bl-item"><div class="bl-item-num">43</div><div class="bl-item-content">Dive at the Red Sea, Egypt</div></div>
    <div class="bl-item"><div class="bl-item-num">44</div><div class="bl-item-content">Dive with Manta Ray</div></div>
    <div class="bl-item"><div class="bl-item-num">45</div><div class="bl-item-content">Cage diving with Great White Sharks</div></div>
  </div>
</div>

<!-- ==================== FITNESS GOALS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">💪</div>
    <h2 class="bl-section-title">Fitness Goals</h2>
  </div>
  <p class="bl-note">Running</p>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2012_mumbai_half_marathon.jpg" alt="Mumbai Half Marathon 2012" data-zoom-src="/assets/img/bucket_list/2012_mumbai_half_marathon.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2014_kaveri_half_marathon.jpg" alt="Kaveri Half Marathon 2014" data-zoom-src="/assets/img/bucket_list/2014_kaveri_half_marathon.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2014_kaveri_half_marathon_time.png" alt="Kaveri Half Marathon Time 2014" data-zoom-src="/assets/img/bucket_list/2014_kaveri_half_marathon_time.png"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">46</div>
      <h3 class="bl-achievement-title">Run a Half Marathon</h3>
      <p class="bl-achievement-meta">2012 — Mumbai Half Marathon</p>
      <p class="bl-achievement-meta">2014 — Kaveri Trail (1:55:07)</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">47</div><div class="bl-item-content">Run a Marathon</div></div>
    <div class="bl-item"><div class="bl-item-num">48</div><div class="bl-item-content">Spartan Trifecta</div></div>
  </div>
  <p class="bl-note">Triathlon & Swim</p>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/blog/hyderabad_triathlon.jpg" alt="Hyderabad Triathlon 2014" data-zoom-src="/assets/img/blog/hyderabad_triathlon.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2014_hyd_triathlon_timing.png" alt="Hyderabad Triathlon Timing 2014" data-zoom-src="/assets/img/bucket_list/2014_hyd_triathlon_timing.png"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2017_darmstadt_triathlon.png" alt="Darmstadt Triathlon 2017" data-zoom-src="/assets/img/bucket_list/2017_darmstadt_triathlon.png"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2012_santa_cruz_triathlon.jpeg" alt="Santa Cruz Triathlon 2012" data-zoom-src="/assets/img/bucket_list/2012_santa_cruz_triathlon.jpeg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2022_santa_cruz_triathlon_timing.jpg" alt="Santa Cruz Triathlon Timing 2022" data-zoom-src="/assets/img/bucket_list/2022_santa_cruz_triathlon_timing.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">49</div>
      <h3 class="bl-achievement-title">Run a Triathlon</h3>
      <p class="bl-achievement-meta">2014 — Hyderabad, India (Olympic, 4:15:07)</p>
      <p class="bl-achievement-meta">2017 — Darmstadt, Germany (Sprint, 1:49:27)</p>
      <p class="bl-achievement-meta">2022 — Santa Cruz, USA (Olympic, 3:12:25)</p>
    </div>
  </div>
  <div class="bl-items">
  <div class="bl-item"><div class="bl-item-num">50</div><div class="bl-item-content">Run an Ironman</div></div>
  </div>

  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2022_donner_swim.jpg" alt="Donner Lake Swim 2022" data-zoom-src="/assets/img/bucket_list/2022_donner_swim.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2022_donner_swim_2.jpg" alt="Donner Lake Swim 2022" data-zoom-src="/assets/img/bucket_list/2022_donner_swim_2.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2022_donner_lake_swim_timing.jpg" alt="Donner Lake Swim Timing 2022" data-zoom-src="/assets/img/bucket_list/2022_donner_lake_swim_timing.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">51</div>
      <h3 class="bl-achievement-title">Lake Swim</h3>
      <p class="bl-achievement-meta">2022 — Donner Lake, California (1.2 miles, 49:45)</p>
    </div>
  </div>
  <p class="bl-note">Other</p>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2015_six_pack_1.jpg" alt="Six Pack" data-zoom-src="/assets/img/bucket_list/2015_six_pack_1.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">52</div>
      <h3 class="bl-achievement-title">Six pack abs</h3>
      <p class="bl-achievement-meta"><a href="/projects/six_pack_1/">2015 — Attempt 1</a></p>
      <p class="bl-achievement-meta"><a href="/projects/six_pack_2/">2026 — Attempt 2</a></p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">53</div><div class="bl-item-content">Learn BJJ — Get a medal in competition</div></div>
  </div>
</div>

<!-- ==================== ATTEND SPORTS EVENTS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🏆</div>
    <h2 class="bl-section-title">Attend Sports Events</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">54</div><div class="bl-item-content">Cricket Match at Lord's</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2021_french_open_1.jpg" alt="French Open Finals - 2021" data-zoom-src="/assets/img/bucket_list/2021_french_open_1.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2021_french_open_2.jpg" alt="French Open Finals - 2021" data-zoom-src="/assets/img/bucket_list/2021_french_open_2.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2021_french_open_3.jpg" alt="French Open Finals - 2021" data-zoom-src="/assets/img/bucket_list/2021_french_open_3.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2018_australian_open_1.jpg" alt="Australian Open Quarters - 2018" data-zoom-src="/assets/img/bucket_list/2018_australian_open_1.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2018_australian_open_2.jpg" alt="Australian Open Quarters - 2018" data-zoom-src="/assets/img/bucket_list/2018_australian_open_2.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2018_australian_open_3.jpg" alt="Australian Open Quarters - 2018" data-zoom-src="/assets/img/bucket_list/2018_australian_open_3.jpg"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">55</div>
      <h3 class="bl-achievement-title">Tennis Grand Slam</h3>
      <p class="bl-achievement-meta">2021 — French Open Finals</p>
      <p class="bl-achievement-meta">2018 — Australian Open Quarters</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">56</div><div class="bl-item-content">Attend Football World Cup</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/cricket_worldcup_2019.JPG" alt="Cricket WorldCup 2019 IND vs NZ" data-zoom-src="/assets/img/bucket_list/cricket_worldcup_2019.JPG"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">57</div>
      <h3 class="bl-achievement-title">Cricket World Cup</h3>
      <p class="bl-achievement-meta">2019 — IND vs NZ, Old Trafford</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">58</div><div class="bl-item-content">Attend Olympics</div></div>
    <div class="bl-item"><div class="bl-item-num">59</div><div class="bl-item-content">Attend Super Bowl</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/ashes_test_match_2017_1.jpg" alt="Ashes Test Match 2017" data-zoom-src="/assets/img/bucket_list/ashes_test_match_2017_1.jpg"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/ashes_test_match_2017_2.JPG" alt="Ashes Test Match 2017" data-zoom-src="/assets/img/bucket_list/ashes_test_match_2017_2.JPG"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">60</div>
      <h3 class="bl-achievement-title">Ashes Test match</h3>
      <p class="bl-achievement-meta">2017 — The Ashes, Australia</p>
    </div>
  </div>
</div>

<!-- ==================== LEARN — SKILLS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">📚</div>
    <h2 class="bl-section-title">Learn — Skills</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">61</div><div class="bl-item-content">Learn Salsa dancing</div></div>
    <div class="bl-item"><div class="bl-item-num">62</div><div class="bl-item-content">Learn a music instrument and perform</div></div>
    <div class="bl-item"><div class="bl-item-num">63</div><div class="bl-item-content">Learn to Juggle</div></div>
    <div class="bl-item"><div class="bl-item-num">64</div><div class="bl-item-content">Solve Rubik's Cube</div></div>
    <div class="bl-item"><div class="bl-item-num">65</div><div class="bl-item-content">Learn to cook an exquisite meal</div></div>
    <div class="bl-item"><div class="bl-item-num">66</div><div class="bl-item-content">Master chess (2000 rating)</div></div>
  </div>
</div>

<!-- ==================== LEARN — LANGUAGES ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🗣️</div>
    <h2 class="bl-section-title">Learn — Languages</h2>
  </div>
  <p class="bl-note">Top spoken languages</p>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">67</div>
      <h3 class="bl-achievement-title">English</h3>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">68</div>
      <h3 class="bl-achievement-title">Hindi</h3>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">69</div><div class="bl-item-content">Spanish</div></div>
    <div class="bl-item"><div class="bl-item-num">70</div><div class="bl-item-content">Mandarin</div></div>
    <div class="bl-item"><div class="bl-item-num">71</div><div class="bl-item-content">Arabic</div></div>
    <div class="bl-item"><div class="bl-item-num">72</div><div class="bl-item-content">Sign Language</div></div>
  </div>
  <p class="bl-note">Indian languages (Reading, Writing, Speaking)</p>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">73</div><div class="bl-item-content">Telugu (Mother tongue)</div></div>
    <div class="bl-item"><div class="bl-item-num">74</div><div class="bl-item-content">Tamil</div></div>
  </div>
</div>

<!-- ==================== MUSIC & ENTERTAINMENT ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎵</div>
    <h2 class="bl-section-title">Music & Entertainment</h2>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">75</div>
      <h3 class="bl-achievement-title">Attend a live concert</h3>
      <p class="bl-achievement-meta">2010 — Shaan</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/opera_budapest.JPG" alt="Opera Budapest" data-zoom-src="/assets/img/bucket_list/opera_budapest.JPG"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/opera_budapest_2.JPG" alt="Opera Budapest" data-zoom-src="/assets/img/bucket_list/opera_budapest_2.JPG"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">76</div>
      <h3 class="bl-achievement-title">Attend live orchestra / Opera</h3>
      <p class="bl-achievement-meta">2012 — Budapest, Hungary</p>
    </div>
  </div>
</div>

<!-- ==================== MEET CELEBRITIES ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">⭐</div>
    <h2 class="bl-section-title">Meet Celebrities</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">77</div><div class="bl-item-content">Bear Grylls</div></div>
    <div class="bl-item"><div class="bl-item-num">78</div><div class="bl-item-content">Hrithik Roshan</div></div>
    <div class="bl-item"><div class="bl-item-num">79</div><div class="bl-item-content">Rafa Nadal</div></div>
    <div class="bl-item"><div class="bl-item-num">80</div><div class="bl-item-content">Rahul Dravid</div></div>
    <div class="bl-item"><div class="bl-item-num">81</div><div class="bl-item-content">Abhinav Bindra</div></div>
    <div class="bl-item"><div class="bl-item-num">82</div><div class="bl-item-content">Tim Ferriss</div></div>
    <div class="bl-item"><div class="bl-item-num">83</div><div class="bl-item-content">Dan Martell</div></div>
  </div>
</div>

<!-- ==================== MINDFULNESS & GOODWILL ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🧘</div>
    <h2 class="bl-section-title">Mindfulness & Goodwill</h2>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">84</div>
      <h3 class="bl-achievement-title">Vipassana 10 days meditation retreat</h3>
      <p class="bl-achievement-meta">2012</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">85</div><div class="bl-item-content">Volunteer for an NGO</div></div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">86</div>
      <h3 class="bl-achievement-title">Support a kid's education</h3>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">87</div><div class="bl-item-content">Make a difference in someone's life</div></div>
  </div>
</div>

<!-- ==================== EDUCATION & CAREER ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎓</div>
    <h2 class="bl-section-title">Education & Career</h2>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-imgs">
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2019_phd_1.JPG" alt="PhD graduation" data-zoom-src="/assets/img/bucket_list/2019_phd_1.JPG"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2019_phd_2.JPG" alt="PhD graduation" data-zoom-src="/assets/img/bucket_list/2019_phd_2.JPG"></div>
      <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2019_phd_3.JPG" alt="PhD graduation" data-zoom-src="/assets/img/bucket_list/2019_phd_3.JPG"></div>
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">88</div>
      <h3 class="bl-achievement-title">Get a PhD</h3>
      <p class="bl-achievement-meta">2019 — TU Darmstadt, Germany</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">89</div>
      <h3 class="bl-achievement-title">Start a personal website/blog</h3>
      <p class="bl-achievement-meta">2013</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">90</div><div class="bl-item-content">Start a business</div></div>
    <div class="bl-item"><div class="bl-item-num">91</div><div class="bl-item-content">Give a TED Talk</div></div>
    <div class="bl-item"><div class="bl-item-num">92</div><div class="bl-item-content">Give a keynote speech</div></div>
    <div class="bl-item"><div class="bl-item-num">93</div><div class="bl-item-content">Mentor someone to success</div></div>
  </div>
</div>

<!-- ==================== PROPERTIES & THINGS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🏠</div>
    <h2 class="bl-section-title">Properties & Things</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">94</div><div class="bl-item-content">Own SFH in California</div></div>
    <div class="bl-item"><div class="bl-item-num">95</div><div class="bl-item-content">Own SFH in Bogota</div></div>
    <div class="bl-item"><div class="bl-item-num">96</div><div class="bl-item-content">Own SFH in Hawaii</div></div>
    <div class="bl-item"><div class="bl-item-num">97</div><div class="bl-item-content">Own SFH in Florida</div></div>
    <div class="bl-item"><div class="bl-item-num">98</div><div class="bl-item-content">Own SFH in Spain</div></div>
    <div class="bl-item"><div class="bl-item-num">99</div><div class="bl-item-content">Own a Mercedes Camper Van</div></div>
    <div class="bl-item"><div class="bl-item-num">100</div><div class="bl-item-content">Own an Indian Cruiser Bike</div></div>
  </div>
</div>

<!-- ==================== EXPERIENCES ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">✨</div>
    <h2 class="bl-section-title">Experiences</h2>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">101</div>
      <h3 class="bl-achievement-title">Fly Business Class</h3>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">102</div><div class="bl-item-content">Fly First Class</div></div>
    <div class="bl-item"><div class="bl-item-num">103</div><div class="bl-item-content">Fly Private Jet</div></div>
  </div>
</div>

<!-- ==================== CREATIVE & PERSONAL ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎨</div>
    <h2 class="bl-section-title">Creative & Personal</h2>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">104</div>
      <h3 class="bl-achievement-title">Permanent Tattoo</h3>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">105</div><div class="bl-item-content">100 Books project <span class="bl-item-date">6 so far</span></div></div>
    <div class="bl-item"><div class="bl-item-num">106</div><div class="bl-item-content">100 Strangers Project</div></div>
    <div class="bl-item"><div class="bl-item-num">107</div><div class="bl-item-content">100 Immigrant Stories Project</div></div>
    <div class="bl-item"><div class="bl-item-num">108</div><div class="bl-item-content">Publish a book</div></div>
    <div class="bl-item"><div class="bl-item-num">109</div><div class="bl-item-content">Get a photograph published</div></div>
    <div class="bl-item"><div class="bl-item-num">110</div><div class="bl-item-content">Get an article published</div></div>
    <div class="bl-item"><div class="bl-item-num">111</div><div class="bl-item-content">Financially independent by 45</div></div>
  </div>
</div>

<!-- ==================== THE ULTIMATE GOAL ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎯</div>
    <h2 class="bl-section-title">The Ultimate Goal</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">✨</div><div class="bl-item-content">Complete everything on this list ✨</div></div>
  </div>
</div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("visited-countries-map");
    if (!el) return;

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/css/jsvectormap.min.css";
    document.head.appendChild(link);

    var s1 = document.createElement("script");
    s1.src =
      "https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/js/jsvectormap.min.js";
    s1.onload = function () {
      var s2 = document.createElement("script");
      s2.src =
        "https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/maps/world.js";
      s2.onload = function () {
        var dark =
          document.documentElement.getAttribute("data-theme") === "dark";
        new jsVectorMap({
          selector: "#visited-countries-map",
          map: "world",
          zoomOnScroll: false,
          regionsSelectable: false,
          showTooltip: true,
          regionStyle: {
            initial: {
              fill: dark ? "#334155" : "#e2e8f0",
              stroke: dark ? "#1e293b" : "#ffffff",
              strokeWidth: 0.5,
            },
            selected: { fill: "#0d9488" },
            hover: { fill: "#14b8a6", cursor: "default" },
          },
          selectedRegions: [
            "in", "jp", "my", "sg", "th", "ae",
            "at", "be", "cz", "fr", "de", "hu", "it", "lu",
            "nl", "no", "pt", "ro", "rs", "si", "es", "se", "ch", "gb",
            "ca", "us", "br", "co", "au",
          ],
        });
      };
      document.body.appendChild(s2);
    };
    document.body.appendChild(s1);
  });
</script>
