let buttonElement = document.getElementById("button");
let birthdayElement = document.getElementById("birthday");
let resultElement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    resultElement.innerText = `your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if (month < 0 ||(month === 0 && currentDate.getDate() < birthdayDate.getDate()))
 {
    age--;
  }
  else{

  return age;
}
}
buttonElement.addEventListener("click", calculateAge);