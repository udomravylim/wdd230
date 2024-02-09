const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

function getChapterList() {
  return JSON.parse(localStorage.getItem("chapter"));
}
function displayList(item) {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");

  li.appendChild(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}
function setChapterList() {
  localStorage.setItem("chapter", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }

 





});
