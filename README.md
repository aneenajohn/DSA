# DSA - Big O intro

let’s say we have 2 people,

A: Hey, my code runs in 3sec

B: hey, mine runs in 1.5 sec

Does B win? Not necessarily

Since it depends on several other factors such as CPU processes running and If our code is on the server it would run on different systems, so how do we measure the performance of our code.

Big O → language we use for comparing how long the algorithm takes to run, regardless of the computer where it runs

- when we grow bigger with the input how much does the algorithm gets slower, the less it slows down the better it is.
- So instead of using `performance.now()` we can just calculate how many operations the computer has to perform.
