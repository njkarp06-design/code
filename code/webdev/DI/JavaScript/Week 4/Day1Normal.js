const URL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    else return response.json();
  })
  .then(data => {
    console.log("Giphy API data:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

//   Excersise 2

const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Sun GIF data:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

//   Excersise 3

async function starwars() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Star Wars API data:", data);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

starwars();

// Excersise 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Output will be that 'calling' is printed immediately, and then after 2 swecodns the word 'resolved' is printed. 
