const {performance} = require('perf_hooks');
const fishes = ["Nemo", "dory", "gaja", "bubba" ,"pingu"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
// const entirePond = new Array(2000).fill("Nemo");

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

