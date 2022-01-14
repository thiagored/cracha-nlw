const link = {
  github: 'thiagored',
  youtube: 'channel/UCOnol5zr01hMEC84HwXgXPQ',
  facebook: 'thiago.redigulo.9',
  instagram: 'thiagoredigulo',
  twitter: ''
}

function changeSocialMediaLinks() {
  userName.textContent = 'THIAGO REDIGULO'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${link[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${link.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      descricao.textContent = data.bio
      userLink.href = data.html_url
      imgPerfil.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
