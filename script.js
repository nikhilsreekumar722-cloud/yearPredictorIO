function predict() {
  const year = parseInt(document.getElementById("yearInput").value);
  const output = document.getElementById("output");

  if (!year || year < 1900 || year > 9999) {
    output.textContent = "Invalid year, Agent. Try again.";
    return;
  }

  const predictions = [
    "Aliens reveal themselves. You marry one.",
    "Earth is now 90% ads.",
    "AI becomes president. Everyone is chill with it.",
    "Time travel is real. You're late to your own past.",
    "NPCs revolt. You survive using memes.",
    "You glitch into the Matrix and find pizza.",
    "The sun sneezes. Global Wi-Fi dies for 7 seconds.",
    "Everyone wakes up. But no one knows why.",
    "A baby becomes the richest person alive.",
    "You become a monk... but still post reels.",
  ];

  const nextYear = year + 1;
  const prediction = predictions[Math.floor(Math.random() * predictions.length)];
  output.textContent = `In ${nextYear}, ${prediction}`;
}
