

document.getElementById("contaNova").addEventListener("click",function(){
    document.getElementById('cadastro').style.display='flex'
    document.getElementById('login').style.display='none'
})

document.getElementById("contaExistente").addEventListener("click",function(){
    document.getElementById('cadastro').style.display='none'
    document.getElementById('login').style.display='flex'
})

