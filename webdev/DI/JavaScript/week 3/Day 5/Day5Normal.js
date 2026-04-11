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
