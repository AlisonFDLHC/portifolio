const botoes = document.querySelectorAll(".selectionBtn")
const menus = document.querySelectorAll(".menuContent")


botoes.forEach((botao) => {
    botao.addEventListener('click', () => {mudaMenu(botao)})
})

function mudaMenu(botao) {
    menus.forEach((menu) => {menu.classList.remove('active')})
    var opcao
    switch(botao.id) {
        case 'btn1':
            opcao = 0
        break;
        case 'btn2':
            opcao = 1
        break;
        case 'btn3':
            opcao = 2
        break;
        case 'btn4':
            menus.forEach((menu) => {menu.classList.add('active')})
        break;
    }
    menus[opcao].classList.add('active')
}