/* Typing Animation */
let text = "By Mahi ";
let i = 0;
function typeEffect(){
    if(i < text.length){
        document.getElementById("typingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect,100);
    }
}
typeEffect();

/* Hearts */
// setInterval(()=>{
//     let heart = document.createElement("div");
//     heart.classList.add("heart");
//     heart.innerHTML = ["💗","💖","💕"][Math.floor(Math.random()*3)];
//     heart.style.left = Math.random()*100 + "vw";
//     heart.style.fontSize = Math.random()*20 + 50 + "px";
//     document.body.appendChild(heart);
//     setTimeout(()=>heart.remove(),8000);
// },400);

/* Show image after 5 sec */
setTimeout(()=>{
    document.getElementById("myImage").classList.add("showImage");
},5000);

const colors = ["#ff3b3b","#ffb703","#00c2ff","#06d6a0","#ff4ecd"];

function createSplash(){

    let splash = document.createElement("div");
    splash.style.position="absolute";
    splash.style.width="50px";
    splash.style.height="50px";
    splash.innerHTML="Happy Holi";
    splash.style.fontSize="20px"
    splash.style.borderRadius="50%";
    splash.style.background=colors[Math.floor(Math.random()*colors.length)];
    splash.style.left=Math.random()*100+"vw";
    splash.style.top="-20px";
    splash.style.opacity="1";
    splash.style.filter="blur(1px)";
    // splash.style.animation="splashUp 3s ease-in forwards";
    splash.style.animation="splashUp 3s linear forwards";

    document.body.appendChild(splash);

    setTimeout(()=> splash.remove(),3000);
}

let a =setInterval(createSplash,150);
a
const romanticColors = [
  "#de165f", // soft pink
  "#e6256f", // light rose
  "#cdb4db", // lavender
  "#e811f0"  // soft blue
];

setInterval(()=>{

    let color1 = romanticColors[Math.floor(Math.random()*romanticColors.length)];
    let color2 = romanticColors[Math.floor(Math.random()*romanticColors.length)];

    document.styleSheets[0].addRule('body::before','background:'+color1);
    document.styleSheets[0].addRule('body::after','background:'+color2);

},4000);