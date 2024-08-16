const elemnts=document.getElementsByClassName('pickUp-OptionContainer');

const bookingDescription=document.getElementsByClassName('booking-type-container')

// To Render View For Mobile Version
const onlyForMobileView=document.getElementsByClassName('onlyForMobileView');

const bookCarButton=document.getElementById('bookCar-button');
// 

bookCarButton.addEventListener('click',()=>{
    const clonedNode=elemnts[0].cloneNode(true);
    const bookingDescriptionCloneNode=bookingDescription[0].cloneNode(true);

    // To Change the Value of the Drop Down Tag
    const clonedSelectTag=clonedNode.querySelector('select');
    clonedSelectTag.options[0].textContent  = 'Vehicle Type';
   // To Change the text content value of the button via using class Name
    const clonedSearchButtonElement=bookingDescriptionCloneNode.querySelector('.search-button');
    clonedSearchButtonElement.textContent='Search'
    clonedNode.classList.add('visbleBookOptions')
    bookingDescriptionCloneNode.classList.add('changeLayout')
    onlyForMobileView[0].innerHTML='';
    onlyForMobileView[0].appendChild(clonedNode)
    onlyForMobileView[0].appendChild(bookingDescriptionCloneNode);
    console.log(bookingDescriptionCloneNode)
})

const removePickUpLocation=()=>{
    const sameAsPickUpButton = document.querySelector('.onlyForMobileView >.booking-type-container > #same-as-pickUp');
  sameAsPickUpButton.style.display='none'
}

const addPickUpLocations=()=>{
      const removeDifferentPickUp=document.querySelector('.onlyForMobileView >.booking-type-container > #same-as-pickUp');
 
      removeDifferentPickUp.style.display='block'
}
// subscribe-newLetter Validation
document.getElementById('subscribe-newLetter').addEventListener('submit',(e)=>{
  e.preventDefault();
  const errorNameDisplayElement=document.getElementById('invalidNameMessage');
  const errorEmailDisplayElement=document.getElementById('invalidEmailMessage')

  const formData=new FormData(e.target);

  const userEmail=formData.get('email')
  const userName=formData.get('name')

  if(fieldFalsyCheck(userEmail) ){
    errorEmailDisplayElement.innerText='';
    console.log("Herr test Passed");
  }
  else{
    errorEmailDisplayElement.innerText='*Email Cannot Be Empty';
  }

  if(fieldFalsyCheck(userName) ){
    errorNameDisplayElement.innerText='';
  }
  else{
    errorNameDisplayElement.innerText='*Name Cannot Be Empty';
    return;
  }

  alert("Successfullty Subscribed to Our NewsLetter")

})

//generateLink

document.getElementById('inputLink').addEventListener('submit',(e)=>{
  e.preventDefault();
  const errorDisplayElement=document.getElementById('errorMessageEmail')
  const formData=new FormData(e.target);
  const phoneNumber=formData.get('phoneNumber')

  const pattern =/^(\+91|\+91\-|0)?[789]\d{9}$/;

  if(fieldFalsyCheck(phoneNumber) ){
    errorDisplayElement.innerText='';
    console.log("Herr test Passed");
  }
  else{
    errorDisplayElement.innerText='*Cannot Be Empty';
    return;
  }
  if(pattern.test(phoneNumber))
  {
      errorDisplayElement.innerText='';
  }
  else{
    errorDisplayElement.innerText='*Enter a Valid Email';
  }
})

// 0

const fieldFalsyCheck=(fieldData)=>{
    if(!fieldData.trim().length>0){
      return false
    }
    return true
}