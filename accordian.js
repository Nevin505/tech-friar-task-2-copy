const accordianButtons=document.getElementsByClassName('accordian-button');
console.log(accordianButtons)

for(let accordianButton of accordianButtons){
    accordianButton.addEventListener('click',()=>{
       const accordianContent= accordianButton.nextElementSibling;
       console.log(accordianButton);
       
       const afterElement = accordianButton.querySelector('::after');
       console.log(afterElement)
       if (accordianContent.style.display === "block") {
        accordianContent.style.display = "none";
        accordianButton.classList.toggle('active');
      } else {
        accordianContent.style.display = "block";
      }
    })
}
