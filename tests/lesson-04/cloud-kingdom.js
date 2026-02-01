let powerUp = "mushroom";
let effect = "";

if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    effect = "Mario is invisible!";
} else if (powerUp === "none") {
    effect = "Mario is normal";
} else {
    effect = "Unkown power-up";
}
console.log(effect);