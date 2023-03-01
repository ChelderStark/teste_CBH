# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Refactoring consists of reducing the number of conditionals, as well as the number of interactions of the same variable, making code execution more performant and more stable.

1. In the first conditional, it checks if the 'event' object exists; if it does not return 'TRIVIAL_PARTITION_KEY='0'', this approach allows a cleaner return in a leaner and more objective code.

2. In the second inner conditional, it checks if there is the object item 'partitionKey' in event, if it exists, its size will be checked and if it is greater than 'MAX_PARTITION_KEY_LENGTH' it will be adjusted, if smaller, it returns itself.

3. If the 'partitionKey' item does not exist, the data contained in 'event' will be used to generate a new hash.

All the tests run in the refactoring drastically lowered the test response time.