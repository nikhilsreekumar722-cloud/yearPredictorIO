function predictYear() {
  const input = document.getElementById("yearInput").value;
  const output = document.getElementById("output");

  if (!input || isNaN(input)) {
    output.innerHTML = "You broke the simulation. Enter a real year.";
    return;
  }

  output.innerHTML = "Calculating next timeline shift...";
  
  setTimeout(() => {
    const nextYear = parseInt(input) + 1;

    const jokeResponses = [
      `Welcome to ${nextYear}. All memes are now government property.`,
      `${nextYear} is just ${input} in disguise. Run.`,
      `In ${nextYear}, AI rules. But you already knew that.`,
      `Oops. ${nextYear} got corrupted. Reboot reality.`,
      `${nextYear}? Still no flying cars. But hey, better jokes.`,
      `Reality patch 2.0 scheduled for ${nextYear}.`
    ];

    const randomJoke = jokeResponses[Math.floor(Math.random() * jokeResponses.length)];

    output.innerHTML = `<strong>${randomJoke}</strong>`;
  }, 2000); // 2 second delay for "Calculating"
}
