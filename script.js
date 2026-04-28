// ==========================================================
// Reminq LP — interactions
// ==========================================================

(() => {
  const STORAGE_KEY = "reminq.lang";

  // ---- Language switching --------------------------------
  function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ja" || saved === "en") return saved;
    const ua = navigator.userAgent;
    if (/bot|crawler|spider|crawling/i.test(ua)) return "ja";
    const browser = (navigator.language || "ja").toLowerCase();
    return browser.startsWith("ja") ? "ja" : "en";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-lang-ja]").forEach((el) => {
      const value = el.getAttribute(`data-lang-${lang}`);
      if (!value) return;
      const tag = el.tagName.toLowerCase();
      if (tag === "title") {
        document.title = value;
      } else if (el.hasAttribute("content")) {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function bindLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
      });
    });
  }

  // ---- Nav scroll state ----------------------------------
  function bindNav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---- Reveal on scroll ----------------------------------
  function bindReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  // ---- AI demo: cycle prompts ----------------------------
  const AI_DEMO = [
    {
      prompt: { ja: "資料を作る", en: "Make a deck" },
      steps: [
        { ja: "目次を 5 行で書き出す", en: "Sketch a 5-line outline", priority: "high" },
        { ja: "既存資料・公開データを 30 分でリサーチ", en: "Research existing docs in 30 min", priority: "med" },
        { ja: "本文ドラフトを章ごとに分けて執筆", en: "Draft body by chapter", priority: "med" },
        { ja: "画像・図版を仮置きしてレイアウト", en: "Lay out figures with placeholders", priority: "low" },
        { ja: "同僚にレビュー依頼を送る", en: "Send a review request to a teammate", priority: "low" }
      ]
    },
    {
      prompt: { ja: "iOS アプリをリリースする", en: "Ship the iOS app" },
      steps: [
        { ja: "TestFlight ビルドを上げる", en: "Upload a TestFlight build", priority: "high" },
        { ja: "プライバシー設定を最終確認", en: "Finalize privacy settings", priority: "high" },
        { ja: "App Store スクショを書き出す", en: "Export App Store screenshots", priority: "med" },
        { ja: "リリースノートを 200 字でまとめる", en: "Write release notes in 50 words", priority: "med" },
        { ja: "X / GitHub でアナウンスを準備", en: "Prep launch posts on X & GitHub", priority: "low" }
      ]
    },
    {
      prompt: { ja: "引っ越しの準備", en: "Prepare to move" },
      steps: [
        { ja: "電気・ガス・水道に連絡する", en: "Notify utilities", priority: "high" },
        { ja: "段ボール 10 箱をオーダー", en: "Order 10 packing boxes", priority: "high" },
        { ja: "粗大ゴミを区役所に申請", en: "Schedule large-item disposal", priority: "med" },
        { ja: "住所変更の手続きリストを作る", en: "List address-change tasks", priority: "med" },
        { ja: "退去立ち会い日を予約", en: "Book the move-out walkthrough", priority: "low" }
      ]
    }
  ];

  function getCurrentLang() {
    return document.documentElement.getAttribute("lang") === "en" ? "en" : "ja";
  }

  function renderDemoStep(idx) {
    const lang = getCurrentLang();
    const demo = AI_DEMO[idx % AI_DEMO.length];
    const promptEl = document.getElementById("aiTyped");
    const listEl = document.getElementById("aiResults");
    if (!promptEl || !listEl) return;

    promptEl.textContent = demo.prompt[lang];

    const labels = { high: "High", med: "Med", low: "Low" };

    listEl.innerHTML = demo.steps
      .map(
        (s) =>
          `<li><span class="checkbox"></span><span>${s[lang]}</span><span class="priority ${s.priority}">${labels[s.priority]}</span></li>`
      )
      .join("");
    void listEl.offsetWidth; // restart CSS keyframes
  }

  function bindAiDemo() {
    if (!document.getElementById("aiResults")) return;
    let idx = 0;
    renderDemoStep(idx);
    setInterval(() => {
      idx = (idx + 1) % AI_DEMO.length;
      renderDemoStep(idx);
    }, 6500);

    const observer = new MutationObserver(() => renderDemoStep(idx));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"]
    });
  }

  // ---- Footer year ---------------------------------------
  function setYear() {
    const el = document.getElementById("copyYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  // ---- Boot ----------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    applyLang(detectInitialLang());
    bindLangToggle();
    bindNav();
    bindReveal();
    bindAiDemo();
    setYear();
  });
})();
