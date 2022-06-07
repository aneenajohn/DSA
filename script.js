const {performance} = require('perf_hooks');
const fishes = ["Nemo", "dory", "gaja", "bubba" ,"pingu"];
// const entirePond = new Array(2000).fill("Nemo");

const findingNemo = (array) => {
  let t0 = performance.now();
  for (let i=0; i < array.length; i++) {
    if (array[i] ==="Nemo") {
      console.log("Found Nemo!!!");
    }
    else{
      console.log("Nemo not found :(");
    }
  }
  let t1 = performance.now();
  console.log("Call to finding nemo took "+(t1-t0)+" ms");
};

findingNemo(fishes);
// findingNemo(entirePond);


