"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = void 0;
var letterValues = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
};
function score(word) {
    if (!word) {
        return 0;
    }
    var letters = word.toLowerCase().split('');
    var sum = 0;
    letters.forEach(function (letter) { return sum += letterValues[letter]; });
    return sum;
}
exports.score = score;
console.log(letterValues["b"]);
console.log(score("cabbage"));
