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
.bl-progress-fill { height: 100%; width: 21%; background: linear-gradient(90deg, var(--bl-primary), var(--bl-primary-light)); border-radius: 100px; } /* 22/107 ≈ 21% */

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 1;
}
.bl-achievement-img {
  flex: 0 0 140px;
  min-height: 100px;
  overflow: hidden;
  order: 2;
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
  margin-bottom: 0.35rem;
}
.bl-achievement-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--bl-done);
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>

<div class="bucket-list-wrapper">

<!-- Hero -->
<div class="bl-hero">
  <p class="bl-hero-title">Life Goals Progress</p>
  <p class="bl-hero-count"><span>22</span> / 107</p>
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
    <div class="bl-item"><div class="bl-item-num">2</div><div class="bl-item-content">Visit 150 countries<span class="bl-item-date">32 so far!</span></div></div>
    <div class="bl-item"><div class="bl-item-num">3</div><div class="bl-item-content">Visit all 7 continents — <span style="color:var(--bl-done)">✓ Asia, ✓ Europe, ✓ N. America, ✓ S. America, ✓ Australia</span>, Africa, Antarctica</div></div>
    <div class="bl-item"><div class="bl-item-num">4</div><div class="bl-item-content">Road trip across US</div></div>
    <div class="bl-item"><div class="bl-item-num">5</div><div class="bl-item-content">Road trip across South America</div></div>
    <div class="bl-item"><div class="bl-item-num">6</div><div class="bl-item-content">Trans-Siberian overland journey</div></div>
    <div class="bl-item"><div class="bl-item-num">7</div><div class="bl-item-content">Patagonia trekking - Chile's Torres del Paine</div></div>
    <div class="bl-item"><div class="bl-item-num">8</div><div class="bl-item-content">Camino de Santiago (Galicia, Spain)</div></div>
  </div>
  <a class="bl-link" href="https://cmoreira.net/visited-countries-map/?vcstitle=Countries%20Visited&inacolor=%23e0e0e0&actcolor=%236699cc&vcscountries=IN,JP,MY,SG,TH,AE,AT,BE,CZ,FR,DE,HU,IT,LU,NL,NO,PT,RO,RS,SI,ES,SE,CH,GB,CA,US,BR,CO,AU&">🗺️ View Countries Map</a>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-img"><img src="/assets/img/blog/biketrip/bike_trip.jpg" alt="Road trip" data-zoom-src="/assets/img/blog/biketrip/bike_trip.jpg"></div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">9</div>
      <h3 class="bl-achievement-title">Road trip across India</h3>
      <p class="bl-achievement-meta">2015 — An unplanned bike trip across 4 states</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-img"><img src="/assets/img/blog/biketrip/ludhiana/couch_surfing_sim.jpg" alt="Couchsurfing" data-zoom-src="/assets/img/blog/biketrip/ludhiana/couch_surfing_sim.jpg"></div>
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
    <div class="bl-item done"><div class="bl-item-num">24</div><div class="bl-item-content">Oktoberfest (Munich, Germany)<span class="bl-item-date">Done</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/octoberfest_2012.JPG" alt="Oktoberfest, 2012" data-zoom-src="/assets/img/bucket_list/octoberfest_2012.JPG"></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/octoberfest_2012_2.JPG" alt="Oktoberfest, 2012" data-zoom-src="/assets/img/bucket_list/octoberfest_2012_2.JPG"></div>
    </div>
    <div class="bl-item"><div class="bl-item-num">25</div><div class="bl-item-content">La Tomatina (Bunol, Spain)</div></div>
    <div class="bl-item"><div class="bl-item-num">26</div><div class="bl-item-content">Carnival (Rio de Janeiro, Brazil)</div></div>
    <div class="bl-item"><div class="bl-item-num">27</div><div class="bl-item-content">Burning Man (Black Rock Desert, Nevada, USA)</div></div>
    <div class="bl-item"><div class="bl-item-num">28</div><div class="bl-item-content">Día de los Muertos (Oaxaca, Hanal Pixán, San Miguel, Mexico)</div></div>
    <div class="bl-item done"><div class="bl-item-num">29</div><div class="bl-item-content">Indian Republic/Independence Day Parade (Delhi)<span class="bl-item-date">2013</span></div></div>
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
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">31</div><div class="bl-item-content">Learn Skiing (3 courses at IISM Gulmarg)<span class="bl-item-date">Done</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/skiing_gulmarg.JPG" alt="Skiing in Gulmarg" data-zoom-src="/assets/img/bucket_list/skiing_gulmarg.JPG"></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/skiing_tahoe.jpg" alt="Skiing in Tahoe" data-zoom-src="/assets/img/bucket_list/skiing_tahoe.jpg"></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/skiing_alps.jpg" alt="Skiing in Widderstein, Alps" data-zoom-src="/assets/img/bucket_list/skiing_alps.jpg"></div>
    </div>
    <div class="bl-item done"><div class="bl-item-num">32</div><div class="bl-item-content">Surfing (Santander, Spain)<span class="bl-item-date">2012</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/surfing_spain_2012.JPG" alt="2012 - Surfing in Santander, Spain" data-zoom-src="/assets/img/bucket_list/surfing_spain_2012.JPG"></div>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-img"><img src="/assets/img/blog/scuba/scuba_preview.png" alt="Scuba diving" data-zoom-src="/assets/img/blog/scuba/scuba_preview.png"></div>
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
      <p class="bl-achievement-meta">1. 2015 - Rishikesh, India <br/> 2. 2016 - Belgrade, Serbia</p>
    </div>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">35</div><div class="bl-item-content">Learn to Sail</div></div>
    <div class="bl-item"><div class="bl-item-num">36</div><div class="bl-item-content">Wind Surfing</div></div>
    <div class="bl-item"><div class="bl-item-num">37</div><div class="bl-item-content">Horse Riding</div></div>
    <div class="bl-item"><div class="bl-item-num">38</div><div class="bl-item-content">Ride in hot-air balloon</div></div>
    <div class="bl-item"><div class="bl-item-num">39</div><div class="bl-item-content">Swim with Dolphins</div></div>
    <div class="bl-item done"><div class="bl-item-num">40</div><div class="bl-item-content">Desert dune bashing (self-drive)<span class="bl-item-date">Done</span></div>
     <div class="bl-achievement-img">
    <img src="/assets/img/bucket_list/dubai_dune_bashing.jpg" alt="2015 - Dubai - Dune Bashing" data-zoom-src="/assets/img/bucket_list/dubai_dune_bashing.jpg"></div>
    </div>
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
  <div class="bl-achievement-card done">
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/2014_kaveri_half_marathon.jpg" alt="Half Marathon" data-zoom-src="/assets/img/bucket_list/2014_kaveri_half_marathon.jpg"> </div>
    <div class="bl-achievement-img">
    <img src="/assets/img/bucket_list/2014_kaveri_half_marathon_time.png" alt="Half Marathon Time" data-zoom-src="/assets/img/bucket_list/2014_kaveri_half_marathon_time.png">
    </div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">46</div>
      <h3 class="bl-achievement-title">Run a Half Marathon</h3>
      <p class="bl-achievement-meta">2010-14 — Kaveri Trail (1:55:07)</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-img"><img src="/assets/img/blog/hyderabad_triathlon.jpg" alt="Triathlon" data-zoom-src="/assets/img/blog/hyderabad_triathlon.jpg"></div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">47</div>
      <h3 class="bl-achievement-title">Run a Triathlon</h3>
      <p class="bl-achievement-meta">2015 — Olympic Triathlon (4:15:07)</p>
    </div>
  </div>
  <div class="bl-achievement-card done">
    <div class="bl-achievement-img"><img src="/assets/img/blog/six_pack.jpg" alt="Six Pack" data-zoom-src="/assets/img/blog/six_pack.jpg"></div>
    <div class="bl-achievement-body">
      <div class="bl-achievement-num">48</div>
      <h3 class="bl-achievement-title">Six pack abs</h3>
      <a href="/blog/2013/i-believe-i-can-fly-paragliding/">2015 - Attempt 1 </a>
      <a href="/blog/2013/i-believe-i-can-fly-paragliding/">2026 - Attempt 2 </a>
    </div>
  </div>

  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">49</div><div class="bl-item-content">Run a Marathon</div></div>
    <div class="bl-item"><div class="bl-item-num">50</div><div class="bl-item-content">Spartan Trifecta</div></div>
    <div class="bl-item"><div class="bl-item-num">51</div><div class="bl-item-content">Run an Ironman</div></div>
    <div class="bl-item"><div class="bl-item-num">52</div><div class="bl-item-content">Learn BJJ — Get a medal in competition</div></div>
  </div>
