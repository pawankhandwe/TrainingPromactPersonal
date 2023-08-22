// Task 1: Get Unique Numbers
function getUniqueNumbers(arr) {
    const uniqueNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNumbers.includes(arr[i])) {
            uniqueNumbers.push(arr[i]);
        }
    }
    
    return uniqueNumbers;
}

// Task 2: Get Intersection of Arrays
function getArrayIntersection(arr1, arr2) {
    const intersection = [];
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }
    
    return intersection;
}
const numbersArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];
console.log("this is array"+numbersArray);
console.log("Removing duplicay ...");
const uniqueNumbersArray = getUniqueNumbers(numbersArray);
console.log(uniqueNumbersArray); // Output: [1, 2, 3, 4, 5]

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log("array1 :"+array1);
console.log("array2 :"+array2);
console.log("getting array intersecting !");
const intersectionArray = getArrayIntersection(array1, array2);
console.log(intersectionArray); // Output: [3, 4, 5]
