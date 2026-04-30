// Mobile navigation enhancements:
//  1. Inject a "← Back" button into the Capabilities mega panel
//     (visible only on mobile via CSS) that closes the sub-drawer
//     without closing the main hamburger drawer.
//  2. On mobile, tapping an industry name in the mega panel navigates
//     directly to that industry's page instead of just switching the
//     hidden right-side panel.
//  3. Closing the main drawer also collapses any open mega sub-drawer.
(function () {
  function init() {
    var mega = document.getElementById("capDropdown");
    var trigger = document.getElementById("capTrigger");
    if (!mega) return;

    function closeMega() {
      mega.classList.remove("open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      mega.setAttribute("aria-hidden", "true");
    }

    // 1. Back button (idempotent — won't double-inject)
    if (!mega.querySelector(".mega__back")) {
      var back = document.createElement("button");
      back.className = "mega__back";
      back.type = "button";
      back.setAttribute("aria-label", "Back to menu");
      back.innerHTML =
        '<span class="mega__back-arrow" aria-hidden="true">←</span> Back';
      back.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMega();
      });
      mega.insertBefore(back, mega.firstChild);
    }

    // 2. Single-tap industry navigation on mobile
    var industryURLs = {
      pi: "/industries/personal-injury.html",
      healthcare: "/industries/healthcare.html",
      finance: "/industries/financial-services.html",
      consulting: "/industries/consulting.html",
    };
    var industries = document.querySelectorAll(".mega__industry");
    industries.forEach(function (item) {
      item.addEventListener(
        "click",
        function (e) {
          if (window.innerWidth <= 760) {
            var target = item.dataset.industry;
            var url = industryURLs[target];
            if (url) {
              e.stopPropagation();
              e.preventDefault();
              window.location.href = url;
            }
          }
        },
        true,
      ); // capture phase so we beat the existing switchTo handler
    });

    // 3. When the hamburger drawer is closed, also close any open mega
    var toggleInput = document.getElementById("navToggle");
    if (toggleInput) {
      toggleInput.addEventListener("change", function () {
        if (!toggleInput.checked) closeMega();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
