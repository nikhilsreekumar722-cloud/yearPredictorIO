function predictNext() {
  const year = document.getElementById("yearInput").value;
  const result = document.getElementById("result");

  if (!year || isNaN(year)) {
    result.innerText = "⛔ Enter a valid number, agent.";
    return;
  }

  const nextYear = parseInt(year) + 1;
  const responses = [
    `🧠 The next year is ${nextYear}. Time is fake, but ok.`,
    `📟 ${nextYear}? It's already outdated in the simulation.`,
    `🕳️ ${nextYear} is when reality glitches again.`,
    `💾 Calculated. Next year is ${nextYear}. Proceed with caution.`,
    `🔋 ${nextYear} is when you finally touch grass.`
  ];

  result.innerText = responses[Math.floor(Math.random() * responses.length)];
}
