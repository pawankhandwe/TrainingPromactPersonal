interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function introduce(person: Person): void {
    const { firstName, lastName, age } = person;
    console.log(`${firstName} ${lastName} is ${age} years old.`);
}

// Example usage
const person: Person = {
    firstName: "Pawan",
    lastName: "Khandwe",
    age: 22
};

introduce(person); 
