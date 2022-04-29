let letters = document.getElementById('qtdLetters');
let numbers = document.getElementById('qtdNumbers');
let generatedPassword = document.getElementById('generatedPassword');
let snackbar = document.getElementById('snackbar');

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];

let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function showSnackbar(message) {
    snackbar.innerHTML = message;
    snackbar.className = 'show';
    setTimeout(function () {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000)
}

function randomizeCapitalLetter(value) {
    if (Math.floor(Math.random() * 11) % 2 === 0) {
        return value.toUpperCase();
    }
    return value.toLowerCase();

}

function randomizeValue(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

function showGeneratedPassword(value) {
    generatedPassword.innerHTML = value;
}



function generatePassword() {
    let generated = '';
    if (letters.value === '' && numbers.value === '') {
        showSnackbar('Números e letras vazios')
        return;
    }

    if (letters.value !== '') {
        for (let count = 0; count < parseInt(letters.value); count++) {
            generated += randomizeCapitalLetter(randomizeValue(alphabet));
        }
    }

    if (numbers.value !== '') {
        for (let count = 0; count < parseInt(numbers.value); count++) {
            generated += randomizeValue(nums);
        }
    }

    showGeneratedPassword(generated);
}

function copyToClipboard() {
    if (generatedPassword.innerHTML !== '' && generatedPassword.innerHTML !== 'S3nh@-G3r@d@') {
        navigator.clipboard.writeText(generatedPassword.innerHTML);
        showSnackbar('Copiado');
    }
}









