function introduces(person) {
    var firstName = person.firstName, lastName = person.lastName, age = person.age;
    console.log("".concat(firstName, " ").concat(lastName, " is ").concat(age, " years old."));
}
// Example usage
var persons = {
    firstName: "Pawan",
    lastName: "Khandwe",
    age: 22
};
introduces(persons); // Output: John Doe is 30 years old.
