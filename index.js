const cursorSpan = document.querySelector(".cursor");
const textNameSpan = document.querySelector(".type-name");
const textFooterSpan = document.querySelector(".type-footer")

const typingDelay = 250;
const erasingDelay = 250;
const cycleDelay = 3000;
let charIndex = 0;

function type(textToType, typeText) {
    if (charIndex < textToType.length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        if (typeText === "name") {
            textNameSpan.textContent += textToType.charAt(charIndex);
        } else if (typeText === "type-footer") {
            textFooterSpan += textToType.charAt(charIndex);
        }
        charIndex += 1;
        setTimeout(type, typingDelay, textToType, typeText);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, cycleDelay, textToType, typeText);
    }
}

function erase(textToType, typeText) {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        if (typeText === "name") {
            textNameSpan.textContent = textToType.substring(0, charIndex - 1);
        } else if (typeText === " type-footer") {
            textFooterSpan.textContent = textToType.substring(0, charIndex - 1);
        }
        charIndex -= 1;
        setTimeout(erase, erasingDelay, textToType, typeText);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(type, cycleDelay, textToType, typeText);
    }
}

/*document.addEventListener("DOMContentLoaded", function() {
    type("jenelle truong", "name");
})*/

document.addEventListener("DOMContentLoaded", function() {
    type("hello!", "type-footer");
})