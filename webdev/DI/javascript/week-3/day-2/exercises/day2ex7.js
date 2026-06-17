const allBooks = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "JRR Tolkien",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

for (let i = 0; i < allBooks.length; i++) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `${allBooks[i].title} written by ${allBooks[i].author}`;
    const img = document.createElement("img");
    img.src = allBooks[i].image;
    img.style.width = "100px";
    if (allBooks[i].alreadyRead === true) {
        p.style.color = "red";
    }
    div.appendChild(p);
    div.appendChild(img);
    section.appendChild(div);
}
