function showLove(){

    // Start Music

    const music = document.getElementById("bgMusic");

    music.play();

    // Fade Welcome Page

    document.getElementById("welcomePage")

    .classList.add("fadeOut");

    // Open Love Page

    setTimeout(function(){

        document.getElementById("lovePage")

        .classList.add("show");

    },1200);

}