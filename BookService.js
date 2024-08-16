const pickOptionElemnt=document.getElementsByClassName('pickUp-OptionContainer');

const bookingDescription=document.getElementsByClassName('booking-type-container')

// To Render View For Mobile Version
const onlyForMobileView=document.getElementsByClassName('onlyForMobileView');

const bookCarButton=document.getElementById('bookCar-button');
// 



bookCarButton.addEventListener('click',()=>{
    const clonedNode=pickOptionElemnt[0].cloneNode(true);

    clonedNode.querySelector('#pickUp').addEventListener('click',removePickUpLocation)

    clonedNode.querySelector('#diff-dropOff').addEventListener('click',addPickUpLocations)

    // clone the to display varoius booking option 
    const bookingDescriptionCloneNode=bookingDescription[0].cloneNode(true);

    // To Change the Value of the Drop Down Tag
    // Change the text of the select tag for mobile Screens
    const clonedSelectTag=clonedNode.querySelector('select');
    // To Change the text content value of the button via using class Name
    clonedSelectTag.options[0].textContent  = 'Vehicle Type';

    // to change the button innertext Value
    const clonedSearchButtonElement=bookingDescriptionCloneNode.querySelector('.search-button');

    clonedSearchButtonElement.textContent='Search'

    clonedNode.classList.add('visbleBookOptions')
    
    // to change the flex direction for mobile devices 
    bookingDescriptionCloneNode.classList.add('changeLayout')
    // to add the elements on to the html element 
    onlyForMobileView[0].innerHTML='';
    onlyForMobileView[0].appendChild(clonedNode)
    onlyForMobileView[0].appendChild(bookingDescriptionCloneNode);
})

const removePickUpLocation=()=>{
    const sameAsPickUpButton = document.querySelector('.onlyForMobileView >.booking-type-container > #same-as-pickUp');
  sameAsPickUpButton.style.display='none'
}

const addPickUpLocations=()=>{
      const removeDifferentPickUp=document.querySelector('.onlyForMobileView >.booking-type-container > #same-as-pickUp');
      removeDifferentPickUp.style.display='block'
}

// subscribe-newsLetter Validation
document.getElementById('subscribe-newLetter').addEventListener('submit',(e)=>{
  e.preventDefault();
  const errorNameDisplayElement=document.getElementById('invalidNameMessage');
  const errorEmailDisplayElement=document.getElementById('invalidEmailMessage')

  const formData=new FormData(e.target);

  const userEmail=formData.get('email')
  const userName=formData.get('name')

  if(!fieldFalsyCheck(userEmail) ){
    errorEmailDisplayElement.innerText='*Email Cannot Be Empty';
  }
  else if(!regexPatternCondition(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,userEmail)){
    errorEmailDisplayElement.innerText='*Enter a Valid Email';
  }
  else{
    errorEmailDisplayElement.innerText='';
     
  }

  if(!fieldFalsyCheck(userName) ){
    errorNameDisplayElement.innerText='*Name Cannot Be Empty';
  }
  else{
    errorNameDisplayElement.innerText='';
  }
  
  if( !errorNameDisplayElement.innerText && !errorEmailDisplayElement.innerText)
    {
     alert("SubScribbed to Our News Letter")
   }

})

//generateLink Js Part 
document.getElementById('inputLink').addEventListener('submit',(e)=>{
  e.preventDefault();
  const formData=new FormData(e.target);  //Used FormData to get the Values from the form Tag
  const phoneNumber=formData.get('phoneNumber')
  const errorDisplayElement=document.getElementById('errorMessageEmail')  //To dispay the error Message if Pesent

  const regexPattern =/^(\+91|\+91\-|0)?[789]\d{9}$/;

// Condition to check if the phoneNumber is Valid

  if(!fieldFalsyCheck(phoneNumber) ){
    errorDisplayElement.innerText='*Cannot Be Empty';
  }
  else if(!regexPatternCondition(regexPattern,phoneNumber)){
    errorDisplayElement.innerText='*Enter a Valid Phone Number';
  }
  else{
    errorDisplayElement.innerText='';
    alert("Sent")
  }
})


// Common Function to check if the entered Value is falsy or truthy Value
const fieldFalsyCheck=(fieldData)=>{
    if(!fieldData.trim().length>0){
      return false
    }
    return true
}

// to match a regex Pattern
const regexPatternCondition=(regexPattern,testElement)=>{
  return regexPattern.test(testElement)
}