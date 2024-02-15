const toggle = document.getElementById("icon")
const list = document.getElementById("nav__list")

toggle.addEventListener("click", () => {
  list.classList.toggle("list__show") // Use toggle instead of add
  icon.style.opacity = list.classList.contains("list__show") ? 1 : ""
})
