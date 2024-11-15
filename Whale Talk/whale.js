let input = 'oh say can you see';
const vowels = ['a','e','i','o','u'];
let resultArray = []

for (let i = 0; i < input.length; i++) {
    // console.log(`letter: ${i}`);

    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        // console.log(`vowel: ${j}`);
        if(input[i]===vowels[j]) {
            // console.log(input[i]);
            resultArray.push(input[i]);
        }
    }
}
resultString = resultArray.join("").toUpperCase();

console.log(resultString);