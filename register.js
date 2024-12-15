var username = document.getElementById("user")
var email = document.getElementById("email")
var pw = document.getElementById("pass")
var allAccounts = []
function clearInputs() {
    username.value = ""
    email.value = ""
    pw.value = ""
}
function validName() {
    var regex = /[A-Z]\S[a-z]{3,20}[0-9]{0,2}$/
    if (regex.test(username.value) == true) {
        return true
    } return false
}
function validEmail() {
    var regex = /^[a-z]{3,20}[0-9]{0,5}@[a-z]{3,20}\.[a-z]{3,20}$/
    if (regex.test(email.value) == true) {
        return true
    }
    else {
        return false
    }
}
function validPass() {
    var regex = /[a-zA-Z0-9! @#$%^&*]{8,16}$/gm
    if (regex.test(pw.value) == true) {
        return true
    } return false
}
function checkCredintials() {
    if (validName() == true & validEmail() == true & validPass() == true) {
        var account = {
            userName: username.value,
            userEmail: email.value,
            passWord: pw.value
        }

        allAccounts.push(account)
        localStorage.setItem("all", JSON.stringify(allAccounts))
        clearInputs()
        console.log(allAccounts)
        var success = document.querySelector(".alert-success")
        success.classList.replace("d-none", "d-block")
    } else {
        var wrong = document.querySelector(".alert-danger")
        wrong.classList.replace("d-none", "d-block")
        clearInputs()
    }
}
if (localStorage.getItem("all") != null) {
    allAccounts = JSON.parse(localStorage.getItem("all"))
    console.log(allAccounts)
}
var signUp = document.querySelector("button")
signUp.addEventListener("click", checkCredintials)
