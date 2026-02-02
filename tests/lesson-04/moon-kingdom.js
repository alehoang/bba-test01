// Tạo creatCharacters()
console.log("Stage 04 - bài 1 tạo character")
function creatCharacters() {
    // Khai báo mảng characters
    const characters = [
        { name: "Mario", level: 3, health: 450 },
        { name: "Luigi", level: 1, health: 300 },
        { name: "Dragon", level: 10, health: 600 }
    ]
    // Tạo mảng mới charactesPowerUp
    let charactersPowerUp = characters.map(character =>
    ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }))
    console.log(charactersPowerUp)
    // Filter characters có health > 1000 sang mảng mới possibleWinners
    let possibleWinners = charactersPowerUp.filter(vn => vn.health > 1000);
    console.log(possibleWinners);

}
creatCharacters();

// Tạo printLeaderboard
console.log("Stage 04 - bài 2 tạo Leaderboard")
function printLeaderboard(players) {
    // Sắp xếp theo thứ tự score
    players.sort((a, b) => b.score - a.score);
    // In ra leaderboard
    // Cách 1
    for (let i = 0; i < players.length; i++) {
        let medal = "";
        let rank = "";
        if (i === 0) {
            rank = i + 1;
            medal = "🥇";
            console.log(`${medal} ${rank}. ${players[i].name} - ${players[i].score} pts`);
        } else if (i === 1) {
            rank = i + 1;
            medal = "🥈";
            console.log(`${medal} ${rank}. ${players[i].name} - ${players[i].score} pts`);
        } else if (i === 2) {
            rank = i + 1;
            medal = "🥉";
            console.log(`${medal} ${rank}. ${players[i].name} - ${players[i].score} pts`);
        } else {
            rank = i + 1;
            medal = " ";
            console.log(`${medal} ${rank}. ${players[i].name} - ${players[i].score} pts`);
        }
    }

    // Cách 2
    players.forEach((player, index) => {
        let medal = "";
        let rank = index + 1;
        if (rank === 1) {
            medal = "🥇";
        } else if (rank === 2) {
            medal = "🥈";
        } else if (rank === 3) {
            medal = "🥉";
        } else {
            medal = " ";
        }
        console.log(`${medal} ${rank}. ${player.name} - ${player.score} pts`);
    });
}

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 500 },
    { name: "Yoshi", score: 950 },
    { name: "Dragon", score: 5000 }
];
printLeaderboard(players);