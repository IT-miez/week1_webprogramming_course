import "./styles.css";

const addTextButton = document.getElementById("my-button");

addTextButton.addEventListener("click", function () {
  console.log("hello world");
  document.getElementById("main-text").innerHTML = "My notebook";
});

const addNoteButton = document.getElementById("add-data");

addNoteButton.addEventListener("click", function () {
  const notes = document.getElementById("notes");
  let newNote = document.createElement("li");
  newNote.innerText = document.getElementById("note").value;
  notes.appendChild(newNote);
});
