const loading = new Audio("./components/sounds/loading.wav"),
    explosion = new Audio("./components/sounds/explosion.mp3"),
    bgm = new Audio("./components/sounds/background.mp3");

loading.onloadeddata = () => {
    explosion.onloadeddata = () => {
        bgm.onloadeddata = () => {
            preloader.style.display = "none";
        };
    };
};
function sustain() {
    const loader = document.getElementById("loader"),
        button = document.getElementById("destructor"),
        year = document.getElementById("year"),
        preloader = document.getElementById("preloader"),
        body = document.body.style;

    button.onclick = () => {
        loading.play();
        loader.style.animation = "cover 2s ease-in-out forwards";
    };

    loader.onanimationend = () => {
        explosion.play();
        body.backgroundImage = "url(./components/images/explosion.gif)";
        year.innerText = "2021";
        button.innerText = "Enjoy!!";
        loader.remove();

        setTimeout(() => {
            bgm.play();
            body.backgroundImage = "";
            confetti.start();
            button.onclick = null;
        }, 900);
    };
}
