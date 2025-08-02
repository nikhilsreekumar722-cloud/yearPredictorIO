const predictBtn = document.getElementById('predict');
const yearInput = document.getElementById('yearInput');
const outputDiv = document.getElementById('output');

const cursedProphecies = [
  "Global Warming becomes self-aware.",
  "AI declares humans cringe.",
  "Instagram influencers elected as Presidents.",
  "NPCs start a union.",
  "Reality DLC locked behind paywall.",
  "You finally touch grass... it's plastic.",
  "Elon Musk buys the Moon.",
  "TikTok becomes a religion.",
  "Your past self sues you for defamation.",
  "Society reboots. Still laggy.",
  "Matrix detected. You're not The One.",
  "Recession evolves into Depression².",
  "Your ex becomes Prime Minister.",
  "ChatGPT starts charging rent in your brain.",
  "Earth gets a Blue Screen of Death.",
  "New pandemic: Overthinking.",
  "Zuckerberg releases Meta 2: The Rebootening."
];

predictBtn.addEventListener('click', () => {
  const currentYear = parseInt(yearInput.value);
  if (isNaN(currentYear)) {
    outputDiv.innerHTML = `<span class="error">[ERROR] Invalid year. You're not from here, are you?</span>`;
    return;
  }

  const nextYear = currentYear + 1;
  const glitchText = `> Accessing timeline for year ${nextYear}...`;
  const curse = cursedProphecies[Math.floor(Math.random() * cursedProphecies.length)];

  outputDiv.innerHTML = `
    <span class="glitch">${glitchText}</span><br>
    <span class="prophecy">[${nextYear}] ${curse}</span>
  `;
});
