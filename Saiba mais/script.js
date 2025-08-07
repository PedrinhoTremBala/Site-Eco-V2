document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("showMoreBtn");
  const info = document.getElementById("moreInfo");

  btn.addEventListener("click", () => {
    info.classList.toggle("hidden");
    btn.textContent = info.classList.contains("hidden") ? "🌱 Saiba mais" : "❌ Mostrar menos";
  });
});
