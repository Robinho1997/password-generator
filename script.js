const generatePasswordBtn = document.getElementById("generate-btn")
const passwordsContainer = document.querySelector(".password-container")
const uppercaseCheckbox = document.getElementById("uppercase")
const numbersCheckbox = document.getElementById("numbers")
const symbolsCheckbox = document.getElementById("symbols")

let passwordsArray = []
let storedPasswords = localStorage.getItem("passwords")

generatePasswordBtn.addEventListener("click", generateFivePasswords)

function generateFivePasswords() {
    passwordsContainer.innerHTML = ""
    let length = document.getElementById("lengthInput").value
    generateCharset()
    for (let i = 0; i < 5; i++) {
        let password = ""
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length))
        } passwordsArray.push(password)
    } passwordsArray.forEach(password => {
        let element = document.createElement("p")
        element.textContent = password
        passwordsContainer.append(element)
        passwordsArray = []
    })
}


function generateCharset() {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    if (uppercaseCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked) {
        return charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
    } else if (uppercaseCheckbox.checked && numbersCheckbox.checked) {
        return charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    } else if (uppercaseCheckbox.checked && symbolsCheckbox.checked) {
        return charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
    } else if (numbersCheckbox.checked && symbolsCheckbox.checked) {
        return charset = "0123456789~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
    } else if (uppercaseCheckbox.checked) {
        return charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else if (numbersCheckbox.checked) {
        return charset = "0123456789"
    } else if (symbolsCheckbox.checked) {
        return charset = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"
    }

}





