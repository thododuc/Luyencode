let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let tag = (tag) => document.getElementsByTagName(tag);


let
  form1 = id("signUpForm"),
  next = id("next");
let msg = classes("msg");
let inputField = classes("inputField");
let inputContainer = classes("input-container");

/*let label = tag("label");
let input = tag("input");
let eFname;*/

let isRequired = (value) => value ==="" ? true : false;
let isBetween = (length, min, max) => length < min || length > max ? true : false;
let isSpace = (s) => s.indexOf(' ') >= 0  ? true : false;


let blankCheck = (srPst, srMsg, message) => {
  if(inputField[srPst].value.trim() === '') {
    inputContainer[srPst].dataset.value *= 0;
    msg[srMsg].innerText = message;
  } else {
    inputContainer[srPst].dataset.value *= 1;
  }
};




function checkEmptyName() {
  blankCheck(0, 0, "Enter first name"); 
  blankCheck(1, 0, "Enter last name");
  if(inputField[0].value.trim() ==='' && inputField[1].value.trim() ==='') {
    msg[0].innerText = "Enter first name and last name";
  }
};

function checkUsername() {
  blankCheck(2, 1, "Chose a Gmail address");
};





function checkColorMsg() {
  msg[0].dataset.value = inputContainer[0].dataset.value * inputContainer[1].dataset.value; 
  msg[1].dataset.value = inputContainer[2].dataset.value;
}

function clearMsg() {
  for(let i = 0; i < 5; i++) {
    inputContainer[i].dataset.value = 1; 
    if(i > 2) {
      continue;
    }
    msg[i].innerText = '';
    // msg[i].style.color = "#2E2124";
  };
}

function checkAll() {
  clearMsg(); 
  checkEmptyName();
  checkUsername();
  checkColorMsg(); console.log(msg[0].dataset.value);
}
