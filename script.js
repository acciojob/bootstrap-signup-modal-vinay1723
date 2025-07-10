//your JS code here. If required.
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
	e.preventDefault();
  myInput.focus();
});
