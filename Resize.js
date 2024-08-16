const reduceDescriptionWords=(description)=>{
     return description.slice(0,60)+"...";
}

window.addEventListener('resize',()=>{
    if(window.innerWidth<=835)
    {
        const descriptionElements=document.getElementsByClassName('car-item-description');
        for(let descriptionElement of descriptionElements){
            descriptionElement.textContent=reduceDescriptionWords(descriptionElement.textContent)
        }
    }

})

// to rem0ve the options 
if(window.innerWidth<=835)
    {
        const descriptionElements=document.getElementsByClassName('car-item-description');
        for(let descriptionElement of descriptionElements){
            descriptionElement.textContent=reduceDescriptionWords(descriptionElement.textContent)
        }
    }
