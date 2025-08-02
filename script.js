function predictYear() {
  const year = parseInt(document.getElementById('yearInput').value);
  const output = document.getElementById('predictionOutput');

  if (isNaN(year)) {
    output.innerText = "Enter a valid year, agent.";
    return;
  }

  const funnyResponses = [
    "Skynet becomes self-aware.",
    "Aliens invade Mumbai.",
    "Everyone becomes an NPC.",
    "You finally touch grass.",
    "The simulation gets a reboot.",
    "Matrix 5 releases and it's real.",
    "Elon uploads his consciousness.",
    "Your crush texts back. Plot twist: wrong number.",
    "GPT-6 becomes Prime Minister.",
    "Cats rule the world."
  ];

  const prediction = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
  output.innerText = `${year + 1} Prediction: ${prediction}`;
}
