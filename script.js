// ==================== Part 1: Variables & Conditionals ==================== //
let age = 20;
let name = "Teddy";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is not an adult.");
}

// ==================== Part 2: Custom Functions ==================== //
function greet(userName) {
  return "Hello, " + userName + "!";
}

function square(num) {
  return num * num;
}

console.log(greet(name));
console.log("Square of 4 is: " + square(4));

// ==================== Part 3: Loops ==================== //
// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count: " + count);
  count++;
}

// ==================== Part 4: DOM Interactions ==================== //
// 1. Change text content of an element
document.getElementById("message").textContent = "This text was changed by JS!";

// 2. Add a click event listener
document.getElementById("btn").addEventListener("click", function () {
  alert("Button was clicked!");
});

// 3. Dynamically add list items
let list = document.getElementById("list");
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}
