const playerName = "Mario";
let currentLives = 3;
const coin = {
    "Level 1": 23,
    "Level 2": 30,
    "Level 3": 45
}

let total = 0;
// Cách 1
//total = coin["Level 1"] + coin["Level 2"] + coin["Level 3"];

// Cách 2
for (let value in coin) {
    total += coin[value];
}
const remainder = total % 3;
console.log(`Số coin dư khi tổng coin chia 3: ${remainder}`);

