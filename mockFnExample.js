function displayList(listItems, createItemsFn) {
  const ul = document.createElement("ul");
  const listElements = listItems.map((item) => createItemsFn(item));
  listElements.forEach((element) => ul.append(element));
  //tell them we can add the return to make it more testable
  // return listElements;
  // but we can also test the callback function! note that the difference between this and the earlier conversation
  // about cbs is that this time we are testing the cb itself, and not the data thats returned.
}

displayList(["1", "2", "3", "4"], function (item) {
  const element = document.createElement("li");
  element.innerText = item;
  element.classList.add("list-item");
  return element;
});

module.exports = {
  displayList,
};
