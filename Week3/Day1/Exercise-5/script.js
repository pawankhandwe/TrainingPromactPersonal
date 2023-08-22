// Task 1: Count Occurrences
function countOccurrences(arr) {
    const occurrences = {};
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    }
    
    return occurrences;
}

// Task 2: Reverse String
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log("arr :"+arr);
console.log("after counting occurence ");
const occurrences = countOccurrences(arr);
console.log(occurrences); // Output: {1: 1, 2: 2, 3: 3, 4: 4}
const inputString = "Hello World!";
console.log("inputString : "+inputString);
console.log("reversing ...");
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "!dlroW ,olleH"
