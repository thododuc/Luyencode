let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let tag = (tag) => document.getElementsByTagName(tag);


let
  form1 = id("signUpForm"),
  next = id("next");
let msg = classes("msg");
let inputField = classes("inputField");
let inputContainer = classes("input-container");

let blankCheck = (noInput) => inputField[noInput].value.trim() ===""? true : false;
let checkNameCharacter = (noInput) => {
  const re = /^[a-z,.'-]+$/i;
  return !re.test(inputField[noInput].value);
}


// CHECK NAME

let checkNameBlank = () => {
  if(blankCheck(0)) {
    inputContainer[0].dataset.value  *= 0;
    msg[0].innerText = "Enter first name";
  }
  if(blankCheck(1)) {
    inputContainer[1].dataset.value  *= 0;
    msg[0].innerText = "Enter last name";
  }
  if(blankCheck(0) && blankCheck(1)) {
    msg[0].innerText = "Enter first name and last name";
  }
}

let checkFullNameCharacter = () => {
  if (checkNameCharacter(0)) {
    inputContainer[0].dataset.value  *= 0;
    msg[0].innerText = "Are you sure you entered your name correctly";
  } 
  if (checkNameCharacter(1)) {
    inputContainer[1].dataset.value  *= 0;
    msg[0].innerText = "Are you sure you entered your name correctly";
  } 
}

let checkFullName = () => {
  checkNameBlank();
  if (msg[0].innerText === "") {
    checkFullNameCharacter();
  };
};





// CHECK USERNAME

let checkUsernameBlank = () => {
  if(blankCheck(2)) {
    inputContainer[2].dataset.value  *= 0;
    msg[1].innerText = "Chose a Gmail address";
    msg[1].style.color = "#D93025";
  }
}






//CHECK PASSWORD

let checkPasswordBlank = () => {
  if(blankCheck(3)) {
    inputContainer[3].dataset.value  *= 0;
    msg[2].innerText = "Enter a password";
    msg[2].style.color = "#D93025";
  }
}


/*function checkColorMsg() {
  msg[0].dataset.value = inputContainer[0].dataset.value * inputContainer[1].dataset.value; 
  msg[1].dataset.value = inputContainer[2].dataset.value;
}*/

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
  checkFullName();
  checkUsernameBlank();
  checkPasswordBlank();
}
