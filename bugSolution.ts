function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toLocaleDateString()}`);
  return `Hello, ${person}, today is ${date.toLocaleDateString()}`;
}

greet("world", new Date());