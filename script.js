import { faker } from "@faker-js/faker";

const fakeName = faker.person.fullName();
//Generate a random image URL
const imageUrl = faker.image.avatar();

console.log(fakeName);

const profileImage = document.querySelector(".profile-image");
profileImage.src = imageUrl;
console.log(profileImage.src);
const profileName = document.querySelector(".profile-name");
profileName.textContent = fakeName;
console.log(profileName);
