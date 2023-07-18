function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  html.classList.toggle('light')
  changeAvatar(html)
}

function changeAvatar(html){
  const avatar = document.querySelector('#profile img')
  if(html.classList.contains('light')){
    avatar.setAttribute("src", "./assets/avatar-light.png")
    avatar.setAttribute('alt', 'Foto do Icaro Souza com o fundo da imagem verde')
  } else {
    avatar.setAttribute('src', './assets/avatar.png')
    avatar.setAttribute(
      "alt",
      "Foto do Icaro Souza com fundo da imagem amarelo"
    )
  }
}