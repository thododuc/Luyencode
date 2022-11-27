let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let tag = (tag) => document.getElementsByTagName(tag);


let fname = id("fname"),
  lname = id("lname"),
  username = id("username"),
  password = id("password"),
  confirmPassword = id("confirmPassword"),
  form1 = id("signUpForm");

let msg = classes("msg");

let label = tag("label");

let typeCheck;

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  blankCheck(fname, 0, 0, "Enter first name"); console.log("1 ");
  blankCheck(lname, 0, 1, "Enter last name");console.log("2 ");
  blankCheck(username, 1, 2, "Chose a Gmail address");console.log("3 ");
  blankCheck(password, 2, 3,"Enter a password");console.log("4 ");
  if(fname.value.trim() ==='' && lname.value.trim() ==='') {
    msg[0].innerText = "Enter first name and last name";
    msg[0].style.color = "#D93025";
  }
});

let blankCheck = (id,srMsg, srPst, message) => {
  if(id.value.trim() === '') {
    msg[srMsg].innerText = message;
    msg[srMsg].style.color = "#D93025";
    id.style.border = '2px solid #D93025';
    label[srPst].classList.add('wrongLabel');
  }
};

let check 
