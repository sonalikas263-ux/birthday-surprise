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
    Happy Birthday to the man who stole my heart ❤️
On your special day, I just want to promise you that I’ll love you more with every passing year. We have seen so many ups and downs
together, but no matter what happened, you never left my side. You stayed with me in every situation, supported me, understood me, 
and loved me even when things were difficult. And honestly, I feel so lucky to have someone like you in my life.💖
Yes, we fight a lot, we argue, we get angry at each other… but what is love without a little madness and fights? At the end of the day
those little arguments only make our bond stronger because my love for you is always bigger than my anger. You know I fight a lot but I love you even more than that. ❤️
Thank you for always being there for me, for making me smile, for caring for me, and for becoming such an important part of my life. 
On your special day, I pray to God that all your dreams come true, you always stay healthy, successful, happy, and blessed. May you get all the happiness, love, and
success in this world because you truly deserve it. ✨No matter what happens, I just want you to know that you are very special to me and you will always have a special place in my heart. ❤️

Once again,
Happy Birthday Khhadush💖

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
