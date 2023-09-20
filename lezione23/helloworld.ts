let message: string = 'Ciao, Mondo!';

let eta: number = 18;

let cities: string[] = ['Milano', 'Roma'];
let numbers: number[] = [7,21,46];

let languages: Array<string> = ['Javascript','Typescript'];

console.log(message);

function myLog(s: string) : void
{
    console.log ("Scrivo nel log "+s);
    let result: number = calcola (9,4);
    console.log ("Result "+result);
}


function calcola(x: number, y: number) : number
{
    return x+y;
}

let risultato: boolean = true;

risultato = calcola(7,5);

console.log (typeof(risultato));
myLog("ciao");

console.log ("Risultato "+risultato);




/*
Installazione nella cartella
npm install typescript --save-dev

Compilazione singola
npx tsc index.ts

Compilazione "perpetua"
npx tsc index.ts -w
*/