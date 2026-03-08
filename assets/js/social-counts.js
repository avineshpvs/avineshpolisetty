/**
 * Social counts — likes and share click tracking via counterapi.dev
 * Namespace: avineshpvs
 * Like key:   like-{post-slug}
 * Share key:  share-{post-slug}
 */

const COUNTER_NS = "avineshpvs";
const BASE_URL = `https://api.counterapi.dev/v1/${COUNTER_NS}`;

function postSlug() {
  // Derive a stable key from the page path, e.g. /blog/2024/happiness → blog-2024-happiness
  return window.location.pathname.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";
}

async function getCount(key) {
  try {
    const res = await fetch(`${BASE_URL}/${key}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.count ?? data.value ?? null;
  } catch {
    return null;
  }
}

async function hitCount(key) {
  try {
    const res = await fetch(`${BASE_URL}/${key}/up`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.count ?? data.value ?? null;
  } catch {
    return null;
  }
}

function formatCount(n) {
  if (n === null || n === undefined) return "";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

// ── Like button ────────────────────────────────────────────────────────────────

async function initLikeButton() {
  const btn = document.querySelector(".share-like-btn");
  if (!btn) return;

  const slug = postSlug();
  const likeKey = `like-${slug}`;
  const storageKey = `liked-${slug}`;
  const countEl = btn.querySelector(".share-count");
  const icon = btn.querySelector("i");
  const liked = localStorage.getItem(storageKey) === "1";

  if (liked) {
    btn.classList.add("liked");
    icon.className = "fa-solid fa-heart";
  }

  const count = await getCount(likeKey);
  if (countEl && count !== null) countEl.textContent = formatCount(count);

  btn.addEventListener("click", async () => {
    if (localStorage.getItem(storageKey) === "1") return;
    localStorage.setItem(storageKey, "1");
    btn.classList.add("liked");
    icon.className = "fa-solid fa-heart";
    const newCount = await hitCount(likeKey);
    if (countEl && newCount !== null) countEl.textContent = formatCount(newCount);
  });
}

// ── Share button click tracking ────────────────────────────────────────────────

async function initShareCounts() {
  const slug = postSlug();
  const shareKey = `share-${slug}`;
  const countEl = document.querySelector(".share-total-count");

  if (countEl) {
    const count = await getCount(shareKey);
    if (count !== null) countEl.textContent = formatCount(count);
  }

  document.querySelectorAll(".share-platform-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const newCount = await hitCount(shareKey);
      if (countEl && newCount !== null) countEl.textContent = formatCount(newCount);
    });
  });
}

// ── Blog listing counts ────────────────────────────────────────────────────────

const REACTION_KEYS = ["thumbsup", "heart", "party", "wow", "rocket"];

async function initListingCounts() {
  const cards = document.querySelectorAll("[data-post-slug]");
  if (!cards.length) return;

  await Promise.all(
    Array.from(cards).map(async (card) => {
      const slug = card.dataset.postSlug;
      const reactionKeys = REACTION_KEYS.map((k) => `react-${slug}-${k}`);
      const [likes, shares, ...reactionCounts] = await Promise.all([
        getCount(`like-${slug}`),
        getCount(`share-${slug}`),
        ...reactionKeys.map((k) => getCount(k)),
      ]);
      const likeEl = card.querySelector(".listing-like-count");
      const shareEl = card.querySelector(".listing-share-count");
      const reactionEl = card.querySelector(".listing-reaction-count");
      if (likeEl && likes !== null) likeEl.textContent = formatCount(likes);
      if (shareEl && shares !== null) shareEl.textContent = formatCount(shares);
      if (reactionEl) {
        const total = reactionCounts.reduce((sum, c) => sum + (c ?? 0), 0);
        reactionEl.textContent = formatCount(total);
      }
    })
  );
}

// ── Emoji reactions ────────────────────────────────────────────────────────────

async function initReactions() {
  const btns = document.querySelectorAll(".reaction-btn");
  if (!btns.length) return;

  const slug = postSlug();

  await Promise.all(
    Array.from(btns).map(async (btn) => {
      const emoji = btn.dataset.emoji;
      const reactionKey = btn.dataset.reactionKey || encodeURIComponent(emoji);
      const key = `react-${slug}-${reactionKey}`;
      const storageKey = `reacted-${slug}-${reactionKey}`;
      const countEl = btn.querySelector(".reaction-count");

      // Restore reacted state
      if (localStorage.getItem(storageKey) === "1") btn.classList.add("reacted");

      // Load current count
      const count = await getCount(key);
      if (countEl) countEl.textContent = count !== null ? formatCount(count) : "0";

      btn.addEventListener("click", async () => {
        // Toggle: allow one reaction per emoji per browser
        const already = localStorage.getItem(storageKey) === "1";
        if (already) return;
        localStorage.setItem(storageKey, "1");
        btn.classList.add("reacted");
        const newCount = await hitCount(key);
        if (countEl && newCount !== null) countEl.textContent = formatCount(newCount);
      });
    })
  );
}

// ── Init ───────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initLikeButton();
  initShareCounts();
  initListingCounts();
  initReactions();
});