</div>

<!-- ==================== ATTEND SPORTS EVENTS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🏆</div>
    <h2 class="bl-section-title">Attend Sports Events</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">53</div><div class="bl-item-content">Watch a Cricket Match at Lord's</div></div>
    <div class="bl-item done"><div class="bl-item-num">54</div><div class="bl-item-content">Attend Tennis Grand Slam<span class="bl-item-date">Done</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/tennis_french_open_2021.jpg" alt="French Open Finals - 2021" data-zoom-src="/assets/img/bucket_list/tennis_french_open_2021.jpg"></div>
    </div>
    <div class="bl-item"><div class="bl-item-num">55</div><div class="bl-item-content">Attend Football World Cup</div></div>
    <div class="bl-item done"><div class="bl-item-num">56</div><div class="bl-item-content">Attend Cricket World Cup<span class="bl-item-date">Done</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/cricket_worldcup_2019.JPG" alt="Cricket WorldCup 2019 IND vs NZ" data-zoom-src="/assets/img/bucket_list/cricket_worldcup_2019.JPG"></div>
    </div>
    <div class="bl-item"><div class="bl-item-num">57</div><div class="bl-item-content">Attend Olympics</div></div>
    <div class="bl-item"><div class="bl-item-num">58</div><div class="bl-item-content">Attend Super Bowl</div></div>
  </div>
