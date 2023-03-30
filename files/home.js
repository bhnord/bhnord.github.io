const buttons = document.querySelectorAll('.navigate-btn');
const containers = document.querySelectorAll('.container');
const menuBodies = document.querySelectorAll('.menu-body');
const contactNavBtn = document.querySelector('#contact-btn');
const contactBtns = document.querySelectorAll('.card');
const contactText = document.querySelector('#contact-text');
let currMenu = null;
let currMenuBody = null;

contactNavBtn.addEventListener('click', () =>{
    console.log('clicked');
    window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});

});

buttons.forEach((button, index) => {
    const menuBody = menuBodies[index];
    button.addEventListener('click', ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (currMenuBody != menuBody){
            if(currMenuBody != null){
                setTimeout(()=>{
                    currMenuBody.classList.remove('show');
                    setTimeout(()=>{
                        menuBody.classList.add('show');
                        currMenuBody = menuBody;
 
                    }, 350);
                    
                }, 350);
            } else {
                setTimeout(()=>{
                    menuBody.classList.add('show');
                    currMenuBody = menuBody;
                }, 350);
            }

            
        
        } else {
            currMenuBody.classList.remove('show');
            currMenuBody = null;
        }
    });

});