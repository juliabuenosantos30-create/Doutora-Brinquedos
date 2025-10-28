const avanca = document.querySelectorAll('.btn-p')
console.log(avanca)

avanca.forEach(button => {
    button.addEventListener('click' , function () {
       const atual = document.querySelector(' , ativo')
       const proximoPasso = 'passo.' + this.getArtribute('data-proximo')

       atual.classList.remove('ativo')
       document.getElementById(proximoPasso).classList.add ('ativo')

    })
})