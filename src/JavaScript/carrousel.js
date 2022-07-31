const prevButton = document.getElementById('arrow-prev')
const nextButton = document.getElementById('arrow-next')
const slidesContainer = document.getElementById('slides-container')
const slide = document.getElementById('slide')
const clicou = document.getElementById('arrow-next')

nextButton.addEventListener("click", (event) =>{
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft += slideWidth;
}); 
prevButton.addEventListener("click", (event) =>{
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft -= slideWidth;
}); 