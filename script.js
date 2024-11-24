import { faker } from "https://esm.sh/@faker-js/faker";

// Caitlyn Kerluke
const randomName = faker.person.fullName();

// Rusty@arne.info
const randomImage = faker.image.avatar();
const greeting = document.querySelector("#greetings");
greeting.textContent = `Hello, ${randomName}! 👋`;
const date = document.querySelector("#date");
date.textContent = `Today, ${new Date().toDateString()}`;

document.querySelector(".profile-name").textContent = randomName;
document.querySelector("#profile-image").innerHTML += `
        <img src="${randomImage}" alt="random image" id="image"/></span>
      `;
const assigned = document.querySelectorAll(".assigned-to");
assigned.forEach((person) => {
  person.innerHTML += `
        <img src="${randomImage}" alt="random image" class="profile-image"/></span>
      `;
});
const menuLis = document.querySelectorAll("li");
menuLis.forEach((li) => {
  li.addEventListener("click", () => {
    menuLis.forEach((li) => li.classList.remove("active"));
    li.classList.toggle("active");
  });
});
