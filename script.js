const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function display() {
    let library = document.querySelector("#library");
    library.innerHTML = "";
    for (let i=0; i<myLibrary.length; i++){
        let bookEl = document.createElement("div");
        bookEl.classList.add("data");
        bookEl.innerHTML = `<p> Title: ${myLibrary[i].title} </p> <p> Author: ${myLibrary[i].author} </p> <p> No. of Pages: ${myLibrary[i].pages}  </p> <p> Read-Status: ${myLibrary[i].read ? "Read" : "Not Read"}</p>  `;
        let deleteButton = document.createElement("button");

        deleteButton.classList.add("dlt-button");
        deleteButton.innerHTML = `<img id="dlt-image" src="delete.png">`;
        deleteButton.addEventListener("click", (event) => {
            let index = Array.from(library.children).indexOf(event.target.parentNode);

            myLibrary.splice(index, 1);
            display();
        })
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = myLibrary[i].read;
        checkbox.addEventListener("change", () => {
            myLibrary[i].read = checkbox.checked  ;
            display();
        })
        let checkboxLabel = document.createElement("label");
        checkboxLabel.textContent = "Read Status:";
        bookEl.appendChild(checkboxLabel);
        bookEl.appendChild(checkbox);

        bookEl.appendChild(deleteButton);
        library.appendChild(bookEl);
    }
    
}
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked ;


    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display();
  
}

    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

function defaultInputElement() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
}
let newForm = document.querySelector("#new-book-form");
let dialog = document.querySelector("dialog");
let newBtn = document.querySelector("#new-btn");
newBtn.addEventListener("click", function() {
    
    dialog.showModal();
  
})


const form = document.querySelector("form");
const addBtn = document.querySelector("#add-book-btn");
addBtn.addEventListener("click", function(event) {
   
    event.preventDefault();
    addBookToLibrary();
    defaultInputElement();
    dialog.close();
})

const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
    dialog.close();
    defaultInputElement();
})

// let data = document.querySelector(".data");
// let reads = document.querySelector("#read");
// let notRead = document.querySelector("#not-read");

// reads.addEventListener("change", function() {
//     if(reads.checked) {
        
//     }
// })
