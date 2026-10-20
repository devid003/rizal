// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Automatically update the copyright year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Group members popup
const openGroup = document.getElementById("openGroup");
const groupModal = document.getElementById("groupModal");
const closeGroup = document.getElementById("closeGroup");
let previousFocus = null;
if (openGroup && groupModal && closeGroup) {
  function showGroup() {
    previousFocus = document.activeElement;
    groupModal.classList.add("show");
    groupModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeGroup.focus();
  }
  function hideGroup() {
    groupModal.classList.remove("show");
    groupModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }
  openGroup.addEventListener("click", showGroup);
  closeGroup.addEventListener("click", hideGroup);
  groupModal.addEventListener("click", (event) => {
    if (event.target === groupModal) hideGroup();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && groupModal.classList.contains("show")) hideGroup();
  });
}
