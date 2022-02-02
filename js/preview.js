const prev = (data) => {
    let nome = data.name
    let username = data.login
    let avatar = data.avatar_url
    let followersu = data.followers
    let followingu = data.following
    let repopublic = data.public_repos
    console.log(avatar)
    document.querySelector("body > main > section.view-profile > section.infor-user > article.cont-photo > img").src = avatar
    document.querySelector("#name").innerText = nome
    document.querySelector("#username").innerText = username
    document.querySelector("#folowing > span").innerText = followersu
    document.querySelector("#followers > span").innerText = followingu
    document.querySelector("#qountrepo").innerText = repopublic + " Repositorios"
    let div = document.createElement('div')
    let aside = document.createElement('aside')
}

export {prev};