const name = prompt("Ismingizni kiriting:");
const nameOutput = document.getElementById("nameOutput");

if (name && name.trim() !== "") {
  nameOutput.textContent = `Ismingiz: ${name}`;
} else {
  nameOutput.textContent = "Ism kiritilmadi.";
}
