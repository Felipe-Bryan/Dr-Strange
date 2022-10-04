let part1 = document.getElementById('part1');
let part2 = document.getElementById('part2');
let wanda = document.getElementById('wanda');
let darkhold = document.getElementById('darkhold');
let audio = new Audio('./assets/audio/tema.m4a');

audio.addEventListener('canplaythrough', function () {
  audio.play();
});

let circulo1 = document.getElementById('circle1');
let circulo2 = document.getElementById('circle2');
let circulo3 = document.getElementById('circle3');

darkhold.addEventListener('click', (e) => {
  change();
  audio.play();
});

wanda.addEventListener('click', (e) => {
  change();
  audio.play();
});

function change() {
  part1.classList.add('fade');

  setTimeout(hidePart1, 2000);
  setTimeout(showP2, 2500);
  setTimeout(showPart2, 3000);
  setTimeout(showCircles, 3500);
}

function hidePart1() {
  part1.classList.add('hide');
  part1.classList.toggle('part1');
}

function showP2() {
  part2.removeAttribute('style');
}

function showPart2() {
  part2.classList.add('show');
}

function showCircles() {
  setTimeout(mostrarCirculo1, 2000);
  setTimeout(mostrarCirculo2, 3000);
  setTimeout(mostrarCirculo3, 4000);
}

function mostrarCirculo1() {
  circulo1.classList.add('show');
}

function mostrarCirculo2() {
  circulo2.classList.add('show');
}

function mostrarCirculo3() {
  circulo3.classList.add('show');
}
