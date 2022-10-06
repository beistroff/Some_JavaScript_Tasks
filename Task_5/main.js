let newUser;
let birthday, firstName, lastName;

function createNewUser(newUser){
    do{
    firstName = prompt("What's your name?");
    lastName = prompt("Your last name(surname)?");
    birthday = prompt("Birthday (dd.mm.yyyy):");
    newUser = {
        firstName,
        lastName,
        birthday
    };
    }while(firstName == "" || lastName == "")

    return newUser;
}
function getLogin(){
    console.log(firstName.toLowerCase().substring(0,1) + lastName.toLowerCase());
}
function getAge(newUser) {
    let day = birthday.substring(0, 2);
    let month = birthday.substring(3, 5);
    let year = birthday.substring(6, 11);
    console.log("Day: " + day);
    console.log("Month: " + month);
    console.log("Year: " + year);
    let today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)){
        age--;
    }
    console.log("Age: " + age);
}
function getPassword(newUser){
    console.log(firstName.toUpperCase().substring(0,1) + lastName.toLowerCase() + birthday.substring(6, 11));
}

console.log(createNewUser(newUser));
getLogin();
getAge(newUser);
getPassword(newUser);