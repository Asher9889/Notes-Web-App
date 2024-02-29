const createBtn = document.querySelector("#create-notes");
const noteContainer = document.querySelector(".notes-container")

function showData() {
  noteContainer.innerHTML = localStorage.getItem("notes")
}

function saveData() {
  localStorage.setItem("notes", noteContainer.innerHTML )
}

createBtn.addEventListener("click", () =>{
 let p = document.createElement("p");
 p.className = "input-box";
 p.setAttribute("contenteditable", true);
 p.setAttribute("spellcheck", false);
 let img = document.createElement("img");
 img.src = "images/delete.png";
 noteContainer.appendChild(p).appendChild(img);
 p.addEventListener("input", saveData)
 saveData();

})

noteContainer.addEventListener("click",(e) => {
  if(e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } 
} )

showData();