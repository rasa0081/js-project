let users = JSON.parse(localStorage.getItem('users')) || [];
let usersCount = users.length;

const email = document.querySelector('.Email');
const firstPass = document.querySelector('.firstPass');
const secondPass = document.querySelector('.secondPass');
const submitButton = document.querySelector('.submitButton');

// Function to save users to localStorage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let acData = {};

    if (!email.value) {
        alert('Please write your email');
        return;
    }
    const username = email.value;

    const pass1 = firstPass.value;
    const pass2 = secondPass.value;

    if (!pass1 || !pass2) {
        alert('Please write your password');
        return;
    }
    if (pass1 !== pass2) {
        alert('The passwords are not the same!');
        return;
    }

    acData.username = username;
    acData.password = pass1;

    const exists = users.some(user => user.username === acData.username);

    if (!exists) {
        usersCount += 1;
        acData.id = usersCount;
        users.push(acData);
        saveUsersToLocalStorage();
        console.log(usersCount);
        console.log(users);
    } else {
        alert('This username already exists.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    users = JSON.parse(localStorage.getItem('users')) || [];
    usersCount = users.length;
});
