const hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const hexColor = document.querySelector(".color");

btn.addEventListener("click", function (){
    let hexCode = "#";
    for (let i = 0; i < 6; i++){
        hexCode += hexNums[getRandomNum()];
    }
    hexColor.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
});

function getRandomNum(){
    return Math.floor(Math.random() * hexNums.length);
}