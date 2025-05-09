import fullName from "./names.js";
console.log(fullName);
import hobbies from "./hobbies.js";
console.log(hobbies);

function peopleHobbies() {
  return {
    nomeIntero: fullName("Petra", "Alpigiano"),
    passatempo: hobbies("lettura", "sport", "pittura"),
  };
}
console.log(peopleHobbies().passatempo[1]);
