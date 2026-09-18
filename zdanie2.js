

let a = prompt('Wprowadź pierwsza liczbę do dodania:');
document.write(a + '<br>');
let b = prompt('Wprowadź druga liczbę do dodania:');
document.write(b + '<br>');
let c = prompt('Wprowadź trzecia liczbę do dodania:');
document.write(c + '<br>');

let d = parseInt(a) + parseInt(b) + parseInt(c);
document.write(a + '+' + b + '+' + c + '=' + d + '<br>');

let e = parseInt(d) / 3;
document.write('średnia z tych liczb wynosi ' + e + '<br>');

let f = 10, g = 7;
let h = f + g;
document.write(f + '+' + g + '=' + h + '<br>');
h = f - g;
document.write(f + '-' + g + '=' + h + '<br>');
h = f * g;
document.write(f + '*' + g + '=' + h + '<br>');

let i = prompt('Podaj liczbę do zpierwiastkowania: ');
document.write(Math.sqrt(parseFloat(i)) + '<br>');

let j = prompt('Podaj bok kwadratu:');
let poleKwadratu = parseFloat(j) * parseFloat(j);
document.write('Pole kwadratu wynosi: ' + poleKwadratu + '<br>');

let bokA = prompt('Podaj pierwszy bok prostopadłościanu:');
let bokB = prompt('Podaj drugi bok prostopadłościanu:');
let bokC = prompt('Podaj trzeci bok prostopadłościanu:');
let poleProstopadloscianu = 2 * (parseFloat(bokA) * parseFloat(bokB) + parseFloat(bokB) * parseFloat(bokC) + parseFloat(bokA) * parseFloat(bokC));
document.write('Pole prostopadloscianu wynosi: ' + poleProstopadloscianu + '<br>');

let promien = prompt('Podaj promień koła:');
let r = parseFloat(promien);
let poleKola = Math.PI * Math.pow(r, 2);
let obwodKola = 2 * Math.PI * r;
document.write('Pole kola: ' + poleKola + '<br>Obwód koa: ' + obwodKola + '<br>');

let cenaBenzyny1 = prompt('Podaj obecna cenę benzyny za dojazd z Gdańska do Szczecina:');
let koszt1 = (360 / 100) * 8 * parseFloat(cenaBenzyny1);
document.write('Koszt przejazdu z Gdańska do Szczecina wynosi: ' + koszt1 + '<br>');

let cenaBenzyny2 = prompt('Podaj cenę benzyny:');
let dlugoscTrasy = prompt('Podaj dlugość trasy (w km):');
let spalanie = prompt('Podaj spalanie samochodu (l/100km):');
let koszt2 = (parseFloat(dlugoscTrasy) / 100) * parseFloat(spalanie) * parseFloat(cenaBenzyny2);
document.write('Koszt przejazdu na tej trasie wynosi: ' + koszt2 + '<br>');

let kwotaLokaty = prompt('Podaj kwotę lokaty:');
let zyskBrutto = parseFloat(kwotaLokaty) * 0.08;
let podatekBelki = zyskBrutto * 0.19;
let zyskNetto = zyskBrutto - podatekBelki;
document.write('Zysk z lokaty po odliczeniu podatku Belki wynosi: ' + zyskNetto + '<br>');