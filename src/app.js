function greetUser(name) {
    if (!name || typeof name !== "string") {
        return "Hello, Guest!";
    }

    return `Hello, ${name}!`;
}

const user = "Developer";

console.log(greetUser(user));
