// Stage 05: Đếm và in ra có bao nhiêu các cặp số từ 1 - 100 có tổng chia hết cho 17
function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            let sum = i + j;

            if (sum % 17 === 0) {
                console.log(`(${i}, ${j}) = ${sum}`)
                count += 1;
            }
        }
    }
    console.log(`\n Tổng cộng: ${count} cặp`);
}
findPairsDivisibleBy17();
