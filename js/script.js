const prints = document.querySelectorAll(".prints-hero img");

prints.forEach((print, i) => {

let direction = 1;

setInterval(() => {

let current = parseFloat(print.style.transform.replace(/[^0-9.-]/g,'')) || 0;

print.style.transform = `translateY(${direction * 8}px) rotate(${i*3-5}deg)`;

direction *= -1;

}, 2000);

});

const elementos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

elementos.forEach(el => {

const pos = el.getBoundingClientRect().top;

if(pos < window.innerHeight - 100){

el.classList.add("aparecer");

}

});

});