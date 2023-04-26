function toggleMode() {
  const img = document.querySelector('#profile img'),
        html = document.documentElement;

  html.classList.toggle("light")

  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}