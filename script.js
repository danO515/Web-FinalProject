(function(){

    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Back-End Developer!!', 'Front-End Developer!!', 'Server Protecter!!', 'Game Developer!!'];
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }
        else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    writeTxt();

    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }
        else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }

})();


const headerEl = document.querySelector("header");

window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
});

function scrollCheck(){
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browserScrollY > 0){
        headerEl.classList.add("active");
    }
    else{
        headerEl.classList.remove("active");
    }
}

const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth'});
};

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
 
function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}
 
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}
 
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}
 
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // 3초마다 자동 슬라이드                
});
 
