type StringOrArray = string | any[];

function getLength(input: StringOrArray): number {
    return input.length;
}

// Example usage
const strLength = getLength("Hello, TypeScript!"); 
const arrLength = getLength([1, 2, 3, 4, 5]);      
console.log("String length:", strLength);
console.log("Array length:", arrLength);  
