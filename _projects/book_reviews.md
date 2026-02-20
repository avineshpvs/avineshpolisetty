---
layout: page
title: Book Reviews
description: Sharing thoughts on books across sports, travel, self-improvement, and more.
img: assets/img/blog/projects/book-reviews.png
importance: 4
category: Personal
---

Reviews of books I've read — sharing thoughts on books across sports, travel, self-improvement, and more.

<div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem; margin: 1rem 0;">
  <span style="font-size: 0.85rem; color: var(--global-text-color-light);">Sort by:</span>
  <button id="sort-date" onclick="sortBooks('date')" style="padding: 0.3rem 0.75rem; font-size: 0.8rem; border-radius: 20px; border: 1px solid var(--global-divider-color); background: var(--global-theme-color); color: white; cursor: pointer; font-weight: 600;">Date</button>
  <button id="sort-rating" onclick="sortBooks('rating')" style="padding: 0.3rem 0.75rem; font-size: 0.8rem; border-radius: 20px; border: 1px solid var(--global-divider-color); background: transparent; color: var(--global-text-color); cursor: pointer; font-weight: 600;">Rating</button>
</div>

---

<div id="books-by-date">
{% assign date_books = site.books | sort: "date" | reverse %}
{% for book in date_books %}
<div class="book-card" data-rating="{{ book.rating }}" data-date="{{ book.date | date: '%Y%m%d' }}" style="display: flex; gap: 1.2rem; margin-bottom: 1.5rem; padding: 1rem; border: 1px solid var(--global-divider-color); border-radius: 10px; background: var(--global-card-bg-color);">
  {% if book.img %}
  <div style="flex: 0 0 120px;">
    <img src="/{{ book.img }}" alt="{{ book.title }}" style="width: 100%; border-radius: 6px;">
  </div>
  {% endif %}
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.25rem 0;"><a href="{{ book.url }}" style="text-decoration: none;">{{ book.title }}</a></h3>
    <p style="margin: 0 0 0.3rem 0; font-size: 0.85rem; color: var(--global-text-color-light);">{{ book.author_book }}</p>
    <p style="margin: 0 0 0.3rem 0; font-size: 0.85rem;">
      {% for i in (1..5) %}{% if i <= book.rating %}★{% else %}☆{% endif %}{% endfor %}
      <span style="font-size: 0.75rem; color: var(--global-text-color-light); margin-left: 0.3rem;">{{ book.date | date: "%b %Y" }}</span>
    </p>
    <p style="margin: 0; font-size: 0.85rem;">{{ book.description }}</p>
    <a href="{{ book.url }}" style="font-size: 0.8rem; margin-top: 0.5rem; display: inline-block;">Read full review →</a>
  </div>
</div>
{% endfor %}
</div>

<div id="books-by-rating" style="display: none;">
{% assign rating_books = site.books | sort: "rating" | reverse %}
{% for book in rating_books %}
<div style="display: flex; gap: 1.2rem; margin-bottom: 1.5rem; padding: 1rem; border: 1px solid var(--global-divider-color); border-radius: 10px; background: var(--global-card-bg-color);">
  {% if book.img %}
  <div style="flex: 0 0 120px;">
    <img src="/{{ book.img }}" alt="{{ book.title }}" style="width: 100%; border-radius: 6px;">
  </div>
  {% endif %}
  <div style="flex: 1;">
    <h3 style="margin: 0 0 0.25rem 0;"><a href="{{ book.url }}" style="text-decoration: none;">{{ book.title }}</a></h3>
    <p style="margin: 0 0 0.3rem 0; font-size: 0.85rem; color: var(--global-text-color-light);">{{ book.author_book }}</p>
    <p style="margin: 0 0 0.3rem 0; font-size: 0.85rem;">
      {% for i in (1..5) %}{% if i <= book.rating %}★{% else %}☆{% endif %}{% endfor %}
      <span style="font-size: 0.75rem; color: var(--global-text-color-light); margin-left: 0.3rem;">{{ book.date | date: "%b %Y" }}</span>
    </p>
    <p style="margin: 0; font-size: 0.85rem;">{{ book.description }}</p>
    <a href="{{ book.url }}" style="font-size: 0.8rem; margin-top: 0.5rem; display: inline-block;">Read full review →</a>
  </div>
</div>
{% endfor %}
</div>

<script>
function sortBooks(mode) {
  var dateBtn = document.getElementById('sort-date');
  var ratingBtn = document.getElementById('sort-rating');
  var dateList = document.getElementById('books-by-date');
  var ratingList = document.getElementById('books-by-rating');

  if (mode === 'date') {
    dateList.style.display = 'block';
    ratingList.style.display = 'none';
    dateBtn.style.background = 'var(--global-theme-color)';
    dateBtn.style.color = 'white';
    ratingBtn.style.background = 'transparent';
    ratingBtn.style.color = 'var(--global-text-color)';
  } else {
    dateList.style.display = 'none';
    ratingList.style.display = 'block';
    ratingBtn.style.background = 'var(--global-theme-color)';
    ratingBtn.style.color = 'white';
    dateBtn.style.background = 'transparent';
    dateBtn.style.color = 'var(--global-text-color)';
  }
}
</script>
