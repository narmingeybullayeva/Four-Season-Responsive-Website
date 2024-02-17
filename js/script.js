const toggle = document.getElementById("icon")
const list = document.getElementById("nav__list")
const nav = document.getElementById("nav")

toggle.addEventListener("click", () => {
  list.classList.toggle("list__show") // Use toggle instead of add
  icon.style.opacity = list.classList.contains("list__show") ? 1 : ""
  nav.style.backgroundColor = list.classList.contains("list__show")
    ? "#FEE7BE"
    : ""
})
