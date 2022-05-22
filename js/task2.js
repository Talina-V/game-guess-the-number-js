/* eslint-disable no-magic-numbers */
const startGame = (min = 0, max = 8, prizes = [25, 50, 100], total = 0) => {
    const secretNumber = generateNumberInRange(min, max);
    console.log(`Secret number: ${secretNumber}`);
    let attemptsLeft = 3;

    while (attemptsLeft > 0) {
        const input = prompt(`
            Choose a roulette pocket from ${min} and ${max} \n
            Attempts left: ${attemptsLeft} \n
            Total Prize: ${total}$ \n
            Possible prize on current attempt: ${prizes[attemptsLeft - 1]}$ \n
        `);

        if (input === `${secretNumber}`) {
            total += prizes[attemptsLeft - 1];

            const repeat = confirm(`Congratulation, you won!
                                    Your prize is: ${prizes[attemptsLeft - 1]}$. 
                                    Do you want to continue?`);

            if (repeat) {
                total += startGame(min, max + 4, prizes.map(p => p * 2), total);
            }

            break;
        } else {
            attemptsLeft--;
        }
    }

    return total;
}

const generateNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const startScoring = () => {
    let total = startGame();

    alert(`Thank you for your participation. Your prize is: ${total} $`);
    const repeat = confirm('Do you want to play again?');

    if (repeat) {
        startScoring();
    }
}

let start = confirm('Do you want to play a game?');

if (!start) {
    alert('You did not become a billionaire, but can.');
} else {
    startScoring();
}