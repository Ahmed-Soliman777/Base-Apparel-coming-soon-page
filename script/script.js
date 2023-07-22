var emailCheck = document.querySelector("#mail"),
    btn = document.querySelector("#mail_btn"),
    emailValidate = document.querySelector(".valid_mail"),
    att_check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


btn.addEventListener("click", function (ev) {
    if (emailCheck.value == "" || !emailCheck.value.match(att_check)) {
        emailValidate.innerHTML = `<div>invalid mail. please check your mail and try again</div>`;
        ev.preventDefault()
    }
})