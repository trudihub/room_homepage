const slideItems = document.querySelectorAll(".slideItem")
const menuOverlay = document.querySelector(".menuOverlay")
const openMenuIcon = document.getElementById("openMenu")
const closeMenuIcon = document.getElementById("closeMenu")

let slideCounter = 0;

openMenuIcon.addEventListener("click", () => {
    menuOverlay.style.display = "block";
})
closeMenuIcon.addEventListener("click", () => {
    menuOverlay.style.display = "none";
})

const showSlide = () =>{
    for(let i =0; i<slideItems.length; i++){
        i == slideCounter ? 
        slideItems[i].style.display = "flex":
        slideItems[i].style.display = "none";
    }
    
}

const handleSlide = (n) =>{
    slideCounter +=n 
    if(slideCounter > slideItems.length-1){
        slideCounter = 0
    } else if(slideCounter < 0){
        slideCounter = 2
    }
    showSlide()
}






