const { displayList } = require("./mockFnExample");

test("displayList with mocks!", () => {
  const createItemsFn = jest.fn();
  // createItemsFn.mockReturnValue();

  displayList([1, 2, 3, 4, 5, 6], createItemsFn);

  // console.log(createItemsFn.mock.calls);

  expect(createItemsFn.mock.calls[0][0]).toBe(1);
  expect(createItemsFn.mock.calls[5][0]).toBe(6);

  expect(createItemsFn.mock.calls.length).toBe(6);
});
