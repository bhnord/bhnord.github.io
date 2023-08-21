const buttons = document.querySelectorAll('.navigate-btn');
const containers = document.querySelectorAll('.container');
const menuBodies = document.querySelectorAll('.menu-body');
const contactNavBtn = document.querySelector('#contact-btn');
const contactBtns = document.querySelectorAll('.card');
const contactText = document.querySelector('#contact-text');

let currMenuBody = document.querySelector('.show');

contactNavBtn.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

});

// nav bar functionality
buttons.forEach((button, index) => {
    const menuBody = menuBodies[index];
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (currMenuBody != menuBody) {
            if (currMenuBody != null) {
                setTimeout(() => {
                    currMenuBody.classList.remove('show');
                    setTimeout(() => {
                        menuBody.classList.add('show');
                        currMenuBody = menuBody;

                    }, 350);

                }, 350);
            } else {
                setTimeout(() => {
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

    project.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });


        if (currProj == null) {
            //first focus --> everything hide, one expand
            currProj = project;
            projects.forEach((p, i) => {
                if (p != project) {
                    //hide all not clicked
                    p.classList.add('hide');
                }
            });
            project.classList.add('expand');
            let slideshow = project.querySelector(".project-slideshow");
            showSlides(0, slideshow);
            slideshow.style.display = "flex";
        }
        else if (project == currProj) {
            //reset all
            projects.forEach((p, i) => {
                p.querySelector(".project-slideshow").style.display = "none";
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
            projects.forEach((p, i) => {
                p.querySelector(".project-slideshow").style.display = "none";

            });
            let slideshow = project.querySelector(".project-slideshow");
            showSlides(0, slideshow);
            slideshow.style.display = "flex";
        }
    });
});


const slideMap = new Map();

document.querySelectorAll("a.next").forEach(button => {
    const parent = button.parentElement;
    slideMap.set(parent, 0);
    button.addEventListener("click", event => {
        event.stopPropagation();
        showSlides(slideMap.get(parent) + 1, parent);
    })

})

document.querySelectorAll("a.prev").forEach(button => {
    const parent = button.parentElement;
    button.addEventListener("click", event => {
        event.stopPropagation();
        showSlides(slideMap.get(parent) - 1, parent);
    })

})

function showSlides(n, slideshow) {
    let slides = slideshow.querySelectorAll(".slide");
    let slideIndex = (slides.length + n) % slides.length;

    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    slides[slideIndex].style.display = "flex";

    slideMap.set(slideshow, slideIndex);
}