</div>

<!-- ==================== LEARN — SKILLS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">📚</div>
    <h2 class="bl-section-title">Learn — Skills</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">59</div><div class="bl-item-content">Learn Salsa dancing</div></div>
    <div class="bl-item"><div class="bl-item-num">60</div><div class="bl-item-content">Learn a music instrument and perform</div></div>
    <div class="bl-item"><div class="bl-item-num">61</div><div class="bl-item-content">Learn to Juggle</div></div>
    <div class="bl-item"><div class="bl-item-num">62</div><div class="bl-item-content">Solve Rubik's Cube</div></div>
    <div class="bl-item"><div class="bl-item-num">63</div><div class="bl-item-content">Learn to cook an exquisite meal</div></div>
    <div class="bl-item"><div class="bl-item-num">64</div><div class="bl-item-content">Master chess (2000 rating)</div></div>
  </div>
</div>

<!-- ==================== LEARN — LANGUAGES ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🗣️</div>
    <h2 class="bl-section-title">Learn — Languages</h2>
  </div>
  <p class="bl-note">Top spoken languages</p>
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">65</div><div class="bl-item-content">English<span class="bl-item-date">Childhood</span></div></div>
    <div class="bl-item done"><div class="bl-item-num">66</div><div class="bl-item-content">Hindi<span class="bl-item-date">Childhood</span></div></div>
    <div class="bl-item"><div class="bl-item-num">67</div><div class="bl-item-content">Spanish</div></div>
    <div class="bl-item"><div class="bl-item-num">68</div><div class="bl-item-content">Mandarin</div></div>
    <div class="bl-item"><div class="bl-item-num">69</div><div class="bl-item-content">Arabic</div></div>
    <div class="bl-item"><div class="bl-item-num">70</div><div class="bl-item-content">Sign Language</div></div>
  </div>
  <p class="bl-note">Indian languages (Reading, Writing, Speaking)</p>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">71</div><div class="bl-item-content">Telugu (Mother tongue)</div></div>
    <div class="bl-item"><div class="bl-item-num">72</div><div class="bl-item-content">Tamil</div></div>
  </div>
</div>

<!-- ==================== MUSIC & ENTERTAINMENT ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎵</div>
    <h2 class="bl-section-title">Music & Entertainment</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">73</div><div class="bl-item-content">Attend a live concert (Shaan)<span class="bl-item-date">2010</span></div></div>
    <div class="bl-item done"><div class="bl-item-num">74</div><div class="bl-item-content">Attend live orchestra / Opera (Budapest)<span class="bl-item-date">2012</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/opera_budapest.JPG" alt="Road trip" data-zoom-src="/assets/img/bucket_list/opera_budapest.JPG"></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/opera_budapest_2.JPG" alt="Road trip" data-zoom-src="/assets/img/bucket_list/opera_budapest_2.JPG"></div>
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
    <div class="bl-item"><div class="bl-item-num">75</div><div class="bl-item-content">Bear Grylls</div></div>
    <div class="bl-item"><div class="bl-item-num">76</div><div class="bl-item-content">Hrithik Roshan</div></div>
    <div class="bl-item"><div class="bl-item-num">77</div><div class="bl-item-content">Rafa Nadal</div></div>
    <div class="bl-item"><div class="bl-item-num">78</div><div class="bl-item-content">Rahul Dravid</div></div>
    <div class="bl-item"><div class="bl-item-num">79</div><div class="bl-item-content">Abhinav Bindra</div></div>
  </div>
</div>

