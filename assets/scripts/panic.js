if (localStorage.getItem("theme") != null) {
  document.body.setAttribute("theme", localStorage.getItem("theme"))
}
document.addEventListener("keydown", async (e) => {
  if (e.key == "=") window.parent.window.location.replace(localStorage.getItem("panicurl") || 'https://arlingtondiocese.schoology.com/home#/?_k=hecker78')
})``
