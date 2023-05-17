const searchInput = document.getElementById("searchInput")

const resultados = document.getElementById("resultados")
let calc = 0;
// esos medias ya no dan para mas y mucho menos sirven ese footer mas dañado que mi vida. XD
const listOfPlaces = document.getElementsByClassName("result")

searchInput.addEventListener("keyup", e=>{
let items = 0;
const {value} = event.target;

if (value !== ""){
const searchQuery = value.toLowerCase()

for (const place of listOfPlaces){
    
    let name = place.textContent.toLowerCase()

if(name.includes(searchQuery)){
    resultados.style.display="block"
    place.style.display = "block"
    items++
    console.info(`🚀 ~ calc:`, calc)
}else{
    place.style.display = "none"

}
    console.info(`🚀 ~ items:`, items)
// console.log(name.length)
   calc = 80 + (items * 30)
    resultados.style.marginTop =`${calc}px`
}
}else{
    resultados.style.display="none"
place.style.display = "none"
}

}
)
    resultados.style.display="none"


    const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});