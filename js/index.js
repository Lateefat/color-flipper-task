const colors = ["cyan", "sandybrown", "crimson", "seagreen", "darkblue", "slateblue", "magenta", "springreen", "coral", "skyblue", "palevioletred", "cornflowerblue", "palegreen", "salmon", "powderblue"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNum = getRandomNum();

    document.body.style.backgroundColor = colors[randomNum];
    colorName.textContent = colors[randomNum];
});

function getRandomNum(){
    return Math.floor(Math.random() * colors.length)
}