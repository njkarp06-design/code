// Excersise 1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//  The result of the code will be [2, 4, 6] as the map method is used to create a new array with the results of calling a provided function on every element in the calling array. In this case, the function checks if the type of num is a number and if it is, it returns num multiplied by 2. If it is not a number, it returns undefined, which is not included in the resulting array.

// Excersise 2

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// The result of the code will be [1, 2, 0, 1, 2, 3] as the reduce method is used to execute a reducer function on each element of the array, resulting in a single output value. In this case, the reducer function takes an accumulator (acc) and the current value (cur) and concatenates them together using the concat method. The initial value of the accumulator is set to [1, 2], so when the reduce method is called on the array [[0, 1], [2, 3]], it will concatenate [1, 2] with [0, 1] and then concatenate that result with [2, 3], resulting in [1, 2, 0, 1, 2, 3].
 