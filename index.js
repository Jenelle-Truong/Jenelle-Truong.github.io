const cursorSpan = document.querySelector(".cursor");
console.log("cursorSpan is",cursorSpan)
const textNameSpan = document.querySelector(".type-name");
const textFooterSpan = document.querySelector(".type-footer");

const typingDelay = 250;
const erasingDelay = 250;
const cycleDelay = 3000;

function type(textToType, typeOfSpan) {
    let charIndex = 0;
    return new Promise(resolve => {
        const typeChar = () => {
            if (charIndex < textToType.length) {
                if (!cursorSpan.classList.contains("typing")) {
                    cursorSpan.classList.add("typing");
                }

                if (typeOfSpan === "name") {
                    textNameSpan.textContent += textToType.charAt(charIndex);
                } else if (typeOfSpan === "footer") {
                    textFooterSpan.textContent += textToType.charAt(charIndex);
                }

                charIndex += 1;
                setTimeout(typeChar, typingDelay, textToType, typeOfSpan);
            } else {
                cursorSpan.classList.remove("typing");
                resolve();
            }                
        }
        typeChar();
    })
}

async function typeElements() {
    await type("jenelle truong", "name");
    await type("let's stay connected :)", "footer");
}

typeElements();