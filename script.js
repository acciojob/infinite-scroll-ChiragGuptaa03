//your code here!
const list = document.getElementById("infi-list");

let count = 1;


function addItems(number) {
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
    count++;
  }
}


addItems(10);

// infinite scroll logic
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});

