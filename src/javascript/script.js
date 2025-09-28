document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()

        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })  
        } 
    })
})

import { slides } from './images.js'

let currentIndex = 0
const slideImg = document.querySelector('.slide-image')

function showNextSlide() {
    slideImg.style.filter = "brightness(50%)"

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % slides.length
        slideImg.src = slides[currentIndex]

        slideImg.style.filter = "brightness(100%)"
    }, 300);

}

setInterval(showNextSlide, 3000)