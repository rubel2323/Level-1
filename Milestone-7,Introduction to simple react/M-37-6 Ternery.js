let money = 500;
const food = money > 300 ? "Birany" : "Pani kha";
console.log(food);
money > 300 ? console.log("Birany") : console.log("Pani kha");

let food1 = "500";
console.log(typeof food1, food1);
const food2 = +food1;
const food3 = food2 + "";
console.log(typeof food2, food2, typeof food3, food3);

const dollar = true;
const dollarHas = () => console.log("I have dollar");
const noDollar = () => console.log("I have no dollar");
dollar ? dollarHas() : noDollar();
