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
//Problem 4
function concatenateArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays([1, 5, 6, 7], [9, 0, 7, 5]));
function getPopularCourses(courses, minStudents) {
    return courses.filter(course => course.isPublished === true && course.students >= minStudents);
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 40));
//problem 6
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
// Sample Input
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "role"));
//problem 7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// Sample Input
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
export {};
