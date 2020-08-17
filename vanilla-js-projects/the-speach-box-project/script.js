const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");
const theBox = document.getElementById("text-box");

const data = [
  {
    image: "./img/drink.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./img/food.jpg",
    text: "I'm Hungry",
  },
  {
    image: "./img/tired.jpg",
    text: "I'm Tired",
  },
  {
    image: "./img/hurt.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./img/happy.jpg",
    text: "I'm Happy",
  },
  {
    image: "./img/angry.jpg",
    text: "I'm Angry",
  },
  {
    image: "./img/sad.jpg",
    text: "I'm Sad",
  },
  {
    image: "./img/scared.jpg",
    text: "I'm Scared",
  },
  {
    image: "./img/outside.jpg",
    text: "I Want To Go Outside",
  },
  {
    image: "./img/home.jpg",
    text: "I Want To Go Home",
  },
  {
    image: "./img/school.jpg",
    text: "I Want To Go To School",
  },
  {
    image: "./img/grandma.jpg",
    text: "I Want To Go To Grandmas",
  },
];

data.forEach(createBox);

// Create the speach box
function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;

  box.classList.add("box");
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

// INIT speach synthesis
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices change event
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Toggle text box event
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close text box event
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

// Change the botton text in dependance of the text-box state event
theBox.addEventListener("transitionend", changeBtn);

function changeBtn() {
  const theBox = document.getElementById("text-box");
  if (theBox.classList.contains("show")) {
    toggleBtn.innerText = "Close Text Box";
  } else {
    toggleBtn.innerText = "Toggle Text Box";
  }
}

// Change the voice
voicesSelect.addEventListener("change", setVoice);

// Reat text button
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

//INIT
getVoices();
