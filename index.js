const textNameSpan = document.querySelector(".type-name")
const cursorSpan = document.querySelector(".cursor");

const typingDelay = 200;
const erasingDelay = 100;
const cycleDelay = 2000;
let charIndex = 0;

function type(textToType) {
    if (charIndex < textToType.length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        textNameSpan.textContent += textToType.charAt(charIndex);
        charIndex += 1;
        setTimeout(type, typingDelay, textToType);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, cycleDelay, textToType);
    }
}

function erase(textToType) {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        textNameSpan.textContent = textToType.substring(0, charIndex - 1);
        charIndex -= 1;
        setTimeout(erase, erasingDelay, textToType);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(type, typingDelay + 1100, textToType);
    }
}

function typeIntro() {
    
}