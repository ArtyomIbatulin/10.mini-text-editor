let text = document.querySelector(".text");
let edit = document.querySelector("#b_edit");
let save = document.querySelector("#b_save");
let cancel = document.querySelector("#b_cancel");
let color = document.querySelector(".color");
let change_color = document.querySelector("#change_color");
let time;

const dis = () => {
  save.disabled = true;
  cancel.disabled = true;
  color.disabled = true;
  change_color.disabled = true;
};

const enab = () => {
  save.disabled = false;
  cancel.disabled = false;
  color.disabled = false;
  change_color.disabled = false;
};

dis();

window.onload = function() {
  if (localStorage.getItem("text")) {
    text.innerHTML = localStorage.getItem("text");
  }
};

const editText = () => {
  time = new Date().toLocaleString();
  text.contentEditable = "true";
  save.style.display = "inline-block";
  cancel.style.display = "inline-block";
  edit.disabled = true;
  enab();
};
const saveText = () => {
  text.contentEditable = "false";
  localStorage.setItem("text", text.innerHTML);
  localStorage.setItem("time", time);
  edit.disabled = false;
  dis();
};
const cancelText = () => {
  let currentText = localStorage.getItem("text");
  text.innerHTML = currentText;
  edit.disabled = false;
  dis();
};
const changeColor = () => {
  let text_1;
  let clr_text;
  text_1 = document.getSelection();
  clr_text = text_1.toString();
  localStorage.setItem("clr_text", clr_text);

  let range = window.getSelection().getRangeAt(0);
  let selectionContents = range.extractContents();
  let span = document.createElement("span");
  span.appendChild(selectionContents);
  span.setAttribute("class", "selected");
  span.style.color = color.value;
  range.insertNode(span);
};

edit.addEventListener("click", editText);
save.addEventListener("click", saveText);
cancel.addEventListener("click", cancelText);
change_color.addEventListener("click", changeColor);
