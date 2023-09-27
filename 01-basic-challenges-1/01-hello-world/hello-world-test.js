const helloWorld = require('./hello-world');

test("Returning 'Hello, World!' as a strin", () => {
  const result = helloWorld();
  expect(result).toBe('Hello World!');
});
