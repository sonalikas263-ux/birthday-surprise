function createHearts() {
  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => { 
    const heart = document.createElement("span");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}

createHearts();

function login() {

  const username = document.getElementById("username").value.trim();

  if (username.toLowerCase() === "gagan") {

    window.location.href = "countdown.html";

  } else {

    alert("Enter Correct Name ❤️");
  }
}

if (window.location.pathname.includes("countdown.html")) {

  let count = 10;

  const countdownBox = document.getElementById("countdown");
  const birthdayBox = document.getElementById("birthdayBox");
  const surpriseBtn = document.getElementById("surpriseBtn");

  const timer = setInterval(() => {

    count--;

    countdownBox.innerText = count;

    if (count === 0) {
      confetti({
      particleCount: 250,
      spread: 120
    });

      clearInterval(timer);

      countdownBox.classList.add("hidden");
      birthdayBox.classList.remove("hidden");
      surpriseBtn.classList.remove("hidden");
    }

  }, 1000);
}

function goToVideo() {
  window.location.href = "video.html";
}

function goToMessage() {
  window.location.href = "message.html";
}

if (window.location.pathname.includes("message.html")) {

  const messageBox = document.getElementById("messageBox");

  const lines = [
  "Happy Birthday to the man who stole my heart ❤️",

  "On your special day,😍I just want to promise you that I’ll love you more with every passing year.",

  "We have seen so many ups and downs together, but no matter what happened, you never left my side😘.",

  "You stayed with me in every situation,😍supported me, understood me, and loved me even when things were difficult😍.",

  "And honestly, I feel so lucky to have someone🧿like you in my life 💖",

  "Yes, we fight a lot, we argue, we get angry at each other…",

  "But what is love🧿without a little madness and fights?😉",

  "At the end of the day those little arguments only make our bond stronger because my love for you is always bigger than my anger.",

  "You know I fight a lot but I love you🧿even more than that ❤️",

  "Thank you for always being there for me, for making me smile, for caring for me, and for becoming such an important🥰part of my life.",

  "On your special day, I pray to God that all your dreams come true.🥰",

  "May you always stay healthy,😍successful, happy, and blessed ✨",

  "May you get all the happiness, love, and success in this world because you truly deserve it 💖",

  "No matter what happens, you will always have a special place in my heart ❤️",

  "Once again, Happy Birthday Khhadush 💖 & Lots of love from ur Girl😘"
];

  let lineIndex = 0;

  function typeLine() {

    if (lineIndex < lines.length) {

      let line = document.createElement("p");

      line.innerText = lines[lineIndex];

      messageBox.appendChild(line);

      lineIndex++;

      setTimeout(typeLine, 1200);
    }
  }

  typeLine();
}
function goToMemories() {

  window.location.href = "memories.html";

}
