"use strict";
const alcoolCalc = (G, V, P, K) => {
    return (G * V * 0.008 * 1.055) / (P * K);
};
document.querySelector('#calc').addEventListener('click', () => {
    const G = parseFloat(document.querySelector('input[name=G]').value);
    const V = parseFloat(document.querySelector('input[name=V]').value);
    const P = parseFloat(document.querySelector('input[name=P]').value);
    const K = document.querySelector('#m').checked ? 0.73 : 0.66;
    const result = alcoolCalc(G || 0, V || 0, P || 0, K);
    if (isNaN(result)) {
        document.querySelector('#result').classList.add('notSafe');
        return document.querySelector('#result').innerHTML = `Inserisci dei valori validi`;
    }
    document.querySelector('#result').classList.remove('safe');
    document.querySelector('#result').classList.remove('notSafe');
    if (result > 0.5) {
        document.querySelector('#result').classList.add('notSafe');
    }
    else {
        document.querySelector('#result').classList.add('safe');
    }
    document.querySelector('#result').innerHTML = `<b>Il risultato è ${result.toFixed(2)} g/l. ${+result.toFixed(2) > 0.5 ? "Non puoi guidare in questo stato!" : "Puoi guidare, ma presta comunque attenzione!"} <br><a href="${(P == 69 && V == 69 && G == 69) ? "https://youtu.be/dQw4w9WgXcQ\" target=\"_blank" : "#section4"}">Controlla i valori del tasso alcolemico qui</a></b>`;
});
let count = 1;
document.querySelector('#move').addEventListener('click', () => {
    count++;
    if (count > 4) {
        document.querySelector('#moveText').innerHTML = "˄";
    }
    if (count < 5)
        document.querySelector('#moveText').innerHTML = "˅";
    document.querySelector('#move').href = `#section${count}`;
    if (count == 5)
        count = 0;
});
