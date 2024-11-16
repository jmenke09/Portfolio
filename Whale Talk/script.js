let vowels = ['a','e','i','o','u',' '];
let translatedPhrase = document.getElementById('translatedPhrase');


function translatePhrase() {
    let phraseToTranslate = document.getElementById('phrase').value.toLowerCase();
    let resultArray = [];
    for (let i = 0; i < phraseToTranslate.length; i++) {
        if (phraseToTranslate[i] === 'e' || phraseToTranslate[i] === 'u') {
            resultArray.push(phraseToTranslate[i]);
        }
        for (let j = 0; j < vowels.length; j++) {
            if(phraseToTranslate[i]===vowels[j]) {
                resultArray.push(phraseToTranslate[i]);
            }
        }
    }
    let resultString = resultArray.join("").toUpperCase();
    translatedPhrase.innerHTML = `"${resultString}!!"`;
    results.style.display = 'block';
    inputs.style.display = 'none';
}

function startOver() {
    translatedPhrase.innerHTML = '';
    results.style.display = 'none';
    inputs.style.display = 'block';
}

document.getElementById('whaleButton').addEventListener('click', function () {
    window.location.href='index.html';
});



