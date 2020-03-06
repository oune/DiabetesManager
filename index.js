const RATE = {
  morning : document.querySelector("#morning-rate"),
  lunch   : document.querySelector("#lunch-rate"),
  dinner  : document.querySelector("#dinner-rate")
}
let eatamount = document.querySelector("#amount");
let blood     = document.querySelector("#blood");
const BUTTON = document.querySelector("button");

console.log(BUTTON);
console.log(RATE.morning);
console.log(RATE.lunch);
console.log(RATE.dinner);

console.log(eatamount);
console.log(blood);



function reFresh() {
  console.log("hello");
  eatamount = document.querySelector("#amount");
  blood     = document.querySelector("#blood");

  console.log(eatamount);
  console.log(blood);
}
