console.log("Hello from solutions");
function multiplyer(a, b) {
    return a * b;
}
console.log(multiplyer(5, 6));
//Problem 1
function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
//Problem 2
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
    return value;
}
console.log(processInput("  Taifur RAHMAN  "));
console.log(processInput(9));
console.log(processInput(true));
console.log(processInput(false));
//Problem 3
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
console.log(formatCoordinate([30, 0, "London"]));
export {};
