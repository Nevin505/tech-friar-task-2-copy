const hamBurgerIcon=document.getElementById('hamburgerMenu');

const closeButtonIcon=document.getElementById('closeButtonIcon');

hamBurgerIcon.addEventListener('click',()=>{
    document.getElementsByClassName('side-bar')[0].classList.add('show-dropDownMenu')
})

closeButtonIcon.addEventListener('click',()=>{
    document.getElementsByClassName('side-bar')[0].classList.remove('show-dropDownMenu')
})
const pickUpOptionButtons=document.querySelectorAll('.pickUp-OptionContainer > button');

console.log(pickUpOptionButtons);
for(let pickUpOptionButton of pickUpOptionButtons){
    pickUpOptionButton.addEventListener('click',()=>{
        console.log("clicked");
        pickUpOptionButton.classList.add('clicked')
        
        
    })
}

const backgroundImages = [
    "./images/2018-Mitsubishi-ASX-1920x966 1.png","./images/2018-Mitsubishi-ASX-1920x966 1.png","./images/2018-Mitsubishi-ASX-1920x966 1.png"
];

const bannerContainer = document.getElementById('bannerContainer');  
let iteration = 0;

setInterval(() => {
    // Update background image
    bannerContainer.style.backgroundImage = `url('${backgroundImages[iteration]}')`;
    
    // Increment iteration or reset to 0 if end of array is reached
    iteration = (iteration + 1) % backgroundImages.length;
    updateHighlight(iteration)
}, 2000);

const circles= document.querySelectorAll('.carousel-navigator .circle-1');

    function updateHighlight(iteration) {
        circles.forEach(circle => circle.classList.remove('active'));
        
        circles[iteration].classList.add('active');
    }
    
