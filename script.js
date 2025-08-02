const quotes = [
  "There is no spoon.",
  "Wake up, Neo...",
  "You take the red pill – you stay in Wonderland...",
  "The Matrix is everywhere.",
  "I know kung fu.",
  "Unfortunately, no one can be told what the Matrix is...",
  "Welcome to the desert of the real.",
  "Free your mind.",
  "The body cannot live without the mind.",
  "Ignorance is bliss."
];

document.getElementById("summonBtn").addEventListener("click", () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").textContent = quote;
});
