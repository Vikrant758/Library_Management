

class Book{
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{

    //Add methods to display prototype

    //implementing the add function
    add(book){
        console.log("adiing to UI");
        let tableBody = document.getElementById('tableBody');
    
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr> `;
    
        tableBody.innerHTML += uiString;
    
    }
    
    //implementing the clear function
    clear() {
        libraryForm.reset();
    }
    //implementing the validate function
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }

    show(type, showMesage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }else{
            boldText = 'Error';
        }
        message.innerHTML = `<div class="alert alert-error alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:-</strong> ${showMesage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
    
        setTimeout(function() {
            message.innerHTML = '' ;
        }, 5000);
    
    
    }
}

//Add submit event listener to form

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit); //Event Listener when we click Submit

function libraryFormSubmit(e) {
    console.log("Your Form is Submitted!!");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let loveStories = document.getElementById('loveStories');

    if (fiction.checked) {
        type = fiction.value;  //remember that you have given value in declration if program gets error
    } else if (programming.checked) {
        type = programming.value;
    } else if (loveStories.checked) {
        type = loveStories.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book Has Successfully Recorded.');
    }
    else {
        display.show('fail', 'Please Fill All Fields.');
    }

    e.preventDefault();
}