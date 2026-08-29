function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
