const scores = [10,30,15,25,50,40,5];

/*const filteredScores= scores.filter((score) => {
    return score > 20;  
});
console.log (filteredScores);*/
const users = [
    {name: 'shaun',premium: true},
    {name: 'yoshi',premium: false},
    {name: 'mario',premium: false},
    {name: 'chun-li',premium: true}
];
const premiumUsers = users.filter(user =>user.premium);
return users.premium;
});
console.log(premiumUsers);

const prices = [20,10,30,25,15,40,80,5];
//const salePrices = prices.map((price => price / 2 );
//console.log(salePrices);
const products = [
    {name: 'gold star',price: 20},
    {name: 'mushroom',price: 40},
    {name: 'green shells',price: 30},
    {name: 'red shells',price: 50},
    {name: 'banana skin',price: 40}
];
const slaeProducts = products.map((product) =>{
if(product.price > 30){
    return{name: product.name, price: product.price / 2}
}else{
    return product;
}
});
console.log(saleProducts, products);

const scores = [10,20,60,40,70,90,30];
/*const result = scores.reduce((acc,curr) => {
if(curr > 50)
{
    acc++;
}
return acc;
}, 0);
console.log(result);*/
const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario',score: 50},
    {player: 'yoshi',score: 30},
    {player: 'mario',score: 70},
    {player: 'crystal',score: 60},
    {player: 'mario',score: 90},
    {player: 'yoshi',score: 30},
    {player: 'mario',score: 30},
    {player: 'crystal',score: 60}
];
const marioTotal = scores.reduce((acc, curr) =>{
if(curr.player === 'mario'){
    acc += curr.score;
}
return acc;
}, 0);
console.log(marioTotal);

const scores = [10,5,0,40,60,10,20,70];
const firstHighScore = scores.find((score) => {
return score > 50;
});
console.log(firstHighScore);

const names = ['mario','shaun','chun-li','yoshi','luigi'];
const scores = [10,50,20,5,35,70,45];
names.sort();
console.log(names);
scores.sort();
console.log(scores);
