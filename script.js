// HEARTS GENERATOR (ALL PAGES)
function createHearts() {
  const heartsContainer = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heart.style.opacity = Math.random();
    heart.style.width = heart.style.height = (Math.random() * 15 + 10) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}
createHearts();


// LOGIN PAGE FUNCTION
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Change credentials here
  if (username.toLowerCase() === "friend" && password === "1234") {
    window.location.href = "countdown.html";
  } else {
    alert("Wrong Details 😅 Try again!");
  }
}


// COUNTDOWN PAGE FUNCTION
if (window.location.pathname.includes("countdown.html")) {
  let count = 10;
  const countdownBox = document.getElementById("countdown");
  const birthdayBox = document.getElementById("birthdayBox");
  const surpriseBtn = document.getElementById("surpriseBtn");

  const timer = setInterval(() => {
    count--;
    countdownBox.innerText = count;

    if (count === 0) {
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


// VIDEO PAGE FUNCTION
if (window.location.pathname.includes("video.html")) {
  const video = document.getElementById("bdayVideo");
  const btn = document.getElementById("seeMoreBtn");

  video.onended = () => {
    btn.classList.remove("hidden");
  };
}

function goToMessage() {
  window.location.href = "message.html";
}


// MESSAGE PAGE FUNCTION
if (window.location.pathname.includes("message.html")) {
  const messageBox = document.getElementById("messageBox");

  // EDIT YOUR MESSAGE HERE (line by line)
  const lines = [
    "Happy Birthday my best friend ❤️",
    "You are the most special person in my life 🥹",
    "Thank you for always being there 💖",
    "May your life be full of happiness ✨",
    "Love you always ❤️🎂"
  ];

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      let line = document.createElement("p");
      line.innerText = lines[lineIndex];
      messageBox.appendChild(line);
      lineIndex++;

      messageBox.scrollTop = messageBox.scrollHeight;

      setTimeout(typeLine, 1200);
    }
  }

  typeLine();
}