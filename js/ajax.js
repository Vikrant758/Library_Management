
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("Button is clicked");

    //instantiate an xhr object
    let xhr = new XMLHttpRequest();

    //open object
    //GET REQUEST use this
    // xhr.open('GET', 'harry.txt', true);
    //POST REQUEST USE THIS
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');
    //What to do on progress
    xhr.onprogress = function () {
        console.log("on Progress");
    }

    //What to do when responce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error("Some Error Occurred");
        }
    }

    //Send the resquest
    param = `	{"name":"test","salary":"123","age":"23"}`
    xhr.send(param);
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);


function popHandler() {
    console.log("Button is clicked popHAndler");

    //instantiate an xhr object
    let xhr = new XMLHttpRequest();

    //open object

    //GET REQUEST use this
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    
    //POST REQUEST USE THIS
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/json');


    //What to do when responce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj =JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
               str += `<li>${obj[key]}</li>`;

            }
            list.innerHTML =str; 
        } else {
            console.error("Some Error Occurred");
        }
    }

    //Send the resquest
    xhr.send();
}