//calcolare se un anno è bisestile
/*

Algoritmo anno bisestile, controllare se un anno è bisestile
Per vedere se un anno è bisestile dobbiamo dividerlo per 400; se è divisibile allora è sicuramente un anno bisestile; altrimenti saranno bisestili solo quegli anni che si possono dividere per 4 ma non per 100. Esempi di anni bisestili sono: 1600, 1604, 1608 fino al 1696. Il 1700 non è bisestile.
*/
function isBisesto(year) {
    return year % 400 === 0
        ? year % 4 === 0
        : year % 4 === 0 && year % 100 !== 0;
}
var year = 3014;
console.log('Anno ' + year + ' check ' + isBisesto(year));
var anni;
anni = [1980, 2000, 1900, 1650, 1931, 2024];
for (var _i = 0, anni_1 = anni; _i < anni_1.length; _i++) {
    var i = anni_1[_i];
    console.log('Anno ' + i + ' check ' + isBisesto(Number(i)));
}
