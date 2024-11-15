const jokes = [
    {
        q: "What’s green and pear-shaped?",
        a: "A pear."
    },
    {
        q: "What happened to the guy who lit a fire in his canoe to keep warm?",
        a: "He learnt that you can’t have your kayak and heat it too."
    },
    {
        q: "How do you make a tissue dance?",
        a: "Put a little boogie in it!"
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
        q: "How do you tell the difference between tinned pears and tinned peaches?",
        a: "Open the tin."
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
        a: "Attire!"
    },
    {
        q: "How many apples grow on a tree?",
        a: "All of them!"
    },
    {
        q: "Why did the scarecrow get promoted?",
        a: "He was outstanding in his field."
    },
];

function getJoke() {
    const randIndex = Math.floor(Math.random() * jokes.length);
    console.log(jokes[randIndex].q);
    setTimeout(() => {
        console.log(jokes[randIndex].a);
    }, 2000);
}

getJoke();