const searchInput = document.getElementById("searchInput")

const resultados = document.getElementById("resultados")
let calc = 0;
// si algo no funciona fue la Eli
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
