const toggleMenuElement = document.getElementById('toggle-button')
const headerElement = document.querySelector('.header')
const overlayElement = document.querySelector('.overlay')
const fadeElements  = document.querySelectorAll('.has-fade')
const bodyElement = document.querySelector('body')
toggleMenuElement.addEventListener('click', ()=>{

    if(headerElement.classList.contains('open')){
        //close hamburguer menu
        bodyElement.classList.remove('noscroll')
       headerElement.classList.remove('open')
        fadeElements.forEach(el=>{
            el.classList.add('fade-out')
            el.classList.remove('fade-in')
        })
        
       
    }else{

        headerElement.classList.add('open') //open hamburguer menu
        bodyElement.classList.add('noscroll')
        fadeElements.forEach((el)=>{
            el.classList.add()
            el.classList.add('fade-in')
            el.classList.remove('fade-out')
           
        })
       
    }
    
      
})