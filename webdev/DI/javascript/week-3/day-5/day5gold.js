// Excersise 1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // Output: [3, 42, "foo"] after 3 seconds
}).catch(error => {
  console.error(error);
});
// promise.all() takes an array of promises we put into it that are already defined and resolves each of their values and as we have used console.log for the values if they all get resolved, the values of the promises are printed. Given that each of the values resolved cannot be rejected they are resolved and returned.

// Excersise 2
function timesTwoAsync(x) {
return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
  // A function is created that multiplies all its inputs by 2 where its inputs are under the variable x. This function is called timeTwoAsync. Then a new array is created and this array is transformed by the map method to have the function of timesTwoAsync applied to it. This means that the array named arr with values of 1,2,3, are stored under the variable x each and multiplied by 2. The map method creates a new array with the function applied to the array arr which is named promiseArr and this new array is printed as [2,4,6].


