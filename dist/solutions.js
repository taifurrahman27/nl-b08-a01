console.log("Hello from solutions");
function multiplyer(a, b) {
    return a * b;
}
console.log(multiplyer(5, 6));
function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
// Sample Input:
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
export {};
