let liczba = prompt('Podaj liczbe');
 
 
 
document.write("Wprowadzona liczba:", liczba + '<br>');
document.write("Liczba o znaku przeciwnym:", -liczba + '<br>');
document.write("Liczba powiększona o 15:", liczba + 15 + '<br>');
document.write("Liczba powiększona o 0,5:", liczba + 0.5 + '<br>');
document.write("Kwadrat liczby:", liczba ** 2 + '<br>');
document.write("Dzielenie przez 2:", liczba / 2 + '<br>');
document.write("Reszta z dzielenia przez 2:", liczba % 2 + '<br>');
document.write("Liczba o jeden większa:", liczba + 1 + '<br>');
document.write("Liczba o jeden mniejsza:", liczba - 1 + '<br>');
document.write("Dzielenie przez 3 zaokrąglone w dół:", Math.floor(liczba / 3) + '<br>');
document.write("Dzielenie przez 3 zaokrąglone w górę:", Math.ceil(liczba / 3) + '<br>');
document.write("Dzielenie przez 3 zaokrąglone do najbliższej liczby całkowitej:", Math.round(liczba / 3) + '<br>');
document.write("Pierwiastek:", Math.sqrt(liczba) + '<br>');
 
let losowa = Math.random() * 50;
document.write("Losowa liczba z przedziału 0-50:", losowa + '<br>');
document.write("Iloczyn liczby i liczby losowej:", liczba * losowa + '<br>');
 
document.write("Wartość absolutna:", Math.abs(liczba) + '<br>');
 