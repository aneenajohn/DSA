const fishes = ["Nemo"];

const findNemo = (array) => {
  for (
    let i;
    i < array.length;
    i++
  ) {
    if (
      array[i].toLowerCase() ===
      "nemo"
    ) {
      return console.log(
        "Found Nemo!!!"
      );
    }
    console.log(
      "Nemo not found :("
    );
  }
};

findNemo(fishes);
