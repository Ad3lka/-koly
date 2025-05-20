// --- CVIČENÍ 1: Hello, JavaScript! ---
console.log("Tvoje jméno");
console.log("Tvoje oblíbené jídlo");

// --- CVIČENÍ 2: Proměnné a matematika ---
let num1 = 12;  
const num2 = 4;
console.log("Sčítání:", num1 + num2);
console.log("Odčítání:", num1 - num2);
console.log("Násobení:", num1 * num2);
console.log("Dělení:", num1 / num2);

// --- CVIČENÍ 3 & 4: prompt() + alert() + podmínky ---
const name = prompt("Jak se jmenuješ?");
const food = prompt("Jaké je tvé oblíbené jídlo?");
alert(`Ahoj ${name}! Tvoje oblíbené jídlo je ${food}.`);
const ageStr = prompt("Kolik ti je let?");
const age = Number(ageStr);
if (age < 13) {
  alert("Jsi dítě!");
} else if (age <= 19) {
  alert("Jsi teenager!");
} else {
  alert("Jsi dospělý!");
}

// --- CVIČENÍ 5 & 6: DOM + události + async/await ---
const nadpis = document.getElementById("nadpis");
const btn = document.getElementById("tlacitko");
const p = document.getElementById("zprava");

function fetchMessage() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hello from the future!"), 2000);
  });
}

btn.addEventListener("click", async () => {
  // při kliknutí se spustí načítání
  p.innerText = "Loading...";
  const msg = await fetchMessage();
  p.innerText = msg;
});