const item = document.querySelectorAll('.items')
const wallPaper = document.querySelector('.main-container')
const slides = document.querySelector('.slide')

item.forEach(items =>{
    items.addEventListener('click',() => {
        const mainContainerBackground = items.style.background
        wallPaper.style.background = mainContainerBackground

        slides.appendChild(items)
        
    })
})