import css from './style.css';
import { getRandomColore, generateBlocks, getAnotherColor } from "./hw9.js"

document.getElementById('start__btn').addEventListener("click",
    function () {
        document.getElementById("container__wrapper").innerHTML="";
        getAnotherColor(generateBlocks());
    }); 
