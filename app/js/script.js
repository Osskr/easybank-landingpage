const toggleMenuElement = document.getElementById('toggle-button')
const headerElement = document.querySelector('.header')
const overlayElement = document.querySelector('.overlay')

toggleMenuElement.addEventListener('click', ()=>{

    if(headerElement.classList.contains('open')){
        //close hamburguer menu
     
        headerElement.classList.remove('open')
        overlayElement.classList.add('fade-out')
        overlayElement.classList.remove('fade-in')
       
    }else{
        headerElement.classList.add('open') //open hamburguer menu
        overlayElement.classList.add('fade-in')
        overlayElement.classList.remove('fade-out')
    }
    
      
})