const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const loginDialog = document.querySelector("#login-dialog");
const loginButton = document.getElementById("login-btn");
const singup = document.querySelector("#sign-up");

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
    email.value = "";
    country.value = "";
    zipCode.value = "";
    password.value = "";
    confirmPassword.value = "";

}
let newForm = document.querySelector("#new-book-form");
let dialog = document.querySelector("#form-dialog");
let newBtn = document.querySelector("#new-btn");
let closelogin = document.querySelector("#closeLogin");
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
    loginDialog.close();
    defaultInputElement();
})

let email = document.querySelector("#email");
let country = document.querySelector("#country");
let zipCode = document.querySelector("#zip-code");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

loginButton.addEventListener("click", () => {
    loginDialog.showModal();
})

function validatePassword() {
    const passwordValue = password.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&])[A-Za-z\d@$!%*@]{8,}$/;
    if(!passwordPattern.test(passwordValue)){
        password.setCustomValidity("The paswword must be at least 8 characters, one uppercase letter, one digit, and one special characters");
    }
    else{
        password.setCustomValidity("");
    }
     
    password.reportValidity();

}



function validateEmail() {
    if(!email.checkValidity()){
        email.setCustomValidity("Please the enter valid email");
    }
    else{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            email.setCustomValidity("Please enter a valid email address");
        } else {
            email.setCustomValidity("");
        }
    }

    email.reportValidity();
}

function validateConfirmPassowrd() {
    const confirmPasswordValue  = confirmPassword.value;

    if(confirmPasswordValue!== password.value){
        confirmPassword.setCustomValidity("Please enter the same password as above");

    }
    else{
        confirmPassword.setCustomValidity("");
    }

    confirmPassword.reportValidity();
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassowrd);
email.addEventListener("input", validateEmail);

singup.addEventListener("click", (event) => {
    event.preventDefault();
    validateConfirmPassowrd();
    validatePassword();
    validateEmail();
    if(form.checkValidity()){
        loginDialog.close();
        defaultInputElement();
    }
})

closelogin.addEventListener("click", () => {
    loginDialog.close();
    defaultInputElement();

})

