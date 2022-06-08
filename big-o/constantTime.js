const boxes = ["box1", "box2"];

function compressFirstBox(boxes) {
    console.log(boxes[0]) // O(1)
}

compressFirstBox(boxes)

const logFirstTwoBoxes = (boxes) => {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(2)
}

logFirstTwoBoxes(boxes);