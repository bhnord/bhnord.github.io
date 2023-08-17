const buttons = document.querySelectorAll('.navigate-btn');
const containers = document.querySelectorAll('.container');
const menuBodies = document.querySelectorAll('.menu-body');
const contactNavBtn = document.querySelector('#contact-btn');
const contactBtns = document.querySelectorAll('.card');
const contactText = document.querySelector('#contact-text');



let currMenuBody = document.querySelector('.show');

contactNavBtn.addEventListener('click', () =>{
    window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});

});

// nav bar functionality
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


        //reset projects
    });

});

const projects = document.querySelectorAll('.project');
let currProj = null;



//add text change when unfocused

//project div functionality
projects.forEach((project, index) => {
    //onclick, switch focus

    project.addEventListener('click', ()=>{
        window.scrollTo({top:0, behavior: 'smooth'});
        
        
        if(currProj ==null){
            //first focus --> everything hide, one expand
            currProj = project;
            projects.forEach((p, i)=>{
                if(p != project){
                    //hide all not clicked
                    p.classList.add('hide');
                }
            });
            project.classList.add('expand');
            project.querySelectorAll(".project-slideshow")[0].style.display="block";
        }
        else if(project == currProj){
            //reset all
            projects.forEach((p, i)=>{
                p.classList.remove('expand');
                p.classList.remove('hide');
            });
            currProj = null;
        } else {
            //new focus
            //everything should be hidden besides curr
            currProj.classList.remove('expand');
            currProj.classList.add('hide');
            project.classList.remove('hide');
            project.classList.add('expand');
            currProj = project;

        }
    });
});


let slideIndex = 0;
currentSlide(0);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    slideIndex %= slides.length;

    slides.forEach((slide, index) => {
        slide.style.display="none";
    });
    slides[slideIndex].style.display="block";

}