//!! JS-CC-005 : Vowels in a string
//??Create a function that'll return an integer of the number of vowels found in a string.


const button= document.querySelector("#button");
const text= document.querySelector("#text");
let counter=0;

button.addEventListener("click",() => {

    let inputText=text.value.split("");
    for (let i in inputText) {
        if (inputText[i]==="a" || inputText[i]==="e" || inputText[i]==="ı" || inputText[i]==="i" || inputText[i]==="o" || inputText[i]==="ö" || inputText[i]==="u" ||inputText[i]==="ü"){
                counter++;
            }
    }
    lastText=inputText.join("");
    document.querySelector(".vowels").innerHTML = 
    `There are ${counter} vowels in ${lastText}`
});