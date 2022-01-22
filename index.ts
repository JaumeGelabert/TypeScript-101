export function greetDefault(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
  }
   
  greetDefault(); // Hello, Anonymous!
  greetDefault("Jaume"); // Hello, Jaume!