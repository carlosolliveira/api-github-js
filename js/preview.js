const prevrepo = (repos) => {
    for(r in repos){
        let nome = r.name
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
    let div = document.createElement('div')
    let aside = document.createElement('aside')
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