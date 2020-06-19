const { sendData1, get } = require("./asyncExample");
//dont do this
// test("Looks Like it might work", () => {
//   function callback(data) {
//     expect(data).not.toHaveProperty("pass");
//   }

//   sendData1(callback);
// });
//this works here, but so does this
// test("also works...", () => {
//   function callback(data) {
//     expect(data).toHaveProperty("pass");
//   }

//   sendData1(callback);
// });
//Why? Because no assertions are run by the end of the functions call.
// Our solution? the done argument

// test("correct way.", (done) => {
//   expect(1).toEqual(1);
//   function callback(data) {
//     expect(data).toHaveProperty("pass");
//     done();
//   }

//   sendData1(callback);
// });

//PROMISES
//incorrect!
// test("Incorrect way to test promise", () => {
//   get("https://swapi.dev/api/people/1/").then((response) => {
//     expect(response.data.name).not.toBe("Luke Skywalker");
//   });
// });

// test("...Because this also works", () => {
//   get("https://swapi.dev/api/people/1/").then((response) => {
//     expect(response.data.name).not.toBe("Luke Skywalker");
//   });
// });

// We could use done agian

// test("Correct way", (done) => {
//   get("https://swapi.dev/api/people/1/").then((response) => {
//     expect(response.data.name).toBe("Luke Skywalker");
//     done();
//   });
// });

// Jest also has some shortcuts for testing promises. If you just return the promise it will wait for
// the promise to resolve before evaluating tests

// test("Also correct", () => {
//   return get("https://swapi.dev/api/people/1/").then((response) => {
//     expect(response.data.name).not.toBe("Luke Skywalker");
//   });
// });

// test("Async await example", async () => {
//   const {
//     data: { name },
//   } = await get("https://swapi.dev/api/people/1/");

//   expect(name).toBe("Luke Skywalker");
// });
