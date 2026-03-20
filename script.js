function nextPage(pageNumber, event) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    document.getElementById("page" + pageNumber).classList.add('active');

    // Emoji burst
    for (let i = 0; i < 20; i++) {
        let sparkle = document.createElement("div");
        sparkle.innerHTML = "🤗";
        sparkle.style.position = "absolute";
        sparkle.style.left = event.clientX + "px";
        sparkle.style.top = event.clientY + "px";
        sparkle.style.fontSize = "20px";
        sparkle.style.animation = "explode 1s ease-out forwards";
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }

    // Start typing
    if (pageNumber === 2) {
        startTyping();
    }

    // 👉 SHOW POPUP AFTER HUG ANIMATION
    if (pageNumber === 3) {
        setTimeout(() => {
            document.getElementById("popup").style.display = "block";
        }, 3000); // wait for hug animation
    }
}

// TYPEWRITER
const text = `My Love 💕  

A hug from you feels like home... 🤗  
It heals everything, makes everything better,  
and reminds me how lucky I am to have you.  

On this Hug Day, I just want to hold you forever ❤️`;

let i = 0;

function startTyping() {
    const element = document.getElementById("typewriter");
    element.innerHTML = "";
    i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    type();
}

// sparkle animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes explode {
    to {
        transform: translateY(-100px) scale(1.5);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
// 💖 Falling hearts + hugs
function createEmojiRain() {
    const emojis = ["❤️", "🤗"];

    setInterval(() => {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (3 + Math.random() * 5) + "s";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 8000);

    }, 300);
}

createEmojiRain();