<!-- ==================== MINDFULNESS & GOODWILL ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🧘</div>
    <h2 class="bl-section-title">Mindfulness & Goodwill</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">80</div><div class="bl-item-content">Vipassana 10 days meditation retreat<span class="bl-item-date">2012</span></div></div>
    <div class="bl-item"><div class="bl-item-num">81</div><div class="bl-item-content">Volunteer for an NGO</div></div>
    <div class="bl-item done"><div class="bl-item-num">82</div><div class="bl-item-content">Support a kid's education<span class="bl-item-date">Done</span></div></div>
    <div class="bl-item"><div class="bl-item-num">83</div><div class="bl-item-content">Make a difference in someone's life</div></div>
  </div>
</div>

<!-- ==================== EDUCATION & CAREER ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎓</div>
    <h2 class="bl-section-title">Education & Career</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">84</div><div class="bl-item-content">Get a PhD (TU Darmstadt)<span class="bl-item-date">2019</span></div>
    <div class="bl-achievement-img"><img src="/assets/img/bucket_list/phd.JPG" alt="Road trip" data-zoom-src="/assets/img/bucket_list/phd.JPG"></div>
    </div>
    <div class="bl-item done"><div class="bl-item-num">85</div><div class="bl-item-content">Start a personal website/blog<span class="bl-item-date">2013</span></div></div>
    <div class="bl-item"><div class="bl-item-num">86</div><div class="bl-item-content">Start a business</div></div>
    <div class="bl-item"><div class="bl-item-num">87</div><div class="bl-item-content">Give a TED Talk</div></div>
    <div class="bl-item"><div class="bl-item-num">88</div><div class="bl-item-content">Give a keynote speech</div></div>
    <div class="bl-item"><div class="bl-item-num">89</div><div class="bl-item-content">Mentor someone to success</div></div>
  </div>
</div>

<!-- ==================== PROPERTIES & THINGS ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🏠</div>
    <h2 class="bl-section-title">Properties & Things</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item"><div class="bl-item-num">90</div><div class="bl-item-content">Own SFH in California</div></div>
    <div class="bl-item"><div class="bl-item-num">91</div><div class="bl-item-content">Own SFH in Bogota</div></div>
    <div class="bl-item"><div class="bl-item-num">92</div><div class="bl-item-content">Own SFH in Hawaii</div></div>
    <div class="bl-item"><div class="bl-item-num">93</div><div class="bl-item-content">Own SFH in Florida</div></div>
    <div class="bl-item"><div class="bl-item-num">94</div><div class="bl-item-content">Own SFH in Spain</div></div>
    <div class="bl-item"><div class="bl-item-num">95</div><div class="bl-item-content">Own a Mercedes Camper Van</div></div>
    <div class="bl-item"><div class="bl-item-num">96</div><div class="bl-item-content">Own an Indian Cruiser Bike</div></div>
  </div>
</div>

<!-- ==================== EXPERIENCES ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">✨</div>
    <h2 class="bl-section-title">Experiences</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">97</div><div class="bl-item-content">Fly Business Class<span class="bl-item-date">Done</span></div></div>
    <div class="bl-item"><div class="bl-item-num">98</div><div class="bl-item-content">Fly First Class</div></div>
    <div class="bl-item"><div class="bl-item-num">99</div><div class="bl-item-content">Fly Private Jet</div></div>
  </div>
</div>

<!-- ==================== CREATIVE & PERSONAL ==================== -->
<div class="bl-section">
  <div class="bl-section-header">
    <div class="bl-section-icon">🎨</div>
    <h2 class="bl-section-title">Creative & Personal</h2>
  </div>
  <div class="bl-items">
    <div class="bl-item done"><div class="bl-item-num">100</div><div class="bl-item-content">Permanent Tattoo<span class="bl-item-date">Done</span></div></div>
    <div class="bl-item"><div class="bl-item-num">101</div><div class="bl-item-content">100 Books project <span class="bl-item-date">6 so far</span></div></div>
    <div class="bl-item"><div class="bl-item-num">102</div><div class="bl-item-content">100 Strangers Project</div></div>
    <div class="bl-item"><div class="bl-item-num">103</div><div class="bl-item-content">100 Immigrant Stories Project</div></div>
    <div class="bl-item"><div class="bl-item-num">104</div><div class="bl-item-content">Publish a book</div></div>
    <div class="bl-item"><div class="bl-item-num">105</div><div class="bl-item-content">Get a photograph published</div></div>
    <div class="bl-item"><div class="bl-item-num">106</div><div class="bl-item-content">Get an article published</div></div>
    <div class="bl-item"><div class="bl-item-num">107</div><div class="bl-item-content">Financially independent by 45</div></div>
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
