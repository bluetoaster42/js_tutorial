let Phrase = require("mhartl-palindrome");

function plaindromeTester(event) {
    event.preventDefault();
    let phrase = new Phrase(event.target.phrase.value);

    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"<b>${phrase.content}</b>" is a palindrome!`;
    } else {
        palindromeResult.innerHTML = `"<b>${phrase.content}</b>" is NOT a palindrome...`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event){
        plaindromeTester(event);
    });
});