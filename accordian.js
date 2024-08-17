const accordianButtons=document.getElementsByClassName('accordian-button');
// To display the elements and the to change the src of the element
for(let accordianButton of accordianButtons){
    
    accordianButton.addEventListener('click',()=>{
       const accordianContent= accordianButton.nextElementSibling;
        
       if (accordianContent.style.display === "block") {
        // To chnage style to hidden
        accordianContent.style.display = "none";
        // To change the src of the image
        accordianButton.querySelector('.close-button').src='./icons/xmark.svg'
        // To Change the Style
        accordianButton.querySelector('.close-button').style.transform ='rotate(45deg)'
      } else {
        accordianContent.style.display = "block";
        accordianButton.querySelector('.close-button').style.transform ='rotate(90deg)'
      }

    })
}
