# DSA - Big O intro

let’s say we have 2 people,

A: Hey, my code runs in 3sec

B: hey, mine runs in 1.5 sec

Does B win? Not necessarily

Since it depends on several other factors such as what other CPU processes running, how powerful the CPU/computer is, what programming language you are using and If our code is on the server it would run on different systems, so how do we measure the performance of our code.

Big O → language we use for comparing how long the algorithm takes to run, regardless of the computer where it runs and determine what's the good/bad code and what's the code that can scale up.

- when we grow bigger with the input how much does the algorithm gets slower, the less it slows down the better it is.
- So instead of using `performance.now()` we can just calculate how many operations the computer has to perform.
- Big O doesnt measure the performance in time instead it measure the input Vs no. of operations the algorithm takes in runtime.

## What is the Big O for finding nemo?

Here as the no. of input elements increases, then the no. of operations increases as well → linear operation

## Big O Graph:

![Big O Graph](bigO.png)

### O(n) → Linear time

    → As the no. of input elements increases, then the no. of operations increases as well.
