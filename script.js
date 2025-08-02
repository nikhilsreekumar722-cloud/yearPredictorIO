function predictYear() {
  const yearInput = document.getElementById('yearInput').value;
  const resultDiv = document.getElementById('result');

  if (!yearInput || isNaN(yearInput)) {
    resultDiv.innerText = '⛔ Enter a valid year, NPC.';
    return;
  }

  resultDiv.innerText = '💻 Calculating... decrypting timeline...';

  const brainrotQuotes = [
    "😶 Next year gonna drop like a SoundCloud mixtape nobody asked for.",
    "🧠 202X.exe loading... might contain bugs and breakup arcs.",
    "👁️ Expect more lore dumps and less serotonin.",
    "⚠️ Reality update incoming — probably still no patch for your trauma.",
    "📉 Mental health: not found. Retry next year?",
    "💀 Another year in the simulation, hope you brought snacks.",
    "🕳️ Welcome to the void update. Enjoy the existential DLC.",
    "🎭 The clown era continues. Honk honk.",
    "📦 Lootbox unlocked: disappointment and delayed dreams.",
    "🔁 New year, same loop. Cope harder.",
    "👾 Timeline corrupted. Autoplaying generational trauma."
  ];

  setTimeout(() => {
    const nextYear = parseInt(yearInput) + 1;
    const randomQuote = brainrotQuotes[Math.floor(Math.random() * brainrotQuotes.length)];
    resultDiv.innerText = `✅ Next year is ${nextYear}.\n${randomQuote}`;
  }, 2000);
}
