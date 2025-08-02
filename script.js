function predictYear() {
  const yearInput = document.getElementById('yearInput').value;
  const resultDiv = document.getElementById('result');

  if (!yearInput || isNaN(yearInput)) {
    resultDiv.innerText = '⛔ Enter a valid year, NPC.';
    return;
  }

  resultDiv.innerText = '💻 Calculating... decrypting timeline...';
  
  setTimeout(() => {
    const nextYear = parseInt(yearInput) + 1;
    resultDiv.innerText = `✅ Next year is ${nextYear}.\n😶 Probably the DLC no one asked for.`;
  }, 2000);
}
