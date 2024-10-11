const menuElem = document.querySelector("#svg");
const listElem = document.querySelector("#list");

menuElem.addEventListener('click', () => {
  listElem.classList.toggle('hidden')
})