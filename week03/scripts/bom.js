// Selects the input field with the id "favchap" from the HTML document
const input = document.querySelector("#favchap");

// Selects the button element from the HTML document
const button = document.querySelector("button");

// Selects the unordered list with the id "list" from the HTML document
const list = document.querySelector("#list");

// Initializes the chaptersArray by retrieving the chapter list from local storage or creating an empty array if no data is found
let chaptersArray = getChapterList() || [];

// Retrieves the chapter list from local storage and parses it as JSON data
function getChapterList() {
  const chapterData = JSON.parse(localStorage.getItem("chapter"));
  return chapterData;
}

// Function to display a new chapter in the list with a delete button
function displayList(item) {
  // Creates a new list item element
  const listItem = document.createElement("li");

  // Sets the text content of the list item to the provided item
  listItem.textContent = item;

  // Appends the list item to the unordered list
  list.appendChild(listItem);

  // Creates a delete button element
  const deleteButton = document.createElement("button");

  // Sets the text content of the delete button to a cross symbol
  deleteButton.textContent = "❌";

  // Adds a CSS class "delete" to the delete button
  deleteButton.classList.add("delete");

  // Appends the delete button to the list item
  listItem.appendChild(deleteButton);

  // Adds an event listener to the delete button to handle removal of the item from the list
  deleteButton.addEventListener("click", () => {
    // Removes the list item from the unordered list
    list.removeChild(listItem);

    // Calls the deleteChapter function to remove the corresponding chapter from chaptersArray and update local storage
    deleteChapter(listItem.textContent);

    // Focuses on the input field after deletion
    input.focus();
  });
}

// Function to store the chaptersArray in local storage
function setChapterList() {
  // Converts the chaptersArray to a JSON string and stores it in local storage under the key "chapter"
  localStorage.setItem("chapter", JSON.stringify(chaptersArray));
}

// Function to remove a chapter from chaptersArray and update local storage
function deleteChapter(chapter) {
  // Remove a specific character at the end of the chapter string (if needed)
  chapter = chapter.slice(0, chapter.length - 1);

  // Filters out the specified chapter from the chaptersArray
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // Updates local storage with the modified chaptersArray
  setChapterList();
}

// Iterates over each chapter in chaptersArray and displays it in the list
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Adds an event listener to the button element to handle adding a new chapter
button.addEventListener("click", () => {
  // Checks if the input field is not empty
  if (input.value != "") {
    // Displays the new chapter in the list
    displayList(input.value);

    // Adds the new chapter to chaptersArray
    chaptersArray.push(input.value);

    // Updates local storage with the modified chaptersArray
    setChapterList();

    // Clears the input field
    input.value = "";

    // Focuses on the input field
    input.focus();
  }
});
