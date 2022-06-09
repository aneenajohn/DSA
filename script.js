const {performance} = require('perf_hooks');
const fishes = ["Nemo", "dory", "gaja", "bubba" ,"pingu"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank","gaja"];
// const entirePond = new Array(2000).fill("Nemo");

// Based on R1 => Big O(n)
const findingNemo = (array) => {
  for (let i=0; i < array.length; i++) {
    console.log("Inside loop");
    if (array[i] === "nemo") {
      return console.log("Found Nemo!!!");
    }
  }
};

// findingNemo(fishes);
// findingNemo(entirePond);
findingNemo(everyone)


// R2 => Drop the constants

const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
  
  console.log(items[0]);

  const middleItem = Math.floor(items.length/2);
  console.log({middleItem})
  let index=0;
  while(index < middleItem){
    console.log(items[index]);
    index++;
  }

  for(let i=0; i<100; i++){
    console.log("Hi");
  }
}
printFirstItemThenFirstHalfThenSayHi100Times(everyone);