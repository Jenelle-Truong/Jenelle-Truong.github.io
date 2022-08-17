const email = document.querySelector('.bi-envelope-fill')

function increaseSize(linkButton) {
    linkButton.style.fontSize = '40px';
}

email.onmouseenter = function() {
    this.className = 'bi bi-envelope-paper-heart';
    this.style.fontSize = '40px'; 
}

email.onmouseleave = function() {
    this.className = 'bi bi-envelope-fill';
    this.style.fontSize = '30px';
}
