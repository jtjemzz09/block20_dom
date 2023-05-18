const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.querySelector("#root");

  // Create an h1 element
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";
  root.appendChild(h1);

  // Create an unordered list element
  const ul = document.createElement("ul");

  // Loop through the users array and create li elements
  users.forEach(function(user) {
    const li = document.createElement("li");
    li.innerText = `${user.name}, ${user.age}, ${user.occupation}`;
    ul.appendChild(li);
  });

  root.appendChild(ul);
}

// Call the main function
main();