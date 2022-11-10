const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        document.body.style.backgroundColor = colors[getRandomNumber()]
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

const colors = ["#d9f5f9", "#f0f0f0", "#d9f2fd", "#e7ecee", "#e3edfd", "#e4f3e5", "#e3edfd", "#d9efed", "#eceef8", "#fff0d9", "#f0ebf8", "#ffe6de", "#fae3e1"]

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

