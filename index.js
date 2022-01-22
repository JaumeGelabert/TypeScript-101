function greetDefault(name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello, ".concat(name, "!"));
}
greetDefault(); // Hello, Anonymous!
greetDefault("Jaume"); // Hello, Jaume!
