const input = document.getElementById("yearInput");
const result = document.getElementById("result");
const subtext = document.getElementById("subtext");

const brainrotQuotes = [
  "Just another DLC nobody asked for.",
  "When AI gets a OnlyFans.",
  "Year.exe not responding.",
  "NPCs still loading...",
  "Hope you like depression with a new font.",
  "Same bugs, new name.",
  "Another year closer to fridge consciousness.",
  "The simulation is glitching louder.",
  "Patch notes: more trauma.",
  "Don't worry, it's still in beta.",
  "Existence 2.0 — now 2% worse.",
];

document.getElementById("predictBtn").addEventListener("click", () => {
  const currentYear = parseInt(input.value);
  if (!isNaN(currentYear)) {
    result.innerHTML = "⌛ Calculating your destiny...";
    subtext.innerHTML = "";

    setTimeout(() => {
      const nextYear = currentYear + 1;
      const quote = brainrotQuotes[Math.floor(Math.random() * brainrotQuotes.length)];

      result.innerHTML = `✅ Next year is ${nextYear}.`;
      subtext.innerHTML = `🧠 ${quote}`;
    }, 1500);
  } else {
    result.innerHTML = "⚠️ Please enter a valid year.";
    subtext.innerHTML = "";
  }
});
