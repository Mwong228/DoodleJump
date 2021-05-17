const container = document.querySelector('.container')
const doodler = document.createElement('div')
let doodlerLeftSpace = 50
let doodlerbottomSpace = 150
let gameOver = false
let platformCount = 5
let platform = [] 

class Platform{
    constructor(newPlatBottom){
        this.bottom = newPlatBottom
        this.left = Math.random()* 315
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left+ 'px'
        visual.style.bottom = this.bottom+ 'px'
        container.appendChild(visual)

    }
}

function createDoodler(){
    container.appendChild(doodler)
    doodler.classList.add('doodler')
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerbottomSpace + 'px'
}

function createPlatforms(){
    for(let i=0; i<platformCount; i++){
        let platGap = 600/platformCount
        let newPlatBottom = 100+i*platGap
        let newPlatform = new Platform(newPlatBottom)
        platform.push(newPlatform)
        console.log(platform)
    }
}

function start(){
    if(!gameOver){
        createPlatforms()
        createDoodler()
    }
}

start()