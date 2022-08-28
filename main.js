
let images = [
    {
        'name': 'rock',
        'img': 'rock.jpg'
    },
    {
        'name': 'paper',
        'img': 'paper.jpg'
    },
    {
        'name': 'scissors',
        'img': 'sicissors.jpg'
    }
]
let mainbox = document.querySelector('.main-box')
let rollbtn = document.querySelector('.roll-btn')
let boxone = document.createElement('img')
boxone.setAttribute('src','blank.png')
mainbox.appendChild(boxone)
boxone.classList.add('box')
let boxtwo = document.createElement('img')
boxtwo.setAttribute('src','blank.png')
mainbox.appendChild(boxtwo)
boxtwo.classList.add('box')

rollbtn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*3)
    let randomtwo = Math.floor(Math.random()*3)
    boxtwo.setAttribute('src',images[random].img)
    boxone.setAttribute('src',images[randomtwo].img)
    let result = document.querySelector('.result')

    if(random === randomtwo){
        result.textContent = 'draw'
    }else if(random === 1 && randomtwo === 2){
        result.textContent = "paper wins"
    }else if(random === 2 && randomtwo === 1){
        result.textContent = "paper wins"
    }else if(random === 2 && randomtwo === 3){
        result.textContent = 'scissors wins'
    }else if(random === 3 && randomtwo === 2){
        result.textContent = 'scissors wins'
    }else if(random === 1 && randomtwo === 3){
        result.textContent = 'rock wins'
    }else if(random === 3 && randomtwo === 1){
        result.textContent = 'rock wins'
    }
})
