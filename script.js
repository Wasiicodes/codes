// DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }
});


// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


// SMOOTH SCROLL LINKS

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(".card");

function revealCards(){

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(cardTop < windowHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

}

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


// HERO FADE-IN

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";
    hero.style.transition = "1s";

    setTimeout(() => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);

});