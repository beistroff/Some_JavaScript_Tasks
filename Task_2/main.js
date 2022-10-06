let range = 0;
const sizeMax = 500;

do{
    range = prompt("Input number (5 <= range <=1000)");
}while (range < 5 || range > sizeMax)
console.log("User number = " + range);
console.log("All numbers which %5:");

for(let i = 0; i <= range; i++){
    if (i % 5 == 0){
        console.log(i);
    }
}
console.log("range number: " + range);
