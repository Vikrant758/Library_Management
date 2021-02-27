console.log("This is My javascript hile");
// Add Storage
// Add delete option in table
// Add Scroll bar
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}

//Add methods to display prototype

//implementing the add function
Display.prototype.add = function (book, index) {
    console.log("adiing to UI");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let tableBody = document.getElementById('tableBody');

    let uiString = '';
    notesObj.forEach(function (element, index) {
        uiString = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                    </tr> `;
    });
    
    // let uiString = `<tr>
    //                     <th scope="row">${index + 1}</th>
    //                     <td>${book.name}</td>
    //                     <td>${book.author}</td>
    //                     <td>${book.type}</td>
    //                 </tr> `;

    tableBody.innerHTML += uiString;

}

//implementing the clear function
Display.prototype.clear = function () {
    libraryForm.reset();
}

//implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }

}

Display.prototype.show = function (type, showMesage) {
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
    let notes = localStorage.getItem("notes");

    if (fiction.checked) {
        type = fiction.value;  //remember that you have given value in declration if program gets error
    } else if (programming.checked) {
        type = programming.value;
    } else if (loveStories.checked) {
        type = loveStories.value;
    }

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        name : name.value,
        author : author.value,
        type : type.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));

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