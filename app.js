const container = document.querySelector('.container')
const doodler = document.createElement('div')
let doodlerLeftSpace = 50
let doodlerbottomSpace = 250
let gameOver = false
let platformCount = 5
let platforms = []

class Platform {
    constructor(newPlatBottom) {
        this.bottom = newPlatBottom
        this.left = Math.random() * 315
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
        container.appendChild(visual)

    }
}

function createDoodler() {
    container.appendChild(doodler)
    doodler.classList.add('doodler')
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerbottomSpace + 'px'
}

function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
        let platGap = 600 / platformCount
        let newPlatBottom = 100 + i * platGap
        let newPlatform = new Platform(newPlatBottom)
        platforms.push(newPlatform)
        console.log(platforms)
    }
}

function movePlatforms() {
    if (doodlerbottomSpace > 200) {
        platforms.forEach(platform => {
            platform.bottom -= 4
            let visual = platform.visual
            visual.style.bottom = platform.bottom + 'px'
        })
    }
}

function start() {
    if (!gameOver) {
        createPlatforms()
        createDoodler()
        setInterval(movePlatforms, 30)
    }
}

start()