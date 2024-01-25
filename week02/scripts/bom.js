const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    listItem.appendChild(deleteButton);
    list.append(listItem);

    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
      list.focus();
    });
    input.value= "";
  }
});
