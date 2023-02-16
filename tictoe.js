const game = document.querySelector('.game')
for(let i = 0; i < 9; i++){
    const div = document.createElement('div')
    div.className = 'pole free'
    game.append(div)
}
let hid = 1
alert('Нацисти ходять перші')

function create (text){
    const div = document.createElement('div')
    const p = document.createElement('p')
    div.className = 'winner'
    p.className = 'text'
    p.innerText = text
    div.append(p)
    const body = document.querySelector('body')
    body.prepend(div)

    setTimeout(()=>{
        window.location.reload()
    }, 3000)
}
const polia = document.querySelectorAll('.pole')
function checkWinner(){
    // горизонталь
    if(polia[0].innerHTML == '0' && polia[1].innerHTML == '0' && polia[2].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda' }
    if(polia[3].innerHTML == '0' && polia[4].innerHTML == '0' && polia[5].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}
    if(polia[6].innerHTML == '0' && polia[7].innerHTML == '0' && polia[8].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}
    // вертикаль
    if(polia[0].innerHTML == '0' && polia[3].innerHTML == '0' && polia[6].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}
    if(polia[1].innerHTML == '0' && polia[4].innerHTML == '0' && polia[7].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}
    if(polia[2].innerHTML == '0' && polia[5].innerHTML == '0' && polia[8].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}
    // діагональ
    if(polia[0].innerHTML == '0' && polia[4].innerHTML == '0' && polia[8].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}
    if(polia[2].innerHTML == '0' && polia[4].innerHTML == '0' && polia[6].innerHTML == '0'){create('Єврейчик підсмажився'); return 'pezda'}


    // гітлер капут

    // горизонталь
    if(polia[0].innerHTML == 'x' && polia[1].innerHTML == 'x' && polia[2].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    if(polia[3].innerHTML == 'x' && polia[4].innerHTML == 'x' && polia[5].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    if(polia[6].innerHTML == 'x' && polia[7].innerHTML == 'x' && polia[8].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    // вертикаль
    if(polia[0].innerHTML == 'x' && polia[3].innerHTML == 'x' && polia[6].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    if(polia[1].innerHTML == 'x' && polia[4].innerHTML == 'x' && polia[7].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    if(polia[2].innerHTML == 'x' && polia[5].innerHTML == 'x' && polia[8].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    // діагональ
    if(polia[0].innerHTML == 'x' && polia[4].innerHTML == 'x' && polia[8].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}
    if(polia[2].innerHTML == 'x' && polia[4].innerHTML == 'x' && polia[6].innerHTML == 'x'){create('Гітлер Капут'); return 'pezda'}

    if(hid == 10){
        window.location.reload()
    }

}

let op = ''
game.addEventListener('click', (event)=>{
    const target = event.target
    const pole = target.closest('.pole')
    if(pole && !op){
        const go = hid % 2 == 0

        if( go && (!target.classList.contains('nol') && !target.classList.contains('tic'))){
             target.classList.add('nol')
             target.classList.remove('free')
             target.innerText = 'x'
            hid++
        }if( !go && (!target.classList.contains('nol') && !target.classList.contains('tic'))){
            target.innerText = '0'
            target.classList.add('tic')
            target.classList.remove('free')
            hid++ 
        }
        
      op = checkWinner()
    }
})

