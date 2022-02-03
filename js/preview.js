const prevrepo = (repos) => {
    var div = document.createElement("div")
    div.setAttribute("id", "repositorio")
    var aside = document.createElement("aside")
    for(let r = 0; r <= repos.length - 1; r++){
        let rnome = repos[r].name
        let rnomef
        if(rnome.length > 28){
            rnomef = rnome.slice(0, 29) + "..."
            console.log(rnomef)
        }else{
            rnomef = rnome
        }
        let rurl = repos[r].html_url
        let star = repos[r].stargazers_count
        let drepo = `<div><a class="title" href="${rurl}" target="_blank">${rnomef}</a><aside class="star">&#x2B50; ${star}</aside></div>`
        document.querySelector("body > main > section.view-profile > section.repo > article.repos").innerHTML += drepo
    }
}

const prev = (data) => {
    console.log(data)
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
    const getrepo = async (url) => {
        var reponse = await fetch(url)
        if(reponse.status == 200){
            return await reponse.json()
        }
    }
    getrepo(data.repos_url).then((data) => {
        if(typeof data != 'undefined'){
            if(data.length != 0){
                prevrepo(data)
            }
            else{
                let repo0 = document.querySelector("#repo0")
                repo0.style.display = 'block'
            }
        }
        else{
            alert("Erro")
        }
    })
}

export {prev};