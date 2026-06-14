// =====================================
// START: day5normal.js
// =====================================
function compareTOTen(num) {
    return new Promise((resolve, reject) => {
        try {
            const result = num <= 10;
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
compareTOTen(15)
    .then(result => console.log(result)) // Output: false
    .catch(error => console.error(error));

compareTOTen(5)
    .then(result => console.log(result)) // Output: true
    .catch(error => console.error(error));

function Celebration () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        try {
            const result = "Success";
            resolve(result);
        } catch (error) {
            reject(error);
        }
        }, 4000);
    });
}
Celebration()
    .then(result => console.log(result)) // Output: "Success" after 4 seconds
    .catch(error => console.error(error));

function three () {
    return new Promise((resolve, reject) => {
        try {
            const result = 3;
            resolve(result);
        } catch (error) {
            const rejectMessage = "Boo!";
            reject(rejectMessage);
        }
    });
}
three()
    .then(result => console.log(result)) // Output: 3
    .catch(rejectMessage => console.error(rejectMessage));

Promise.resolve(3)
   .then(value => console.log(value)) // Output: 3
   .catch(error => console.error(error));

Promise.reject("Boo!")
    .then(value => console.log(value))
    .catch(error => console.error(error));
// =====================================
// END: day5normal.js
// =====================================


// =====================================
// START: day5gold.js
// =====================================
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
// =====================================
// END: day5gold.js
// =====================================
