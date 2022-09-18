let Phrase = require("mhartl-palindrome");

function plaindromeTester() {
    let string = prompt("Please enter a string for palindrome testing");
    let phrase = new Phrase(string);

    if (phrase.palindrome()) {
        alert(`"${phrase.content}" is a palindrome!`);
    } else {
        alert(`"${phrase.content}" is NOT a palindrome...`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("#palindromeTester");
    button.addEventListener("click", plaindromeTester);
});