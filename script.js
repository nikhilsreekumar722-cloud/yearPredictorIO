function predictYear() {
  const name = document.getElementById("name").value.trim();
  const year = parseInt(document.getElementById("year").value.trim());
  const output = document.getElementById("prediction");

  if (!name || isNaN(year)) {
    output.innerHTML = "Bro... enter valid inputs. The Matrix can’t guess vibes.";
    return;
  }

  const randomEvents = [
    "you go viral for punching AI in the throat.",
    "you accidentally become a cult leader.",
    "you unlock your inner sigma and disappear to Bali.",
    "you get recruited by Elon’s secret Martian team.",
    "you drop out, get rich, and start a mushroom empire.",
    "you become an NPC in someone else's dream.",
    "you win a lottery, but only in dreams.",
    "you get hacked by your future self.",
    "you discover you're the main character... finally.",
    "you wake up. This was all a simulation."
  ];

  const futureEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];

  output.innerHTML = `${name}, in 202${(year + 18) % 10}... ${futureEvent}`;
}
