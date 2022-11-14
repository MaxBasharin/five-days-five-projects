const board = document.querySelector('#board')
const colors = ["#d9f5f9", "#f0f0f0", "#d9f2fd", "#e7ecee", "#e3edfd", "#e4f3e5", "#e3edfd", "#d9efed", "#eceef8", "#fff0d9", "#f0ebf8", "#ffe6de", "#fae3e1"]
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}

