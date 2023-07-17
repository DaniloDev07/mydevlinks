function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  //html.classList.toggle('light)  esta é uma forma mais simples de aplicar a função do botão light, feita da forma descrita acima.
}
