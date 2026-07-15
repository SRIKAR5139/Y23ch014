function showLove(){

    const music=document.getElementById("bgMusic");

    music.play();

    document
    .getElementById("welcomePage")
    .classList
    .add("fadeOut");

    setTimeout(function(){

        document
        .getElementById("lovePage")
        .classList
        .add("show");

        typeLetter();

    },1200);

}
// ===============================
// Floating Hearts
// ===============================

const heartContainer =
document.getElementById("hearts");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const icons = ["❤️","💖","💕","💗","💓","💞"];

    heart.innerHTML =
    icons[Math.floor(Math.random()*icons.length)];

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    (15+Math.random()*30)+"px";

    heart.style.animationDuration =
    (5+Math.random()*5)+"s";

    heartContainer.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// ===============================
// Falling Flowers
// ===============================

const flowerContainer =
document.getElementById("flowers");

function createFlower(){

    const flower =
    document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML="🌸";

    flower.style.left =
    Math.random()*100+"vw";

    flower.style.animationDuration =
    (5+Math.random()*5)+"s";

    flower.style.fontSize =
    (20+Math.random()*25)+"px";

    flowerContainer.appendChild(flower);

    setTimeout(function(){

        flower.remove();

    },10000);

}

setInterval(createFlower,300);

/*==========================
      BUTTERFLIES
==========================*/

const butterflyContainer =
document.getElementById("butterflies");

const butterflies = [

"🦋",

"🦋",

"🦋"

];

function createButterfly(){

    const butterfly =
    document.createElement("div");

    butterfly.className =
    "butterfly";

    butterfly.innerHTML =
    butterflies[
        Math.floor(
        Math.random()*butterflies.length
        )
    ];

    butterfly.style.top =
    Math.random()*80+"vh";

    butterfly.style.left="-100px";

    butterfly.style.fontSize=
    (25+Math.random()*20)+"px";

    butterfly.style.animationDuration=
    (12+Math.random()*8)+"s";

    butterflyContainer.appendChild(butterfly);

    setTimeout(function(){

        butterfly.remove();

    },20000);

}

setInterval(createButterfly,2500);


/*==================================
      FAIRY SPARKLES
===================================*/

function createSparkle(x,y){

    const sparkle =
    document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=x+"px";

    sparkle.style.top=y+"px";

    sparkle.style.width=
    (4+Math.random()*8)+"px";

    sparkle.style.height=
    sparkle.style.width;

    document.body.appendChild(sparkle);

    setTimeout(function(){

        sparkle.remove();

    },1200);

}

document.addEventListener("mousemove",function(e){

    if(Math.random()<0.5){

        createSparkle(

            e.clientX,

            e.clientY

        );

    }

});

document.addEventListener("touchmove",function(e){

    const touch=e.touches[0];

    createSparkle(

        touch.clientX,

        touch.clientY

    );

});

/*====================================
        TYPEWRITER LOVE LETTER
=====================================*/

const letter =

`My Dearest Muddulaaa Gummaaa ❤️,

Every sunrise reminds me of your smile.

Every flower reminds me of your beauty.

Every breeze reminds me of your touch.

When you smile...

My whole world smiles.

You are not just my love...

You are my peace...

My happiness...

My favorite person...

And my forever.

❤️ I Love You Endless ❤️`;

let index=0;

function typeLetter(){

    const target=
    document.getElementById("loveLetter");

    target.innerHTML="";

    index=0;

    const timer=setInterval(function(){

        target.innerHTML+=letter.charAt(index);

        index++;

        if(index>=letter.length){

            clearInterval(timer);

        }

    },45);

}
