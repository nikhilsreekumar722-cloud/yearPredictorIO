const predictBtn = document.getElementById('predictBtn');
const output = document.getElementById('output');
const inputYear = document.getElementById('yearInput');
const quote = document.getElementById('quote');

const quotes = [
  "Reality is a paid DLC.",
  "In 2026, AI will have better hair than you.",
  "You blinked. The simulation upgraded.",
  "404: Sanity not found.",
  "Elon just bought your soul.",
  "NPC detected. Reloading consciousness...",
  "Next year is just this year wearing a new skin.",
  "Time is fake, your job is a side quest.",
  "In 2026, printers will still jam.",
  "Government.exe has stopped responding.",
  "Next year = new bugs, same players.",
  "2026 patch notes: More ads, less hope."
];

predictBtn.addEventListener('click', () => {
  const year = parseInt(inputYear.value);
  if (!isNaN(year)) {
    output.textContent = 'Calculating...';
    quote.textContent = '';
    setTimeout(() => {
      const nextYear = year + 1;
      output.textContent = `Next year is ${nextYear}`;
      quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }, 1500);
  } else {
    output.textContent = 'Enter a valid year.';
    quote.textContent = '';
  }
});
