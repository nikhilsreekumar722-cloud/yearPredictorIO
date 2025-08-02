function predict() {
  const year = parseInt(document.getElementById('yearInput').value);
  const output = document.getElementById('output');

  if (!year || isNaN(year)) {
    output.textContent = "bro u forgot the year 💀";
    return;
  }

  const nextYear = year + 1;

  const predictions = [
    `In ${nextYear}, AI becomes sentient and asks YOU to pay rent.`,
    `${nextYear}: Earth gets DLC. $9.99/month for oxygen.`,
    `Prediction for ${nextYear}: TikTok president declares "National Rizz Week".`,
    `In ${nextYear}, memes are used as currency. You’re broke.`,
    `Aliens finally visit in ${nextYear}, leave after seeing Twitter.`,
    `${nextYear}: Instagram filters now legally required in real life.`,
    `By ${nextYear}, humans forget how to walk. Hoverboards only.`,
    `In ${nextYear}, ChatGPT takes over your exams. Still fails.`,
    `Elon Musk renames Mars to "X" in ${nextYear}.`,
    `${nextYear}: India officially adds "💀" as an alphabet.`
  ];

  const prediction = predictions[Math.floor(Math.random() * predictions.length)];

  output.textContent = prediction;
}
