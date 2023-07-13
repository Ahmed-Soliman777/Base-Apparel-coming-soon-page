var emailCheck = document.querySelector("#email"),
    btn = document.querySelector("#mail_btn"),
    emailValidate = document.querySelector("#form"),
    att_check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function btn_mail(){
    if(emailCheck.match(att_check)){
        emailValidate.innerHTML = `<div>valid</div>`
    }
    else{
        emailValidate.innerHTML = `<div>invalid</div>`
    }
}