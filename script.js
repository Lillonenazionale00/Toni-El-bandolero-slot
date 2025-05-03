const symbols = [
  'toni.png',
  'cactus.png',
  'gold.png',
  'hat.png',
  'book.png',
  'matteo.png',
  'lillone.png',
  'A.png',
  'K.png'
];

let balance = 100;

function spin() {
  let bet = parseFloat(document.getElementById("bet").value);

  if (balance < bet) {
    alert("Saldo insufficiente!");
    return;
  }

  balance -= bet;
  document.getElementById("balance").innerText = balance.toFixed(2);

  const container = document.getElementById("reels");
  container.innerHTML = "";
  let bonusCount = 0;

  for (let i = 0; i < 25; i++) {
    const rand = Math.floor(Math.random() * symbols.length);
    const symbol = document.createElement("div");
    symbol.classList.add("symbol");
    symbol.style.backgroundImage = `url(${symbols[rand]})`;
    container.appendChild(symbol);
    if (symbols[rand] === 'book.png') bonusCount++;
  }

  const message = document.getElementById("message");
  if (bonusCount >= 2) {
    message.innerText = "BONUS ATTIVATO! MATTEO HOVEL!";
    balance += bet * 20;
    document.getElementById("bonusSound").play();
  } else {
    message.innerText = "Ritenta!";
  }

  document.getElementById("balance").innerText = balance.toFixed(2);
}
