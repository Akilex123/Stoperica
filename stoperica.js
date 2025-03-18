// prvo da povezem sve sto treba sa  HTML
const vreme = document.querySelector(".vreme");
const prolaznoVreme = document.querySelectorAll(".prolaznoVreme");
const startStopDugme = document.querySelector(".startStopDugme");
const resetDugme = document.querySelector(".resetDugme");
const lapTimeDugme = document.querySelector(".lapTimeDugme");

// onda mi trebaju vrednosti sekunda minuti i da li sat radi
let minuti = 0;
let sekunde = 0;
let radi = false;
let interval;

// formatiram vreme kao sto sam u satu koji sam pravio
function formatVremena(vrednost) {
  return vrednost < 10 ? `0${vrednost}` : vrednost;
}

// hocu da se tako prikazuje vreme u HTML
function prikazVremena() {
  vreme.textContent = `${formatVremena(minuti)}:${formatVremena(sekunde)}`;
}

// sada pravim funkciju koja ce da pokrene tu stopericu
// i zaustavi je
function pokreniVreme() {
  if (!radi) {
    radi = true;
    interval = setInterval(() => {
      sekunde++;
      if (sekunde == 60) {
        minuti++;
      }
      prikazVremena();
    }, 1000);
  } else {
    radi = false;
    clearInterval(interval);
  }
}

// sledece postavljam funkciju za resetovanje stoperice
function resetStoperice() {
  clearInterval(interval);
  radi = false;
  minuti = 0;
  sekunde = 0;
  prikazVremena();
}
// poslednje sto mi treba je laptime funkcija
function lapTime() {
  // prvo sto zelimo je da se doda novo mesto u listi svaki put kada stisnemo lapDugme
  const noviLap = document.createElement("li");

  // onda kada napravimo taj novi element zelimo ovo da sadrzi unutar njega
  noviLap.textContent = `${formatVremena(minuti)}:${formatVremena(sekunde)}`;
  document.querySelector(".lapTimeLista").appendChild(noviLap);
}

// zatim da povezemo ovo sto smo napravili sa dugmicima start/stop i reset
startStopDugme.addEventListener("click", pokreniVreme);
lapTimeDugme.addEventListener("click", lapTime);
resetDugme.addEventListener("click", resetStoperice);
