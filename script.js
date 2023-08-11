function toggleMode() {
  const img = document.querySelector('#profile img'),
        html = document.documentElement;

  html.classList.toggle("light")

  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatarDark.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatarLight.jpeg")
  }
}