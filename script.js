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
        bookEl.innerHTML = `<p> Title: ${myLibrary[i].title} </p> <p> Author: ${myLibrary[i].author} </p> <p> No. of Pages: ${myLibrary[i].pages}  </p> <p> Do you have read the book: ${myLibrary[i].read}</p>  `;
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("dlt-button");
        deleteButton.innerHTML = `<img id="dlt-image" src="delete.png">`;
        deleteButton.addEventListener("click", (event) => {
            let index = Array.from(library.children).indexOf(event.target.parentNode);

            myLibrary.splice(index, 1);
            display();
        })
        bookEl.appendChild(deleteButton);
        library.appendChild(bookEl);
    }
    
}
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked ? "Yes" : "No";

    if (!title || !author || !pages) {
        let errorContainer = document.querySelector("#form-error");
        errorContainer.textContent = "Please fill in all the required fields.";
        return false; // Prevent further execution
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display();
    return true;
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

function showError(errorElement, errorMessage){
    document.querySelector("."+errorElement)
}
const form = document.querySelector("form");
const addBtn = document.querySelector("#add-book-btn");
addBtn.addEventListener("click", function(event) {
    if (!title || !author || !pages) {
        
    }
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