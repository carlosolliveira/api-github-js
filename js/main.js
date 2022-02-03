import {prev} from './preview.js';
const url = 'https://api.github.com/users/'
var search = document.querySelector("body > main > section.search")
var viewprofile =  document.querySelector("body > main > section.view-profile")
var btnsearch = document.getElementById('get')
var username = document.getElementById('user')
btnsearch.addEventListener('click', getuser);
// getuser()

function validuser(){
    let user = username.value
    if(user.length > 0){
        return true        
    }
    else{
        erro("null")
    }
}

function erro(p){
    let notfound = document.getElementById('notfound')
    if(p == 'not'){
        notfound.innerHTML = '<p>Usuário não encontrado</p>'
    }
    else if(p == 'null'){
        notfound.innerHTML = '<p>Campo vázio</p>'
    }
    notfound.style.display = 'block'
    setTimeout(() => notfound.style.display = 'none', 3000)
}

function getuser(){
    if(validuser()){
        async function get(){
            let response = await fetch(url + username.value)
            if(response.status == 200){
                return await response.json()
            }
            else{
                erro("not")
            }
        }
        get().then((data) => {
            prev(data)
            search.style.display = 'none'
            viewprofile.style.display = 'block'
        })
    }
}
