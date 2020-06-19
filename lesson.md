Demonstrate basic tests

Talk about edge cases

Talk about grouping with describe

Matchers we should go over:

- toBe - Tests equality. Uses Object.is() to test equality. Objects with different references will always be false
- toEqual - Tests Equality. Will not take references into account
- toHaveBeenCalled - Makes sure a function got called
- toHaveBeenCalledWith - Make sure a function got called with a given argument
- toHaveBeenCalledTimes - Make sure a function was called a given number of times.
- toHaveReturned/With/Times
- toBeNull
- toBeTruthy
- toContain
- toContainEqual
- toMatch
- toThrow

* GO TO PRESENTATION AND TALK ABOUT WHAT SHOULD WE TEST?

Talk about async

- Show we cant just put test in callback because it wont necessarily be evaluated in time (setTimeout example);
- Show the done argument we can use to tell jest to run tests when it is invoked
- Can use .thens with promises, but make your test return the promise. Otherwise it will not wait for test to resolve before

* GO TO PRESENTATION AND TALK ABOUT TDD

* Explain beforeEach + afterEach + beforeAll + afterAll
* test.only for debugging

So far we have testing a lot of results. What comes back from an api call, whether some data got changed or not
But there will be lots of times, especially once we get to enzyme, when we want to test some aspects of a function
To do this We can create fake functions through jest that will keep track of different pieces of data

- GO TO PRESENTATION AND TALK ABOUT MOCKING

Mocking Functions

- What is a mock fn
- Can create a mock fn with jest.fn(fn?);
- Can Mock return values
  - mockReturnValueOnce(), mockReturnValue()
