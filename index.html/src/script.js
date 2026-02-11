// Loader
window.addEventListener("load", function(){
    document.getElementById("loader").style.display="none";
});

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", ()=>{
    const trigger = window.innerHeight / 1.2;

    sections.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < trigger){
            sec.style.opacity="1";
            sec.style.transform="translateY(0)";
        }
    });
});
