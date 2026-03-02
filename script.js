/* Typing Animation */
let text = "By Mahi 💕";
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
setInterval(()=>{
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = ["💗","💖","💕"][Math.floor(Math.random()*3)];
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = Math.random()*20 + 50 + "px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),8000);
},400);

/* Show image after 5 sec */
setTimeout(()=>{
    document.getElementById("myImage").classList.add("showImage");
},5000);

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