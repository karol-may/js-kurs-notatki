
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("dark-mode-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});
