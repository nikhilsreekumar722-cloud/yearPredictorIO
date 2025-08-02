const quotes = [
  "Every time you blink, a new NFT is born.",
  "The future is just the past with WiFi.",
  "Your next year has already been sold as DLC.",
  "404: Better year not found.",
  "If 2023 was a car, 2024 is a scooter with square wheels.",
  "Next year may contain traces of sanity.",
  "You thought it couldn’t get worse? LMAO.",
  "Same circus, new clowns incoming...",
  "Planet Earth is still under maintenance.",
  "You will survive next year, probably."
];

function predictNextYear() {
  const year = document.getElementById("yearInput").value;
  const prediction = document.getElementById("prediction");
  const calculating = document.getElementById("calculating");
  const resultDiv = document.getElementById("result");

  if (!year || isNaN(year)) {
    alert("Enter a valid year.");
    return;
  }

  prediction.classList.add("hidden");
  calculating.classList.remove("hidden");
  resultDiv.classList.remove("hidden");

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;

  setTimeout(() => {
    calculating.classList.add("hidden");
    prediction.innerText = `→ The next year is: ${parseInt(year) + 1}`;
    prediction.classList.remove("hidden");
  }, 2000);
}
