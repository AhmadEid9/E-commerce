function showSection2() {
  let firstName = FirstNameInput.value.trim();
  let lastName = LastNameInput.value.trim();

  if (firstName === "" || lastName === "") {
    if (firstName === "") {
      FirstNameInput.style.border = "1px solid red";
    }
    if (lastName === "") {
      LastNameInput.style.border = "1px solid red";
    }
    return;
  }

  FirstNameInput.style.border = "1px solid grey";
  LastNameInput.style.border = "1px solid grey";

  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "flex";
  document.getElementById("section3").style.display = "none";
}

function showSection3() {
  if (!emailRegex.test(EmailInput.value.trim())) {
    EmailInput.style.border = "1px solid red";
    emailError.style.display = "block";
    return;
  } else {
    EmailInput.style.border = "1px solid grey";
    emailError.style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "flex";
  }
}

let FirstNameInput = document.getElementById("First_Name");
let LastNameInput = document.getElementById("Last_Name");
let EmailInput = document.getElementById("Email");
let PasswordInput = document.getElementById("Password");
let ConfirmPasswordInput = document.getElementById("Confirm_Password");
let submitBtn = document.getElementById("submit");
showPassCheckbox = document.getElementById("showPass");

const response_message = document.getElementById('response-message');
const message_modal = document.getElementById('message-modal')
const modal_close = document.getElementById('modal-close')


modal_close.addEventListener('click', hideResponseMessageModal)

FirstNameInput.addEventListener("input", function () {
  if (FirstNameInput.value.trim() !== "") {
    FirstNameInput.style.border = "1px solid grey";
  }
});
LastNameInput.addEventListener("input", function () {
  if (LastNameInput.value.trim() !== "") {
    LastNameInput.style.border = "1px solid grey";
  }
});

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

EmailInput.addEventListener("input", function () {
  if (!emailRegex.test(EmailInput.value.trim())) {
    EmailInput.style.border = "1px solid red";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    EmailInput.style.border = "1px solid grey";
  }
});
function showSection1() {
  document.getElementById("section1").style.display = "flex";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
}

PasswordInput.addEventListener("input", function () {
  if (PasswordInput.value.trim() !== ConfirmPasswordInput.value.trim()) {
    ConfirmPasswordInput.style.border = "1px solid red";
    submitBtn.disabled = true;
  } else {
    ConfirmPasswordInput.style.border = "1px solid grey";
    submitBtn.disabled = false;
  }
});
ConfirmPasswordInput.addEventListener("input", function () {
  if (PasswordInput.value.trim() !== ConfirmPasswordInput.value.trim()) {
    ConfirmPasswordInput.style.border = "1px solid red";
    submitBtn.disabled = true;
  } else {
    ConfirmPasswordInput.style.border = "1px solid grey";
    submitBtn.disabled = false;
  }
});
showPassCheckbox.addEventListener("change", function () {
  const showPassword = showPassCheckbox.checked;
  ConfirmPasswordInput.type = showPassword ? "text" : "password";
  PasswordInput.type = showPassword ? "text" : "password";
});


submitBtn.addEventListener("click", function () {
  let data = new FormData();
  let name = `${FirstNameInput.value} ${LastNameInput.value}`;
  data.append('user_name', name);
  data.append('user_password', PasswordInput.value);
  data.append('user_email', EmailInput.value);
  
  axios({
      "method": "post",
      "url": "http://localhost:8000/ClassRoom-Clone/apis/register.php",
      "data": data
  }).then((result) => {
      console.log(result)
      if (result.data.status == "success") {
          window.location.href = 'signin.html';   
      }
      else{ showResponseMessageModal(result.data.message)};
  }).catch((err) => {
      console.error(err)
  });
})
