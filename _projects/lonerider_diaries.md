---
layout: page
title: LoneRider Diaries
description: An unplanned bike trip across India — riding solo on a Bajaj Avenger, exploring villages, cities, and the stories behind them.
img: assets/img/blog/biketrip/bike_trip.jpg
importance: 1
category: Personal
---

A journey across India meeting new people and understanding different cultures. Riding solo on a Bajaj Avenger, exploring villages, cities, and the stories behind them.

2015 — An unplanned bike trip across 4 states.

### Blog Posts

{% assign lonerider_posts = site.posts | where_exp: "post", "post.tags contains 'lonerider'" | sort: "date" %}

<ul class="post-list">
  {% for post in lonerider_posts %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% assign year = post.date | date: "%Y" %}
    <li>
      {% if post.thumbnail %}
      <div class="row g-2 align-items-center">
        <div class="col-sm-3">
          <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 100%; border-radius: 4px;" alt="{{ post.title }}">
        </div>
        <div class="col-sm-9">
      {% endif %}
          <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.description }}</p>
          <p class="post-meta">
            {{ read_time }} min read &nbsp; &middot; &nbsp;
            {{ post.date | date: '%B %d, %Y' }}
          </p>
          <p class="post-tags">
            <a href="{{ year | prepend: '/blog/' | relative_url }}">
              <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
            </a>
          </p>
      {% if post.thumbnail %}
        </div>
      </div>
      {% endif %}
    </li>
  {% endfor %}
</ul>
