let jokes = [
    {
        q: "What’s green and pear-shaped?",
        a: "A pear."
    },
    {
        q: "What happened to the guy who lit a fire in his canoe to keep warm?",
        a: "He learnt that you can’t have your kayak and heat it too."
    },
    {
        q: "What’s brown and sticky?",
        a: "A stick."
    },
    {
        q: "What’s an astronaut’s favorite part of a computer?",
        a: "The space bar."
    },
    {
        q: "What do you call a boomerang that doesn’t come back?",
        a: "A stick."
    },
    {
        q: "Why are elevator jokes so classic and good?",
        a: "They work on many levels."
    },
    {
        q: "Why do bees have sticky hair?",
        a: "Because they use a honeycomb."
    },
    {
        q: "What do you call a fake noodle?",
        a: "An impasta."
    },
    {
        q: "What’s the difference between a poorly dressed man on a tricycle, and a well-dressed man on a bicycle?",
        a: "Attire."
    },
    {
        q: "Why did the scarecrow get promoted?",
        a: "He was outstanding in his field."
    },
];

let joke;

function setJoke() {
    if (jokes.length === 0) {
        alert("Out of jokes.  Please try again on a funnier computer.  :(")}
    else {
        let jokeIndex = Math.floor(Math.random() * jokes.length);
        [joke] = jokes.splice(jokeIndex, 1);
    }
}

function getJokeQ() {
    setJoke();
    document.getElementById("question").innerHTML = joke.q;
    document.getElementById("question-button").style.display = "none";
    document.getElementById("answer-button").style.display = "block";
    document.getElementById("answer").style.display = "none";
};

function getJokeA() {
    document.getElementById("answer").innerHTML = joke.a;
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer-button").style.display = "none";
    document.getElementById("question-button").style.display = "block";
    document.getElementById("question-button").innerHTML = "Haha. Tell me another!";
};