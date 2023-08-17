function detectChar(){

const input = document.getElementById("charInput");
const res = document.getElementById("result");

const character = input.value;

if(isASCII(character)){

res.innerText = "The entered character is an ASCII character";

}
else{
    res.innerText = "The entered character is a Unicode character";
}

}

function isASCII(char){

    return char.charCodeAt(0) <=127;
}

