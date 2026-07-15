(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("motion-ok");

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );

  var items = document.querySelectorAll(".reveal");
  items.forEach(function (el, i) {
    // stagger only the hero, where several items enter at once on load
    if (el.closest(".hero")) el.style.transitionDelay = Math.min(i * 90, 360) + "ms";
    io.observe(el);
  });
})();
