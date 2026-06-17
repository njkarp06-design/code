const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

lists[1].removeChild(lists[1].children[1]);

for (let i = 0; i < lists.length; i++) {
    lists[i].firstElementChild.textContent = "Nathaniel";
}

for (let i = 0; i < lists.length; i++) {
    lists[i].classList.add("student_list");
}
lists[0].classList.add("university");
lists[0].classList.add("attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "20px";

const firstListItems = lists[0].children;
for (let i = 0; i < firstListItems.length; i++) {
    if (firstListItems[i].textContent === "Dan") {
        firstListItems[i].style.display = "none";
    }
    if (firstListItems[i].textContent === "Richard") {
        firstListItems[i].style.border = "1px solid black";
    }
}

document.body.style.fontSize = "20px";

// bonus
if (container.style.backgroundColor === "lightblue") {
    alert("Hello Nathaniel and Richard");
}
